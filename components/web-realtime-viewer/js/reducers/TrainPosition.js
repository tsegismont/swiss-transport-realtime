'use strict';
import ActionTypes from '../constants/ActionTypes';

let defaultState = {
  positions: [],
  count:0
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.TRAIN_POSITION_RECEIVED:
      console.log('GOTCH ACTION', ActionTypes.TRAIN_POSITION_RECEIVED, action.data.trainCount);
      console.log('ACTION #trains', action.data.trainCount)
      return {...state, positions: action.data.trainPositions, count:action.data.trainCount};
    default:
      return state;
  }
}
