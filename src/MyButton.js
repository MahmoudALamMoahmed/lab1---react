
import React from "react";

class MyButton extends React.Component{

    constructor(props){
        console.log(props)
        super();
    }

    render(){
        return(
            <button
                className={`btn btn-${this.props.btnClass}`} 
                style={{"color" : this.props.btnClr, "width": this.props.btnWidth}}
                onClick={this.props.myFun}
            > {this.props.btnTitle} </button> 
        )
    }

}


export default MyButton

