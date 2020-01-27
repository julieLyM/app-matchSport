import {
  FETCHING_CLUB,
  FETCH_CLUB_FAILURE,
  FETCH_CLUB_SUCCESS,
} from './actionsTypes';

import { getClubs } from '../service/clubService';

export const getClub = () => async dispatch => {
  try {
    dispatch({ type: FETCHING_CLUB });

    const clubs = await getClubs();
    dispatch({
      type: FETCH_CLUB_SUCCESS,
      payload: clubs,
    });
  } catch (e) {
    dispatch({
      type: FETCH_CLUB_FAILURE,
      payload: e,
    });
  }
};
