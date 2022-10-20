// Access and output Oranges.
// Remove the Banana from the array.
// Sort the array in order.
// Put "Kiwi" at the end of the array.
// Remove "Apples" from the array.
// Sort the array in reverse order, i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
// You should at the end have ["Kiwi", "Oranges", "Blueberries"]

var array = ["Banana", "Apples", "Oranges", "Blueberries"];
array.forEach(element => {
    if (element == "Banana") {
        console.log(element);
    }
});

array.shift();
console.log(array);
array.sort();
console.log(array);
array.push("Kiwi");
console.log(array);
array.splice(0,1);
console.log(array);
array.reverse(array);
console.log(array);


const topChoice = [
    ["red", "green", "blue", "black"], 
    ["Toyota", "Volvo", "BMW", "Tesla"],
    ["apple", "banana", "cherry", "corn"],
]

for (let j =0; j < topChoice.length; j++){
    let output = "";
    for (let i= 0; i < topChoice.length[j]; i++){
        //console.log(`My ${j+1} Choice is ${topChoice[i][j]}`)
        output +=  `${topChoice[i][j]} `;
    }
    let msg = "1111";
    switch (j) {
        case 0 : 
            msg = "st";
            break;
        case 1 : 
            msg = "nd";
            break;
        case 2 : 
            msg = "rd";
            break;
        default :
            msg = "th";
            break;    
    }
    console.log("My " + (j+1) + msg + " choice is: "+ output);
}


console.log(topChoice.length);

const recipe = {
    title:"My recipe", 
    servings :4, 
    ingredients:["potato", "meat", "salt"]
};

console.log(recipe.title);
console.log("Serves: " + recipe.servings);
console.log("Ingredients: " + recipe.ingredients.toLocaleString())
