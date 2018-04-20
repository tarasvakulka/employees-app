import React from "react";
import {Link} from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home_link: "active",
      about_link: "",
    };
  }

  activeHandler = (e) => {
    this.setState({
      home_link: "",
      about_link: "",
    });
    const element = e.target.id;
    this.setState({[element]: "active"});
  }

  render() {
        return(
            <nav className="navbar navbar-inverse navbar-expand navbar-dark bg-dark">
              <div className="navbar-right">
                <ul className="navbar-nav mr-auto">
                  <li  className="nav-item " >
                    <Link id="home_link" className={this.state.home_link + " nav-link"} to='/' onClick={this.activeHandler}>Home </Link>
                  </li>
                  <li className="nav-item" >
                    <Link id="about_link" className={this.state.about_link + " nav-link"} to='/about' onClick={this.activeHandler}>About </Link>
                  </li>
                </ul>
              </div>       
            </nav>
        );
    }
}
export default Navbar;