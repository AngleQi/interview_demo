//构造函数创建对象
function func(name){
    this.name=name;
    this.sayHello=function(){
        alert('my name is '+this.name);
    }
}
var f=new func('phoebe'); // f是func实例化之后的一个构造函数，new是用来实例化函数的一种手段。
// 而func的构造函数实际上是js内置的function，实际上 function func(name){}等价于 var func = function(name){}
f.sayHello();


function Person() {

}
var person = new Person(); // Person 就是一个构造函数，我们使用 new 创建了一个实例对象 person
person.name = 'Kevin';
console.log(person.name) // Kevin

