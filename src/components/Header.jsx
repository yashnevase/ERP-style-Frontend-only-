import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const path = location.pathname.split('/').filter(Boolean); // Filters out empty strings

  return (
    <div className="navbar bg-[#ffffff] shadow-md h-20">
      <div className="flex-1">
        <div className="flex items-center">
          <Link to="/" className="btn btn-ghost text-xl text-[#64748b]">BILLCUBE</Link>

          {/* Updated Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="ml-8 text-[#64748b]">
            <ol className="flex overflow-hidden rounded-lg border border-gray-200 text-gray-600">
              {/* Home breadcrumb as the first item */}
              <li className="flex items-center">
                <Link
                  to="/"
                  className="flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span className="ms-1.5 text-xs font-medium"> Home </span>
                </Link>
              </li>

              {/* Other breadcrumbs */}
              {path.map((item, index) => {
                const to = `/${path.slice(0, index + 1).join('/')}`;
                return (
                  <li className="relative flex items-center" key={index}>
                    <span
                      className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)]"
                    ></span>

                    <Link
                      to={to}
                      className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </div>

      <div className="flex-none">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto bg-white" />
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg className="w-6 h-6 text-[#4a5667] dark:text-[#64748b]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"/>  
              </svg>
              <span className="badge badge-sm indicator-item bg-red-700 text-white">8</span>
            </div>
          </div>
          <div tabIndex={0} className="card card-compact dropdown-content bg-white z-[1] mt-3 w-52 shadow-md">
            <div className="card-body">
              <span className="text-lg font-bold text-[#64748b]">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content font-semibold bg-white text-[#64748b] rounded-box z-[1] mt-3 w-52 p-2 shadow-md">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge bg-white border-white text-[#64748b] font-semibold ">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
