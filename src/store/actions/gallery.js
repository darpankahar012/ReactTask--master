import { imageActionTypes } from "../constants"

export const getAllImage = () => {
    return {
        type: imageActionTypes.GET_ALL_IMAGE,
    }
}

export const getAllImageSuccess = (data) => {
    return {
        type: imageActionTypes.GET_ALL_IMAGE_SUCCESS,
        payload: data
    }
}

export const getAllImageError = (error) => {
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