export const getCurrentDateAndTime = () => {
  const date = new Date();
  const localeDate = date.toLocaleDateString('en-US');
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const addLeadingZerosToTime = (hours, minutes) => {
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}`;
  };

  return `${localeDate} ${addLeadingZerosToTime(hours, minutes)}`;
};
