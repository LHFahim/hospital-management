import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import axios from 'axios';

const ViewWardDetails = () => {
  const [ward, setWard] = useState([]);

  const API_URL = 'http://localhost:5000/api/fetchWard';

  const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    setWard(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Nav />

      <section className="py-10 w-5/6 mx-auto">
        <table>
          <thead className="space-x-10">
            <th className="p-5">Ward ID</th>
            <th className="p-5">Ward type</th>
            <th className="p-5">Ward rate</th>
            <th className="p-5">Notes</th>
          </thead>
          {ward.map(data => {
            return (
              <tbody key={data._id}>
                <tr className=" border border-blue-900  hover:bg-blue-100">
                  <td>{data._id.substring(0, 5)}</td>
                  <td>{data.wardType}</td>
                  <td>{data.wardRate}</td>
                  <td>{data.notes}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </section>

      <Footer />
    </>
  );
};

export default ViewWardDetails;
