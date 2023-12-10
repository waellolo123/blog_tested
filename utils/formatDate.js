
export const formatDate = (dateTime) => {
  const dateObj = new Date(dateTime);
  const date = dateObj.getDate();
  const month = dateObj.getMonth();
  const year = dateObj.getFullYear();
  return `${month}-${date}-${year}`
}

