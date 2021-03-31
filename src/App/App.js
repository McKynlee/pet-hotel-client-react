import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';


// import HomePage from '../HomePage/HomePage';
// import AddPet from '../AddPet/AddPet';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
import Owner from '../Owner/Owner';

function App() {


  return (
    <>
      <Router>

        <header>
          <Header />
        </header>

        {/* <Route exact path="/">
          <HomePage />
        </Route> */}

        <Route exact path="/dashboard">
          <Dashboard />
        </Route>

        <Route exact path="/owner">
          <Owner />
        </Route>

      </Router>

    </>
  )
}

export default App;