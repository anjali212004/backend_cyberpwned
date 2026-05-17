function Respo(success, message, data) {
  this.success = success
  this.message = message
  this.data = data
}

const respo = (success, message, data) => {
  return new Respo(success, message, data)
}

module.exports = respo
