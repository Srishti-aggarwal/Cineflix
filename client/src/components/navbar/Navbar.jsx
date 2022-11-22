import React,{useState,useContext} from 'react'
import './navbar.scss'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../authContext/AuthContext';
import { logout } from '../../authContext/AuthActions';

const Navbar = () => {
    const [isScrolled,setIsScrolled]=useState(false);
    const { dispatch } = useContext(AuthContext);

    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
  return (
    <div className={ isScrolled ? 'navbar scrolled':'navbar'}>
        <div className='container'>
            <div className='left'>
                <img src="https://cineflix-filmes.online/wp-content/uploads/2021/08/CINEFLIX-removebg-preview.png"
                 alt=""
                 />
                 <Link to="/" className='link'>
                 <span>Homepage</span>
                 </Link>
                 <Link to="/series" className='link'>
                 <span>Series</span>
                 </Link>
                 <Link to="/movies" className='link'  >
                 <span>Movie</span>
                 </Link>
                 <span>New and Popular</span>
                 <span>My List</span>
            </div>
            <div className='right'>
                <SearchIcon className='Icon' />
                <span>KID</span>
                <NotificationsIcon className='Icon' />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Young_girl_smiling_in_sunshine_%282%29.jpg/330px-Young_girl_smiling_in_sunshine_%282%29.jpg"
                alt="" />
                <div className='profile'>
                <ArrowDropDownIcon className='Icon' />
                <div className='options'>
                    <span>Settings</span>
                    <span onClick={() => dispatch(logout())}>Logout</span>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar