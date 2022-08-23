import React, {Component, Fragment} from "react";

class CourseList extends Component{

    state ={
        isEdit:false
    }

    //render Course Item
    renderCourse = ()=>{
        return(
            <li>
                <span>{this.props.details.name} </span>
                <button onClick={()=>{this.toggleState()}} >Edit Course</button> 
                <button onClick={()=>{this.props.deletcourses(this.props.index)}}>Delete courses</button>   
                
            </li>
        )
    }
    
    //toggleState
    toggleState =()=>{
        let {isEdit} =this.state;
        this.setState({
            isEdit:!isEdit
        })
    }

    //update course item
    updateCourseIten =(e)=>{
        e.preventDefault();
        this.props.editCourse(this.props.index,this.input.value );
        this.toggleState();

    }

    //render update Course
    renderUpdateForm =()=>{
        return(
            <form onSubmit={this.updateCourseIten}>
                <input type="text" ref={(v)=>{this.input=v}}  defaultValue={this.props.details.name}/>
                <button>Udate Course</button>
            </form>
        )
    }

    render(){
        let {isEdit}=this.state;
        return(
            <Fragment>
               
               { isEdit ? this.renderUpdateForm() :this.renderCourse()}

            </Fragment>
        )
    }   

}

export default CourseList;