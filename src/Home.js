import { useEffect, useState } from "react";
import Activitylist from "./ActivityList";
import UseFetch from "./useFetch";

const Home = () => {
    
    // const [name,setName] = useState("Jane")
    // const [age,setAge] = useState("20")

    // const HandleClick = (name,age,e) =>{
    //     // console.log("Hello"+name,e.target)
    //     setName(name)
    //     setAge(age)
    // }

    // const [name,setname] = useState("nithiesh");
    const {data,loading,error} = UseFetch('http://localhost:8000/activities');


    // const handledelete =(id) =>{
    //     // const newactivities=activities.filter((act) =>
    //     //     act.id !== id
    //     // );
    //     // setactivity(newactivities)
    // }

    return ( 
        <div className="home"> 
            {/* <h2>Homepage</h2> */}
            {/* <p>{name} is {age} years old</p>
            <button onClick={(e)=>{HandleClick("Harry",10,e)}}>Click Me</button> */}
            {error && <div className="error">{error}</div>}
            {loading && <div className="loading">Loading...</div>}
            {data && <Activitylist activities={data} />}
            {/* <button onClick={()=>setname("kannan")}>Click me</button>
            <p>{name}</p> */}
        </div>
    );
}
 
export default Home;