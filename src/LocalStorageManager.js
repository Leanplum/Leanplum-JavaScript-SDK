let localStorageEnabled
let alternateLocalStorage = {}

export default class LocalStorageManager {
  static getFromLocalStorage(key) {
    if (localStorageEnabled === false) {
      return alternateLocalStorage[key]
    }
    return localStorage[key]
  }

  static saveToLocalStorage(key, value) {
    if (localStorageEnabled === false) {
      alternateLocalStorage[key] = value
      return
    }
    try {
      localStorage[key] = value
    } catch (e) {
      localStorageEnabled = false
      Leanplum._saveToLocalStorage(key, value)
    }
  }

  static removeFromLocalStorage(key) {
    if (localStorageEnabled === false) {
      Reflect.deleteProperty(alternateLocalStorage, key)
      return
    }
    try {
      localStorage.removeItem(key)
    } catch (e) {
      localStorageEnabled = false
      Leanplum._removeFromLocalStorage(key)
    }
  }
}