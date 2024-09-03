import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const { id } = useParams();

  const navigate=useNavigate();
  console.log(id);
  const getemp = async () => {
    const response = await fetch(`http://localhost:5001/${id}`);
    const data = await response.json();
    if (response.ok) {
      setName(data.name);
      setEmail(data.email);
      setSalary(data.salary);
    }
  };

  const updateemp = async (e) => {
    e.preventDefault();
    const emp = { name, email, salary };
    const response = await fetch(`http://localhost:5001/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emp),
    });
    const result = await response.json();
    if (result.msg === "Success") {
      alert("Employee updated successfully");
      
      navigate('/showall')

    } else {
      alert(result.msg);
    }
  };
  useEffect(() => {
    getemp();
  }, []);

  return (
    <div className="row">
      <div className="col-md-6 mx-auto p-5 shadow-lg my-5 rounded-5 ">
        <h4>
          <span className="text-danger text-decoration-underline">
            Updation
          </span>{" "}
          form
        </h4>
        <br />
        <form onSubmit={updateemp}>
          Enter your name:
          <input
            className="form-control"
            type="text "
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            name="name"
          />
          <br />
          Enter your email:
          <input
            className="form-control"
            type="email "
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
          />
          <br />
          Enter your salary:
          <input
            className="form-control"
            type="number "
            value={salary}
            onChange={(e) => {
              setSalary(e.target.value);
            }}
            name="salary"
          />
          <br />
          <input
            className="form-control btn btn-primary"
            type="submit"
            value="submit"
          />
          <br />
          <br />
        </form>
      </div>
    </div>
  );
};

export default Edit;
