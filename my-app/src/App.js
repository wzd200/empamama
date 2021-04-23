import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <nav>
        <h1>Website</h1>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </nav>

      <Switch>
        <Route path={'/Home'}></Route>
        <Route path={'/About'}></Route>
        <Route path={'/Contact'}></Route>
      </Switch>
    </div>

    
    
    

  );
}


export default App;
