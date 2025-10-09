import "@css/input.css";
import "@css/fonts.css";
import "@css/variables.css";
import "@css/global.css";

import Providers from "@components/providers/providers.tsx";
import Router from "@router/router.tsx";

const App = () => (
	<Providers>
		<Router />
	</Providers>
);

export default App;
