import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    // password validation
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password must have an Uppercase Letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.error("Password must have a Lowercase Letter");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        // update profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            console.log("Profile updated");
            toast.success("Registration Successful!");
          })
          .catch();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Email Already in Use");
      });
  };

  return (
    <div className="dark:bg-[#101010] transition-all duration-150 pb-20">
    <div className="max-w-6xl mx-auto py-14 dark:text-[#f0f0f0]">
      <Helmet>
        <title>ArtNest | Register</title>
      </Helmet>
      <div className="mx-4">
        <h2 className="text-2xl font-medium mb-8 text-center">
          Register Your Account
        </h2>
        <div className="md:w-1/2 lg:w-1/3 mx-auto shadow-lg px-5 py-8 rounded-xl border-2 border-[#4793af54]">
          <form onSubmit={handleRegister}>
            <div className="form-control mb-2">
              <label className="label">
                <span className="">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered dark:bg-[#49494986]"
                required
              />
            </div>
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
            <div className="form-control mb-2">
              <label className="label">
                <span className="">Photo URL</span>
              </label>
              <input
                type="url"
                placeholder="photo url"
                name="photo"
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
                Register
              </button>
            </div>
          </form>
          <p className="text-center mt-5">
            Already have an account?{" "}
            <Link to="/login" className="text-[#3282B8] font-semibold">
              Login
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
    </div>
  );
};

export default Register;
