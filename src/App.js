import Login from './views/Login/Login';
import Navbar from './views/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Home from "./views/Home/Home";
import Upload from "./views/Upload/Upload"

function App() {

  const authCheck = () => {
    const token = localStorage.getItem('token');
    console.log('auth route', token);
    if (token == undefined) {
      return false;
    }
    return true;
  }

  const AuthRoute = ({component: Component, ...rest}) => {
    return <Route {...rest} render={prop => (
      authCheck() ? (<Component {...prop} />) : (<Redirect to={{pathname: '/login'}}/>)
    ) }/>
  }

  return (
    <div className="app">
      <Router>
        <main>
          <Navbar />
          <Switch>
            <Route path="/" exact component={check }/>
            <Route path="/login" exact component={Login} />
            <Route path="/upload" exact component={ Upload }/>
            <AuthRoute path='/home' exact component={ Home }/>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

const check = () => {
  return <div>
    check
  </div>
}

export default App;
