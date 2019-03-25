export default function(projectsList=[], action) {
  if (action.type === 'addProject') {
    for (var i=0; i<projectsList.length; i++) {
      if (projectsList[i].idproject === action.project.idproject) {
        return projectsList;
      }
    }
    // Si projet non trouvé, on l'ajoute au store
    var projectsListCopy = [...projectsList];
    projectsListCopy.push(
    {
      name: action.project.name,
      desc: action.project.desc,
      stack_front: action.project.stack_front,
      stack_back: action.project.stack_back,
      pic_url: action.project.pic_url,
      days_spent: action.project.days_spent,
      idproject: action.project.idproject,
    });
    return projectsListCopy;
  } else {
    return projectsList;
  }
}
