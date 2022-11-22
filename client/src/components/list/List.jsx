import React from 'react'
import './List.scss';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListItem from './ListItem';
import {useRef,useState} from 'react'


function List({list}) {
  const [isMoved,setIsmoved] = useState(false);
  const [slideNumber,setslideNumber] = useState(0);

  const listRef = useRef();

  const handleClick = (direction) =>{
    setIsmoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50

    if(direction === "left" && slideNumber>0){
      setslideNumber(slideNumber-1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }

    if(direction === "right" && slideNumber<5){
      setslideNumber(slideNumber+1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  }
  return (
    <div className='list'>
        <span className='listTitle'>{list.title}</span>
        <div className='wrapper'>
          <ArrowBackIosIcon className='sliderArrow left' onClick={()=>handleClick("left")}
          style={{display: !isMoved && "none"}} />
          <div className='container' ref={listRef}>
            {
            list.content.map((item,i)=>(
              <ListItem index={i} item={item} key={i} />
            ))
            }
          </div>
          <ArrowForwardIosIcon className='sliderArrow right' onClick={()=>handleClick("right")}/>
        </div>
    </div>
  )
}

export default List