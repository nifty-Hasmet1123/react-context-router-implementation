import useTheme from "../utils/hooks/useTheme";

export default function ButtonToggle() {
    const { setTheme } = useTheme();

    // can be made in the ThemeProvider.jsx create a function there then pass it on the value to save space.
    const toggleTheme = () => {
        setTheme(prevTheme => {
            return prevTheme === "light"
                ? "dark"
                : "light"
        });
    }

    return (
        <button onClick={ toggleTheme }>
            Toggle Theme
        </button>
    );
}