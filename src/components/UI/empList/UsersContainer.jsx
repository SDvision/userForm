import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchUsers } from '../../../redux/action/userActions'
import { setUpdatePopup } from '../../../redux/action/setUpdatePopupAction'
import { passingId } from '../../../redux/action/passIdAction'

import EmpEditPopup from './empEditPopup/EmpEditPopup.jsx'
import ShowAddPopup from '../combineRender/ShowAddPopup'

function UsersContainer ({ userData, fetchUsers, setUpdatePopup, updatePopup, showAddPopup, passingId }) {
  useEffect(() => {
    fetchUsers()
  }, [])

  function GrabData(event) {
    let id=0;
    console.log("editing user with id :" + event.target.value);
    id = event.target.value;
    console.log("ID :" +id)
    passingId(id);
  }

  return userData.loading ? (
        <div className="empWindow">
          <h2>Loading</h2>
        </div>
      ) : userData.error ? (
        <div className="empWindow">
          <h2>{userData.error}</h2>
        </div>
      ) : (
        <div className="empWindow">
          <div className="textUserList">Users List</div>
          <div>
            <ol>
              {
                userData.users.map(user => 
                  <li key ={user.id} className="listElement">
                    <button className="listButton" onClick={(event) => { GrabData(event); setUpdatePopup();}} value={user.id} >Name: {user.name} | Email: {user.email} </button>
                  </li>
                )
              }
            </ol>
          </div>
           { updatePopup.showPopup === 'true' ? 
                <div className="overlay overlay--hidden">
                  { console.log("in edit popup")}
                  <EmpEditPopup />
                </div> :null
           }
           { showAddPopup.showPopup === 'true' ? 
            <div className="overlay overlay--hidden">
                <ShowAddPopup />
            </div> :null }
        </div>
      )
}


const mapStateToProps = state => {
  return {
    userData: state.userData,
    updatePopup: state.showUpdatePopup,
    showAddPopup: state.showAddPopup,
    passId : state.passId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    setUpdatePopup: () => dispatch(setUpdatePopup('true')),
    passingId:(id) => dispatch(passingId(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer)

