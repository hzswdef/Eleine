import Layout from "@components/layout/layout.tsx";
import NotFoundPage from "@pages/not-found-page/not-found-page.tsx";
// import unexpected-error-page from "@pages/unexpected-error-page/unexpected-error-page.tsx";
import WhoisPage from "@pages/whois-page/whois-page.tsx";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		// errorElement: <unexpected-error-page />,
		children: [
			{
				index: true,
				path: "/",
				element: <Navigate to="/whois" />
			},
			{
				path: "/whois",
				element: <WhoisPage />
			},
			{
				path: "*",
				element: <NotFoundPage />
			}
		]
	}
]);
