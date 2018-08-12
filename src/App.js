import React, { Component } from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import './App.css';
import Results from './Results';
import Home from './Home';

class App extends Component {

  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/results/:user" component={Results}/>
          </Switch>
        </BrowserRouter>
    );
  }
}

// class  extends Component{
//   render(){
//     return(
//       <div>
//         <input type="text" value={this.state.user}
//         onChange={(e) => this.setState({user:e.target.value})}/>
//         <Link to={'/repos/${this.state.user}'}/>
//       </div>
//     )
//   }
// }

export default App;
