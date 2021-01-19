/**
    在 JavaScript 中有 8 种基本的数据类型（译注：7 种原始类型和 1 种引用类型）。
 */

 //  我们可以将任何类型的值存入变量。例如，一个变量可以在前一刻是个字符串，下一刻就存储一个数字：
 let message = "hello js";
 message = 666;
 console.log(`message: ${message}`);

 // JavaScript，被称为“动态类型”（dynamically typed）的编程语言，意思是虽然编程语言中有不同的数据类型，
 // 但是你定义的变量并不会在定义后，被限制为某一数据类型。



 // Number 类型
/**
    数学运算是安全的
        在 JavaScript 中做数学运算是安全的。我们可以做任何事：除以 0，将非数字字符串视为数字，等等。
        
        脚本永远不会因为一个致命的错误（“死亡”）而停止。最坏的情况下，我们会得到 NaN 的结果。
        
        特殊的数值属于 “number” 类型。当然，对“特殊的数值”这个词的一般认识是，它们并不是数字。
 */

 let num = 6;
 num = 6.66;

 // number 类型代表整数和浮点数。
// 数字可以有很多操作，比如，乘法 *、除法 /、加法 +、减法 - 等等。
// 除了常规的数字，还包括所谓的“特殊数值（“special numeric values”）”也属于这种类型：Infinity、-Infinity 和 NaN。

// Infinity 代表数学概念中的 无穷大 ∞。是一个比任何数字都大的特殊值。
// 我们可以通过除以 0 来得到它：
console.log(1 / 0);

// 在代码中直接使用它：
console.log(Infinity);

// NaN 代表一个计算错误。它是一个不正确的或者一个未定义的数学操作所得到的结果，比如：
console.log("hello" / 1);  // NaN，这样的除法是错误的

// NaN 是粘性的。任何对 NaN 的进一步操作都会返回 NaN： 所以，如果在数学表达式中有一个 NaN，会被传播到最终结果。
console.log( "not a number" / 2 + 5 ); // NaN




// BigInt 类型
/**
    在 JavaScript 中，“number” 类型无法表示大于 (253-1)（即 9007199254740991），或小于 -(253-1) 的整数。这是其内部表示形式导致的技术限制。

    在大多数情况下，这个范围就足够了，但有时我们需要很大的数字，例如用于加密或微秒精度的时间戳。

    BigInt 类型是最近被添加到 JavaScript 语言中的，用于表示任意长度的整数。



    JavaScript 中没有 character 类型。
        在一些语言中，单个字符有一个特殊的 “character” 类型，在 C 语言和 Java 语言中被称为 “char”。
        在 JavaScript 中没有这种类型。只有一种 string 类型，一个字符串可以包含零个（为空）、一个或多个字符。
 */

// 通过将 n 附加到整数字段的末尾来创建 BigInt 值。
// 尾部的 "n" 表示这是一个 BigInt 类型
const bigInt = 1234567890123456789012345678901234567890n;
console.log(`bigInt: ${bigInt}`)





// String 类型

/**
    在 JavaScript 中，有三种包含字符串的方式。
        双引号："Hello".
        单引号：'Hello'.
        反引号：`Hello`.
    双引号和单引号都是“简单”引用，在 JavaScript 中两者几乎没有什么差别。
 */
// JavaScript 中的字符串必须被括在引号里。
let str1 = "hello";
let str2 = 'world';
let str3 = `hello ${str2}`;

console.log(`str1: ${str1}`);
console.log(`str2: ${str2}`);
console.log(`str3: ${str3}`);

// 反引号是 功能扩展 引号。它们允许我们通过将变量和表达式包装在 ${…} 中，来将它们嵌入到字符串中。例如：
let userName = "ixfosa";
// 嵌入一个变量
console.log(`hello ${userName}`);

// 嵌入一个表达式
console.log(`the result is ${6 + 6}`)

// ${…} 内的表达式会被计算，计算结果会成为字符串的一部分。
// 可以在 ${…} 内放置任何东西：诸如名为 name 的变量，或者诸如 1 + 2 的算数表达式，或者其他一些更复杂的。

// 需要注意的是，这仅仅在反引号内有效，其他引号不允许这种嵌入。
console.log( "the result is ${1 + 2}" ); // the result is ${1 + 2}（使用双引号则不会计算 ${…} 中的内容）




// Boolean 类型（逻辑类型）
// boolean 类型仅包含两个值：true 和 false。

// 这种类型通常用于存储表示 yes 或 no 的值：true 意味着 “yes，正确”，false 意味着 “no，不正确”。

let isHappiness = true;
let isLove = false;

// 布尔值也可作为比较的结果：
let isGreater = 6 > 1;
console.log(`isGreater ${isGreater}`) // isGreater true





// “null” 值
// 特殊的 null 值不属于上述任何一种类型。
// 相比较于其他编程语言，JavaScript 中的 null 不是一个“对不存在的 object 的引用”或者 “null 指针”。
// JavaScript 中的 null 仅仅是一个代表“无”、“空”或“值未知”的特殊值。

// 它构成了一个独立的类型，只包含 null 值：
let myHeart = null; //myHeart是未知的。


// “undefined” 值
// 特殊值 undefined 和 null 一样自成类型。
// undefined 的含义是 未被赋值。
// 通常，使用 null 将一个“空”或者“未知”的值写入变量中，而 undefined 则保留作为未进行初始化的事物的默认初始值。


// 如果一个变量已被声明，但未被赋值，那么它的值就是 undefined：
let gender;
console.log(`gender: ${gender}`)   // gender: undefined




// object 类型和 symbol 类型
// object 类型是一个特殊的类型。

// 其他所有的数据类型都被称为“原始类型”，因为它们的值只包含一个单独的内容（字符串、数字或者其他）。
// 相反，object 则用于储存数据集合和更复杂的实体。

// 因为它非常重要，所以我们对其进行单独讲解。在充分学习了原始类型后，我们将会在 对象 一章中介绍 object。

// symbol 类型用于创建对象的唯一标识符.


// typeof 运算符
// typeof 运算符返回参数的类型。当我们想要分别处理不同类型值的时候，或者想快速进行数据类型检验时，非常有用。

//它支持两种语法形式：
    //- 作为运算符：typeof x。
    //- 函数形式：typeof(x)。
    //- 换言之，有括号和没有括号，得到的结果是一样的。


console.log(`number: ${typeof 0}`); // number: number

console.log(`bigInt: ${typeof 0n}`); // bigInt: bigint

console.log(`boolean: ${typeof true}`); //boolean: boolean

console.log(`String: ${typeof "love"}`); // String: string

// 这是官方承认的 typeof 的行为上的错误，这个问题来自于 JavaScript 语言的早期，并为了兼容性而保留了下来。
// null 绝对不是一个 object。null 有自己的类型，它是一个特殊值。
console.log(`null: ${typeof null}`); // null: object

console.log(`undefined: ${typeof undefined}`); // undefined: undefined

console.log(`symbol: ${typeof Symbol("is")}`); // symbol: symbol

// Math 是一个提供数学运算的内建 object。
console.log(`object: ${typeof Math}`); //object: object

console.log(`array: ${typeof [1, 2, 3]}`); //array: object

// 因为 console.log 在 JavaScript 语言中是一个函数
// 在 JavaScript 语言中没有一个特别的 “function” 类型。函数隶属于 object 类型。
// 但是 typeof 会对函数区分对待，并返回 "function"。这也是来自于 JavaScript 语言早期的问题。
// 从技术上讲，这种行为是不正确的，但在实际编程中却非常方便。
console.log(`function: ${typeof console.log}`) //function: function


/**
    总结
        JavaScript 中有八种基本的数据类型（译注：前七种为基本数据类型，也称为原始类型，而 object 为复杂数据类型）。

        number      用于任何类型的数字：整数或浮点数，在 ±(253-1) 范围内的整数。
        bigint      用于任意长度的整数。
        string      用于字符串：一个字符串可以包含 0 个或多个字符，所以没有单独的单字符类型。
        boolean     用于 true 和 false。
        null        用于未知的值 —— 只有一个 null 值的独立类型。
        undefined   用于未定义的值 —— 只有一个 undefined 值的独立类型。
        symbol      用于唯一的标识符。
        object      用于更复杂的数据结构。
        我们可以通过 typeof 运算符查看存储在变量中的数据类型。

    两种形式：typeof x 或者 typeof(x)。
        以字符串的形式返回类型名称，例如 "string"。
        typeof null 会返回 "object" —— 这是 JavaScript 编程语言的一个错误，实际上它并不是一个 object。
 */



 console.log("----------------------------------------------------");


 let foo = "hello";

 console.log( `hello ${1}` ); // ?
 
 console.log( `hello ${"foo"}` ); // ?
 
 console.log( `hello ${foo}` ); // ?

// hello 1
// hello foo
// hello hello



