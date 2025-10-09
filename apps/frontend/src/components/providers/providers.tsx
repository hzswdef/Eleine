import { SidebarProvider } from "@contexts/sidebar-context/sidebar-context-provider.tsx";
import { ThemeContextProvider } from "@contexts/theme-context/theme-context-provider.tsx";
import type { CSSProperties, PropsWithChildren } from "react";

const Providers = ({ children }: PropsWithChildren) => (
	<ThemeContextProvider>
		<SidebarProvider
			style={{ "--layout-sidebar-width": "12rem" } as CSSProperties}
		>
			{children}
		</SidebarProvider>
	</ThemeContextProvider>
);

export default Providers;
