import './featured.scss';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import React, { useEffect ,useState} from 'react'
import axios from 'axios';

const Featured = ({type,setGenre}) => {
    const [content, setContent] = useState({});

    useEffect(() => {
      const getRandomContent = async () => {
        try{
            const res = await axios.get(
                `/movies/random?type=${type}`,
                {
                    headers:{
                      token: 
                      "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
                      },
                  });
            setContent(res.data[0]);
            //console.log(res.data[1]);
        }catch(err){
        console.log(err);
      }
      };
      return () => {
        getRandomContent();
      }
    }, [type])
    
  return (
    <div className='featured'>
        { type && (
            <div className='category'>
                <span>{type === 'movie'? 'Movies' : 'Series'}</span>
                <select name='genre' id='genre'
                onChange={(e) => setGenre(e.target.value)}>
                    <option>Genre</option>
                    <option>Action</option>
                    <option>Comedy</option>
                    <option>Drama</option>
                    <option>Rom-Com</option>
                    <option>Thriller</option>
                    <option>Romance</option>
                    <option>Horror</option>
                </select>
            </div>
        )}
        <img src={content.img}
        alt=""
        />
        <div className='info'>
        <span className='desc'>
        {content.desc}
        </span>
        <div className='buttons'>
            <button className='play'>
                <PlayArrowOutlinedIcon/>
                <span>Play</span>
            </button>
            <button className='more'>
               <InfoOutlinedIcon/>
               <span>Info</span>
            </button>
            </div>
        </div>
    </div>
  )
}

export default Featured;
