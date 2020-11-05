`Due in ${dueDateDuration} ${dueDateDuration} === 1 ? 'day' : 'days' ago`;

dateToPlainString = millis => {
  const date = new Date(millis);
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return date.toISOString().replace(/[:\-T]/g,"");
};

