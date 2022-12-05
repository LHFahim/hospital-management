import React from 'react';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import axios from 'axios';
import { useState } from 'react';

function ViewDoctor() {
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

  const handleDelete = async _id => {
    const result = await axios.delete(
      `http://localhost:5000/api/deleteDoctor/${_id}`
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
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Gender</th>
            <th>Home phone</th>
            <th>Personal Phone</th>
            <th>NIC</th>
            <th>Qualifications</th>
            <th>Specialization</th>
            <th>Address</th>
            <th>Doctor type</th>
            <th>Visiting charge</th>
            <th>Chaneling charge</th>
            <th>Salary</th>
            <th>Note</th>
            <th>Action</th>
          </thead>

          {posts.map(data => {
            return (
              <tbody>
                <tr className=" border border-blue-900  hover:bg-blue-100 ">
                  <td className=" ">{data._id}</td>
                  <td className="p-5">{data.lastName}</td>
                  <td className="p-5">{data.firstName}</td>
                  <td className="p-5">{data.gender}</td>
                  <td className="p-5">{data.homeTelephone}</td>
                  <td className="p-5">{data.mobile}</td>
                  <td className="p-5">{data.nicNumber}</td>
                  <td className="p-5">{data.qualifiqation}</td>
                  <td className="p-5">{data.specialization}</td>
                  <td className="p-5">{data.address}</td>
                  <td className="p-5">{data.doctorType}</td>
                  <td className="p-5">{data.charge}</td>
                  <td className="p-5">{data.chanelingCharge}</td>
                  <td className="p-5">{data.salery}</td>
                  <td className="p-5">{data.note}</td>
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

export default ViewDoctor;
