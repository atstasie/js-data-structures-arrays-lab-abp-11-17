// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name){
  name = drivers.push(name);
}

destructivelyPrependDriver(name){
  name = drivers.unshift(name);
}
