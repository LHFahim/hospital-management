import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const AddPatient = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [admission_date, setAdmission_date] = useState('');
  const [personalPhone, setPersonalPhone] = useState('');
  const [address, setAddress] = useState('');
  const [referral, setReferral] = useState('');
  const [patientType, setPatientType] = useState('');
  const [roomId, setRoomId] = useState('');
  const [wardId, setWardId] = useState('');

  const handleClick = e => {
    e.preventDefault();
    console.log(
      name,
      gender,
      admission_date,
      personalPhone,
      address,
      referral,
      patientType,
      roomId,
      wardId
    );

    axios.post('http://localhost:5000/api/createPatient', {
      patientName: name,
      gender: gender,
      admitionDate: admission_date,
      personalPhone: personalPhone,
      address: address,
      referral: referral,
      patientType: patientType,
      roomId: roomId,
      // wardID: wardId,
    });
  };

  return (
    <div>
      <input
        onChange={e => setName(e.target.value)}
        type="text"
        name="patient_name"
      />

      <div className="grid md:grid-cols-2 md:gap-56">
        {/* gender*/}
        <div className="relative z-0 mb-6 w-full group flex space-x-5 ">
          <div className="space-x-3">
            <input
              onChange={e => setGender(e.target.value)}
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
              onChange={e => setGender(e.target.value)}
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
            onChange={e => setAdmission_date(e.target.value)}
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
            onChange={e => setPersonalPhone(e.target.value)}
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
            onChange={e => setAddress(e.target.value)}
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
              onChange={e => setReferral(e.target.value)}
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
              name="patientType"
              onChange={e => setPatientType(e.target.value)}
            >
              <option value="undefined">Select type</option>
              <option value="Out patient">Out patient</option>
              <option value="In patient">In patient</option>
            </select>
          </div>
        </div>
      </div>

      <input
        onChange={e => setRoomId(e.target.value)}
        type="text"
        name="roomId"
      />
      <label htmlFor="Room Id"></label>

      <input type="submit" value="Submit" onClick={handleClick} />
    </div>
  );
};

export default AddPatient;
