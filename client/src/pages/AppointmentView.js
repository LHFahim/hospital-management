import React from 'react';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import axios from 'axios';
import { useState } from 'react';

function AppointmentView() {
  const [posts, setPosts] = useState([]);

  const API_URL = 'http://localhost:5000/api/fetchAppointment';

  const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    console.log(data);
    setPosts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async _id => {
    const result = await axios.delete(
      `http://localhost:5000/api/deleteAppointment/${_id}`
    );
    alert(result.data.message);
    window.location.reload(false);
  };

  return (
    <>
      <Nav />

      <section className="py-10 w-5/6 mx-auto">
        <table>
          <thead className="space-x-10">
            {/* <th>ID</th> */}
            {/* <th>First name</th> */}
            <th>Schedule ID</th>
            <th>Doctor ID</th>
            <th>Time in</th>
            <th>Time out</th>
            <th>Available date</th>
            <th>Note</th>
            <th>Action</th>
          </thead>

          {posts.map(data => {
            return (
              <tbody>
                <tr className=" border border-blue-900  hover:bg-blue-100 ">
                  <td className="p-5">{data.scheduleId}</td>
                  <td className="p-5">{data.doctorId}</td>
                  <td className="p-5">{data.TimeIn}</td>
                  <td className="p-5">{data.TimeOut}</td>
                  <td className="p-5">{data.AvailableDate}</td>
                  <td className="p-5">{data.Note}</td>
                  <td className="p-5">
                    <button
                      onClick={() => {
                        handleDelete(data._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </section>

      <Footer />
    </>
  );
}

export default AppointmentView;
