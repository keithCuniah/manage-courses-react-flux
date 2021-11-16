import React, { useEffect, useState } from "react";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import courseStore from "../../stores/courseStore";
import { loadCourses, deleteCourse } from "../../actions/courseActions";
function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) loadCourses();
    //when using eventListener you need be clean up after used
    //with use effect, you declare the code that you want to run on Mount by returning a function
    return () => courseStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setCourses(courseStore.getCourses());
  }
  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses} deleteCourse={deleteCourse} />
    </>
  );
}

export default CoursesPage;
