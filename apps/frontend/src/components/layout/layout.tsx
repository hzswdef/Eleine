import Container from "@components/container/container.tsx";
import styles from "@components/layout/layout.module.css";
import LayoutContent from "@components/regions/layout-content/layout-content.tsx";
import LayoutSidebar from "@components/regions/layout-sidebar/layout-sidebar.tsx";

const Layout = () => (
	<div role="layout" className={styles.layout}>
		<LayoutSidebar />

		<div className={styles.layoutContent}>
			<Container>
				<LayoutContent />
			</Container>
		</div>
	</div>
);

export default Layout;
