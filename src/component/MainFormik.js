import React from 'react';
import { useFormik } from 'formik';
const MainFormik = () => {

    const formik = useFormik({
        initialValues :{
            email :"",
            password :"",
            name:"",
        },
        onSubmit :(values,{resetForm})=>{
           console.log(values)
           resetForm({values :""})

        }

    })
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="input">
        <label htmlFor="name"> Enter Name</label>
        <input
        name="name"
          type="text"
          onChange={formik.handleChange}
          placeholder="Name"
          value={formik.values.name}
        />
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          onChange={formik.handleChange}
          placeholder="email"
          value={formik.values.email}
          name="email"
          id="email"
        />
        <label htmlFor="password">Create Your Password</label>
        <input
        name="password"
          type="password"
          onChange={formik.handleChange}
          placeholder="Password"
          value={formik.values.password}
        />
        <div>
          <button type='submit'>Submit</button>
        </div>
      </div>
    </form>
  )
}

export default MainFormik