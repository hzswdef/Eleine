import styles from "@components/ui/field/field.module.css";
import { cn } from "@lib/utils.ts";
import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
	spacing: "sm" | "md" | "lg" | "xl";
}

const Field = ({ spacing, children }: Props) => (
	<div
		className={cn({
			[styles.spacingSm]: spacing === "sm",
			[styles.spacingMd]: spacing === "md",
			[styles.spacingLg]: spacing === "lg",
			[styles.spacingXl]: spacing === "xl"
		})}
	>
		{children}
	</div>
);

export default Field;
