export default class AbstractObserver {
  constructor() {
    this._observers = new Set()
  }
  
  addObserver(callback) {
    this._observers.add(callback)
  }
  
  removeObserver(callback) {
    this._observers.delete(callback)
  }
  
  _notify() {
    this._observers.forEach(callback => callback())
  }
}
