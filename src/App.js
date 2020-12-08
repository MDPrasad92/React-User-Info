import logo from './logo.svg';
import './App.css';
import UserList from './UserData/userList'
import UserCreation from './UserData/userCreation'
import './CSSStyles/gridLayout.css'
import './CSSStyles/myApp.css'
import './CSSStyles/Table.css'
import LayoutStyle from './LayoutStyle'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'

function App() {
  return (
    <Router>
       {/* <Route exact path="/UserList" component={UserList} /> */}
       <Switch>
        <Route exact path="/UserList" component={UserList} />
        <Route exact path="/">
          <Redirect to="/UserList" />
        </Route>
        <Route exact path="/UserCreation/:id" component={UserCreation} />
      </Switch>
       {/* <Route exact path="/UserCreation" component={UserCreation} /> */}
    {/* <LayoutStyle/> */}
    </Router>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
