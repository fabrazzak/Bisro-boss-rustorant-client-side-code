import { Link } from "react-router-dom";

const Navbar = () => {

  const allLi= <>

      <li><Link to="/">Home</Link></li>
      <li><Link to="/menu">Our Menu</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
       
  
  </>

    
    return (
        <div className="bg-base-100  opacity-75 fixed z-10 left-0 top-0 right-0 ">  



            <div className="navbar  xl:container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm    dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {allLi}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl  opacity-100 ">daisyUI</a>
  </div>
  
  <div className="navbar-end">
    <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 opacity-100">

      {allLi}
     
    </ul>
    
  </div>
    
    {/* <a className="btn">Button</a> */}
  </div>
</div>
            
        </div>
    );
};

export default Navbar;