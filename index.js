// import Cat from "./cat.js";
// import Cage from "./cage.js";
// import Shelter from "./shelter.js";
// import Owner from "./owner.js";

const meow = new Cat("Tetris", 2012, "homeless", 4);
const meow2 = new Cat("Mint", 2021, "homeless", 4);
const meow3 = new Cat("Pussy", 2015, "persian", 4);
const meow4 = new Cat("Lisik", 2012, "british", 4);
const meow5 = new Cat("Murlo", 2007, "british", 4);
const meow6 = new Cat("Murlidze", 2005, "scottish", 4);
const meow7 = new Cat("Tolik", 2003, "siberian", 4);
const meow8 = new Cat("Dorik", 2004, "shorthair", 4);
const meow9 = new Cat("Pusik", 2007, "scottish", 4);
const meow10 = new Cat("Purrlidze", 2012, "persian", 4);

console.log(meow.name);
const cagu = new Cage("large");
const cagu2 = new Cage("small");
const cagu3 = new Cage("medium");
const cagu4 = new Cage("small");
const cagu5 = new Cage("medium");
const cagu6 = new Cage("small");

const natahinDom = new Shelter("Natahin Dom");
const nataha = new Owner("Nataha", 1993);
nataha.shelter = natahinDom;
nataha.shelter;

cagu.addAnimal(meow);
cagu.addAnimal(meow2);
cagu2.addAnimal(meow3);
cagu2.addAnimal(meow4);
cagu2.addAnimal(meow5);
cagu2.addAnimal(meow9);
cagu2.addAnimal(meow10);
cagu3.addAnimal(meow6);
cagu4.addAnimal(meow7);
cagu4.addAnimal(meow8);

meow.hungry();
meow3.hungry();
meow4.hungry();
meow6.hungry();

cagu.dirty();
cagu2.dirty();
cagu4.dirty();

natahinDom.addCage(cagu);
natahinDom.addCage(cagu2);
natahinDom.addCage(cagu3);
natahinDom.addCage(cagu4);
natahinDom.addCage(cagu5);
natahinDom.addCage(cagu6);

// natahinDom.dirtyCagesCBAsync((error, dirtyCages) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(dirtyCages);
//     // cague.clean();
//     // cague2.clean();
//     // cague4.clean();
//     natahinDom.dirtyCagesCBAsync((error, dirtyCages) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log(dirtyCages);
//         natahinDom.dirtyCagesCBAsync((error, dirtyCages) => {
//           if (error) {
//             console.log(error);
//           } else {
//             console.log(dirtyCages);
//           }
//         });
//       }
//     });
//   }
// });

// natahinDom
//   .dirtyCagesAsync()
//   .then((dirtyCages) => {
//     console.log(
//       "1st promise has been resolved. We got some filthy cages for you:",
//       dirtyCages
//     );
//     return natahinDom.dirtyCagesAsync();
//   })
//   .then((dirtyCages) => {
//     console.log(
//       "2nd promise has been resolved. We got some filthy cages for you:",
//       dirtyCages
//     );
//     // cagu.clean();
//     // cagu2.clean();
//     // cagu4.clean();
//     return natahinDom.dirtyCagesAsync();
//   })
//   .then((dirtyCages) => {
//     console.log(
//       "3rd promise has been resolved. We got some filthy cages for you:",
//       dirtyCages
//     );
//   })
//   .catch((error) => {
//     console.log("OUCH! We caught an error:", error);
//   })

async function findDirtyCages() {
  try {
    const dirtyCages = await natahinDom.dirtyCagesAsync();
    console.log("1st promise has been resolved.", dirtyCages);
    const dirtyCages2 = await natahinDom.dirtyCagesAsync();
    console.log("2nd promise has been resolved.", dirtyCages2);
    // cagu.clean();
    // cagu2.clean();
    // cagu4.clean();
    const dirtyCages3 = await natahinDom.dirtyCagesAsync();
    console.log("3rd promise has been resolved.:", dirtyCages3);
  } catch (error) {
    console.log("OUCH! We caught an error:", error);
  }
}
findDirtyCages();
