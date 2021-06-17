import { connect } from 'react-redux'
import { setAddPopup } from '../../../redux/action/setAddPopupAction'
import { addUser } from '../../../redux/action/userActions'
import { postUserData } from '../../../redux/action/userActions'

let id_count= 9;
function ShowAddPopup({ addUser, setAddPopup, postUserData}) {
    const newUser={
        id: id_count++,
        name:'',
        email:''
    }

    function handleName(e){
        //e.preventDefault();
        console.log("IM in handleNameCHange ")
        newUser.name = e.target.value
        //handleEmailChange(e);        
        //console.log("new user EMAIL: " +newUser.email)
        //setAddPopup('false');
        //addUser(newUser);
        //postUserData(newUser)
        
    }
    function handleEmail(e){
        console.log("IM in handleEmailCHange ")
        newUser.email = e.target.value
        
    }

    function onSubmit(e){
        e.preventDefault();
        console.log("new user ID : " +newUser.id);
        console.log("new user NAME : " +newUser.name);
        console.log("new user EMAIL : " +newUser.email);
        setAddPopup('false');
        addUser(newUser);
        postUserData(newUser);
    }
    return(
        <div className="modal modal--hidden">
            <div className="modal__contents">
                <div className="modal__close-bar">
                    <span className="closeBar" onClick={()=>setAddPopup('false')}>X</span>
                </div>
                <p>Fill below information to Add data</p>
                <form id="learn-more-form" onSubmit={onSubmit}>
                    <input  name="name" onChange={handleName} type="name" placeholder="Enter Your Name" className="popNameip" />
                    <input  name="email" onChange={handleEmail} type="email" placeholder="Enter Your Email" className="popEmailip"/>
                    <button id="submit" className="popSubmitbtn">Submit</button>
                </form>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
      userData: state.userData
    }
}

const mapDispatchToProps = dispatch => {
    
    return {
      setAddPopup: () => dispatch(setAddPopup('false')),
      addUser: (newUser) => dispatch(addUser(newUser)),
      postUserData: (newUser) => dispatch(postUserData(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowAddPopup);