// search.js

let restaurant1 = {
    title: "Restaurant 1 title",
    addressRestaurant: "Restaurant 1 address",
    ratings: "★★★★☆",
    pricePoint: "$$",
    familyFriendly: true,
    noisy: "Loud",
    proximity: 5,
    alcohol: true,
    parking: true,
    vegetarian: true,
    waitTime: 15
};

let restaurant2 = {
    title: "Restaurant 2 title",
    addressRestaurant: "Restaurant 2 address",
    ratings: "★★☆☆",
    pricePoint: "$$$",
    familyFriendly: false,
    noisy: "Average",
    proximity: 5,
    alcohol: false,
    parking: true,
    vegetarian: false,
    waitTime: 15
};

let restaurants = ["blank"];
restaurants.push(restaurant1, restaurant2);

let searchTerms = {
    alcohol: true,
    noisy: "Loud"
};

function search() {
    for (let i = 1; i < restaurants.length; i++) {
        for (let i = 1; i <= restaurants.length; i++) {
            for (var key in searchTerms) {
                if (searchTerms[key] == restaurants[i][key]) {
                    // var node = document.createElement("LI");
                    // var textnode = document.createTextNode("Restaurant " + i + " has " + key)
                    // node.appendChild(textnode);
                    // document.getElementById("myList").appendChild(node);
                } else {
                    break;
                }
            }
            alert("Restaurant " + i + " fits your search criteria.")
        }
    }
}
