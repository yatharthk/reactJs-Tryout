
import {useState,useEffect} from 'react';


const useFetch = (endpoint) => {
    const [data,setData]=useState(null);
    const [IsPending,setIsPending]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
//initilly we havent used abortController
// Use is for stopping the fetch on url change as we dont want the data for the moment to be fetched
//create a Abort controller object and use the abort method at the end of fetch.

        const abortController= new AbortController();
            console.log("use effect ran");
            // console.log(name);
            setTimeout(()=>{
                fetch(endpoint,{signal:abortController.signal}).then(res=>{
                    console.log(res);
                    if(!res.ok){
                        throw Error("could not fetch the data for that resource");
                    }
                return res.json();
            }).then(data=>{
                console.log(data);
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err=>{
                if(err.name==='AbortError'){
                    console.log("fetch aborted");
                }
                else{ 
                setError(err.message);
                console.log(err.message);
                setIsPending(false);
                }
            })
            },2000);

            return ()=>{
                abortController.abort();
            }
    },[endpoint]);


    return {data,IsPending,error};
}
 
export default useFetch;