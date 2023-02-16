import axios from 'axios';
import { Dispatch } from 'redux';
import { PHOTO_API_URL } from '../../types';
import { Action, ActionType } from '../actionTypes';

export const getPhotos = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.GET_PHOTOS_PENDING
        });

        try {
            const { data } = await axios.get(PHOTO_API_URL);

            console.log(data);

            dispatch({
                type: ActionType.GET_PHOTOS_SUCCESS,
                payload: data
            });
        }
        catch (err: unknown) {
            dispatch({
                type: ActionType.GET_PHOTOS_FAIL,
                payload: err instanceof (Error) ? err.message : 'Unknown error',
            });
        }

    };
}