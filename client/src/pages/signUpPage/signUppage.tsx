import React, { useState ,useContext} from 'react'
import {Link} from 'react-router-dom';
import firebase from '../../firebase';
import {GlobalContext} from '../../context/GlobalState'
type User = {
  email: string | '';
  password: string | '';
  name: string | '';
}

const SignUpPage = ({history}:any) => {
    const {state}:any = useContext(GlobalContext);
  const [user, setUser] = useState<User | any>(null);
  const [error, setError] = useState('');
  const signupHandler = (event: any) => {
    event.preventDefault();
    if (user === null) {
      setError("name,email and password  are required fields");
    }
    else {
      if (user && (!user.name || !user.email || !user.password)) {
        if (!user.name) {
          setError("name is required fields");
        }
        if (!user.email) {
          setError("email is required fields");
        }
        if (!user.password) {
          setError("password is required fields");
        }
      }
      else {
        setError("");
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
          .then((data:any) => {
            let uid = data && data.user && data.user.uid;
            let userObj = {
              fullName: user.name,
              email: user.email,
              uid
            };
            firebase.firestore().collection('users')
              .doc(uid ? uid : "")
              .set(userObj);
              state.loader = false;
               history.push('/')
             }).catch(function (error) {
            setError(error.message)
          });
      }
    }
  }

  return (
    <div className="mt-8">
      <h1 className="text-3xl mb-2 text-center font-bold">Sign Up</h1>
      <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">

        <form className=" " onSubmit={(e) => {
          signupHandler(e)
        }}>
          <label htmlFor="displayName" className="block">
            Display Name:
          </label>
          <input type="text" className="my-1 p-1 w-full outline-none border " name="displayName" placeholder="E.g: Username" value={user?.name}
            onChange={
              (e) => {
                setError("")
                let dub = { ...user }
                dub.name = e.target.value
                setUser(dub);
              }
            }
          />
          <label htmlFor="userEmail" className="block">
            Email:
          </label>
          <input type="email" className="my-1 p-1 w-full border outline-none" name="userEmail" placeholder="E.g: test@gmail.com"
            id="userEmail"
            value={user?.email}
            onChange={(e) => {
              setError("")
              let dub = { ...user }
              dub.email = e.target.value
              setUser(dub);
            }} />
          <label htmlFor="userPassword" className="block">
            Password:
          </label>
          <input
            type="password"
            className="mt-1 mb-3 p-1 w-full outline-none border"
            name="userPassword"

            placeholder="Your Password"
            id="userPassword"
            value={user?.password}
            onChange={
              (e) => {
                setError("")
                let dub = { ...user }
                dub.password = e.target.value
                setUser(dub);
              }} />
          <p className="p-2 text-color-orange cursor-pointer font-sans text-base font-semibold not-italic text-center">
            {error ? error : " "}
          </p>
          <button
            className="bg-green-400 hover:bg-green-500 w-full py-2 text-white " type="submit" >
            Sign up
          </button>
        </form> 
        <p className="text-center my-3">
         I have  account?{" "}
          <Link to="/" className="text-blue-500 hover:text-blue-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;