import React, {useState, useEffect} from 'react';
import './App.css';
import * as firebase from 'firebase';

//works on Realtime Database
//Cloud Firestore not tried!
const App = () => {
  const [speed, setSpeed] = useState(34);

  const handleChange = (e) => {
    // setSpeed(e.target.value);
    let newNumber = Number(e.target.value);
    firebase.database().ref().set({
      speed: newNumber
    });
  }

  useEffect( ()=> {
      var starCountRef = firebase.database().ref();
      starCountRef.on('value', (snapshot) => {
      console.log(snapshot.val().speed);
      let newspeed = snapshot.val().speed; console.log(newspeed);
        setSpeed(newspeed);
      });
  }, [])


  return(
    <div>{speed}
      <input type="number" value={speed} onChange={handleChange} />
    </div>
  );
}

export default App;
