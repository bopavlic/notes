export const getCurrentDateAndTime = (date = new Date()) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const transformValue = (value) => {
    return value.toString().padStart(2, '0');
  };

  return `${year}-${transformValue(month)}-${transformValue(
    day
  )} ${hours}:${minutes}`;
};
