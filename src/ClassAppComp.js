
import React from "react";
import MyButton from "./MyButton";
import MyTitle from "./MyTitle";

class ClassAppComp extends React.Component{

    constructor(){
        super()
        this.state = {
            name: "ahmed",
            position: "developer",
            age: 30
        }
        console.log("I am Constructor")
    }

    componentDidMount(){
        //  call API
        console.log("I am componentDidMount")
    }

    componentDidUpdate(){
        // drop down --> Country   -- City
        console.log("I am componentDidUpdate")
    }

    componentWillUnmount(){
        console.log("i am componentWillUnmount")
    }

    changeDetails = () => {
        // this.state.name = "aya"
        this.setState({
            name: "aya",
            age: 40,
            position: "Front-end Developer"
        })

    }

    testFunc = () => {
        console.log("hello")
        alert("Sign Up")
    }

    SignIn = () => {
        alert("Sign IN")
    }


    render(){
        console.log("I am Render")
        return(
            <>
                <MyTitle head="Class App Component" titleClr="warning" />
                <MyTitle head="First Component"  titleClr="info"/>
                <MyButton btnClass="danger"  btnTitle="Sign In" btnClr="red" myFun={() => this.SignIn()} />
                <h1> I am Class Component </h1>
                <h2> Name: {this.state.name} </h2>
                <h2> Age: {this.state.age} </h2>
                <h2> Position: {this.state.position} </h2>
                <button className="btn btn-primary" onClick={() => this.changeDetails()}> Chnage Info  </button>
                
                <MyButton btnClass="primary" btnTitle="Sign Up" btnClr="green" myFun= {() => this.testFunc()} />
            </> 
        )
    }

}


export default ClassAppComp

