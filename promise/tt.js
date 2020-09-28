let promise1 = new Promise(resolve => {
  setTimeout(() => resolve("1"), 1000);
});
let promise2 = new Promise(resolve => {
  setTimeout(() => resolve("2"), 500);
});

promise1.then( d => {
  console.log(d) 
  promise2.then( d => { 
    console.log(d)
  })
})  
 // 500ms ของ promise2 เสร็จก่อนจึงพร้อมแสดงผลได้ทันทีหลังจาก promise1 แสดงผลไปแล้ว
