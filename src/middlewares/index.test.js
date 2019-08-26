// Externals
import React from 'react';
import configureMockStore from 'redux-mock-store';

// Internals
import { Actions, fetchAction } from '../actions';
import middlewares, { storeRecipeData } from './index';
import { API_TYPE } from '../constants';

describe('Test Suite for middlewares', () => {
  let store;
  const mockStore = configureMockStore([middlewares]);

  beforeEach(() => {
    store = mockStore();
  });

  it('Should raise action to middleware', () => {
    store.dispatch(fetchAction(Actions.COMPONENT_INIT));
    expect(store.getActions()[0].type).toEqual(Actions.COMPONENT_INIT);
  });

  it('Should raise action to reducer to store recipe data', async () => {
    await storeRecipeData(store);
    expect(store.getActions()[0].type).toEqual(
      Actions.FETCH_RECIPE_DATA_SUCCESS
    );
  });
  it('Should raise action to reducer to store tags data', async () => {
    await storeRecipeData(store);
    expect(store.getActions()[0].type).toEqual(
      Actions.FETCH_RECIPE_DATA_SUCCESS
    );
  });
  it('Should raise action to reducer to store chef data', async () => {
    await storeRecipeData(store, API_TYPE.CHEF);
    expect(store.getActions()[0].type).toEqual(
      Actions.FETCH_RECIPE_DATA_SUCCESS
    );
  });
});
