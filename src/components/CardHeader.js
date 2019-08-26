import React from "react";

const CardHeader = props => {
  const { image, category } = props;
  var style = {
    backgroundImage: "url(http:" + image + ")"
  };
  return (
    <header style={style} className="card-header">
      { category && <h4 className="card-header--title"><span>{category}</span></h4> }
    </header>
  );
};

export default React.memo(CardHeader);
