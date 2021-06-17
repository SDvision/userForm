import { connect } from 'react-redux'
import { setUpdatePopup } from '../../../../redux/action/setUpdatePopupAction'
import { patchUserData } from '../../../../redux/action/userActions'

function EmpEditPopup({setUpdatePopup, patchUserData, passId, fetchUser}) {
    const newEditUser={
        id: passId.passId,
        name:'',
        email:''
    }

    function handleName(e){
        console.log("IM in handleNameCHange ")
        newEditUser.name = e.target.value    
    }
    function handleEmail(e){
        console.log("IM in handleEmailCHange ")
        newEditUser.email = e.target.value
        console.log("new Edit user ID : " +newEditUser.id);
        console.log("new Edit user NAME : " +newEditUser.name);
        console.log("new Edit user EMAIL : " +newEditUser.email);
    }

    function onSubmit(e){
        e.preventDefault();
        setUpdatePopup('false')
        patchUserData(newEditUser)
    }
    return(
        <div class="modal modal--hidden">
            <div class="modal__contents">
                <div class="modal__close-bar">
                    <span className="closeBar" onClick={()=>setUpdatePopup('false')}>X</span>
                </div>
                <p>Fill below information to update data</p>
                <form id="learn-more-form" onSubmit={onSubmit} >
                    <input name="name" onChange={handleName} type="name" placeholder="Enter Your Name" className="popNameip" />
                    <input name="email" onChange={handleEmail} type="email" placeholder="Enter Your Email" className="popEmailip" />
                    <button id="submit" className="popSubmitbtn">Submit</button>
                </form>
            </div>
        </div>
    )

}

const mapStateToProps = state => {
    return {
      passId: state.passId,
    }
}
const mapDispatchToProps = dispatch => {
    return {
      setUpdatePopup: () => dispatch(setUpdatePopup('false')),
      patchUserData: (newEditUser) => dispatch(patchUserData(newEditUser))
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(EmpEditPopup)