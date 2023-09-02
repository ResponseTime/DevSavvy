import React, { useEffect, useState } from "react";
import jwt from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Login(props) {
  const [user, setU] = useState("");
  const [pass, setP] = useState("");
  const handle = (e) => {
    setU(e.target.value);
  };
  const handle1 = (e) => {
    setP(e.target.value);
  };
  const log = () => {
    axios
      .post("url", { user, pass })
      .then((response) => {
        const token = response.data.token;
        const data = jwt(token);
        localStorage.setItem("token", token);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <input type="text" value={user} onChange={handle} />
      <input type="password" value={pass} onChange={handle1} />
      <input type="submit" value="Submit" onClick={log} />
    </>
  );
}
