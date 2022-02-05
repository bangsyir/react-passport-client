import Google from '../assets/img/google.png'
import Facebook from '../assets/img/facebook.png'
import Github from '../assets/img/github-sign.png'

const Login = () => {
  const google = () => {
    window.open("http://localhost:8000/auth/google", "_self")
  }
  const facebook = () => {
    window.open("http://localhost:8000/auth/facebook", "_self")
  }
  const github = () => {
    window.open("http://localhost:8000/auth/github", "_self")
  }

  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginBtn google" onClick={google} >
            <img src={Google} alt="google" className="icon"/>
            Google
          </div>
          <div className="loginBtn facebook" onClick={facebook}>
            <img src={Facebook} alt="facebook" className="icon" />
            Facebook
          </div>
          <div className="loginBtn github" onClick={github}>
            <img src={Github} alt="github" className="icon"/>
            Github
          </div>
        </div>
        <div className="center">
          <div className="line"/>
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="username"/>
          <input type="password" placeholder="password"/>
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
