const LIMIT = 200;

export const endStringWithThreeDots = (str) => {
  if (str.length <= LIMIT) {
    return str;
  } else {
    const updatedString = str.slice(0, LIMIT - 3) + "...";
    return updatedString;
  }
};
