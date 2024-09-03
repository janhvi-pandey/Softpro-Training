import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Showall = () => {
  const [data, setData] = useState([]);

  const getall = async () => {
    const response = await fetch("http://localhost:5001/");
    const result = await response.json();
    console.log(result);
    setData(result);
  };
  const empdel=async(id)=>{
    const response=await fetch(`http://localhost:5001/${id}`,
      {
        method: 'DELETE',
      });
      const result=await response.json();
      if(result.msg==="Success"){
        alert("Employee deleted");
        getall();
      }
      else{
        alert(result.msg);
      }
  }
  useEffect(() => {
    getall();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-8 mx-auto my-5 bg-dark p-3 rounded-3 shadow-lg table-responsive">
          <table className="table table-dark text-light">
            <thead>
              <tr>
                <th>Id</th>
                <th >Name</th>
                <th>Email</th>
                <th>Salary</th>
                <th colSpan={3}>Action</th>
              </tr>
            </thead>
            <tbody>
            {/* Always return the JSX elements from map.  use () in arrow function if u want to use {} then write return after {} */}
              {/* question mark for if data is unavilable it will throw error */}
            
              {data?.map((e) => (
                <tr key={e._id}>
                  <td>{e._id}</td>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.salary}</td>
                  <td><Link to={`/view/${e._id}`} className="btn btn-warning">View</Link></td>
                  <td><Link to={`/edit/${e._id}`}className="btn btn-primary">Edit</Link></td>
                  <td><Link className="btn btn-danger" onClick={()=>empdel(e._id)}>Delete</Link></td>
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Showall;
