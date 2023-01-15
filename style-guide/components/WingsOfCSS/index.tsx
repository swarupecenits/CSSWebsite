import React from 'react';
import  Style from '../../page-component/WingsOfCSS/wings.module.css';
interface Wing { 
  wingName:string, 
  description:string, 
  tooltipName:string 
} 
const WingCard = ({wingName,description,tooltipName}:Wing) => {
  return (
    <div className={Style.wing_card}>
        <h2 className={Style.h2}>{wingName}</h2>
        <p>{description}</p>
        <span className={Style.span}>{tooltipName}</span>
    </div>
  )
}

export default WingCard;