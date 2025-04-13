import React, { useState, Component } from 'react';

function TemperatureConverter() {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const toFahrenheit = (c) => (c * 9 / 5 + 32).toFixed(2);
    const toCelsius = (f) => ((f - 32) * 5 / 9).toFixed(2);

    return (
        <div>
            <h3>Temperature Converter</h3>
           
            <input
                type="number"
                placeholder="Celsius"
                value={celsius}
                onChange={(e) => {
                    const value = e.target.value;
                    setCelsius(value);
                    setFahrenheit(value ? toFahrenheit(value) : '');
                }}
            />
            <span> °C = </span>

            <input
                type="number"
                placeholder="Fahrenheit"
                value={fahrenheit}
                onChange={(e) => {
                    const value = e.target.value;
                    setFahrenheit(value);
                    setCelsius(value ? toCelsius(value) : '');
                }}
            />
            <span> °F</span>
        </div>
    );
}

function ReverseString() {
    const [input, setInput] = useState('');
    const reverse = input.split('').reverse().join('');
    const isPalindrome = input === reverse;

    return (
        <div>
            <h3>Reverse and Palindrome Check</h3>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a string"
            />
            <p>Reversed: {reverse}</p>
            <p>{isPalindrome ? "It's a Palindrome!" : "Not a Palindrome"}</p>
        </div>
    );
}


function RandomNumber() {
    const [number, setNumber] = useState(null);

    const generateRandomNumber = () => {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        setNumber(randomNum);
    };

    return (
        <div>
            <h3>Random Number Generator</h3>
            <button onClick={generateRandomNumber}>Generate Random Number</button>
            {number !== null && <p>Random Number: {number}</p>}
        </div>
    );
}

function LeapYearChecker() {
    const year = 2024;
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

    return (
        <div>
            <h3>Leap Year Checker</h3>
            <p>{year} {isLeapYear ? "is a Leap Year" : "is NOT a Leap Year"}</p>
        </div>
    );
}

class UserGreeting extends Component {
    render() {
        const { firstName, lastName } = this.props;
        return (
            <div>
                <h3>User Greeting</h3>
                <p>Hello, {firstName} {lastName}!</p>
            </div>
        );
    }
}


function List()
{
    const fruits=["Apple","Banana","Orange"];
    const a=9;
    const b=10;
    const sum=(a**2)+(b**2);
    const isMorning=true;
    const greeting = isMorning ? "Good Morning" : "Good Evening";
    const checkPrime = (num) => {
        if (num <= 1) return false;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    };
    const num=11;
    const isPrime = checkPrime(num) ? "is Prime" : "is NOT Prime";
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentday = days[new Date().getDay()];

    return (
        <>
        <ul>
            {fruits.map((fruit)=>
            {
                return <li key={fruit}>{fruit}</li>
            })}
        </ul>
        <p style={{color:'green',fontFamily: 'Arial, sans-serif', fontWeight: 'bold',fontSize:'24px'}}>This is a syled message using inline css.</p>
        <p>Sum of squares of {a} and {b} is {sum}</p>
        <p>{greeting}</p>
        <p>Today is: <strong>{currentday}</strong></p>
        <p>The number <strong>{num} </strong>{isPrime}</p>
        <TemperatureConverter />
        <ReverseString />
        <RandomNumber />
        <LeapYearChecker />
        <UserGreeting firstName="Menmangai" lastName="M" />
        </>
    );
}

export default List;
