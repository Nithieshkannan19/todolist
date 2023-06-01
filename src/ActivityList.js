import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Activitylist = (props) => {
    const activities = props.activities;
    const history =useHistory();
    let deleted =false;

    const handledelete=(id) =>{
        setTimeout(()=>{
            fetch('http://localhost:8000/activities/'+id,{
            method:"PATCH",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify({isDeleted:true})
            }).then(()=>{
                history.push('/');
            })
        })
        
    }
    
    const Setdeleted = (id) =>{
        deleted=id;
        console.log(deleted);
    }
    

    return (
        <div className="activitylist">
            {activities.map((act) => (
                <Link to={`/activities/${act.id}`}>
                    {Setdeleted(act.isDeleted)}
                    {!deleted ? (
                        <div className="preview" key={act.id}>
                        <h2>{act.title}</h2>
                        <div className="part">
                            <h3>{act.name}</h3>
                            <button onClick={() => { handledelete(act.id) }}>Delete Me</button>
                        </div>
                        </div> ) 
                        : (
                          <br></br>
                        )
                        }
                </Link>
            ))}
        </div>
    );
}


export default Activitylist;