import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const HistoryActivitylist = (props) => {
    const activities = props.activities;
    const history =useHistory();
    let deleted =false;

    const handledeletehistory=(id) =>{
        setTimeout(()=>{
            fetch('http://localhost:8000/activities/'+id,{
            method:"DELETE"
            }).then(()=>{
                history.push('/');
            })
        })
    }

    const handlerestore = (id) =>{
        setTimeout(()=>{
            fetch('http://localhost:8000/activities/'+id,{
            method:"PATCH",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify({isDeleted:false})
            }).then(()=>{
                // history.push('/');
            })
        })
    }
    
    const Setdeleted = (id) =>{
        deleted=id;
        console.log(deleted);
    }
    

    return (
        <div className="historylist">
            {activities.map((act) => (
                <Link to={`/activities/${act.id}`}>
                    {Setdeleted(act.isDeleted)}
                    {deleted ? (
                        <div className="historypreview" key={act.id}>
                        <div className="historypart2">
                            <h2>{act.title}</h2>
                            <button onClick={() => { handlerestore(act.id) }} className="restorebitton">Restore</button>
                        </div>
                        <div className="historypart1">
                            <h3>{act.name}</h3>
                            <button onClick={() => { handledeletehistory(act.id) }}>Delete From History</button>
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


export default HistoryActivitylist;