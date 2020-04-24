export const initProjects = projects => {
  const allProjects = projects.map(project => ({
    ...project,
    isLiked: false,
  }));
  return allProjects;
};

export const addLikedProject = (projects, projectIdToAdd) => {
  return projects.map(project =>
    project.idproject === projectIdToAdd
      ? { ...project, isLiked: true }
      : project
  );
};

export const removeLikedProject = (projects, projectIdToRemove) => {
  return projects.map(project =>
    project.idproject === projectIdToRemove
      ? { ...project, isLiked: false }
      : project
  );
};

export const addAlert = (alerts, alert) => {
  const newAlerts = alerts.map(alert => ({ ...alert, render: true }));
  return [...newAlerts, { ...alert, render: false }];
};
