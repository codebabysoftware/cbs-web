// src/utils/storage.js

const PREFIX = "codebaby_";

/* ---------------------------------------
   Safe Local Storage Helpers
--------------------------------------- */

const isBrowser = typeof window !== "undefined";

const getKey = (key) => `${PREFIX}${key}`;

/* ---------------------------------------
   Save Data
--------------------------------------- */
export const setStorage = (key, value) => {
  try {
    if (!isBrowser) return false;

    const parsedValue =
      typeof value === "string"
        ? value
        : JSON.stringify(value);

    localStorage.setItem(getKey(key), parsedValue);
    return true;
  } catch (error) {
    console.error("Storage set error:", error);
    return false;
  }
};

/* ---------------------------------------
   Get Data
--------------------------------------- */
export const getStorage = (key, defaultValue = null) => {
  try {
    if (!isBrowser) return defaultValue;

    const item = localStorage.getItem(getKey(key));

    if (item === null || item === undefined) {
      return defaultValue;
    }

    try {
      return JSON.parse(item);
    } catch {
      return item;
    }
  } catch (error) {
    console.error("Storage get error:", error);
    return defaultValue;
  }
};

/* ---------------------------------------
   Remove One Key
--------------------------------------- */
export const removeStorage = (key) => {
  try {
    if (!isBrowser) return false;

    localStorage.removeItem(getKey(key));
    return true;
  } catch (error) {
    console.error("Storage remove error:", error);
    return false;
  }
};

/* ---------------------------------------
   Clear Only App Keys
--------------------------------------- */
export const clearAppStorage = () => {
  try {
    if (!isBrowser) return false;

    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith(PREFIX)) {
        localStorage.removeItem(key);
      }
    });

    return true;
  } catch (error) {
    console.error("Storage clear error:", error);
    return false;
  }
};

/* ---------------------------------------
   Exists Check
--------------------------------------- */
export const hasStorage = (key) => {
  try {
    if (!isBrowser) return false;

    return localStorage.getItem(getKey(key)) !== null;
  } catch {
    return false;
  }
};

/* ---------------------------------------
   Toggle Boolean
--------------------------------------- */
export const toggleStorage = (key) => {
  const current = getStorage(key, false);
  const updated = !current;
  setStorage(key, updated);
  return updated;
};

/* ---------------------------------------
   Common App Keys
--------------------------------------- */
export const STORAGE_KEYS = {
  THEME: "theme",
  USER: "user",
  TOKEN: "token",
  FORM_DRAFT: "form_draft",
  RECENT_COURSES: "recent_courses",
  RECENT_PROJECTS: "recent_projects",
  RECENT_INTERNSHIPS: "recent_internships",
  WHATSAPP_POPUP_CLOSED: "whatsapp_popup_closed",
};

/* ---------------------------------------
   Default Export
--------------------------------------- */
const storage = {
  setStorage,
  getStorage,
  removeStorage,
  clearAppStorage,
  hasStorage,
  toggleStorage,
  STORAGE_KEYS,
};

export default storage;