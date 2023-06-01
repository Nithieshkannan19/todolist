import { useParams } from 'react-router-dom';
import UseFetch from "./useFetch";
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const ActivityDetails = () => {
    const {id} = useParams();
    // console.log(id)
    const {data,loading,error} = UseFetch('http://localhost:8000/activities/'+id);
    // console.log({data.title});
    const history =useHistory();

    const handleDelete = () =>{
        fetch('http://localhost:8000/activities/'+id,{
            method:"PATCH",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify({isDeleted:true})
            }).then(()=>{
                // history.push('/');
            })
    }

    return ( 
        <div className="activitydetails">
            
            {error && <div className="error">{error}</div>}
            {loading && <div className="loading">Fetching Data...</div>}
            {data && (
                <article>
                    <h1 >Activity list -{data.id}</h1>
                    <h2>{data.title}</h2>
                    <p>Should complete before {data.date}</p>
                    <p>Should be done by {data.name}</p>
                    <button onClick={handleDelete}>Delete Me</button>
                </article>   
                
            )}
        </div>
     );
}
 
export default ActivityDetails;