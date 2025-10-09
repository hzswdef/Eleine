import styles from "@components/theme-toggle/theme-toggle.module.css";
import { useTheme } from "@hooks/use-theme.ts";
import { Moon, Sun } from "lucide-react";
import { useCallback } from "react";

const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();

	const darkTheme = theme === "dark";

	const toggleTheme = useCallback(() => {
		if (theme === "dark") {
			setTheme("light");
		} else {
			setTheme("dark");
		}
	}, [setTheme, theme]);

	return (
		<div className={styles.wrapper}>
			<button className={styles.button} onClick={toggleTheme}>
				{darkTheme ? <Sun width={20} /> : <Moon width={20} />}
			</button>
		</div>
	);
};

export default ThemeToggle;
