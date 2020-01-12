import React,{Component} from 'react';

class First_component extends Component{
    render(){
        return(
            <div>
                <h1>this is from component {this.props.name}</h1>
                <p>email: {this.props.email} </p>
                <p>varsity: {this.props.varsity}</p>
            </div>
        )
    }

}
export default First_component;