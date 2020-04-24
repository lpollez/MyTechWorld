import { ProjectActionTypes } from './project.types';

export const initProjects = projects => ({
  type: ProjectActionTypes.INIT_PROJECTS,
  payload: projects,
});

export const addLikedProject = projectId => ({
  type: ProjectActionTypes.ADD_LIKED_PROJECT,
  payload: projectId,
});

export const removeLikedProject = projectId => ({
  type: ProjectActionTypes.REMOVE_LIKED_PROJECT,
  payload: projectId,
});

export const viewLikedProjects = onlyLikedProjects => ({
  type: ProjectActionTypes.VIEW_LIKED_PROJECTS,
  payload: onlyLikedProjects,
});

export const addAlert = (message, color) => ({
  type: ProjectActionTypes.ADD_ALERT_MESSAGE,
  payload: { message, color },
});
