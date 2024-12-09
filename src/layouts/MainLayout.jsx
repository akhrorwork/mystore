// components
import { Navbar, Footer, ColorContainer } from "../components";

// rrd
import { Outlet } from "react-router-dom";

function MainLayout() {
  // function
  return (
    <>
      <Navbar />
      <ColorContainer />
      <main className="align-elements w-full">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
