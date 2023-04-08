import Styled from 'styled-components'
// import Image from '../images/creative/about-bg.jpg'

export const CreativeSection = Styled.div`
height: 85vh;
background: url(../images/creative/about-bg.jpg);
background-size: cover;
background-position: center;
background-attachment: fixed
@media (max-width:991px) {
    height: auto
  }
`

export const CreativeInfo = Styled.div`
padding-top: 100px;
width: 50%;
float: right;
@media (max-width:991px) {
    width: 100%;
    padding-top: 10px;
    float: none
  }
`

export const InfoTitle = Styled.h2`
font-weight: bold;
font-size: 50px
`

export const Span = Styled.span`
font-weight: normal
`

export const InfoDir = Styled.h4`
font-size: 40px;
color: #eb5424;
margin-bottom: 20px
@media (max-width:991px) {
    font-size: 30px
  }
`

export const InfoDesc = Styled.p`
color: #000;
margin-bottom: 15px;
line-height: 1.8
`

export const Anchor = Styled.a`
text-decoration: none
`
