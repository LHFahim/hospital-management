import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function PatientRegister() {
  // ---------------Posting Data----------------------------

  const [patient, setPatient] = useState({
    patient_name: '',
    gender: '',
    admission_date: '',
    personalPhone: '',
    referral: '',
    patient_type: '',
    address: '',
    roomId: '',
    wardId: '',
  });

  const handleClick = async e => {
    e.preventDefault();
    try {
      const postPatient = await axios.post(
        'http://localhost:5000/api/createPatient',
        {
          patientName: patient.patient_name,
          gender: patient.gender,
          personalPhone: patient.personalPhone,
          address: patient.address,
          referral: patient.referredDoctor,
          patientType: patient.patient_type,
          roomId: patient.roomId,
          wardId: patient.wardId,
          admitionDate: patient.admission_date,
        }
      );
      if (postPatient) {
        console.log(postPatient);
        toast.success(postPatient.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    // console.log(name, value);

    setPatient(prevPatient => {
      return {
        ...prevPatient,
        [name]: value,
      };
    });
  }

  console.log(patient);

  return (
    <>
      <Nav />

      <ToastContainer />

      <form className="w-3/6 mx-auto my-10">
        <h3 className="text-2xl text-center font-bold my-5">Patient details</h3>

        {/* hr */}
        <div className="space-x-5 text-center my-10">
          <p className="inline">Personal details</p>
          <div className="inline-block border-b-2  border-blue-900 w-3/4"></div>
        </div>

        {/* personal details */}
        <section>
          <div className="grid md:grid-cols-2 md:gap-56">
            {/* patient name */}
            <div className="relative z-0 mb-6 w-full group">
              <input
                onChange={handleChange}
                type="text"
                name="patient_name"
                id="floating_patient_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_patient_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Patient name
              </label>
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-56">
            {/* gender*/}
            <div className="relative z-0 mb-6 w-full group flex space-x-5 ">
              <div className="space-x-3">
                <input
                  onChange={handleChange}
                  type="radio"
                  value="male"
                  name="gender"
                  id="floating_gender_male"
                  placeholder=" "
                  required=""
                />
                <label for="floating_gender">Male</label>
              </div>
              <br />
              <div className="space-x-3">
                <input
                  onChange={handleChange}
                  type="radio"
                  value="female"
                  name="gender"
                  id="floating_gender_female"
                  placeholder=" "
                  required=""
                />
                <label for="floating_gender">female</label>
              </div>
            </div>
            {/* admission date */}
            <div className="relative z-0 mb-6 w-full group">
              <input
                onChange={handleChange}
                type="date"
                name="admission_date"
                id="floating_admission_date"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_admission_date"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Admission date
              </label>
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-56">
            {/* personal phone */}
            <div className="relative z-0 mb-6 w-full group">
              <input
                onChange={handleChange}
                type="tel"
                name="personalPhone"
                id="floating_personal_phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_personal_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number (123-456-7890)
              </label>
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-56">
            {/* address */}
            <div className="mt-1 relative z-0 mb-6 w-full group">
              <textarea
                onChange={handleChange}
                type="text"
                name="address"
                id="floating_address"
                rows={4}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_address"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Address
              </label>
            </div>

            <div className="md:grid-cols-2 md:gap-y-0">
              {/* referral*/}
              <div className="relative z-0 mb-6 w-full group">
                <input
                  onChange={handleChange}
                  type="text"
                  name="referral"
                  id="floating_referral"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_referral"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Referred doctor
                </label>
              </div>

              {/* patient type */}
              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="patient_type">Patient type:</label>
                <select
                  name="patient_type"
                  id="patient_type"
                  onChange={handleChange}
                >
                  <option value="undefined">Select type</option>
                  <option value="Out patient">Out patient</option>
                  <option value="In patient">In patient</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* hr */}
        <div className="space-x-5 text-center my-10">
          <p className="inline">Settlement details</p>
          <div className="inline-block border-b-2  border-blue-900 w-3/4"></div>
        </div>

        {/* settlement */}
        <section id="employee-details">
          <div className="grid md:grid-cols-2 md:gap-56">
            <div>
              {/* room */}
              <div className="relative z-0 mb-6 w-full group">
                <input
                  onChange={handleChange}
                  type="text"
                  name="roomId"
                  id="floating_roomId"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_roomId"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Room ID (optional)
                </label>
              </div>
            </div>

            <div className="md:grid-cols-2 md:gap-y-0">
              {/*  wardId */}
              <div className="relative z-0 mb-6 w-full group">
                <input
                  onChange={handleChange}
                  type="text"
                  name="wardId"
                  id="floating_wardId"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_wardId"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Ward ID (optional)
                </label>
              </div>
            </div>
          </div>
        </section>

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

export default PatientRegister;
