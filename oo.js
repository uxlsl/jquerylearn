var persion = {"name":"bar",
               "age": 22,
               "job": "7lk"};

console.log(persion);
console.log(typeof persion);
//严格模式,可试试
Object.defineProperty(persion, "help",{
  writable: false,
  value:"my book"
});
console.log(persion.help);
persion.help = "abcdefg";
console.log(persion);

Object.defineProperty(persion, "money",{
  get: function(){
    return this.age * 10;
  },
  set: function(newvalue){
    this.age = newvalue / 2;
  }
});

console.log(persion.money);
persion.money = 30;
console.log(persion.money);

// create persion

function Persion(name, age, job){
  this.name = name;
  this.age = age;
  this.job = job;
};


var p = new Persion("lsl", 10, "7lk");
console.log(p);
console.log(p.constructor);
// 表达函数是对象?
function Persion(){
}

Persion.prototype.name ="lsl";
Persion.prototype.age = 100;
Persion.prototype.job = "7lg";

var p = new Persion();
// 有点像默认参数.
console.log(p);

console.log(p.hasOwnProperty("name"));
var a = 100;
var b = 200;
var c = 300;
function apple(){
  console.log("%d,%d,%d\n", this.a, this.b, this.c);
}
apple();

var o = Object();
o.a = 1;
o.b = 2;
o.c = 3;

// 由此得出结论, call影响this.作用域改变
apple.call(o);
