import { Component } from "react";
import Strip from "../Strip";
import NavBar from "../NavBar";
import "./index.css";

class AppscriptHome extends Component {
  render() {
    return (
      <div>
        <Strip />
        <NavBar />
      </div>
    );
  }
}
export default AppscriptHome;
