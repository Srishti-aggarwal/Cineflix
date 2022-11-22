import {React,useState,useEffect} from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import './listitem.scss';
import { Link } from 'react-router-dom';
import Watch from '../../pages/watch/Watch';

function ListItem({item,index}) {
  const [isHovered,setIsHovered] = useState(false);
  const [movie,setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try{
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
       
        setMovie(res.data);
      } catch(err){
        console.log(err);
      }
    };
    getMovie()
  },[item]);

  //console.log(movie);

  return (
    <Link to='/watch' state={movie} >
    <div 
    className='listItem'
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >

      <img src={movie.img} alt=""  />
        { isHovered && (
        <>
        <video src={movie.trailer} autoPlay muted={false} loop style={{left:index*225+15*index+50}} />

       <div className='itemInfo'>
       <div className='icons'>
         <PlayArrowIcon className='icon'/>
         <AddIcon className='icon'/>
         <ThumbUpIcon className='icon'/>
         <ThumbDownIcon className='icon'/>
       </div>
       <div className='itemInfoTop'>
       <span>{movie.duration}</span>
       <span className='limit'>+{movie.limit}</span>
       <span>{movie.year}</span>
       </div>
       <div className='desc'>
        {movie.desc}
       </div>
       <div className='genre'>{movie.genre}</div>
     </div>
    </>
        )}
    </div>
    </Link>
  );
}

export default ListItem;
