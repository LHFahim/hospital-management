import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import axios from 'axios';

const CreateMedicineView = () => {
  const [medicine, setMedicine] = useState([]);

  const API_URL = 'http://localhost:5000/api/fetchMedichine';

  const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    setMedicine(data);
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
            <th className="p-5">Medicine ID</th>
            <th className="p-5">Medicine Name</th>
            <th className="p-5">Supplier ID</th>
            <th className="p-5">Category ID</th>
            <th className="p-5">Unit price</th>
            <th className="p-5">Units in stock</th>
          </thead>
          <tbody>
            {medicine.map(data => {
              return (
                <tr
                  key={data._id}
                  className=" border border-blue-900  hover:bg-blue-100"
                >
                  {/* <td>{data._id.substring(0, 5)}</td> */}
                  <td>{data.productID}</td>
                  <td>{data.productName}</td>
                  <td>{data.supplierID}</td>
                  <td>{data.categoryID}</td>
                  <td>{data.unitprice}</td>
                  <td>{data.unitsInStoct}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      <Footer />
    </>
  );
};

export default CreateMedicineView;
