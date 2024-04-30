import google from "../assets/google.svg";
import github from "../assets/github.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { logInUser, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);

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
        toast.success("Logged In Successfully!");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Email or Password Doesn't Match");
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Logged In Successfully!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        console.log(result.user);
        toast.success("Logged In Successfully!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="max-w-6xl mx-auto py-16 dark:text-[#f0f0f0]">
      <div className="mx-4">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Login to Your Account
        </h2>
        <div className="md:w-1/2 lg:w-1/3 mx-auto shadow-lg px-5 py-8 rounded-xl border-2 border-[#4793af54]">
          <form onSubmit={handleLogin}>
            <div className="form-control mb-2">
              <label className="label">
                <span className="">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered dark:bg-[#49494986]"
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
                className="input input-bordered dark:bg-[#49494986]"
                required
              />
            </div>
            <div className="form-control mt-7">
              <button className="btn btn-neutral border-none bg-[#4793AF] hover:bg-[#4793afc3] text-white">
                Login
              </button>
            </div>
          </form>
          <p className="py-3 text-center text-sm text-[#797979] dark:text-[#b3b3b3]">
            Or continue with,
          </p>
          <div className="flex justify-center gap-5">
            <div
              onClick={handleGoogleSignIn}
              className="cursor-pointer dark:bg-white rounded-full border-2 dark:border-[#565656] flex justify-center items-center size-10 hover:shadow-lg transition-all duration-150"
            >
              <img className="w-7" src={google} alt="" />
            </div>
            <div
              onClick={handleGithubSignIn}
              className="cursor-pointer dark:bg-white rounded-full border-2 dark:border-[#565656] flex justify-center items-center size-10 hover:shadow-lg transition-all duration-150"
            >
              <img className="w-7" src={github} alt="" />
            </div>
          </div>
          <p className="text-center pt-3 border-t dark:border-[#565656] mt-5">
            Don't have an account?{" "}
            <Link to="/register" className="text-[#4793AF] font-semibold">
              Register
            </Link>
          </p>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Slide}
        />
      </div>
    </div>
  );
};

export default Login;
