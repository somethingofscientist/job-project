const array = [
   { id: 3, name: 'Central Microscopy', fiscalYear: 2018 },
   { id: 5, name: 'Crystallography Facility', fiscalYear: 2018 },
   { id: 3, name: 'Central Microscopy', fiscalYear: 2017 },
   { id: 5, name: 'Crystallography Facility', fiscalYear: 2017 }
];

const result = [];
const map = new Map();

for (const item of array) {
   if (!map.has(item.id)) {
      map.set(item.id, true);    // set any value to Map
      result.push({
         id: item.id,
         name: item.name
      });
   }
}
// console.log(result)


// console.log("mapping ")
// let nums = "hellothere"
let nums = [1, 5, 3, 8, 21, 2, 62, 2]

function mapping(nums) {
   let res = [];
   let m = new Map();

   for (let i = 0; i < nums.length; i++) {
      m.set(nums[i], m.get(nums[i]) + 1 || 1);
   }
   return m
}
console.log(mapping(nums))