import { Component } from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";

class ErrorBoundary extends Component{
    state ={
        error:false
    }

    componentDidCatch(error, errorMessage){
        console.log(error, errorMessage);
        this.setState({
            error:true
        })
    }
    render(){
        if(this.state.error){
            return <ErrorMessage/>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;