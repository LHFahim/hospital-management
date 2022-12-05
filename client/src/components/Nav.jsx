import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <div className="navbar bg-blue-900 text-white">
        {/* hospital logo */}
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-3xl font-bold" to="/">
            Trust Hospital
          </Link>
        </div>

        {/* menu */}
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 space-x-5">
            <li className="rounded-3xl outline outline-1 outline-blue-700 hover:bg-blue-700 ">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="rounded-3xl outline outline-1 outline-blue-700 hover:bg-blue-700 ">
              <Link to="/AddDoctor">Add doctor</Link>
            </li>

            <li className="rounded-3xl outline outline-1 outline-blue-700 hover:bg-blue-700 ">
              <Link to="/makeAppointment">Make Appointment</Link>
            </li>
            <li className="rounded-3xl outline outline-1 outline-blue-700 hover:bg-blue-700 ">
              <Link to="/addMedicalServices">Add Service</Link>
            </li>
            <li className="rounded-3xl outline outline-1 outline-blue-700 hover:bg-blue-700 ">
              <Link to="/addRoom">Add Room</Link>
            </li>
            <li className="rounded-3xl outline outline-1 outline-blue-700 hover:bg-blue-700 ">
              <Link to="/addWard">Add Ward</Link>
            </li>
            <li className="rounded-3xl outline outline-1 outline-blue-700 hover:bg-blue-700 ">
              <Link to="/addMedicine">Add medicine</Link>
            </li>

            <li className="rounded-3xl outline outline-1 outline-blue-700 hover:bg-blue-700 ">
              <Link to="/register-patient">Register patients</Link>
            </li>

            {/* drop down */}
            {/* <li tabIndex={0}>
              <a href="https://google.com">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li>
                  <a href="https://google.com">Submenu 1</a>
                </li>
                <li>
                  <a href="https://google.com">Submenu 2</a>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
