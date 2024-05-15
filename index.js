// Code your solution here
// findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.

// fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

// matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.


function findMatching(drivers, nameOFDriver){
    const result = drivers.filter((driver) => nameOFDriver.toLowerCase() === driver.toLowerCase());
    return result
}
function fuzzyMatch(drivers, nameOFDriver){
    const result = drivers.filter((driver) => driver.startsWith(nameOFDriver))
    return result 
}

  
function matchName(drivers, nameOfDriver){
    console.log(drivers)
    console.log(typeof(nameOfDriver))
    const result = drivers.filter((driver)=> driver.name === nameOfDriver)
    return result
   
}
