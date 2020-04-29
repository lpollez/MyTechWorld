export const initProjects = projects =>
  projects.map(project => ({
    ...project,
    isLiked: false,
  }));

export const addLikedProject = (projects, projectIdToAdd) =>
  projects.map(project =>
    project.idproject === projectIdToAdd
      ? { ...project, isLiked: true }
      : project
  );

export const removeLikedProject = (projects, projectIdToRemove) =>
  projects.map(project =>
    project.idproject === projectIdToRemove
      ? { ...project, isLiked: false }
      : project
  );

export const addAlert = (alerts, alert) => {
  const newAlerts = alerts.map(alert => ({ ...alert, render: true }));
  return [...newAlerts, { ...alert, render: false }];
};
