import React from 'react';
import './App.css';
import * as firebase from 'firebase';

class App extends React.Component {
  state = {
    speed: 11
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('test-e37bd');
    console.log(rootRef);
    const speedRef = rootRef.child("speed");
     console.log(speedRef);
    speedRef.on('value', snap => {
      this.setState({speed: snap.val});
      console.log(snap.val);
    })
  }

  render() {
    return this.state.speed;
  }
}

// const App = () => {
//   const [speed, setSpeed] = useState(10);

//   useEffect(()=>{
//     const rootRef = firebase.database().ref().child('test-e37bd');
//     const speedRef = rootRef.child("speed");
//     speedRef.on('value', snap => {
//       setSpeed(snap.val);
//        console.log(snap.val);
//     })
//   }, [speed])

//   return speed;
// }

export default App;
