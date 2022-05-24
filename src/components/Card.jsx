import React from 'react'
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
 
function Card(props) {

    const image = process.env.PUBLIC_URL+`/img/${props.coverImg}`;
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
  return (
    <CardStyle>
        {badgeText && <div className="badge">{badgeText}</div>}
        <img src={image} alt=""/>
        <p><FaStar color="#FE395C" style={{
            marginRight: '5px'
        }}/>{props.stats.rating} <span id="country">({props.stats.reviewCount}) {props.location}</span></p>
        <p>{props.title}</p>
        <p><span id="price">From ${props.price}</span> / person</p>
        
    </CardStyle>
  )
}

const CardStyle = styled.div`
    position: relative;
    font-size: 16px;
    img {
        width: 250px;
        height: 350px;
        border-radius: 9px;
    }

    p {
        margin-top: 4px;
    }

    #country {
        color: #918E9B;
    }

    #price {
        font-weight: 600;
    }

    .badge {
        position: absolute;
        top: 6px;
        left: 6px;
        background-color: white;
        padding: 5px 7px;
        border-radius: 2px;
        font-weight: bold;
    }

`

export default Card