let emp = [{name: "chris" , dep: "english"},
           { name: "karthick" , dep:"tamil"},
           {name: "jose" , dep: "maths"}];

let emps = emp.filter(ele => ele.dep === "tamil")
let lang = emps.map(dept=> dept.dep)
console.log(lang.join(""))
