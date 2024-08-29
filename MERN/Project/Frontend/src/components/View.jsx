import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const View = () => {
  const { id } = useParams();
  const[data,setData]=useState({});
  const getsingle = async() => {
    console.log(id);
    const response=await fetch(`http://localhost:5001/${id}`);
    const result=await response.json();
    setData(result);
  };
  useEffect(() => {
    getsingle();
  }, []);
  return <div>
    {data.name}<br/>{data.email}<br/>{data.salary}
    
  </div>
};

export default View;
