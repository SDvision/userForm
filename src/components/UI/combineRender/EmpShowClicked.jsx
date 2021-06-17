import UsersContainer from '../empList/UsersContainer'
import SideBar from '../sideBar/SideBar'
function EmpShowClicked() {
    return(
            <div className="wrapper"> 
                <div className="sideBar">
                    <SideBar />
                </div>
                <div className="empList" >
                    <UsersContainer />
                </div>
            </div>
        )
}
export default EmpShowClicked