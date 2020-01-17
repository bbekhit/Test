isCommentInCurrentWeek(comment){
  const currentWeekOfYear = moment().week();
  const currentYear = moment().year();
  const commentDateWeekOfYear = moment(comment.createdAt).week() || moment(comment.modifiedAt).week()
  const commentYear = moment(comment.createdAt).year() || moment(comment.modifiedAt).year()
  return currentYear === commentYear && currentWeekOfYear === commentDateWeekOfYear;    
}