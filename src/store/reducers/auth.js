import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  token: null,
  userIs: null,
  error: null,
  loading: false,
  placeId: null,
};

const authStart = (state) => {
  return updateObject(state, {
    error: null,
    loading: true,
  })
}

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.idToken,
    userId: action.userId,
    error: null,
    loading: false,
  })
}

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}

const authLogout = (state) => {
  return updateObject(state, {token: null, userId: null});
}

const updatePlaceId = (state, action) => {
  return updateObject(state, {placeId: action.placeId});
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START: return authStart(state, action);
    case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
    case actionTypes.AUTH_FAIL: return authFail(state, action);
    case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
    case actionTypes.UPDATE_PLACE_ID: return updatePlaceId(state, action);
    default: return state;
  }
};

export default reducer;