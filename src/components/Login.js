import "../css/Login.css";

const Login = () => {
  return (
    <>
        <div id="login-div-mobile" className="mobile columns-all center-columns">
            <i className="relative fa fa-user" id="person-icon"></i>
            <p className="relative child-of-mobile-login" id="username-mobile">sbrogden</p>
            <a href="#" className="relative child-of-mobile-login" id="logout-mobile"><p>logout</p></a>
        </div>
        <div id="login-div" className="desktop relative">
            <div id="login-div-div" className="columns-all center-columns relative">
                <i className="relative fa fa-user" id="person-icon"></i>
                <p className="relative" id="username">sbrogden</p>
            </div>
            <a href="#" className="relative" id="logout"><p>logout</p></a>
        </div>
    </>
  );
};

export default Login;
