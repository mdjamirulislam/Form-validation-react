import React, { useState } from "react";

const Formik = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handlename = (e) => {
    setname(e.target.value);
  };
  const handleemail = (e) => {
    setemail(e.target.value);
  };
  const handlepassword = (e) => {
    setpassword(e.target.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(password);
  };

  return (
    <form onSubmit={handlesubmit}>
      <div className="input">
        <input
          type="text"
          onChange={handlename}
          placeholder="Name"
          value={name}
        />
        <input
          type="email"
          onChange={handleemail}
          placeholder="email"
          value={email}
        />
        <input
          type="password"
          onChange={handlepassword}
          placeholder="Password"
          value={password}
        />
        <div>
          <button>Submit</button>
        </div>
      </div>
    </form>
  );
};

export default Formik;
