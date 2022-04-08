import { imageActionTypes } from "../constants"

const initialState = {
    loading: false,
    imageList: [],
    imageListError: "",
}

export const image = (state = initialState, action) => {
    switch (action.type) {
        case imageActionTypes.GET_ALL_IMAGE:
            return {
                ...state,
                loading: true
            }
        case imageActionTypes.GET_ALL_IMAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                imageList: action.payload,
                imageListError: ""
            }
        case imageActionTypes.GET_ALL_IMAGE_ERROR:
            return {
                ...state,
                loading: false,
                imageListError: action.payload
            }
        case imageActionTypes.RESET:
            return {
                ...state,
                imageList: [],
                imageListError: "",
            }
        default:
            return state
    }
}