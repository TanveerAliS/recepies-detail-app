import React from "react";
import Title from "../components/Title";
import CardDetails from "../components/CardDetails";

const RecipeDetails = props => {
    const {
        location: {
            state: {
                recipeDetails
            }
        }
    } = props;
    return (
        <div>
            <Title />
            <div className="app-card-list">
                <CardDetails details={recipeDetails} handleBack={props.redirectToHome} />
            </div>
        </div>
    );
};

export default RecipeDetails;
