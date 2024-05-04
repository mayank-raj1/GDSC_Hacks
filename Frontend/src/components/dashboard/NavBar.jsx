import { Outlet } from "react-router";

function NavBar() {

  return (
    <div className="h-full w-16 border border-slate-300">
      <nav>
        <h1 className="">
          ProVision
        </h1>
        <ul>

        </ul>
      </nav>

      <Outlet />

    </div>
  );
}

export default NavBar;
