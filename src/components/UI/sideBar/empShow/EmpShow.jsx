import { Fragment } from "react"
import { connect } from 'react-redux'
import { setActiveWindow } from '../../../../redux/action/setScreenAction'

function EmpShow( props ) {
    const { setScreen, setWindow } = props
    return(
        <Fragment>
            <button  className="sideBarButton" onClick={ () => setWindow(setScreen.activeScreen) }>Show Employee</button>
        </Fragment>
    )
}

const mapStateToProps = ({setScreen}) => ({setScreen})

const mapDispatchToProps = dispatch => ({
    setWindow: () => {  
            //console.log(setScreen);
            return dispatch(setActiveWindow("empShow"));
        }
    })

export default connect ( mapStateToProps, mapDispatchToProps )(EmpShow)