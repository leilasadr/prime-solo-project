import React from 'react';
// import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';

function UserPage() {

  // renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  // renders some feedback reducer info to the DOM
  const feedbacks = useSelector((store) => store.feedbacks);
  // console.log('feedback from the store:', feedback);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchFeedbacks();
  }, [])

  const fetchFeedbacks = () => {
    dispatch({
      type:'SAGA/FETCH_FEEDBACKS'
    })
    // console.log('Updated feedbacks state:', feedbacks);
  }


  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Safety is the treatement.</p>
      <p>Dr. Stephen Porges</p>
      <p>This is where the user will see all their feedback entries.</p>
      {/* <p>Your ID is: {user.id}</p> */}
      {/* <LogOutButton className="btn" /> */}
      <br />
      <br />
      <ul>
        {feedbacks.map(feedback => {
          return (
            <span key={feedback.id}>
              <p>
                {feedback.text_feedback} on {feedback.date}
              </p>
            </span>
          )
        })}
      </ul>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
