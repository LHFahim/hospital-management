import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const DeleteDoctor = () => {
  const [pdata, setpdata] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const result = await axios.get('http://localhost:5000/api/fetchDoctor');
      setpdata(result.data);
      console.log(result.data);
    };

    fetchdata();
  }, []);

  const handledelete = async _id => {
    const result = await axios.delete(
      `http://localhost:5000/api/deleteDoctor/${_id}`
    );
    alert(result.data.message);
    window.location.reload(false);
  };

  return (
    <>
      <table
        striped
        bordered
        hover
        variant="dark"
        style={{ textAlign: 'center' }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Age</th>
            <th>Addrress</th>
            <th>Gender</th>
            <th>Division</th>
            <th>Vaccne Name</th>
            <th>Deletion</th>
          </tr>
        </thead>
        <tbody>
          {pdata.map(data => {
            return (
              <>
                <tr>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.gender}</td>
                  <td>{data.address}</td>
                  <td>{data.nicNumber}</td>
                  <td>{data.qualifiqation}</td>
                  <td>
                    <button
                      onClick={() => {
                        handledelete(data._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default DeleteDoctor;
