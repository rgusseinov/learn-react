import { Link, Outlet } from "react-router-dom";

export default function Layout() {

  return (
      <>
        <h1>Header</h1>
        <Link to="/">Home</Link><br />
        <Link to="/signin">Sign In</Link><br />
        <Link to="/dashboard">Dashboard</Link><br />
        
        <br />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias tempore commodi consectetur, incidunt illum quasi rem aliquid eaque numquam culpa exercitationem quod libero, a ex doloremque consequatur recusandae? Tempore, amet?
        </p>

        <Outlet />

        <footer>Footer</footer>
      </>
  )
}