//import EmpDetail from './empDetail/EmpDetail.jsx'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../../redux/action/userActions'

function UsersContainer ({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers()
  }, [])
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
      <h2>Users List</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map(user => <p>{user.name}</p>)}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userData: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer)