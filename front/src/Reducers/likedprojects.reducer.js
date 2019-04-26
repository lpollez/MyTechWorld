export default function(likedProjectsList=[], action) {
  if (action.type === 'addLikedProject') {
console.log('likedProjectsListCopy : ' + likedProjectsListCopy);
    for (var i=0; i<likedProjectsList.length; i++) {
      if (likedProjectsList[i].idproject === action.project.idproject) {
        return likedProjectsList;
      }
    }
    // Si projet non trouvé, on l'ajoute au store
    var likedProjectsListCopy = [...likedProjectsList];
    likedProjectsListCopy.push(
    {
      name: action.project.name,
      desc: action.project.desc,
      stack_front: action.project.stack_front,
      stack_back: action.project.stack_back,
      pic_url: action.project.pic_url,
      days_spent: action.project.days_spent,
      idproject: action.project.idproject
    });
    return likedProjectsListCopy;
  } else if (action.type === 'removeLikedProject') {
    var likedProjectsListCopy = [...likedProjectsList];
    for (var i=0; i<likedProjectsList.length; i++) {
      if (likedProjectsList[i].idproject === action.project.idproject) {
        likedProjectsListCopy.splice(i, 1);
        break;
      }
    }
    return likedProjectsListCopy;
  } else {
    return likedProjectsList;
  }
}
