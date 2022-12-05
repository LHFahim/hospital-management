import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function AddDoctor() {
  // ---------------------auto add id---------------------

  const [posts, setPosts] = useState([]);

  const API_URL = 'http://localhost:5000/api/fetchDoctor';

  const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    setPosts(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const doctorId = posts.length;
  const nextId = doctorId + 1;

  console.log(nextId);

  // ---------------Posting Data----------------------------

  const [doctor, setDoctor] = useState({
    id: '',
    firstName: '',
    lastName: '',
    gender: '',
    homePhone: '',
    personalPhone: '',
    nic: '',
    qualification: '',
    specialization: '',
    address: '',
    doctorType: '',
    visitingCharge: '',
    chanelingCharge: '',
    salary: '',
    note: '',
  });

  const handleClick = async e => {
    e.preventDefault();

    try {
      const postDoctor = await axios.post(
        'http://localhost:5000/api/createDoctor',
        {
          firstName: doctor.firstName,
          lastName: doctor.lastName,
          gender: doctor.gender,
          nicNumber: doctor.nic,
          homeTelephone: doctor.homePhone,
          mobile: doctor.personalPhone,
          address: doctor.address,
          qualifiqation: doctor.qualification,
          specialization: doctor.specialization,
          doctorType: doctor.doctorType,
          charge: doctor.visitingCharge,
          note: doctor.note,
          chanelingCharge: doctor.chanelingCharge,
          salery: doctor.salary,
        }
      );

      if (postDoctor) {
        console.log(postDoctor);
        toast.success(postDoctor.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);

    setDoctor(prevDoc => {
      return {
        ...prevDoc,
        [name]: value,
      };
    });
  }

  return (
    <>
      <Nav />

      <ToastContainer />

      <form className="w-3/6 mx-auto my-10">
        <h3 className="text-2xl text-center font-bold my-5">Doctor Details</h3>
        {/* doctor ID */}

        {/* hr */}
        <div className="space-x-5 text-center my-10">
          <p className="inline">Personal details</p>
          <div className="inline-block border-b-2  border-blue-900 w-3/4"></div>
        </div>

        {/* personal details */}
        <section>
          {/* name */}
          <div className="grid md:grid-cols-2 md:gap-56">
            {/* first name */}
            <div className="relative z-0 mb-6 w-full group">
              <input
                onChange={handleChange}
                type="text"
                name="firstName"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>

            {/* last name */}
            <div className="relative z-0 mb-6 w-full group">
              <input
                onChange={handleChange}
                type="text"
                name="lastName"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>

          {/* gender and home phone */}
          <div className="grid md:grid-cols-2 md:gap-56">
            {/* gender */}
            <div className="relative z-0 mb-6 w-full group">
              <input
                onChange={handleChange}
                type="text"
                name="gender"
                id="floating_gender"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Gender
              </label>
            </div>

            {/* home phone*/}
            <div className="relative z-0 mb-6 w-full group">
              <input
                onChange={handleChange}
                type="tel"
                name="homePhone"
                id="floating_home_phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_home_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Home Telephone (123-456-7890)
              </label>
            </div>
          </div>

          {/* NIC & phone */}
          <div className="grid md:grid-cols-2 md:gap-56">
            {/* NIC NO */}
            <div className="relative z-0 mb-6 w-full group">
              <input
                onChange={handleChange}
                type="text"
                name="nic"
                id="floating_nic"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_nic"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                NIC number
              </label>
            </div>
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

          {/* address, qualification and specialization */}
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
              {/* qualification*/}
              <div className="relative z-0 mb-6 w-full group">
                <input
                  onChange={handleChange}
                  type="text"
                  name="qualification"
                  id="floating_qualification"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_qualification"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Qualifications
                </label>
              </div>

              {/* specialization */}
              <div className="relative z-0 mb-6 w-full group">
                <input
                  onChange={handleChange}
                  type="text"
                  name="specialization"
                  id="floating_specialization"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_specialization"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Specialization
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* hr */}
        <div className="space-x-5 text-center my-10">
          <p className="inline">Employee details</p>
          <div className="inline-block border-b-2  border-blue-900 w-3/4"></div>
        </div>

        {/* employee details */}
        <section id="employee-details">
          <div className="grid md:grid-cols-2 md:gap-56">
            <div>
              {/* doctor type */}
              <div className="relative z-0 mb-6 w-full group">
                <input
                  onChange={handleChange}
                  type="text"
                  name="doctorType"
                  id="floating_doctor_type"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_doctor_type"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Doctor type
                </label>
              </div>
              {/* note */}
              <div className="mt-1 relative z-0 mb-6 w-full group">
                <textarea
                  onChange={handleChange}
                  type="text"
                  name="note"
                  id="floating_note"
                  rows={4}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_note"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Note
                </label>
              </div>
            </div>

            <div className="md:grid-cols-2 md:gap-y-0">
              {/* visiting charge*/}
              <div className="relative z-0 mb-6 w-full group">
                <input
                  onChange={handleChange}
                  type="text"
                  name="visitingCharge"
                  id="floating_visiting_charge"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_visiting_charge"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Visiting charge
                </label>
              </div>

              {/* chaneling charge */}
              <div className="relative z-0 mb-6 w-full group">
                <input
                  onChange={handleChange}
                  type="text"
                  name="chanelingCharge"
                  id="floating_chaneling_charge"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_chaneling_charge"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Chaneling charge
                </label>
              </div>

              {/* basic salary */}
              <div className="relative z-0 mb-6 w-full group">
                <input
                  onChange={handleChange}
                  type="text"
                  name="salary"
                  id="floating_basic_salary"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_basic_salary"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Basic salary
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
          to="/ViewDoctor"
        >
          View doctors here
        </Link>
      </form>

      <Footer />
    </>
  );
}

export default AddDoctor;
