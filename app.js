// var birds = 3;

// function dogHouse() {
//   var dogs = 8;
//   function showDogs(){
//    console.log(dogs);
//   }
//   return showDogs;
// }

// var getDogs = dogHouse();

// getDogs(); // 8

function makeCounter(noun) {
 var count = 0;
 return function() {
  count += 1;
  return count + '  ' + noun;
 }
}