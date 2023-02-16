import { Photo } from '../../types';

export interface PhotosState {
    photos: Photo[];
    loading: boolean;
    error: string | null;
}

export enum ActionType {
    GET_PHOTOS_PENDING = 'GET_PHOTOS_PENDING',
    GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS',
    GET_PHOTOS_FAIL = 'GET_PHOTOS_FAIL',
}

export interface ActionPending {
    type: ActionType.GET_PHOTOS_PENDING;
}

export interface ActionSuccess {
    type: ActionType.GET_PHOTOS_SUCCESS;
    payload: Photo[];
}

export interface ActionFail {
    type: ActionType.GET_PHOTOS_FAIL;
    payload: string;
}


export type Action = ActionPending | ActionSuccess | ActionFail;
