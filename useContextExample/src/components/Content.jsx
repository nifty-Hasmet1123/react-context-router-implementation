import useProviderContext from "../utils/hooks/useProviderContext";

// returns counts
export default function Content({ children }) {
    // destructure the return value of the custom hook (list format)
    // const [ count ] = useProviderContext();

    // object format
    const { count } = useProviderContext();

    return (
        <section>
            <p>Number of counts: { count }</p>
            { children }
        </section>
    );
}