export const getColorList = () => {
  return JSON.parse(localStorage.getItem("colors") || [])
};

export const getLastColor = () => {
  const listColor = getColorList();
  return listColor[0] || "#000000";
}