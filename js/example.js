
// indexOf(num)
// 作用：从数组开头向后开始查找目标数所在的位置，然后返回它的索引值。
// 未查找到返回-1
var numbers = [1,2,3,4,5,4,3,2,1];
alert(numbers.indexOf(4)) // 3

// indexOf(num1,num2)
// 作用：在数组里面从num2往后开始查找num1,并返回num1在数组里正常的位置
// 未查找到返回-1
alert(numbers.indexOf(4,4)) //5


// lastIndexOf(num)
// 作用：从数组后面开始往前查找第一次出现的目标数，并且返回它正常的索引值
// 未找到返回-1
alert(numbers.lastIndexOf(4)) //5


// lastIndexOf(num1,num2)
// 作用：从num2开始查找num1最后出现的位置
// 未找到返回-1
alert(numbers.lastIndexOf(4,4)) // 3


// ==、===、isNaN、Object.is的比较
// ==
console.log([123]==123);//true
console.log({}=={});    //false
console.log(null==null);//true
console.log(null==undefined);//true
console.log(false==0);//true
console.log(true==1);//true

// NaN的意思是Not a Number，那么不是数字的字符肯定不是一个，而是一个范围，一个集合
console.log(NaN==NaN);//false
console.log(0/NaN==0/NaN);//false

// 0/0为NaN
console.log(0/0==0/0);//false


// ===
console.log([123]===123);//false
console.log({}==={});//false
console.log(null===null);//true
console.log(null===undefined);//false
console.log(false===0);//false
console.log(true===1);//false
console.log(NaN===NaN);//false
console.log(0/NaN===0/NaN);//false
console.log(0/0===0/0);//false


// isNaN
isNaN(NaN);       // true
isNaN(undefined); // true
isNaN({});        // true

isNaN(true);      // false
isNaN(null);      // false
isNaN(37);        // false

// strings
isNaN("37");      // false: 可以被转换成数值37
isNaN("37.37");   // false: 可以被转换成数值37.37
isNaN("");        // false: 空字符串被转换成0
isNaN(" ");       // false: 包含空格的字符串被转换成0

// dates
isNaN(new Date());                // false
isNaN(new Date().toString());     // true

isNaN("blabla")   // true: "blabla"不能转换成数值

// 如何准确的判断一个数据是否是NaN呢
// NaN有一个特点，NaN不等于自身，所以可以用这样的方式来判断：
function dataisNaN(a){
    return a!==a && isNaN(a);
}


// Object.is()
// 其行为与===基本一致，不过有两处不同：1、+0不等于-0。2、NaN等于自身。
+0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true
