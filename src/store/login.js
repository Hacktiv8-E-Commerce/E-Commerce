import axios from 'axios'
import { toast } from 'react-toastify';

export const logincheck = (username, password, redirect, status, loading) => {
    return async (dispatch) => {
        const resolveAfter3Sec = new Promise(function (resolve, reject) {
            axios.post('https://fakestoreapi.com/auth/login', {
                username: username !== "" ? username : " ",
                password: password !== "" ? password : " "
            })
                .then(res => {
                    axios.get('https://fakestoreapi.com/users')
                        .then(data => {
                            let filter = data.data.filter(x => x.username === username)
                            loading()
                            if (res.data.token) {
                                localStorage.setItem('login', JSON.stringify({ user: `${filter[0].name.firstname} ${filter[0].name.lastname}`, token: res.data.token, login: true, id: filter[0].id }));
                                dispatch({
                                    type: "SET_LOGIN",
                                    payload: { user: `${filter[0].name.firstname} ${filter[0].name.lastname}`, token: res.data.token, login: true, id: filter[0].id }
                                })
                                redirect(status)
                                return resolve()
                            } else {
                                return reject()
                            }
                        })
                })
                .catch(function (error) {
                    console.log(error);
                })
        })
        toast.promise(
            resolveAfter3Sec,
            {
                pending: 'Checking User...',
                success: 'Login Successful',
                error: 'username or password is incorrect'
            }
        )
    }
}
