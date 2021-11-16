import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";
import { prependOnceListener } from "process";
//by convention, flux store have 3 functions in every store
// 1-addChangeListener(wraps on)
// 2-removeChangeListener(wraps removeListener)
// 3-emitChange(wraps emit)

const CHANGE_EVENT = "change";
//_courses is deliberatly private for people to not mess with it
let _courses = [];
class CourseStore extends EventEmitter {
  addChangeListener(callback) {
    //we pass the event `change` => when a change occurs we call the callback
    //  this allow to any react components to subscribe to our store so they are
    //  notified when changes occurs
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    // this is the mirror image of addChangeListener
    this.removeListener(CHANGE_EVENT, callback);
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getCourses() {
    return _courses;
  }
  getCourseBySlug(slug) {
    return _courses.find((_course) => _course.slug === slug);
  }
}

const store = new CourseStore();

//the dispatcher will occur ANY time a change will occur
Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.CREATE_COURSE:
      _courses.push(action.course);
      // any time a store change we need to call emitChange so any components registered to the store will be notified
      store.emitChange();
      break;
    case actionTypes.LOAD_COURSES:
      _courses = action.courses;
      store.emitChange();
      break;
    case actionTypes.UPDATE_COURSE:
      _courses = _courses.map((course) =>
        course.id === action.course.id ? action.course : course
      );
      store.emitChange();
      break;
    case actionTypes.DELETE_COURSE:
      _courses = _courses.filter(
        (course) => course.id !== parseInt(action.id, 10)
      );
      store.emitChange();
      break;
    default:
    //nothing to do
  }
});

export default store;
