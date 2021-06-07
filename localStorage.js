
const asyncGetFromStorage = async (key) => {
  return new Promise((resolve, reject) => {
      try {
          chrome.storage.sync.get(key, function(value) {
              console.log('Getting from [' + key + ']' + ' is ' + JSON.stringify(value[key]));
              resolve(value[key]);
          });
      }
      catch (ex) {
          reject(ex);
      }
  });
}

const asyncSetToStorage = async (key, value) => {
  return new Promise((resolve, reject) => {
      try {
          chrome.storage.sync.set({[key]:value}, function() {
              console.log('Setting [' + key + '] to ' + JSON.stringify(value));
              resolve();
          });
      }
      catch (ex) {
          reject(ex);
      }
  });
}

const asyncDeleteFromStorage = async (key) => {
  return new Promise((resolve, reject) => {
      try {
          chrome.storage.sync.remove(key, function () {
              console.log('Deleting key: ' + key);
              resolve();
          });
      }
      catch (ex) {
          reject(ex);
      }
  });
}

// helper function to restore from localStorage
function restoreFromLocalStorage(key, defaultValue) {
  if (localStorage[key]) {
    return JSON.parse(localStorage[key]);
  } else {
    localStorage[key] = JSON.stringify(defaultValue);
    return defaultValue;
  }
}

async function asyncRestoreFromStorage(key, defaultValue) {
  let v =  await asyncGetFromStorage(key);
  if (v) {
    return v;
  } else {
    await asyncSetToStorage(key, defaultValue);
    return defaultValue;
  }
}

async function getFromLocalStorage(key) {
  await asyncGetFromStorage(key);
}

async function saveToLocalStorage(key, value) {
  await asyncSetToStorage(key, value);
}

async function deleteFromLocalStorage(key) {
  await asyncDeleteFromStorage(key);
}