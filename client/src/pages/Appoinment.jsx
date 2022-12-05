import React, { useState } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Appoinment = () => {
  const [appointments, setAppointments] = useState({
    scheduleId: '',
    doctorId: '',
    timeIn: '',
    timeOut: '',
    availableDays: '',
    notes: '',
  });

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);

    setAppointments(prevDoc => {
      return {
        ...prevDoc,
        [name]: value,
      };
    });
  };

  const handleSubmit = async () => {
    try {
      const postAppointment = await axios.post(
        'http://localhost:5000/api/createAppointment',
        {
          scheduleId: appointments.scheduleId,
          doctorId: appointments.doctorId,
          TimeIn: appointments.timeIn,
          TimeOut: appointments.timeOut,
          AvailableDate: appointments.availableDays,
          Note: appointments.notes,
        }
      );

      if (postAppointment) {
        console.log(postAppointment);
        toast.success(postAppointment.data.message);
        alert(postAppointment.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Nav />

      <ToastContainer />

      {/* form starts */}
      <form className="w-3/6 mx-auto my-10">
        <h3 className="text-2xl text-center font-bold my-5">
          Doctor's Appointment
        </h3>

        {/* schedule ID */}
        <div className="relative z-0 mb-6 w-6/12 group">
          <input
            onChange={handleChange}
            type="text"
            name="scheduleId"
            id="floating_doctor_id"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="floating_doctor_id"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Schedule ID
          </label>
        </div>

        {/* doctor ID */}
        <div className="relative z-0 mb-6 w-6/12 group">
          <input
            onChange={handleChange}
            type="text"
            name="doctorId"
            id="floating_doctor_id"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="floating_doctor_id"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Doctor ID
          </label>
        </div>

        {/* time in */}
        <div className="relative z-0 mb-6 w-6/12 group">
          <input
            onChange={handleChange}
            type="date"
            name="timeIn"
            id="floating_doctor_id"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="floating_doctor_id"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Time-in
          </label>
        </div>

        {/* time out  */}
        <div className="relative z-0 mb-6 w-6/12 group">
          <input
            onChange={handleChange}
            type="date"
            name="timeOut"
            id="floating_doctor_id"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="floating_doctor_id"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Time-out
          </label>
        </div>

        {/* available days */}
        <div className="relative z-0 mb-6 w-6/12 group">
          <input
            onChange={handleChange}
            type="text"
            name="availableDays"
            id="floating_doctor_id"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="floating_doctor_id"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Available days
          </label>
        </div>

        {/* notes */}
        <div className="relative z-0 mb-6 w-6/12 group">
          <input
            onChange={handleChange}
            type="text"
            name="notes"
            id="floating_doctor_id"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="floating_doctor_id"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Notes
          </label>
        </div>

        {/* submit btn */}
        <button
          type="submit"
          onClick={handleSubmit}
          className="mt-5 text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold  rounded-lg text-md w-full sm:w-auto px-10 py-3 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>

        <br />
        <Link
          className="hover:text-indigo-600 hover:font-bold "
          to="/viewAppointments"
        >
          View appointments here
        </Link>
      </form>
      {/* form ends */}
      <Footer />
    </div>
  );
};

export default Appoinment;
