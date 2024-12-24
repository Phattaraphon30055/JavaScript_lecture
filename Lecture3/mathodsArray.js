let arr1 = ["A", true, 2];

// Push and pop
console.log("\n******* Push and Pop *********\n");
console.log(arr1.push("new value")); // เพิ่มค่า "new value" เข้าไปใน arr1
console.log(arr1);
console.log(arr1.pop()); // ลบค่าล่าสุดใน arr1 (Remove last value)
console.log(arr1);

// shift and unshift
console.log("\n******* Shift and Unshift *********\n");
console.log(arr1.unshift("new value")); // เพิ่มค่า "new value" ที่จุดเริ่มต้นของ arr1
console.log(arr1);
console.log(arr1.shift()); // ลบค่าตัวแรกใน arr1 (Remove first value)
console.log(arr1);

// concat
console.log("\n******* Concat *********\n");
let arr2 = ["B", false, 3];
let newArr = arr1.concat(arr2); // รวม arr1 และ arr2
let newArr2 = arr2.concat([1, 2, 3]); // รวม arr2 กับอาร์เรย์ใหม่ [1, 2, 3]
console.log(newArr);
console.log(newArr2);
