// Standart Promise

function sleep(amount) {
  return new Promise((resolve, reject) => {
    if (amount <= 300) {
      return reject('that is too fast, cool it down')
    }
    setTimeout(() => resolve(`slept for ${amount}`, amount))
  })
}

sleep(300)
  .then(result => {
    console.log(result);
    return sleep(1000)
  })
  .then(result => {
    console.log(result);
    return sleep(750)
  })
  .then(result => {
    console.log(result)
    console.log('done')
  })
  .catch(err => {
    console.log(err);
  })
