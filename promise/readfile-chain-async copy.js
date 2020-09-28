const getFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => resolve(data) )
  })
}

async function runGetFile() {
  try {
  const data = await getFile('./start.txt')
  console.log(`${data}`)
  const d1 = await getFile(data)
  console.log(`${d1}`)
  const d2 = await getFile(d1)
  console.log(`${d2}`)
  const d3 = await getFile(d2)
  console.log(`${d3}`)
  } catch(err) {
    console.error('error : ' + err)
  }
}

runGetFile();


(async () => {
 let data = await getFile('./start.txt');
 console.log(`${data}`)
 data1 = await getFile(data);
 console.log(`${data1}`)
 data2 = await getFile(data1);
 console.log(`${data2}`)
 data3 = await getFile(data2);
 console.log(`${data3}`)
 }) ();

