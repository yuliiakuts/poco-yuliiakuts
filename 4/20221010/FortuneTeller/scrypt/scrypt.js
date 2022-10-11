let numberOfChildren = ["1", "2", "3", "4"];
let parentsName = ["John", "Luis", "Sam"];
let geoLocation = ["Africa", "Asia", "Europe", "Australia"];
let jobTitle = ["car driver", "doctor", "teacher"];

document.write("You will be a " + getRandomItem(jobTitle) + " in " + getRandomItem(geoLocation) + ", and married to " + getRandomItem(parentsName) + " with " + getRandomItem(numberOfChildren) + " kids.")

// function to get a random item from an array

function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

