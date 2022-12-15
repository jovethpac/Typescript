var Person = /** @class */ (function () {
    //then create the constructor with their type of data
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
//now create a new object
var pearce = new Person("Pearce", 25); //another way of making it strict...
console.log(pearce);
