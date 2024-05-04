import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";


function NavBar() {

  const navLinks = [
    {
      name: "Contacts",
      route: "/contacts"
    },
    {
      name: "Chat",
      route: "/chat"
    },
    {
      name: "Other",
      route: "/other"
    },
  ]

  return (
    <div className="flex h-screen w-full">
      <div className="border-r border-slate-300 h-full">
        <nav>
          <h1 className="text-4xl m-6">ProVision</h1>
          <ul>
            {
              navLinks.map((link, i) => {
                return (
                  <li key={i} className="ml-4 text-xl">
                    <NavLink>
                      <h3>{link.name}</h3>
                    </NavLink>
                  </li>
                );
              })
            }
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  )
}

export default NavBar;
