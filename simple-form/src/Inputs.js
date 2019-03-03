import React, {useState} from 'react';


export default () => {
  const [field, setField] = useState({
    firstname: "asdf",
    lastname: "dd",
    age: "4",
    gender: "",
    destination: "",
    dietaryrestrictions: []
  });

  const handleChange = (e) => {
    console.log(field);
    const {name, value} = e.target;
    setField({
      [name]: value
    })
   
  }

  return(
    < >
    <p>Simple Form</p>
    <input name="firstname" value={field.firstname} onChange={handleChange} type="text" placeholder="First Name"/>
    <input name="lastname" value={field.lastname} onChange={handleChange} type="text" placeholder="Last Name"/>
    <input name="age" value={field.age} onChange={handleChange} type="number" placeholder="Age"/>

    <h3>{field.firstname} {field.lastname}</h3>
    <h4></h4>
    <h5>{field.age}</h5>
    </>
  )
}