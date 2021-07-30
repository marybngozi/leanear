export const setStorageItem = (key, val) => {
  if (!val) {
    localStorage.removeItem(key);
    return;
  }

  localStorage.setItem(key, JSON.stringify(val));
};

export const getStorageItem = (key) => {
  let val = localStorage.getItem(key);

  if (!val) {
    return [];
  }

  return JSON.parse(val);
};

// module.exports = {
//   setStorageItem,
//   getStorageItem,
// };
