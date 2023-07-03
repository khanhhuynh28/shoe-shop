import React from 'react';
import './NotFound.css'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='container__notFound'>
            <div className='mid'>
                <h2 className='main-text'> we couldt find the page youe looking for.</h2>
                <br />
                <p className='text'>Go back to <Link to="/">Home Page</Link></p>
            </div>
            <div>
                <img className='imgerror' src="" alt="404" />
            </div>
        </div>
    )
}
export default NotFound;