import React, {useState} from 'react';


export default () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [destination, setDestination] = useState('');
  const [vegan, setVegan] = useState(false);
  const [lactose, setLactose] = useState('');
  const [gluten, setGluten] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted!");
  }

  return(
    < >
      <p>Simple Form</p>
      <form onSubmit={handleSubmit}>
        <input name="firstname" value={firstname} onChange={(e)=>setFirstname(e.target.value)} type="text" placeholder="First Name"/>
        <input name="lastname" value={lastname} onChange={(e)=>setLastname(e.target.value)} type="text" placeholder="Last Name"/>
        <input name="age" value={age} onChange={(e)=>setAge(e.target.value)} type="number" placeholder="Age"/>
        <label><input name="gender" value="male" type="radio" checked={gender === 'male'} onChange={(e)=>setGender('male')} />Male</label>
        <label><input name="gender" value="female" type="radio" checked={gender === 'female'} onChange={(e)=>setGender('female')} />Female</label>
        <select name="destination" value={destination} onChange={(e)=>setDestination(e.target.value)}>
          <option value="">--Choose--</option>
          <option value="Romania">Romania</option>
          <option value="France">France</option>
          <option value="Germany">Germany</option>
        </select>
        <label><input type="checkbox" name="vegan" checked={vegan} onChange={()=>setVegan(!vegan)}/>Vegan</label>
        <label><input type="checkbox" name="lactose" checked={lactose} onChange={()=>setLactose(!lactose)}/>Lactose Free</label>
        <label><input type="checkbox" name="gluten" checked={gluten} onChange={()=>setGluten(!gluten)}/>Gluten Free</label>
        <button>Submit</button>
      </form>

      <p>{firstname ? `My name is: ${firstname}` : null }</p>
      <p>{lastname ? `My name is: ${lastname}` : null }</p>
      <p>{age ? `I'm: ${age}` : null }</p>
      <p>{gender ? `I am a: ${gender}` : null }</p>
      <p>{destination ? `I live in: ${destination}` : null }</p>
      <p>Vegan? {vegan ? "yes, vegan":"no, carnivore"}</p>
      <p>Lactose free? {lactose ? "yes, lactose free":"no, I like lactose"}</p>
      <p>Gluten free? {gluten ? "yes, gluten":"no, I like gluten"}</p>
    </>
  )
}