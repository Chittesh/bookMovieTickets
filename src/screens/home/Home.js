import React from 'react';
import './Home.css';
const Home = function (props) {
    return (
            <div className="home">
                <h2 >
                    {props.headerValue}
                </h2>
            </div>
    )
}

export default Home;
