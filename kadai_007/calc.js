const num=15;

console.log(num);


// 変数(num)が3の倍数の場合、“3の倍数です”と出力されている
if(num %3===0 && num %5===0) {
    console.log("3と5の倍数です");
}

else if(num % 3 === 0) {
    console.log("3の倍数です");
}

else if (num % 5=== 0) {
    console.log("5の倍数です");
}

else {
    console.log(num);
}