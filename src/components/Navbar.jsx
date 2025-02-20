import { signOut } from 'firebase/auth';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { auth } from '../firebase/firebase.config';

const Navbar = () => {
  const { user } = useContext(AuthContext);

  // sign-out
  const userSignOut = () => {
    signOut(auth)
      .then(res => {
        console.log(res.user);
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  // nav options
  const navOptions = (
    <>
      <li>{/* <a>Task</a> */}</li>
    </>
  );

  return (
    <div className="">
      <div className="navbar shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-white">TaskFlow</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end flex gap-4">
          <div>
            <img
              className="h-12 w-12 rounded-full"
              src={user?.photoURL}
              alt=""
            />
          </div>
          {user ? (
            <button onClick={userSignOut} className="button">
              Log-Out
            </button>
          ) : (
            <Link to={'/sign-in'} className="button">
              Sign-in
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
