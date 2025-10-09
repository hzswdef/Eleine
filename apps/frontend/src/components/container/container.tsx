import styles from "@components/container/container.module.css";
import type { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => (
	<div className={styles.containerOuter}>
		<div className={styles.containerInner}>{children}</div>
	</div>
);

export default Container;
