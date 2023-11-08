export const getLocalStorageProperty = (
  property: string,
  accessObject: string
): string => {
  const localStorageItem = localStorage.getItem(property);
  if (
    localStorageItem !== null &&
    JSON.parse(localStorageItem).hasOwnProperty(accessObject)
  ) {
    const parsedObjectProperty = JSON.parse(localStorageItem)[accessObject];
    return parsedObjectProperty;
  } else {
    return "";
  }
};
  