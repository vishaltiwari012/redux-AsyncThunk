import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../features/userDetailSlice';

const Create = () => {


    const [users, setUsers] = useState({});

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getUserData = (e) => {
        setUsers({...users, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("users...", users);
        dispatch(createUser(users));
        navigate("/read");
    }

    return (
        <div>
            <h2 className='my-2'>Fill the data</h2>
            <form className='w-50 mx-auto my-5' onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="enter name"
                        className="form-control"
                        onChange={getUserData}
                        required
                    />
                </div>
                <div className='mb-3'>
                <label className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="enter email"
                        className="form-control" 
                        onChange={getUserData}
                        required
                    />
                </div>
                <div className='mb-3'>
                <label className="form-label">Age</label>
                    <input
                        type="number"
                        name="age"
                        placeholder="enter age"
                        className="form-control"
                        onChange={getUserData}
                        required
                    />
                </div>
                <div className='mb-3'>
                    <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        value="Male"
                        onChange={getUserData}
                        required
                    />
                    <label className="form-check-label">Male</label>
                    <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        value="Female"
                        onChange={getUserData}
                        
                    />
                    <label className="form-check-label">Female</label>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Create;
