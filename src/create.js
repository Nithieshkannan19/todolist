import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
const Create = () => {

    const [title,settitle] = useState("");
    const [date,setdate] =useState("");
    const [name,setname] =useState("");
    const [isPending,SetIsPending] =useState(false);
    const history= useHistory();
    const isDeleted =false;

    const handleSubmit = (e) =>{
        e.preventDefault();
        const activity ={name,date,title,isDeleted};
        SetIsPending(true)
        console.log(activity)
        fetch('http://localhost:8000/activities',{
            method:'POST',
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(activity) 
        }).then(()=>{
            console.log("added");
            setTimeout(()=>{
                SetIsPending(false)
            },1000)
            history.push("/")
        })
    }

    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    //     const activity ={name,date,title};
    //     SetIsPending(true)
    //     console.log(activity)
    //     fetch('http://localhost:8000/activities',{
    //         method:'POST',
    //         headers: {"Content-Type":"application/json"},
    //         body:JSON.stringify(activity) 
    //     }).then(()=>{
    //         console.log("added");
    //         setTimeout(()=>{
    //             SetIsPending(false)
    //         },1000)
    //         history.push("/")
    //     })
    // }

    

    return(
        <div className="newactivity">
            <form className="forms" onSubmit={handleSubmit}>
                <h2>Add new activivity</h2>
                <label>Title of the task</label><br></br>
                <input type="text" id="title" required value={title} onChange={(e)=>settitle(e.target.value)}></input><br></br>
                <label>Last date to complete</label><br></br>
                <input type="date" id="date" required value={date} onChange={(e)=>setdate(e.target.value)}></input><br></br>
                <label>Name of the person</label><br></br>
                <input type="text" id="name" required value={name} onChange={(e)=>setname(e.target.value)}></input><br></br>
                {!isPending && <button>Add Activity</button>}
                {isPending && <button disabled>Adding..</button>}

            </form>
        </div>
    )    
}
 
export default Create;
