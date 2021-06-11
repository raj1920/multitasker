import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages';
// import Home from './pages/index'; import Users from './pages/users'; import
// GlobalStyle from './globalstyle';

function App() {
    return (
        <Router>
            {/* <GlobalStyle/>
      <Navbar/>
      <Switch>
         <Route path='/' exact component={Home} />
        <Route path='/Users' exact component={Users} />
      </Switch> */}

            <Home/>
        </Router>
    );
}

export default App;
