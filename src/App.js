import React, { useState, useEffect } from 'react';
import User from './User';
// import React from 'react';
import './App.css';

console.clear();





export default function App() {
    // const [userIsLoggedIn, setIsUserLoggedIn] = useState(false);
    const [users, setUsers] = useState([])

    // ComponentDidMount
    useEffect(() => {
        console.log("Mounted");
        fetch("https://randomuser.me/api?results=25")
        .then((response) => response.json())
        .then((data) => {
            setUsers(data.results);
        });
    }, []);

    useEffect(() => {

    }, [users])

    // const handleClick = () => {
    //     setIsUserLoggedIn(!userIsLoggedIn);
    //
    //
    //
    //     // console.log(setIsUserLoggedIn(!userIsLoggedIn))
    // };

    return (
      <div className="App">
        <ul style={{
            // backgroundColor: 'red'
        }} className="pictures">

            {users.map((user) => {
                //eslint-disable-next-line
                return <User data = {user}/>
            })}
        </ul>
      </div>
    );
  }




// export default class App extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             randomUsers: [],
//             userIsLoggedIn: false
//         };
//     }
//
//
//     componentDidMount() {
//         fetch("https://randomuser.me/api?results=25")
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log(data)
//                 this.setState({
//                     randomUsers: data.results
//                 })
//             });
//     }
//
//     componentDidUpdate() {
//         console.log(this.state.randomUsers)
//     }
//
//     render() {
//         return (
//
//             <div className="App">
//                 <ul>
//                     {this.state.randomUsers.map((randomUsers) => {
//                         return (
//                             <li>
//                                 <img src={randomUsers.picture.large} alt={randomUsers.name}/>
//                                 <h1>{randomUsers.name.first} {randomUsers.name.last}</h1>
//
//
//                             </li>
//                         );
//                     })}
//                 </ul>
//             </div>
//         );
//     }
// }


