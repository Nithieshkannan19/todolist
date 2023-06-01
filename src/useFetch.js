import { useState,useEffect } from "react";

const UseFetch = (url) => {
    const [loading, setisloading] = useState(true);
    const [error, seterror] = useState(null);
    const [data,setdata] = useState(null);


    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            // console.log("Useeffect ran");
            fetch(url,{signal:abortCont.signal})
                .then(res => {
                    if (!res.ok) {
                        throw Error("Could not fetch the data..")
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    setdata(data);
                    setisloading(false);
                    seterror(null);
                })
                .catch((err) => {
                    if(err.name !== "AbortError"){
                    seterror(err.message);
                    setisloading(false);}
                })
        }, 1000);
        return () => abortCont.abort();

    }, [url]); //second parameter is the dependency where we specify where only to reload the page here only in the case of the change in the name


    
    return {data,error,loading}
}

export default UseFetch;