import { TooltipProvider } from "@components/shadcn-ui/tooltip.tsx";
import {
	SidebarContext,
	type SidebarContextProps
} from "@contexts/sidebar-context/sidebar-context.ts";
import { useIsMobile } from "@hooks/use-mobile.ts";
import {
	SIDEBAR_COOKIE_MAX_AGE,
	SIDEBAR_COOKIE_NAME,
	SIDEBAR_KEYBOARD_SHORTCUT,
	SIDEBAR_WIDTH,
	SIDEBAR_WIDTH_ICON
} from "@lib/const/sidebar.ts";
import { cn } from "@lib/utils.ts";
import {
	type ComponentProps,
	type CSSProperties,
	forwardRef,
	useCallback,
	useEffect,
	useMemo,
	useState
} from "react";

export const SidebarProvider = forwardRef<
	HTMLDivElement,
	ComponentProps<"div"> & {
		defaultOpen?: boolean;
		open?: boolean;
		onOpenChange?: (open: boolean) => void;
	}
>(
	(
		{
			defaultOpen = true,
			open: openProp,
			onOpenChange: setOpenProp,
			className,
			style,
			children,
			...props
		},
		ref
	) => {
		const isMobile = useIsMobile();
		const [openMobile, setOpenMobile] = useState(false);

		// This is the internal state of the layout-sidebar.
		// We use openProp and setOpenProp for control from outside the component.
		const [_open, _setOpen] = useState(defaultOpen);
		const open = openProp ?? _open;
		const setOpen = useCallback(
			(value: boolean | ((value: boolean) => boolean)) => {
				const openState = typeof value === "function" ? value(open) : value;
				if (setOpenProp) {
					setOpenProp(openState);
				} else {
					_setOpen(openState);
				}

				// This sets the cookie to keep the layout-sidebar state.
				document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
			},
			[setOpenProp, open]
		);

		// Helper to toggle the layout-sidebar.
		const toggleSidebar = useCallback(() => {
			return isMobile ? setOpenMobile(open => !open) : setOpen(open => !open);
		}, [isMobile, setOpen, setOpenMobile]);

		// Adds a keyboard shortcut to toggle the layout-sidebar.
		useEffect(() => {
			const handleKeyDown = (event: KeyboardEvent) => {
				if (
					event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
					(event.metaKey || event.ctrlKey)
				) {
					event.preventDefault();
					toggleSidebar();
				}
			};

			window.addEventListener("keydown", handleKeyDown);
			return () => window.removeEventListener("keydown", handleKeyDown);
		}, [toggleSidebar]);

		// We add a state so that we can do data-state="expanded" or "collapsed".
		// This makes it easier to style the layout-sidebar with Tailwind classes.
		const state = open ? "expanded" : "collapsed";

		const contextValue = useMemo<SidebarContextProps>(
			() => ({
				state,
				open,
				setOpen,
				isMobile,
				openMobile,
				setOpenMobile,
				toggleSidebar
			}),
			[state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
		);

		return (
			<SidebarContext.Provider value={contextValue}>
				<TooltipProvider delayDuration={0}>
					<div
						style={
							{
								"--sidebar-width": SIDEBAR_WIDTH,
								"--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
								...style
							} as CSSProperties
						}
						className={cn(
							"group/layout-sidebar-wrapper has-[[data-variant=inset]]:bg-layout-sidebar flex min-h-svh w-full",
							className
						)}
						ref={ref}
						{...props}
					>
						{children}
					</div>
				</TooltipProvider>
			</SidebarContext.Provider>
		);
	}
);
SidebarProvider.displayName = "SidebarProvider";
