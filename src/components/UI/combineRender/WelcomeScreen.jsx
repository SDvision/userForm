import { connect } from 'react-redux'
import SideBar from '../sideBar/SideBar'

function WelcomeScreen({ showUpdatePopup, userData }) {
    return(
            <div className="wrapper"> 
                <div className="sideBar">
                    <SideBar />
                </div>
                <div className="empList" >
                    <div className="welcomeScreen">
                         Welcome To Emp Data Manager
                        {console.log("updatePopUp value At start :" +showUpdatePopup.showPopUp)}
                        {console.log("UserData value At start :" + userData.users)}
                    </div>  
                </div>
            </div>
        )
}

const mapStateToProps = state => {
    return {
      userData: state.userData,
      showUpdatePopup: state.showUpdatePopup
    }
  }
export default connect(mapStateToProps, null)(WelcomeScreen)