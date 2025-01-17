import React from "react";
import "./LoaderLogo.css";
import logo from "../../assets/logo/zml.png";
class LogoLoader extends React.Component {
  render() {
    return <img src={logo} alt="logo" id="logo" />;
  }
}
export default LogoLoader;
