// import React, { useState, useEffect } from 'react';
import React from 'react';
import './App.css'

console.clear();



// export default function App() {
//     const [userIsLoggedIn, setIsUserLoggedIn] = useState(false);
//     const [users, setUsers] = useState([])
//
//     // ComponentDidMount
//     useEffect(() => {
//         console.log("Mounted");
//         fetch("https://randomuser.me/api?results=25")
//         .then((response) => response.json())
//         .then((data) => {
//             setUsers(data.results);
//         });
//     }, []);
//
//     useEffect(() => {
//         console.log("UPDATED", users)
//     }, [users])
//
//     const handleClick = () => {
//         setIsUserLoggedIn(!userIsLoggedIn);
//     };
//
//     return (
//       <div className="App">
//         <h1> Hello CodeSandbox</h1>
//         <h2> Start editing to see some magic happen!</h2>
//         <button onClick={handleClick}> Click me </button>
//       </div>
//     );
//   }




export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            randomUsers: [],
            userIsLoggedIn: false
        };
    }


    componentDidMount() {
        fetch("https://randomuser.me/api?results=25")
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                this.setState({
                    randomUsers: data.results
                })
            });
    }

    componentDidUpdate() {
        console.log(this.state.randomUsers)
    }

    render() {
        return (

            <div className="App">
                <ul>
                    {this.state.randomUsers.map((randomUsers) => {
                        return (
                            <li>
                                <img src={randomUsers.picture.large} alt={randomUsers.name}/>
                                <h1>{randomUsers.name.first} {randomUsers.name.last}</h1>


                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}


