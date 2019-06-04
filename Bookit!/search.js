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

let restaurantNames = ["Dim Sum House", "Landmark Americana Tap & Grill - University City", "Han Dynasty", "Louie Louie"
    , "Destination Dogs"];
restaurantNames.push(restaurant1, restaurant2);

let searchTerms = {
    alcohol: true,
    noisy: "Loud"
};

function search() {
    for (let i = 1; i < restaurantNames.length; i++) {
        for (let i = 1; i <= restaurantNames.length; i++) {
            for (var key in searchTerms) {
                if (searchTerms[key] === restaurantNames[i][key]) {
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

function searchByName() {
    let restaurantQuery = document.getElementById("searchQuery").value.toLowerCase();
    for (let i = 0; i < restaurantNames.length; i++) {
        let restaurantVar = "restaurant" + i;
        if (restaurantNames[i].toLowerCase().includes(restaurantQuery)) {
            document.getElementById(restaurantVar).style.visibility = "visible";
        } else {
            document.getElementById(restaurantVar).style.visibility = "hidden";
        }
    }
}

function resetSearch() {
    for (let i = 0; i < restaurantNames.length; i++) {
        let restaurantVar = "restaurant" + i;
        document.getElementById(restaurantVar).style.visibility = "visible";
    }
}