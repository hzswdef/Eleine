import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem
} from "@components/shadcn-ui/sidebar.tsx";
import ThemeToggle from "@components/theme-toggle/theme-toggle.tsx";
import { Link } from "react-router-dom";

const items = [
	{
		title: "Whois",
		url: "/whois"
	},
	{
		title: "Dig",
		url: "/dig"
	},
	{
		title: "DBL/SURBL check",
		url: "/spam-blacklists"
	}
];

const LayoutSidebar = () => (
	<Sidebar variant="layout-sidebar">
		<SidebarContent>
			<SidebarGroup>
				<SidebarGroupContent>
					<SidebarMenu>
						{items.map(({ title, url }) => (
							<SidebarMenuItem key={title}>
								<SidebarMenuButton asChild>
									<Link to={url}>
										<span>{title}</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</SidebarGroupContent>
			</SidebarGroup>
		</SidebarContent>
		<SidebarFooter>
			<ThemeToggle />
		</SidebarFooter>
	</Sidebar>
);

export default LayoutSidebar;
