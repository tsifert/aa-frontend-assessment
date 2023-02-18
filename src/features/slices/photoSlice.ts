import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Photo, PhotosState, PHOTO_API_URL } from '../../types/types';
import { AppDispatch } from '../store/store';

const initialState: PhotosState = {
    photos: [],
    selectedId: null,
    loading: false,
    error: null,
}

export const photoSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {

        setLoading: (state, {
            payload }: PayloadAction<boolean>) => {
            state.loading = payload;
        },

        setSelectedPhoto: (state, {
            payload }: PayloadAction<string>) => {
            state.selectedId = payload;
        },

        setLoadSuccess: (state, {
            payload }: PayloadAction<Photo[]>) => {
            state.loading = false;
            state.photos = payload;
        },

        setLoadFailed: (state, {
            payload }: PayloadAction<string>) => {
            state.loading = false;
            state.error = payload;
        },

        toggleFavoritePhoto: (state, {
            payload }: PayloadAction<string>) => {

            const photo = state.photos.find((photo) => photo.id === payload);
            if (photo) {
                photo.favorited = !photo.favorited;
            }
        },

        deletePhoto: (state, {
            payload }: PayloadAction<string>) => {

            state.selectedId = null;
            state.photos = state.photos.filter((photo) => photo.id !== payload);
        }
    }
});

export const { setLoading, setSelectedPhoto, setLoadSuccess, setLoadFailed, toggleFavoritePhoto, deletePhoto } = photoSlice.actions;
export default photoSlice.reducer;

export const photoSelector = (state: {
    photoStore: PhotosState
}) => state.photoStore;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const getPhotos = () => {
    return async (dispatch: Dispatch) => {
        dispatch(setLoading(true));

        try {
            const data = await axios.get(PHOTO_API_URL);
            console.log(data);
            dispatch(setLoadSuccess(data.data));
        }
        catch (error: unknown) {
            dispatch(
                setLoadFailed(
                    error instanceof Error ? error.message : 'Unknown error')
            );
        }
    };
};

export const setSelectedPhotoId = (photoId: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(setSelectedPhoto(photoId));
    };
};

export const toggleFavoritePhotoId = (photoId: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(toggleFavoritePhoto(photoId));
    };
};

export const deletePhotoId = (photoId: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(deletePhoto(photoId));
    };
};