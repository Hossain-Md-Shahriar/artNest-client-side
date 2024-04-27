import google from "../assets/google.svg";
import github from "../assets/github.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { logInUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        console.log("Logged In Successfully!");
      })
      .catch((error) => {
        console.error(error);
        console.log("Email or Password Doesn't Match");
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(result => {
        console.log(result.user);
        console.log("Logged In Successfully");
    })
    .catch(error => {
        console.error(error);
    })
  };

  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        console.log(result.user);
        console.log("Logged In Successfully!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="mt-28">
      <h2 className="text-2xl font-medium mb-6 text-center">
        Login to Your Account
      </h2>
      <div className="md:w-1/2 lg:w-1/3 mx-auto shadow-lg px-5 py-8 rounded-xl border-2 border-[#3282b857]">
        <form onSubmit={handleLogin}>
          <div className="form-control mb-2">
            <label className="label">
              <span className="">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-7">
            <button className="btn btn-neutral bg-[#0F4C75] hover:bg-[#0a3049] text-white">
              Login
            </button>
          </div>
        </form>
        <p className="py-3 text-center text-sm text-[#797979]">
          Or continue with,
        </p>
        <div className="flex justify-center gap-5">
          <div
            onClick={handleGoogleSignIn}
            className="cursor-pointer rounded-full border-2 flex justify-center items-center size-10 hover:shadow-lg transition-all duration-150"
          >
            <img className="w-7" src={google} alt="" />
          </div>
          <div
            onClick={handleGithubSignIn}
            className="cursor-pointer rounded-full border-2 flex justify-center items-center size-10 hover:shadow-lg transition-all duration-150"
          >
            <img className="w-7" src={github} alt="" />
          </div>
        </div>
        <p className="text-center pt-3 border-t mt-5">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#3282B8] font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
