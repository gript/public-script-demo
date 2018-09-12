// entry

module.exports = () => new Promise(reslove => {
  setTimeout(() => {
    reslove('ok, did you miss me?')
  }, 3000);
})
