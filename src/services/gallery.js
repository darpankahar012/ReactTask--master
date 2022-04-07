import axios from "axios";
import {
    createUser,
    createUserSuccess,
    createUserError,
} from "../store/actions";

export class imageService {

    static imageList = (data) => {
        return (dispatch) => {
            dispatch(createUser());
            axios.post(`${process.env.REACT_APP_API_URL}public/v2/users`,
                data,
                {
                    headers: {
                        "content-Type": "application/json",
                        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
                    },
                })
                .then((response) => {
                    if (response.status === 201) {
                        dispatch(createUserSuccess(true));
                    } else {
                        dispatch(createUserError("User Not Created !"));
                    }
                })
                .catch((error) => {
                    if (error.response.staus === 422) {
                        dispatch(createUserError(error.response.data[0].message));
                    } else {
                        dispatch(createUserError("User Not Created !"));
                    }
                });
        };
    };
}
