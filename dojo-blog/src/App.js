
import Home from './Home';
import Navbar from './Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {

  // const title = 'Welcome to the new block';
  // const likes=50;
  // const link = 'http://www.google.com';
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        {/* <h1>{title}</h1> */}
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route exact path="/create">
            <Create></Create>
          </Route>
          <Route path="/create/:id">
            <BlogDetails></BlogDetails>
          </Route>
        </Switch>
        {/* <Home></Home> */}
      </div>
    </div>
    </Router>
  );
}

export default App;
