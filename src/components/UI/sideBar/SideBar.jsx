import EmpAdd from './empAdd/EmpAdd.jsx'
import EmpShow from './empShow/EmpShow.jsx'
import Exit from './exit/Exit.jsx'
import '../../../index.css'
import { Fragment } from 'react'
function Sidebar() {
    return(
        <Fragment>
            <div>
                <EmpShow />
            </div>
            <div>
                <EmpAdd />
            </div>
            <div>
                <Exit />
            </div>
        </Fragment>
    )
}

export default Sidebar;