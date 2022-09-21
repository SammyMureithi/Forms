import React, { useState } from 'react'

function Forms() {
    const [formData, setFormData] = useState( {
        firstName: "",
        lastName: "",
    } )
    function handleChange( e ) {
        setFormData( prevState => {
            return {
                ...prevState,
                [e.target.name]:e.target.value
            }
        })
    }
  return (
      <div>
          <label htmlFor='firstName'>First Name</label>
          <input type={"text"} name="firstName" value={formData.firstName} onChange={ handleChange} />
          <label htmlFor='lastName'>Last Name</label>
          <input type={"text"} name="lastName" value={formData.lastName} onChange={handleChange} />
          <h1>First Name:{formData.firstName}</h1>
          <h1>Last Name:{formData.lastName}</h1>
    </div>
  )
}

export default Forms