import React from "react";

const CourseForm = (props) => {
    return(
        <form onSubmit={props.addcourses}>
                <input type="text" value={props.currentprops} onChange={props.updateprops} />
                <button value="submit">Add Course </button>

        </form>
    );     
}

export default CourseForm;