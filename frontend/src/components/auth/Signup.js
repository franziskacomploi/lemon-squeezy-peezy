import React, {useState} from 'react';
import {useContext} from 'react';
import {useHistory} from 'react-router';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';
const backendURL = process.env.REACT_APP_BACKENDURL;

const SignUp = () => {
  const {setCurrentUser} = useContext(AuthContext);
  const [isEmail, setIsEmail] = useState('');
  const [isPassword, setIsPassword] = useState('');
  const [isConfirmPassword, setIsConfirmPassword] = useState('');
  const [isName, setIsName] = useState('');
  const [isDescription, setIsDescription] = useState('');
  const [isImg, setIsImg] = useState();
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isPassword !== isConfirmPassword) {
      return setError('Passwords do not match.');
    }

    const uploadData = new FormData();
    uploadData.append('profileImg', isImg);
    setIsImg(uploadData);

    axios
      .post(`${backendURL}/api/signup`, {
        email: isEmail,
        name: isName,
        password: isPassword,
        profileImg: uploadData,
        description: isDescription,
      })
      .then((user) => {
        setCurrentUser(user);
        history.push('/dashboard');
      })
      .catch((error) => {
        setError('Failed to create an account.');
        console.log(error.code, error.message);
      });
  };

  return (
    <>
      {error && (
        <div className="p-2 bg-melon text-white">
          Error while trying to sign up. {error}
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mt-10 mx-auto"
        enctype="multipart/form-data"
      >
        <label className="authLabel">Email*</label>
        <input
          className="authInput"
          onChange={(e) => {
            setIsEmail(e.target.value);
          }}
          type="email"
        />

        <label className="authLabel">Name</label>
        <input
          className="authInput"
          onChange={(e) => {
            setIsName(e.target.value);
          }}
          type="text"
        />

        <label className="authLabel">Password*</label>
        <input
          className="authInput"
          onChange={(e) => {
            setIsPassword(e.target.value);
          }}
          type="password"
        />

        <label className="authLabel">Confirm Password*</label>
        <input
          className="authInput"
          onChange={(e) => {
            setIsConfirmPassword(e.target.value);
          }}
          type="password"
        />

        <label className="authLabel">Upload a profile image</label>
        <input
          className="authInput"
          onChange={(e) => {
            setIsImg(e.target.files[0]);
          }}
          type="file"
        />

        <label className="authLabel">Add your description</label>
        <input
          className="authInput"
          onChange={(e) => {
            setIsDescription(e.target.value);
          }}
          type="text"
        />

        <button className="brandButton my-4" type="submit">
          Sign Up
        </button>
      </form>
      <div className="text-center mb-20">*These fields are required.</div>
    </>
  );
};

export default SignUp;
