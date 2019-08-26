import React from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

const Card = props => {
  return (
    <article className="card" onClick={() => props.handleOnViewClick(props.index)}>
      <CardHeader category={props.details.chefName} image={props.details.imageUrl} />
      <CardBody title={props.details.title} text={props.details.description} isDetails={false}/>
    </article>
  );
};

export default React.memo(Card);
