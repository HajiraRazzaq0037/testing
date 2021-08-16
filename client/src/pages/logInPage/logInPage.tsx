import React, {useState, useContext} from 'react'
import firebase from '../../firebase'
import {Link} from 'react-router-dom';
import {GlobalContext} from '../../context/GlobalState'
type User = {
    email: string | '';
    password: string | '';
}
export default ({history}: any) => {
    const [user, setUser] = useState<User | any>(null);
    const [error, setError] = useState('');
    const {state}:any = useContext(GlobalContext);
    const loginHandler = (e: any) => {
        e.preventDefault();
        if (user === null) {
            setError("email and password are required fields");
        }
        else {
            if (user && (!user.email || !user.password)) {
                if (!user.email) {
                    setError("email is required fields");
                }
                if (!user.password) {
                    setError("password is required fields");
                }
            }
            else {
                firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                    .then(() => {
                        firebase.auth().onAuthStateChanged(() => {
                            state.loader = false;
                            history.push('/')
                        });
                    })
                    .catch((err) => {
                        setError(err.message);
                    })
            }

        }
    }
    return (
        <div className="bg-gray-200">
            <div className="py-20">
                <div className="mt-8">
                    <h1 className="text-3xl mb-2 text-center font-bold">Sign In</h1>
                    <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
                        <form onSubmit={(e) => {
                            loginHandler(e)
                        }}>
                            <label htmlFor="userEmail" className="block">Email:</label>
                            <input
                                type="email"
                                className="my-1 p-1 w-full outline-none border"
                                name="userEmail"
                                placeholder="E.g: hajira@gmail.com"
                                value={user && user.email ? user.email : ""}
                                onChange={
                                    (e) => {
                                        setError("");
                                        let dub = {...user}
                                        dub.email = e.target.value;
                                        setUser(dub);
                                    }
                                }
                            />

                            <label htmlFor="userPassword" className="block">
                                Password:
                            </label>
                            <input
                                type="password"
                                className="mt-1 mb-3 p-1 w-full outline-none border"
                                name="userPassword"
                                value={user && user.password ? user.password : ""}
                                placeholder="Your Password"
                                id="userPassword"
                                onChange={
                                    (e) => {
                                        setError("");
                                        let dub = {...user}
                                        dub.password = e.target.value;
                                        setUser(dub);
                                    }
                                }

                            />
                            <p className="p-2 text-color-orange cursor-pointer font-sans text-base font-semibold not-italic text-center">
                                {error ? error : " "}
                            </p>
                            <button className="bg-green-400 hover:bg-green-500 w-full py-2 text-white" type="submit">
                                Sign in
                            </button>
                        </form>

                        <p className="text-center my-3">Don't have an account {" "}
                            <Link to="/sign-up" className="text-blue-500 hover:text-blue-600">
                                Sign up here
                            </Link>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}