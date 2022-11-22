import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './watch.scss'
import { Link, useLocation } from 'react-router-dom';

function Watch() {
  const location=useLocation();
  const movie = location.state;

  return (

    <div className='watch'>
    <Link to='/'>
    <div className='back'>
        <ArrowBackIcon />
        Home
    </div>
    <video className='video' autoPlay muted={false} controls src={movie.video} />
    </Link>
    </div>

  )
}

export default Watch