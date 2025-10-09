import { cn } from "@lib/utils.ts";
import type { PropsWithChildren } from "react";

interface BaseProps extends PropsWithChildren {
	className?: string;
}

export const TypographyH1 = ({ className, children }: BaseProps) => (
	<h1
		className={cn(
			className,
			"scroll-m-20 text-balance text-4xl font-extrabold tracking-tight"
		)}
	>
		{children}
	</h1>
);
