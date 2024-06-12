import { ThemeContext } from "../context/ThemeProvider";
import { useContext } from "react";

export default function useTheme() {
    return useContext(ThemeContext);
}