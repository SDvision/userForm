import React from 'react'
import '../index.css'

import SideBar from './UI/sideBar/SideBar.jsx'
import UsersContainer from './UI/empList/UsersContainer.jsx'

function HomePage() {
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

export default HomePage;
