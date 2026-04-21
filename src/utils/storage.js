export const saveItem = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error("Storage Save Error:", error);
  }
};

export const getItem = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch (error) {
    console.error("Storage Get Error:", error);
    return [];
  }
};

export const addItem = (key, item) => {
  const existing = getItem(key);
  existing.push(item);
  saveItem(key, existing);
};

export const clearItem = (key) => {
  localStorage.removeItem(key);
};