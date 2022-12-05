import React from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function ViewMedicalServices() {
  const [services, setServices] = useState([]);

  const API_URL = 'http://localhost:5000/api/fetchService';

  const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    setServices(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async _id => {
    const result = await axios.delete(
      `http://localhost:5000/api/deleteServices/${_id}`
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
            <th className="p-5">ID</th>
            <th className="p-5">Service name</th>
            <th className="p-5">Duration</th>
            <th className="p-5">Charges</th>
            <th className="p-5">Notes</th>
          </thead>
          {services.map(data => {
            return (
              <tbody key={data.serviceId}>
                <tr className=" border border-blue-900  hover:bg-blue-100">
                  <td>{data.serviceId}</td>
                  <td>{data.serviceName}</td>
                  <td>{data.duration}</td>
                  <td>{data.charge}</td>
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

export default ViewMedicalServices;
