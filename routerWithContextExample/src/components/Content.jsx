import useTheme from "../utils/hooks/useTheme";

export default function Content({ children }) {
    const { theme } = useTheme();

    const styles = {
        background: theme === "light" ? "#fff": "#333",
        color: theme === "light" ? "#000" : "#fff"
    };

    return (
        <section style={ styles }>
            <p>Current theme: { theme }</p>
            { children }
        </section>
    );
}