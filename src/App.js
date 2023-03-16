import Dashboard from "./components/Dashboard";
import "./styles/home.scss";

function App() {
  return (
    <>
      {/* <div className="background">
        <div className="image">
          <img src="background.svg" alt="background" />
        </div>

        <div className="login-mobile">
          <div className="login-input">
            <div>
              <h4>Login</h4>
              <div>
                <span>+91</span>
                <input type="numbers" />
              </div>
            </div>

            <div className="or">
              <span />
              <p>OR</p>
              <span />
            </div>

            <div className="google-auth">
              <img src="google_logo.svg" alt="" />
              <p>Log in with Google</p>
            </div>
          </div>
          <div className="continue-div">
            <p>
              Already have an account?{" "}
              <span className="signin"> Sign In! </span>
            </p>
            <p className="mt">
              {" "}
              By continuing, I agree to the{" "}
              <span className="underline"> terms of service </span> and{" "}
              <span className="underline">privacy policy</span>
            </p>
            <button className="continue">Continue</button>
          </div>
        </div>
      </div> */}
      <Dashboard/>
    </>
  );
}

export default App;
