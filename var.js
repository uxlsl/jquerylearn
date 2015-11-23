var i = 100;
var j = i;
console.log("i %d,j %d", i, j);
var obj1 = Object();
obj1.name = "hello";
console.log("obj1.name %s", obj1.name);
var obj2 = obj1;
console.log("obj2.name %s", obj2.name);

// test function args
function bar(){
  console.log(obj1);
};
bar();

if (true)
{
  var foo=100;
  console.log("foo is %d", foo);
}
console.log("foo is %d", foo);


function apple(i, j, k){
  console.log("i %d, j %d, k %d",i, j, k);
}
apple(1,2,3);
apple(Object(), 2, 3);
