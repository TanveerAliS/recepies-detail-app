import React from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

const CardDetails = props => {
  return (
    <article className="card-details">
      <CardHeader category={props.details.chefName} image={props.details.imageUrl} />
      <CardBody title={props.details.title} text={props.details.description} isDetails={true} handleBack={props.handleBack} tags={props.details.tags}/>
    </article>
  );
};

export default React.memo(CardDetails);
