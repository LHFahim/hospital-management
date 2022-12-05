import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import PatientView from './PatientView';

function PatientSearch() {
  // ---------------Posting Data----------------------------

  const [patientPhone, setPatientPhone] = useState('');
  const [data, setData] = useState({});

  const handleClick = async e => {
    e.preventDefault();
    console.log(patientPhone);

    try {
      const postPatientPhone = await axios.post(
        'http://localhost:5000/api/findPatient',
        {
          personalPhone: patientPhone,
        }
      );
      if (postPatientPhone) {
        console.log(postPatientPhone);
        setData(postPatientPhone);
        toast.success(postPatientPhone.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Nav />
      <ToastContainer />

      <form className="w-3/6 mx-auto my-10">
        {/* hr */}
        <div className="space-x-5 text-center my-10">
          <p className="inline">Search with patient number</p>
          <div className="inline-block border-b-2  border-blue-900 w-3/4"></div>
        </div>

        {/* personal details */}
        <section>
          <div className="grid md:grid-cols-2 md:gap-56">
            {/* patient name */}
            <div className="relative z-0 mb-6 w-full group">
              <input
                onChange={e => {
                  setPatientPhone(e.target.value);
                }}
                type="text"
                name="patient_phone"
                id="patient_phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="patient_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Patient phone
              </label>
            </div>
          </div>
        </section>

        {data.data ? (
          <div className="p-5 border border-blue-700">
            <p>{data.data.patientName}</p>
            <p>{data.data.patientType}</p>
            <p>{data.data.personalPhone}</p>
            <p>{data.data.address}</p>
            <p>{data.data.roomId}</p>
            <p>{data.data.admitionDate}</p>
          </div>
        ) : null}

        {/* submit btn */}
        <button
          onClick={handleClick}
          type="submit"
          className="mt-5 text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold  rounded-lg text-md w-full sm:w-auto px-10 py-3 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>

        <br />
        <Link
          className="hover:text-indigo-600 hover:font-bold "
          to="/view-patients"
        >
          View patients here
        </Link>
      </form>
      <Footer />
    </>
  );
}

export default PatientSearch;
