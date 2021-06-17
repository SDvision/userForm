import React from 'react'
import '../index.css'
import { connect } from 'react-redux'
import EmpShowClicked from './UI/combineRender/EmpShowClicked'
import WelcomeScreen from './UI/combineRender/WelcomeScreen'


function HomePage({setScreen}) {
    console.log("setScrren in Homepage :" +setScreen)
    if(setScreen==='empShow')
        return (
            <EmpShowClicked />   
        )
    else  
        return(
            <WelcomeScreen /> 
        )
}

function mapStateToProps(state) {
    return {
        setScreen: state.setScreen.activeScreen
    };
}

export default connect( mapStateToProps)(HomePage);
