
// 导出和导入
    //- 导出（export）和导入（import）指令有几种语法变体。

// 在声明前导出
    // 可以通过在声明之前放置 export 来标记任意声明为导出，无论声明的是变量，函数还是类都可以。

// 例如，这里的所有导出均有效：
// 导出数组
export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// 导出 const 声明的变量
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// 导出类
export class User {
  constructor(name) {
    this.name = name;
  }
}


// 导出 class/function 后没有分号
    // 注意，在类或者函数前的 export 不会让它们变成 函数表达式。尽管被导出了，但它仍然是一个函数声明。






// -------------------------------------------------------------------------------------------





// 导出与声明分开

// 下面的例子中，先声明函数，然后再导出它们：
// 📁 say.js
function sayHi(user) {
    console.log(`Hello, ${user}!`);
}
  
function sayBye(user) {
    console.log(`Bye, ${user}!`);
}
  
export {sayHi, sayBye}; // 导出变量列表, 也可以把 export 放在函数上面。






// -------------------------------------------------------------------------------------------




// Import *
    // 通常，把要导入的东西列在花括号 import {...} 中，就像这样：

// 📁 main.js
import {sayHi, sayBye} from './say.js';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!


// 但是如果有很多要导入的内容，我们可以使用 import * as <obj> 将所有内容导入为一个对象，例如：
// 📁 main.js
import * as say from './say.js';
say.sayHi('John');
say.sayBye('John');


// 但是通常要明确列出我们需要导入的内容
    //- 1. 现代的构建工具（webpack 和其他工具）将模块打包到一起并对其进行优化，以加快加载速度并删除未使用的代码。
    //- 2. 明确列出要导入的内容会使得名称较短：sayHi() 而不是 say.sayHi()。
    //- 3. 导入的显式列表可以更好地概述代码结构：使用的内容和位置。它使得代码支持重构，并且重构起来更容易。





// -------------------------------------------------------------------------------------------






// Import “as”
    // 可以使用 as 让导入具有不同的名字。

// 例如，简洁起见，将 sayHi 导入到局部变量 hi，将 sayBye 导入到 bye：

// 📁 main.js
import {sayHi as hi, sayBye as bye} from './say.js';
hi('John'); // Hello, John!
bye('John'); // Bye, John!





// -------------------------------------------------------------------------------------------





// Export “as”
    // 导出也具有类似的语法。

// 将函数导出为 hi 和 bye：
// 📁 say.js
export {sayHi as hi, sayBye as bye};

// 现在 hi 和 bye 是在外面使用时的正式名称：
// 📁 main.js
import * as say from './say.js';

say.hi('John'); // Hello, John!
say.bye('John'); // Bye, John!






// -------------------------------------------------------------------------------------------




// Export default
    // 在实际中，主要有两种模块。
        //- 包含库或函数包的模块，像上面的 say.js。
        //- 声明单个实体的模块，例如模块 user.js 仅导出 class User。


// 大部分情况下，开发者倾向于使用第二种方式，以便每个“东西”都存在于它自己的模块中。

// 当然，这需要大量文件，因为每个东西都需要自己的模块，但这根本不是问题。
// 实际上，如果文件具有良好的命名，并且文件夹结构得当，那么代码导航（navigation）会变得更容易。

// 模块提供了一个特殊的默认导出 export default 语法，以使“一个模块只做一件事”的方式看起来更好。

// 将 export default 放在要导出的实体前：
// 📁 user.js
export default class User { // 只需要添加 "default" 即可
  constructor(name) {
    this.name = name;
  }
}
// 每个 件可能只有一个 export default：

//然后将其导入而不需要花括号：

// 📁 main.js
import User from './user.js'; // 不需要花括号 {User}，只需要写成 User 即可
new User('John');


// 请记住，import 命名的导出时需要花括号，而 import 默认的导出时不需要花括号。


/*
    命名的导出	                    默认的导出
    export class User {...}	       export default class User {...}
    import {User} from ...	       import User from ...
*/



// 可以在一个模块中同时有默认的导出和命名的导出，但是实际上人们通常不会混合使用它们。
// 模块要么是命名的导出要么是默认的导出。

// 由于每个文件最多只能有一个默认的导出，因此导出的实体可能没有名称。

// 例如，下面这些都是完全有效的默认的导出：
/*
    export default class { // 没有类名
    constructor() { ... }
    }
    export default function(user) { // 没有函数名
    alert(`Hello, ${user}!`);
    }
*/

// 导出单个值，而不使用变量
export default ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// 不指定名称是可以的，因为每个文件只有一个 export default，因此不带花括号的 import 知道要导入的内容是什么。

// 如果没有 default，这样的导出将会出错：
export class { // Error!（非默认的导出需要名称）
  constructor() {}
}





// -------------------------------------------------------------------------------------------





// “default” 名称
    // 在某些情况下，default 关键词被用于引用默认的导出。

// 例如，要将函数与其定义分开导出：
function sayHi(user) {
    alert(`Hello, ${user}!`);
}

// 就像我们在函数之前添加了 "export default" 一样
export {sayHi as default};

// 或者，另一种情况，假设模块 user.js 导出了一个主要的默认的导出和一些命名的导出（这种情况很少见，但确实会发生）：

// 📁 user.js
export default class User {
  constructor(name) {
    this.name = name;
  }
}

export function sayHi(user) {
  alert(`Hello, ${user}!`);
}


// 这是导入默认的导出以及命名的导出的方法：
// 📁 main.js
import {default as User, sayHi} from './user.js';

new User('John');




// 如果将所有东西 * 作为一个对象导入，那么 default 属性正是默认的导出：
// 📁 main.js
import * as user from './user.js';
let User = user.default; // 默认的导出
new User('John');







// -------------------------------------------------------------------------------------------





// 我应该使用默认的导出吗？
    // 命名的导出是明确的。它们确切地命名了它们要导出的内容，因此我们能从它们获得这些信息，这是一件好事。

// 命名的导出会强制我们使用正确的名称进行导入：
import {User} from './user.js';
// 导入 {MyUser} 不起作用，导入名字必须为 {User}

// 对于默认的导出，总是在导入时选择名称：
import User from './user.js'; // 有效
import MyUser from './user.js'; // 也有效


// 使用任何名称导入都没有问题
// 因此，团队成员可能会使用不同的名称来导入相同的内容，这不好。

// 通常，为了避免这种情况并使代码保持一致，可以遵从这条规则，即导入的变量应与文件名相对应，例如：
import User from './user.js';
import LoginForm from './loginForm.js';
import func from '/path/to/func.js';
// ...

// 但是，一些团队仍然认为这是默认的导出的严重缺陷。
// 因此，他们更倾向于始终使用命名的导出。即使只导出一个东西，也仍然使用命名的导出，而不是默认的导出。
// 这也使得重新导出更容易。





// -------------------------------------------------------------------------------------------





// 重新导出
    // “重新导出（Re-export）”语法 export ... from ... 允许导入内容，并立即将其导出（可能是用的是其他的名字）

// 就像这样：
export {sayHi} from './say.js'; // 重新导出 sayHi
export {default as User} from './user.js'; // 重新导出 default


// 为什么要这样做？我们看一个实际开发中的用例。
// 想象一下，我们正在编写一个 “package”：一个包含大量模块的文件夹，其中一些功能是导出到外部的
// 并且其中一些模块仅仅是供其他 package 中的模块内部使用的 “helpers”。

// 文件结构可能是这样的：
/*
    auth/
        index.js
        user.js
        helpers.js
        tests/
            login.js
        providers/
            github.js
            facebook.js
            ...
*/

// 我们想通过单个入口，即“主文件” auth/index.js 来公开 package 的功能，进而可以像下面这样使用我们的 package：
import {login, logout} from 'auth/index.js'

// 我们的想法是，使用我们 package 的开发者，不应该干预其内部结构，不应该搜索我们 package 的文件夹中的文件。
// 我们只在 auth/index.js 中导出必须的内容，并保持其他内容“不可见”。

// 由于实际导出的功能分散在 package 中，所以我们可以将它们导入到 auth/index.js，然后再从中导出它们：

// 📁 auth/index.js
// 导入 login/logout 然后立即导出它们
import {login, logout} from './helpers.js';
export {login, logout};

// 将默认导出导入为 User，然后导出它
import User from './user.js';
export {User};
// ...

// 现在使用我们 package 的人可以 import {login} from "auth/index.js"。

// 语法 export ... from ... 只是下面这种导入-导出的简写：
// 📁 auth/index.js
// 导入 login/logout 然后立即导出它们
export {login, logout} from './helpers.js';

// 将默认导出导入为 User，然后导出它
export {default as User} from './user.js';







// -------------------------------------------------------------------------------------------




// 重新导出默认导出
    // 重新导出时，默认导出需要单独处理。

// 假设我们有一个 user.js 脚本，其中写了 export default class User，并且我们想重新导出类 User：
// 📁 user.js
export default class User {
    // ...
}

// 可能会遇到两个问题：
    // 1. export User from './user.js' 无效。这会导致一个语法错误。
    // 要重新导出默认导出，我们必须明确写出 export {default as User}，就像上面的例子中那样。

    // 2. export * from './user.js' 重新导出只导出了命名的导出，但是忽略了默认的导出。
    // 如果我们想将命名的导出和默认的导出都重新导出，那么需要两条语句：
        export * from './user.js'; // 重新导出命名的导出
        export {default} from './user.js'; // 重新导出默认的导出

// 重新导出一个默认导出的这种奇怪现象，是某些开发者不喜欢默认导出，而是喜欢命名的导出的原因之一。







// -------------------------------------------------------------------------------------------







/*
    总结
        export 类型：
            在声明一个 class/function/… 之前：
                export [default] class/function/variable ...
            独立的导出：
                export {x [as y], ...}.
            重新导出：
                export {x [as y], ...} from "module"
                export * from "module"（不会重新导出默认的导出）。
                export {default [as y]} from "module"（重新导出默认的导出）。

        导入：
            模块中命名的导出：
                import {x [as y], ...} from "module"
            默认的导出：
                import x from "module"
                import {default as x} from "module"
            所有：
                 import * as obj from "module"
            导入模块（它的代码，并运行），但不要将其赋值给变量：
                import "module"

        把 import/export 语句放在脚本的顶部或底部，都没关系。
        因此，从技术上讲，下面这样的代码没有问题：
        sayHi();
        // ...
        import {sayHi} from './say.js'; // 在文件底部导入

        在实际开发中，导入通常位于文件的开头，但是这只是为了更加方便。


        请注意在 {...} 中的 import/export 语句无效。

        像这样的有条件的导入是无效的：
        if (something) {
            import {sayHi} from "./say.js"; // Error: import must be at top level
        }
*/