import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, showUser } from '../features/userDetailSlice';
import CustomModal from './CustomModal';
import { Link } from 'react-router-dom';

const Read = () => {

  const {users, loading, searchData} = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const [radioData, setRadioData] = useState("");
  const [id, setId] = useState();

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    dispatch(showUser());
  },[]);

  if(loading) {
    return <h3>Loading...</h3>;
  }


  return (
    <div>
      {showPopup && (
        <CustomModal id={id} showPopup={showPopup} setShowPopup={setShowPopup}/>
      )}
      <h2>All Data</h2>

        <input className='form-check-input'
          name='gender' 
          checked={radioData === ""}
            type='radio'
            onChange={(e) => setRadioData("")}
            />
            <label class="form-check-label">All</label>

            <input
        class="form-check-input"
        name="gender"
        checked={radioData === "Male"}
        value="Male"
        type="radio"
        onChange={(e) => setRadioData(e.target.value)}
      />
      <label class="form-check-label">Male</label>
      <input
        class="form-check-input"
        name="gender"
        value="Female"
        checked={radioData === "Female"}
        type="radio"
        onChange={(e) => setRadioData(e.target.value)}
      />
      <label class="form-check-label">Female</label>




      <div>
        {users && users.filter((ele) => {
          if(searchData.length === 0) {
            return ele;
          }
          else {
            return ele.name.toLowerCase().includes(searchData.toLowerCase());
          }
        })
        .filter((ele) => {
          if(radioData === 'Male') {
            return ele.gender === radioData;
          } else if(radioData === 'Female') {
            return ele.gender === radioData;
          }
          else return ele;
        })

        .map((ele) => (
          <div key={ele.id} className='card w-50 mx-auto my-2'>
            <div className="card-body">
              <h5 className="card-title">{ele.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
              <p className="card-text">{ele.gender}</p>
              <button className="card-link" onClick={() => [setId(ele.id), setShowPopup(true)]}>
                View
              </button>
              <Link to={`/edit/${ele.id}`} className="card-link">
                    Edit
                  </Link>
              <Link onClick={() => dispatch(deleteUser(ele.id))} className="card-link"> Delete </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Read
