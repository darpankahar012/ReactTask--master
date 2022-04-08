import axios from "axios";
import {
    getAllImage,
    getAllImageSuccess,
    getAllImageError,
} from "../store/actions";

export class imageService {
    static imageList = () => {
        return (dispatch) => {
            dispatch(getAllImage());
            axios.get(`${process.env.REACT_APP_API_URL}/photos`)
                .then((response) => {
                    if (response.data) {
                        dispatch(getAllImageSuccess(response.data));
                    }
                })
                .catch((error) => {
                    dispatch(getAllImageError(error));
                });
        };
    };
}
