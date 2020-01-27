import {
  FETCHING_CLUB,
  FETCH_CLUB_SUCCESS,
  FETCH_CLUB_FAILURE,
} from '../actions/actionsTypes';

const DEFAULT_STATE = { isLoading: false, clubs: [], error: null };

const clubReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case FETCHING_CLUB:
      return {
        ...DEFAULT_STATE,
        isLoading: true,
      };
    case FETCH_CLUB_SUCCESS:
      return {
        ...DEFAULT_STATE,
        clubs: payload,
      };
    case FETCH_CLUB_FAILURE:
      return { ...DEFAULT_STATE, error: payload };

    default:
      return DEFAULT_STATE;
  }
};

export default clubReducer;
