let done = false

function isItDoneYet() {
  return new Promise( (resolve, reject) => {
    if (done) {
      const workDone = 'Here is the thing I built'
      resolve(workDone)
    } else {
      const why = 'Still working on something else'
      reject(why)
    }
  })
} 

async function checkIt() {
  try {
  let d = await isItDoneYet()
  console.log(d)
  } catch(err) {
    console.log(err)
  }
}