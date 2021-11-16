import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actionTypes from "./actionTypes";

// action creator
export function saveCourse(course) {
  return courseApi.saveCourse(course).then((savedCourse) => {
    // Hey dispatcher, go tell all the stores that a course was just create
    dispatcher.dispatch({
      actionType: course.id
        ? actionTypes.UPDATE_COURSE
        : actionTypes.CREATE_COURSE,
      course: savedCourse,
    });
  });
}
export function deleteCourse(courseID) {
  return courseApi.deleteCourse(courseID).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_COURSE,
      courseID: courseID,
    });
  });
}

export function loadCourses() {
  return courseApi.getCourses().then((courses) =>
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      courses: courses,
    })
  );
}
