
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import Home from './pages';
// import Home from './pages/index'; import Users from './pages/users'; import
// GlobalStyle from './globalstyle';

function App() {
    return (
        <Router>
            
      <Switch>
         <Route path='/' exact component={Home} />
         {/* <Route path='/post' exact component={Work} /> */}
        
      </Switch> 

            
        </Router>
    );
}

export default App;
