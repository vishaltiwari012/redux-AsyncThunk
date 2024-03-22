import React from 'react'
import { useSelector } from 'react-redux'
import './CustomModal.css';

const CustomModal = ({id, setShowPopup}) => {

    const allUsers = useSelector((state) => state.app.users);

    const singleUser = allUsers.filter((elem) => elem.id === id);


  return (
    <div className='modalBackground'>
      <div className="modalContainer">
        <button onClick={()=> setShowPopup(false)}>Close</button>
        <h2>Name : {singleUser[0].name}</h2>
        <h3>Email : {singleUser[0].email}</h3>
        <h4>Age : {singleUser[0].age}</h4>
        <h5>Gender : {singleUser[0].gender}</h5>
    </div>
    </div>
  )
}

export default CustomModal;
