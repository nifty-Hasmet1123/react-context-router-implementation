import { useContext } from "react";
import { Context } from "../context/UserProvider";

export default function useProviderContext() {
    return useContext(Context); // should return [ count, setCount ] from UserProvider.jsx
}