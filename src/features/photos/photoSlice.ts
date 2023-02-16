import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Photo, PHOTO_API_URL } from "../../types";
import { PhotosState } from "../actionTypes";
import { AppDispatch } from "../store";

const initialState: PhotosState = {
    photos: [],
    loading: false,
    error: null,
}

export const photoSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {

        setLoading: (state, { payload }: PayloadAction<boolean>) => {
            state.loading = payload;
        },

        setLoadSuccess: (state, { payload }: PayloadAction<Photo[]>) => {
            state.loading = false;
            state.photos = payload;
        },

        setLoadFailed: (state, { payload }: PayloadAction<string>) => {
            state.loading = false;
            state.error = payload;
        },
    }
});

export const { setLoading, setLoadSuccess, setLoadFailed } = photoSlice.actions;
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



// export const photosReducer = (state: PhotosState = initialState, action: Action) => {
//     switch (action.type) {

//         case ActionType.GET_PHOTOS_PENDING:
//             return {
//                 ...state,
//                 loading: true,
//             };
//             break;

//         case ActionType.GET_PHOTOS_SUCCESS:
//             return {
//                 ...state,
//                 loading: false,
//                 photos: action.payload,
//             };
//             break;

//         default:
//             return state;
//     }
// }