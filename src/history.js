import UseFetch from "./useFetch";
import HistoryActivitylist from "./historylist";



const History = () => {

    const {data,loading,error} = UseFetch('http://localhost:8000/activities');

    return ( 
        <div className="history"> 
            <h2>History</h2>
            {error && <div className="error">{error}</div>}
            {loading && <div className="loading">Loading...</div>}
            {data && <HistoryActivitylist activities={data} />}
        </div>
    );
}
 
export default History;