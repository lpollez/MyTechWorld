import { ProjectActionTypes } from './project.types';

import {
  initProjects,
  addLikedProject,
  removeLikedProject,
  addAlert,
} from './project.utils';

const INITIAL_STATE = {
  projects: [],
  viewLikedProjects: false,
  alerts: [],
};

const projectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProjectActionTypes.INIT_PROJECTS:
      return {
        ...state,
        projects: initProjects(action.payload),
      };
    case ProjectActionTypes.ADD_LIKED_PROJECT:
      return {
        ...state,
        projects: addLikedProject(state.projects, action.payload),
      };
    case ProjectActionTypes.REMOVE_LIKED_PROJECT:
      return {
        ...state,
        projects: removeLikedProject(state.projects, action.payload),
      };
    case ProjectActionTypes.VIEW_LIKED_PROJECTS:
      return {
        ...state,
        viewLikedProjects: action.payload === true ? true : false,
      };
    case ProjectActionTypes.ADD_ALERT_MESSAGE:
      return {
        ...state,
        alerts: addAlert(state.alerts, action.payload),
      };
    default:
      return state;
  }
};

export default projectReducer;
