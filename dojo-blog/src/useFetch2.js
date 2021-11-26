import { useEffect, useState } from "react";

const useFetch = (endpoint) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("useEffect:Scanning for changes");
        setTimeout(() => {

            fetch(endpoint)
                .then(res => {
                    if(!res.ok){
                        throw Error("Unable to fetch the data,check the endpoint passed")
                    }
                    return res.json();
                }).then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);

                }).catch(err => {
                    setError(err.message)
                })
        }, 2000);
    }, [endpoint]);

    return { data, isPending, error };
}

export default useFetch;