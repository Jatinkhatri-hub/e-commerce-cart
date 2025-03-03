import { NavLink } from "react-router"

function Navbar() {
  return (
    <nav className="flex justify-between items-center h-[60px] w-full px-6.5 border-b-2 border-gray-100">
      <ul className="flex gap-5 justify-center items-center ">
        <li className="font-display font-semibold">
          <NavLink to="/">ShopCart</NavLink>
        </li>
        <li className="font-display">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `${
                isActive ? "text-purple flex gap-1" : " "
              } hover:text-purple flex gap-1 transition-all`
            }
          >
            <span>
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-bag"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
                <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
              </svg>
            </span>
            Products
          </NavLink>
        </li>
        <li className="font-display">
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `${
                isActive ? "text-purple flex gap-1" : " "
              } hover:text-purple flex gap-1 transition-all`
            }
          >
            <span>
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l14 1l-1 7h-13" />
              </svg>
            </span>
            Cart
          </NavLink>
        </li>
      </ul>

      <NavLink
        to={"/register"}
        className="bg-purple border border-purple text-white rounded-lg px-[17px] py-[5px] font-display font-semibold"
      >
        Sign In
      </NavLink>
    </nav>
  );
}

export default Navbar
