import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { PortfolioSectoin, PortfolioTitle, Span, PortfolioList, PortfolioItem, ImageWrapper, Image, Overlay, OverlaySpan } from './style'

const Portfolio = () => {
  const [images, setImages] = useState([])
  useEffect(() => {
    axios.get('js/data.json').then((res) => { setImages(res.data.portfolio) })
  }, [])
  const imagesList = images.map((img) => {
    return (
      <ImageWrapper key={img.id}>
        <Image src={img.image} alt='' />
        <Overlay>
          <OverlaySpan>
            Show Image
          </OverlaySpan>
        </Overlay>
      </ImageWrapper>
    )
  })
  return (
    <PortfolioSectoin>
      <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
      <PortfolioList>
        <PortfolioItem active>All</PortfolioItem>
        <PortfolioItem>HTML</PortfolioItem>
        <PortfolioItem>Photoshop</PortfolioItem>
        <PortfolioItem>Wordpress</PortfolioItem>
        <PortfolioItem>Mobile</PortfolioItem>
      </PortfolioList>
      <div className="box">
        {imagesList}
      </div>
    </PortfolioSectoin>
  );
}

export default Portfolio;
