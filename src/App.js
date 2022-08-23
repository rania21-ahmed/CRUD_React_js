import React,{Component} from "react";
import CourseForm from './component/courseform'
import CourseList from './component/courselist'
import './index.css'
class App extends Component {

  state = {
    courses:[
      {name :'HTML'},
      {name :'CSS'},
      {name :'JavaScrept'},
      
    ],
    current :''
  }


  Updatecourse = (e)=>{
    //console.log(e.target.value)
    this.setState({
      current:e.target.value
    })
  }

  //Add Courses
  AddCourse =(e)=>{
    e.preventDefault();
    //console.log("Add course");
    let current =this.state.current;//new current
    let courses =this.state.courses; //all courses
    courses.push({name:current}); //from let current
    this.setState({
      courses,
      current:''
    })
  }

  //Delete Courses
  deletecourses = (index)=>{
    let courses =this.state.courses;
    courses.splice(index,1);
    this.setState({
      courses
    })
  }

  //edit course
  editCourse =(index,value)=>{
    let courses =this.state.courses;
    let course =courses[index];
    course['name']=value;
    this.setState({
      courses:courses
    })
  }

  render(){

    const {courses}=this.state;
    const Courseslist =courses.map((course,index) =>{
      return <CourseList details={course} key={index} deletcourses={this.deletecourses}
      index={index} editCourse={this.editCourse}/>
    })

    return(
      <section className="App">
        <h2>Add Courses</h2>
        <CourseForm currentprops={this.state.current} 
                     updateprops={this.Updatecourse} 
                     addcourses={this.AddCourse} 
                     />
        
        <ul>
        {Courseslist}
        </ul>

      </section>
    );
  }
  
}

export default App;
