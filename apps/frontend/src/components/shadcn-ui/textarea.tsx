import { cn } from "@lib/utils";
import {
	type ComponentProps,
	forwardRef,
	type RefObject,
	useCallback,
	useEffect,
	useRef
} from "react";

const Textarea = forwardRef<HTMLTextAreaElement, ComponentProps<"textarea">>(
	({ className, ...props }, ref) => {
		const internalRef = useRef<HTMLTextAreaElement>(null);
		const textareaRef = (ref as RefObject<HTMLTextAreaElement>) || internalRef;

		const adjustHeight = useCallback(() => {
			const textarea = textareaRef.current;
			if (!textarea) return;

			const style = window.getComputedStyle(textarea);
			const lineHeight = parseInt(style.lineHeight);

			const maxHeight = lineHeight * 12;

			if (!textarea.style.minHeight) {
				const minHeight = lineHeight * 3;
				textarea.style.minHeight = `${minHeight}px`;
			}

			if (!textarea.style.maxHeight) {
				textarea.style.maxHeight = `${maxHeight}px`;
			}

			const newHeight = Math.min(textarea.scrollHeight, maxHeight);
			textarea.style.height = `${newHeight}px`;

			textarea.style.overflowY =
				textarea.scrollHeight > maxHeight ? "auto" : "hidden";
		}, [textareaRef]);

		useEffect(() => {
			adjustHeight();
		}, [adjustHeight, props.value]);

		return (
			<textarea
				className={cn(
					"flex w-full overflow-hidden rounded-md",
					"border border-input bg-transparent px-3 py-2 text-base",
					"shadow-sm placeholder:text-muted-foreground",
					"focus-visible:outline-none focus-visible:ring-1",
					"focus-visible:ring-ring disabled:cursor-not-allowed",
					"disabled:opacity-50 md:text-sm",
					className
				)}
				ref={textareaRef}
				onInput={adjustHeight}
				{...props}
			/>
		);
	}
);

Textarea.displayName = "Textarea";

export { Textarea };
