import React from "react";
import { signInWithGoogle } from "../firebase";
import "../styles/home.scss";

function Login() {

  return (
    <>
      <div className="background">
        <div className="image">
          <img src="background.svg" alt="background" />
        </div>

        <div className="login-mobile">
          <div className="login-input">
            <div>
              <h4>Login</h4>
              <div>
                <span>+91</span>
                <input type="numbers" placeholder="mobile number" />
              </div>
            </div>

            <div className="or">
              <span />
              <p>OR</p>
              <span />
            </div>

            <div onClick={signInWithGoogle} className="google-auth">
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

        <div className="login-pc">
          <div className="left">
            <div>
              <img src="login-image.svg" alt="" />
              <p className="fitness">Fitness Made Easy</p>
              <p>
                FiBO helps you track your fitness goals, and manage your gyms,
                clients and branches in a one stop solution, saving you time and
                money!
              </p>
            </div>
          </div>

          <div className="right">
            <div>
              <img src="logo.svg" alt="" />
              <p>
                FI<span>T</span>NESS
              </p>
            </div>

            <div className="login">
              Login to you account
              <p>Your Own Digital Campaign</p>
            </div>

            <div className="login-input-pc">
              <div className="input">
                <span>+91</span>
                <input type="numbers" placeholder="mobile number" />
              </div>

              <div className="continue">
                <button>Login to Your Account</button>
              </div>

              <div className="or">
                <span />
                <p>OR</p>
                <span />
              </div>

              <div onClick={signInWithGoogle} className="google-btn">
                <img src="google_logo.svg" alt="" />
                Log in with Google
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
