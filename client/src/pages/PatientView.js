import React from 'react';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function PatientView() {
  const [posts, setPosts] = useState([]);

  const API_URL = 'http://localhost:5000/api/fetchPatients';

  const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    setPosts(data);
    // console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const dischargePatient = async _id => {
    const result = await axios.post(
      `http://localhost:5000/api/dischargePatient/${_id}`
    );
    // alert(result.data.message);
    // window.location.reload(false);
  };

  return (
    <>
      <Nav />

      <section className="py-10 w-5/6 mx-auto">
        <table>
          <thead className="space-x-10">
            <th>Name</th>
            <th>Gender</th>
            <th>Type</th>
            <th>Phone</th>
            <th>Admission</th>
            <th>Address</th>
            <th>Room</th>
            <th>Ward</th>
            <th>Discharged</th>
            <th>Action</th>
            <th>Medicine</th>
          </thead>

          {posts.map(data => {
            return (
              <tbody>
                <tr className=" border border-blue-900  hover:bg-blue-100 ">
                  <td className="p-5">{data.patientName}</td>
                  <td className="p-5">{data.gender}</td>
                  <td className="p-5">{data.patientType}</td>
                  <td className="p-5">{data.personalPhone}</td>
                  <td className="p-5">{data.admitionDate}</td>
                  <td className="p-5">{data.address}</td>
                  <td className="p-5">{data.roomId}</td>
                  <td className="p-5">{data.wardId}</td>
                  <td className="p-5">
                    {data.isDischarged ? 'Discharged' : 'Not discharged'}
                  </td>
                  <td className="p-5">
                    {' '}
                    <button onClick={() => dischargePatient(data._id)}>
                      Discharge
                    </button>{' '}
                  </td>
                  <td>
                    <Link to={`/buy-medicine/${data.personalPhone}`}>
                      Click
                    </Link>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </section>

      <Link
        className="hover:text-indigo-600 hover:font-bold "
        to="/search-patients"
      >
        Search patients here
      </Link>

      <Footer />
    </>
  );
}

export default PatientView;
