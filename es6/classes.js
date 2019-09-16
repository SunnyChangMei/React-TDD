class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  speak() {
    return `Hi, I'm ${this.name}, and I am ${this.color}.`;
  }
}

//? create instance use new key keyword
const lion = new Animal('Mufasa', 'golden');
console.log(lion.speak());

//? create instance use extends
class Cat extends Animal {
  constructor(name, color, age, size) {
    // super() method/function calls its parent class
    super(name, color);
    this.age = age;
    this.size = size;
  }

  roar() {
    return `Hi, I'm ${this.name}, and I am ${this.color} and age is ${this.age}.`;
  }
}

const cat1 = new Cat('Moon', 'Yellow', 5, 'Small');
console.log(cat1);
const cat2 = new Cat('Mars', 'Read', 15, 'Medium');
console.log(cat2);
console.log(cat2.roar())
