import React from 'react';

const CardBox = (props) => {
  return(
    <div className="card-body">
      {props.children}
    </div>
  )
}

const Image = (props) => {
  return(
    <img src={props.image} alt="Logo" className="picture">
    </img>
  )
}

const Name = (props) => {
  return(
    <div className="name">
      {props.name}
    </div>
  )
}

const Details = (props) => {
  return(
    <div className="details">
      {props.details}
    </div>
  )
}

const Star = ({ selected=false, onClick=f=>f }) =>
 <div className={(selected) ? "star selected" : "star"}
      onClick={onClick}>
 </div>

const Card = (props) => {
  return(
    <CardBox>
      <div className="inner-body">
        <Image image={props.image}/>
        <div className="body">
          <div className="inner-body">
            <Name name={props.name}/>
          </div>
          <Details details={props.details}/>
          <div className="inner-body">
          {[...Array(5)].map((n, i) =>
            <Star key={i}
                  selected={i<props.starsSelected}
                  onClick={() => props.change(props.id, i+1)}
          />)}
          </div>
        </div>
      </div>
    </CardBox>
  )
}

export { Card }