function fibonacci(n){
    if (n == 0 || n == 1)
        return n;
    else
        return fibonacci(n-1) + fibonacci(n-2);
}
console.log(fibonacci(10));

//define array
let fib_array = [];

//write a FOR LOOP
for (let i = 0; i <= 10; i++){
    fib_array.push(fibonacci(i));
}
console.log(fib_array);

let name = ["winner", "jane", "chi", "boy"]; //name is an array of one element
let food = ["yam", "beans", "rice", "Mango"]; //food is an array of one element
let fruit = "Mango"
for(let x = 0; x <name.length; x++){
    if(fruit == food[x]){
        console.log(name[x])
    }

}