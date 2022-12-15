class Person {
    //first delcare any properties that are apart of this class along with their types
    name: string;
    age: number;
    //then create the constructor with their type of data
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

//now create a new object
let pearce: Person = new Person("Pearce", 25);  //another way of making it strict...
console.log(pearce);

//removes some of the annoying redeclaring warnings we are getting from TypeScript
export{};