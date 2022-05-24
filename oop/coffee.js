
var visitor = {
    coffee: "",
    order: function(casher) {
        casher.make();
    },
    take: function(coffee) {
        console.log(coffee);
    }
};

var casher = {
    make: function(baristar) {
        var value = baristar.give(this);
        visitor.take(value);
    }
};

var baristar = {
    give: function(casher) {
        return "coffee";
    }
};
