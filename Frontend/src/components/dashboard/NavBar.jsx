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
    <div className="flex min-h-screen max-h-full w-full relative">
      <div className="border-r border-slate-300 bg-white z-0 hover:z-20
      h-full w-20 hover:w-64 transition-all shrink-0 absolute top-0 left-0"
      >
        <nav>

          <div className="flex my-4 mx-2 items-center w-fit">
            <img 
              src="NetWrk logo.png" 
              alt="NetWrk's logo" 
              className="size-16 shrink-0 mr-4"  
            />
            <h1 className="text-4xl w-fit font-semibold">
              NetWrk
            </h1>
          </div>
          <ul>
            {
              navLinks.map((link, i) => {
                return (
                  <li key={i} className="ml-6 mb-10 text-xl">
                    <NavLink to={link.route}>
                      <div className="flex items-center w-fit">
                        <i className="material-icons w-8 mr-7 text-3xl">{link.icon}</i>
                        <h3 className="w-fit ">{link.name}</h3>
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
