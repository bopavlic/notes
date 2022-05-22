export const getCurrentDateAndTime = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const transformValue = (value) => {
    return value.toString().padStart(2, '0');
  };

  return `${year}-${transformValue(month)}-${transformValue(
    day
  )} ${transformValue(hours)}:${transformValue(minutes)}`;
};
