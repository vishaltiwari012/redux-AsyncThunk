import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchUser } from '../features/userDetailSlice';

const Navbar = () => {

    const allUsers = useSelector((state) => state.app.users);
    const dispatch = useDispatch();

    const [searchData, setSearchData] = useState("");
    useEffect(() => {
        dispatch(searchUser(searchData));
    }, [searchData])

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <a className="navbar-brand"><b>CRUD</b></a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Create Post</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/read"  className="nav-link">All Post ({allUsers.length})</Link>
                            </li>
                        </ul>
                <input className="form-control me-2 w-50" type="search" placeholder="Search" aria-label="Search" value={searchData} onChange={(e) => setSearchData(e.target.value)} />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
