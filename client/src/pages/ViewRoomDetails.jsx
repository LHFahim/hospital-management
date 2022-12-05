import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import axios from 'axios';

function ViewRoomDetails() {
  const [room, setRoom] = useState([]);

  const API_URL = 'http://localhost:5000/api/fetchRoom';

  const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    setRoom(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async _id => {
    const result = await axios.delete(
      `http://localhost:5000/api/deleteRooms/${_id}`
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
            <th className="p-5">Room ID</th>
            <th className="p-5">Room type</th>
            <th className="p-5">Room rate</th>

            <th className="p-5">Notes</th>
          </thead>
          {room.map(data => {
            return (
              <tbody key={data._id}>
                <tr className=" border border-blue-900  hover:bg-blue-100">
                  <td>{data.roomid}</td>
                  <td>{data.roomType}</td>
                  <td>{data.roomRate} BDT</td>

                  <td>{data.notes}</td>
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

export default ViewRoomDetails;
