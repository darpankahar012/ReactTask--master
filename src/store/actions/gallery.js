import { imageActionTypes } from "../constants"

export const getAllUser = () => {
    return {
        type: imageActionTypes.GET_ALL_IMAGE,
    }
}

export const getAllUserSuccess = (data) => {
    return {
        type: imageActionTypes.GET_ALL_IMAGE_SUCCESS,
        payload: data
    }
}

export const getAllUserError = (error) => {
    return {
        type: imageActionTypes.GET_ALL_IMAGE_ERROR,
        payload: error
    }
}



export const resetState = () => {
    return {
        type: imageActionTypes.RESET,
    }
}