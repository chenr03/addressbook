import React, {useState, useEffect} from 'react';
import './App.css';

export default function User(props){
    const [isToggled, setIsToggled] = useState(false)

    useEffect(() => {
        console.log(isToggled)
    }, [isToggled])
    // console.log(props)
    return (
    <li>
        <img className ="randomUser" src={props.data.picture.large} alt={props.data.name}/>
        <h1>{props.data.name.first} {props.data.name.last}</h1>
        {isToggled && <p> {"Age: "} {props.data.dob.age}, {'Gender: '}{props.data.gender} </p>}
        <button onClick ={() => setIsToggled(!isToggled)}>Toggle</button>
    </li>

)};