import { Fragment } from "react"


function closeTab() {
    window.close();
}
function Exit() {
    return(
        <Fragment>
            <button  className="sideBarButton" onClick={closeTab}>Exit</button>
        </Fragment>
    )
}

export default Exit 