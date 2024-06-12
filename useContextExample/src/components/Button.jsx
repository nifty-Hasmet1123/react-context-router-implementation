// call the setCount in here using the custom hook
import useProviderContext from "../utils/hooks/useProviderContext";

export default function Button() {
    // extract the setCount in the context (list format)
    // const [ _, setCount ] = useProviderContext();
    const { setCount } = useProviderContext();

    return (
        <section>
            <button onClick={() => setCount(prev => prev + 1)}>
                Increment value
            </button>
            <button onClick={() => setCount(prev => prev - 1)}>
                Decrement value
            </button>
        </section>
    );
}