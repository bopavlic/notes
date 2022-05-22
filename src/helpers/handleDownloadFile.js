export const handleDownloadFile = (array, id = -1) => {
  const currentElement = array.find((note) => note.id === id);
  const link = document.createElement('a');
  const file = new Blob(
    [JSON.stringify(currentElement ? currentElement : array)],
    {
      type: 'text/plain',
    }
  );
  link.href = URL.createObjectURL(file);
  link.download = `${currentElement ? currentElement.title : 'All-notes'}.txt`;
  // Append to html link element page
  document.body.appendChild(link);
  // Start download
  link.click();
  // Clean up and remove the link
  link.parentNode.removeChild(link);
};
