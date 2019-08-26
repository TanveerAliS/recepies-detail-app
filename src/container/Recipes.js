import React, { useEffect } from "react";
import Title from "../components/Title";
import Card from "../components/Card";
import { bindActionCreators } from 'redux';
import { fetchAction, Actions } from '../actions';
import { connect } from 'react-redux';
import { urlBuilder } from '../utils';

const RecipeContainer = props => {
    useEffect(() => {
        const { actions } = props;
        actions.fetchAction(Actions.COMPONENT_INIT, {});
    }, [])

    const viewRecipeDetailRouter = recipeID => {
        const { history, recipes } = props;
        history.push({
            pathname: `/recipe-detail/${urlBuilder(recipes[recipeID].title)}`,
            state: { recipeDetails: recipes[recipeID] }
        });
    };

    return (
        <div>
            <Title />
            <div className="app-card-list">
                {!props.isLoading ? props.recipes.map((recipe, key) => (
                    <Card key={key} index={key} details={recipe} handleOnViewClick={viewRecipeDetailRouter}/>
                )) :
                 <div className="loading"><div></div><div></div><div></div><div></div></div>
                }
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ fetchAction }, dispatch)
});

export default (connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeContainer));