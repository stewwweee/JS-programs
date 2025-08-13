
let times = ["4:59", "4:39", "9:32", "5:58", "9:35"];
times.sort((a, b) => {
  let [h1, m1] = a.split(':').map(Number);
  let [h2, m2] = b.split(':').map(Number);
  return h2 - h1 || m1 - m2;
});
console.log(times); 

// ["9:32", "9:35",  "4:39","5:58", "4:59"] 