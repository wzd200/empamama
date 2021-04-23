import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <nav>
        <div className='nameHeader'>
          <h1>Empamama's</h1>
        </div>
        <div className='linksHeader'>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
        </div>
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
