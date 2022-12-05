import React, { useState } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const RoomDetails = () => {
  const [roomDetails, setRoomDetails] = useState({
    roomId: '',
    roomType: '',
    roomRate: '',
    notes: '',
  });

  const handleChange = event => {
    event.preventDefault();

    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);

    setRoomDetails(prevDoc => {
      return {
        ...prevDoc,
        [name]: value,
      };
    });
  };

  const init = async e => {
    console.log(roomDetails);
    e.preventDefault();
    try {
      const roomService = await axios.post(
        'http://localhost:5000/api/createRoom',
        {
          roomid: roomDetails.roomId,
          roomType: roomDetails.roomType,
          roomRate: roomDetails.roomRate,
          notes: roomDetails.notes,
        }
      );

      if (roomService) {
        console.log('roomService =>');
        console.log(roomService);
        toast.success(roomService.data.message);
        alert(roomService.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Nav />

      <ToastContainer />

      <form className="w-3/6 mx-auto my-10">
        <h3 className="text-2xl text-center font-bold my-5">Add a Room</h3>
        {/* hr */}
        <div className="space-x-5 text-center my-10">
          <div className="inline-block border-b-2  border-blue-900 w-3/4"></div>
        </div>

        {/* room ID */}
        <div className="relative z-0 mb-6 w-2/12 group">
          <input
            onChange={handleChange}
            type="text"
            name="roomId"
            id="floating_room_id"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="floating_room_id"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Room ID
          </label>
        </div>

        <section>
          {/* room type */}
          <div className="grid md:grid-cols-2 md:gap-56">
            <div className="relative z-0 mb-6 w-full group">
              <input
                onChange={handleChange}
                type="text"
                name="roomType"
                id="floating_roomType"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_roomType"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Room type
              </label>
            </div>

            {/* room rate*/}
            <div className="relative z-0 mb-6 w-full group">
              <input
                onChange={handleChange}
                type="text"
                name="roomRate"
                id="floating_rate"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_rate"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Room rate
              </label>
            </div>
          </div>

          {/* duration and additional notes */}
          <div className="grid md:grid-cols-2 md:gap-56">
            {/* additional notes*/}
            <div className="relative z-0 mb-6 w-full group">
              <input
                onChange={handleChange}
                type="text"
                name="notes"
                id="floating_notes"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_notes"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Notes
              </label>
            </div>
          </div>
        </section>

        {/* submit btn */}
        <button
          onClick={init}
          type="submit"
          className="mt-5 text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold  rounded-lg text-md w-full sm:w-auto px-10 py-3 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
        <br />
        <Link
          className="hover:text-indigo-600 hover:font-bold "
          to="/viewRooms"
        >
          View rooms here
        </Link>
      </form>

      <Footer />
    </div>
  );
};

export default RoomDetails;
