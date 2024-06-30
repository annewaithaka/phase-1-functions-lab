// Code your solution in this file!
function distanceFromHqInBlocks(position) {
  const hqposition = 42;
  
  return Math.abs(position - hqposition);
  }


  function distanceFromHqInBlocks(street) {
    let headquartersStreet = 42;
    
    if (street > headquartersStreet) {
        return street - headquartersStreet;
    } else {
        return headquartersStreet - street;
    }
}

  function distanceFromHqInFeet(street) {
    let blockinfeet = 264; 
    
    let blocks = distanceFromHqInBlocks(street);
    let feet = blocks * blockinfeet;
    return feet;
}
  

  function distanceTravelledInFeet(start, destination) {
let feetPerBlock = 264; 
    
    let blockDistance;
    
    if (start > destination) {
        blockDistance = start - destination;
    } else {
        blockDistance = destination - start;
    }
    
    const distanceinFeet = blockDistance * feetPerBlock;
    
    return distanceinFeet;
}

  function calculatesFarePrice(start, destination) {
      const blocksTravelled = Math.abs(destination - start);
      
      if (blocksTravelled === 0 || blocksTravelled === 1) {
          return 0;
      } else {
          const fare = blocksTravelled * 2; 
          return fare;
      }
  }

  function calculatesFarePrice(start, destination) {
    let blockinfeet = 264; 
    let blocksTravelled = Math.abs(destination - start);
    let totalFeetTravelled = blocksTravelled * blockinfeet;
    
    if (totalFeetTravelled <= 400) {
        return 0; 
        // since the first 400ft are free
    } else if (totalFeetTravelled > 400 && totalFeetTravelled <= 2000) {
        let chargeableFeet = totalFeetTravelled - 400;
        let fare = chargeableFeet * 0.02; // charges 2 cents per foot
        return parseFloat(fare.toFixed(2)); // Rounded to 2 decimal places
    } else {
        // since distnce does not exceed 2000
        return "Distance exceeds fare calculation rules.";
    }
}

function calculatesFarePrice(start, destination) {
  let blockinfeet = 264; // assume 1 block = 264 feet
  let blocksTravelled = Math.abs(destination - start);
  let totalFeetTravelled = blocksTravelled * blockinfeet;
  

 if (totalFeetTravelled <= 400) {
      return 0; // free for the first 400ft
  } else if (totalFeetTravelled > 400 && totalFeetTravelled <= 2000) {
      let chargeableFeet = totalFeetTravelled - 400;
      let fare = chargeableFeet * 0.02; // 2 cents/foot
      return parseFloat(fare.toFixed(2)); // Rounded to 2 decimal places
  } else {
      return 25; // $25 charged for distances over 2000ft
  }
}


