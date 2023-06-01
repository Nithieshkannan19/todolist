import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter  as Router,Route ,Switch } from "react-router-dom/cjs/react-router-dom.min";
import Create from "./create";
import ActivityDetails from "./activitydetails";
import NotFound from "./NotFound";
import Desc from "./desc";
import History from "./history";


function App() {

  // const title=  "Welcome to the new Blog";
  // const likes= 50;
  // const person = {name:"nithiesh",age: 20}; //object cannot be called down as that of the strring ,number,array
  return (
    <Router>
      <div className="App">
      <div className="content">
        <Switch>
          <Route exact path="/"><Navbar/><Desc/><Home/></Route>
          <Route path="/create"><Navbar/><Desc/><Create/></Route>
          <Route path="/activities/:id"><Navbar/><Desc/><ActivityDetails/></Route>
          <Route path="/history"><Navbar/><Desc/><History/></Route>
          <Route path="*"><NotFound/></Route>
        </Switch>
      </div>
    </div>
    </Router>
    
  );
}

export default App;

