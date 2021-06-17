import { Fragment } from "react"
import { connect } from 'react-redux'
import { setAddPopup } from '../../../../redux/action/setAddPopupAction'
//import ShowAddPopup from '../../combineRender/ShowAddPopup'

function EmpAdd({ setAddPopupWindow, showAddPopup }) {
    return(
        <Fragment>
            <button className="sideBarButton" onClick={()=>setAddPopupWindow(showAddPopup)}> Add Employee </button>
        </Fragment>
    )
}

const mapStateToProps = ({showAddPopup}) => ({showAddPopup})

const mapDispatchToProps = dispatch => ({
    setAddPopupWindow: (showAddPopup) => {  
            console.log("I'm in SetAddPopuWIndow and showAddPopup = "+showAddPopup);
            return dispatch(setAddPopup('true'));
        }
    })

export default connect(mapStateToProps, mapDispatchToProps)(EmpAdd)