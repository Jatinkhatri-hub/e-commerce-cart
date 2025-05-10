import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from '../../App';


const SignUp = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  const [confirmPassword, setConfirmPassword] = useState(user.password);
  const [isPasswordEqual, setIsPasswordEqual] = useState(true);
  console.log(user);

  const handleUserName = (name) => {
    setUser(prevUser => ({ ...prevUser, name}));
  }

  const handleUserEmail = (email) => {
    setUser((prevUser) => ({ ...prevUser, email }));
  }

  const handleUserPassword = (password) => {
    setUser((prevUser) => ({ ...prevUser, password }));
  }

  const handleConfirmPassword = (confirmPassword) => {
    setConfirmPassword(confirmPassword);
  }

  const handlePasswordCheck = () => {
    if (user.password === confirmPassword) {
      setConfirmPassword(true)
      navigate('../../products')
    } else {
      setConfirmPassword(false)
    }


  }
  

  return (
    <div className=" w-full h-full flex justify-center items-baseline pt-11 overflow-y-auto">
      <div className="flex flex-col justify-center items-center w-full max-w-[340px]">
        <h1 className="font-display  font-medium text-heading text-2xl mb-5 self-baseline">
          Create Account
        </h1>
        <form className="flex flex-col items-center justify-center w-full">
          <div className="w-full">
            <label
              htmlFor="fullname"
              className="block mb-2.5 text-sm font-display text-heading"
            >
              Full Name
            </label>
            <div className="relative mb-2.5">
              <div className="absolute inset-y-0 end-2.5 flex items-center ps-3.5 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-user"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
              </div>
              <input
                type="text"
                value={user.name}
                onChange={(e) => handleUserName(e.target.value)}
                className="bg-inputBackground border border-inputBackground text-gray-900 font-display font-medium text-sm rounded-xl focus:ring-purple focus:border-purple focus-visible:outline-purple  block w-full pe-10 p-2.5"
                placeholder="Enter Your Email"
              />
            </div>
          </div>
          <div className="w-full">
            <label
              htmlFor="email"
              className="block mb-2.5 text-sm font-display text-heading"
            >
              Email
            </label>
            <div className="relative mb-2.5">
              <div className="absolute inset-y-0 end-2.5 flex items-center ps-3.5 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-mail"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                  <path d="M3 7l9 6l9 -6" />
                </svg>
              </div>
              <input
                type="text"
                value={user.email}
                onChange={(e) => handleUserEmail(e.target.value)}
                className="bg-inputBackground border border-inputBackground text-gray-900 font-display font-medium text-sm rounded-xl focus:ring-purple focus:border-purple focus-visible:outline-purple  block w-full pe-10 p-2.5"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="w-full">
            <label
              htmlFor="confirmPassword"
              className="block mb-2.5 text-sm font-display text-heading"
            >
              Password
            </label>
            <div className="relative mb-2.5">
              <div className="absolute inset-y-0 end-2.5 flex items-center ps-3.5 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-eye"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                </svg>
              </div>
              <input
                type="password"
                value={user.password}
                onChange={(e) => handleUserPassword(e.target.value)}
                className="bg-inputBackground border border-inputBackground text-gray-900 font-display font-medium text-sm rounded-xl focus:ring-purple focus:border-purple focus-visible:outline-purple  block w-full pe-10 p-2.5"
                placeholder="Enter Your Password"
              />
            </div>
          </div>
          <div className="w-full">
            <label
              htmlFor="password"
              className="block mb-2.5 text-sm font-display text-heading"
            >
              Confirm Password
            </label>
            <div className="relative mb-2.5">
              <div className="absolute inset-y-0 end-2.5 flex items-center ps-3.5 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-eye"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                </svg>
              </div>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => handleConfirmPassword(e.target.value)}
                className="bg-inputBackground border border-inputBackground text-gray-900 font-display font-medium text-sm rounded-xl focus:ring-purple focus:border-purple focus-visible:outline-purple  block w-full pe-10 p-2.5"
                placeholder="Confirm your password"
              />
            </div>
          </div>
          <button onClick={(e) => {
            e.preventDefault();
            handlePasswordCheck();
          }} className="font-display cursor-pointer border-2 border-purple bg-purple text-sm font-semibold py-3 px-4 rounded-lg text-white my-2.5 self-baseline">
            Create Account
          </button>
        </form>

        <h2
          className="text-blue text-base font-display my-5 cursor-pointer"
          onClick={() => navigate("../login")}
        >
          Already have an account? Sign In
        </h2>
      </div>
    </div>
  );
};

export default SignUp;
