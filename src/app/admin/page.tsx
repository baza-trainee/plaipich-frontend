"use client";
import React, { useState } from "react";

const Admin = () => {
  const [isUser, setIsUser] = useState(false);
  return <div>{isUser ? <div>All for admin</div> : <div onClick={()=>setIsUser(true)}>Login form</div>}</div>;
};

export default Admin;
