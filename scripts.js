// objects are entries//
function Name(name, type, time, note, status) {
  this.name = name;
  this.type = type;
  this.time = time;
  this.note = note;
  this.status = status;
  this.speak = function() {
    console.log("Hi, I'm " + this.name + "!");
  }
}
var p1 = new Name("Robin", 42, 1.72);
console.log(p1.name);

var total = 460;
var balance = 400;
var voucher = 100;
if (voucher > 0) {
  total = total - voucher;
}
if (total > balance) {
  console.log ("Unsuccessful!")
}
if (total < balance) {
  console.log ("Successful")
}

var password = "Sturgeon";
if (password == "Swordfish"){
  console.log ("Welcome");
} else {
  console.log ("Wrong Password")
}
