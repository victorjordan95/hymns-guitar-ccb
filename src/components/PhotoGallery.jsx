import React, { useState } from 'react'
import Select from 'react-select'

import hymnsList from '../utils/hymnsList'
import styled from 'styled-components';

const HymnContainer = styled.section`
  .hymn-select {
    margin: 24px 24px 0 ;
  }
  img { 
    width: 100vw;
  }
`;


const PhotoGallery = () => {

  const [hymn, setHymn] = useState(1);
  
  const getHymnPath = () => {
    if (hymn === 481) return `${process.env.PUBLIC_URL}/assets/img/Coro01.png`
    if (hymn === 482) return `${process.env.PUBLIC_URL}/assets/img/Coro02.png`
    if (hymn === 483) return `${process.env.PUBLIC_URL}/assets/img/Coro03.png`
    let fixedNumber;
    const hymnCorrect = hymn + 2;
    if (hymnCorrect <= 9) {
      fixedNumber = `00${hymnCorrect}` 
    } else if(hymn > 9 && hymnCorrect <= 99) {
      fixedNumber = `0${hymnCorrect}` 
    } else {
      fixedNumber = hymnCorrect 
    }
    return `${process.env.PUBLIC_URL}/assets/img/HinárioCifrado-Completo-${fixedNumber}.png`
  }

  return (
    <HymnContainer>
      <Select options={hymnsList} className="hymn-select" placeholder="Procure um hino" onChange={(e) => setHymn(e.value)}/>
      <img className="img-fluid" 
      src={getHymnPath()} 
      alt="logo"/>
    </HymnContainer>
  )
}

export default PhotoGallery;