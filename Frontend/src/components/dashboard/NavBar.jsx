import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";


function NavBar() {

  const navLinks = [
    {
      name: "Dashboard",
      route: "/",
      icon: "dashboard",
    },
    {
      name: "Contacts",
      route: "/contacts",
      icon: "contacts",
    },
    {
      name: "Chat",
      route: "/chat",
      icon: "chat",
    },
    {
      name: "Other",
      route: "/other",
      icon: "settings",
    },
  ]

  return (
    <div className="flex min-h-screen max-h-full w-full">
      <div className="border-r border-slate-300 bg-white h-full">
        <nav>
          <h1 className="text-4xl m-6">ProVision</h1>
          <ul>
            {
              navLinks.map((link, i) => {
                return (
                  <li key={i} className="ml-4 mb-6 text-xl">
                    <NavLink to={link.route}>
                      <div className="flex items-center">
                        <i className="material-icons mr-4">{link.icon}</i>
                        <h3 className="w-fit">{link.name}</h3>
                      </div>
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
