export default function(viewOnlyLike=false, action) {
  if (action.type === 'viewOnlyLiked') {
    return true
  } else if (action.type === 'viewAll') {
    return false
  } else {
    return viewOnlyLike;
  }
}
