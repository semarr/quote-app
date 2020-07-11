import React from 'react';
import { Create, Home, Designs } from './views';
import { BrowserRouter as Router,
  Switch, Route, NavLink } from 'react-router-dom';
import { quote } from './assets';
import './views/view.css';
import {MyContext} from './components/Context';

class App extends React.Component {
  // Kumpulan Function untuk menggunakan Context
  constructor() {
    super();
    this.onChangeTheme = () => {
        this.setState(prevState => ({
            theme: prevState.theme === 'dark' ? 'white' : 'dark'
        }))
    }

    this.onChangeFont = () => {
        this.setState(prevState => ({
            huruf: prevState.huruf === 'a' ? 'Arial' : 'Georgia'
        }))
    }

    this.state = {
        theme: 'dark',
        huruf: 'a',
        onChangeTheme: this.onChangeTheme,
        onChangeFont: this.onChangeFont
    }
  
  }
  render() {
    return (
      <>
      <Router>
        {/* Header */}
        <header>
          <nav>
            <div className="logo">
              <img src={quote} alt="Quote"/>
            </div>
          <ul>
            <li> <NavLink to="/" className="link" activeClassName="active" exact>Home</NavLink> </li>
            <li> <NavLink className="link" to="/create" activeClassName="active">Create</NavLink> </li>
            <li> <NavLink to="/designs" className="link" activeClassName="active">Designs</NavLink> </li>
          </ul>
          </nav>
        </header>
        
      {/* Content or Body  */}
        <Switch>
        <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/create">
          <MyContext.Provider value={this.state}>
              <Create />
          </MyContext.Provider>
          </Route>
          <Route path="/designs">
            <Designs/>
          </Route>
        </Switch>
        
      </Router>
      {/* Footer */}
        <footer>
          <p> Terimakasih sudah berkunjung </p>
        </footer>
      </>
    );
  }
} 

export default App;