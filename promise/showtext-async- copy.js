function showText (text, time) {
  return new Promise( (rsv,rj) => {
    if (text == 'R') rj('Dont use R')
    setTimeout(() => {
      console.log(text)
      rsv(1)
    },time)
  })
}

(async () => {
try {  
const p1 = await showText('X',500)
// const p2 = await showText('X',500)
// const p3 = await showText('M',1000)
const [p2,p3] = await Promise.all([ await showText('all-2',5000), await showText('all-3'),500])
// ไม่แน่ใจเรื่องการ run พร้อมกันของ code นี้ เพราะกลายเป็น run ที่ตัวที่ค่า time น้อยกว่า
// ไม่ควรใช้ยกเป็น ตย. 
console.log('Done.')
}catch(err) { 
  console.log(`Error : ${err}`)
}
}) ()

