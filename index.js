const citizens = ['Ryan', 'Kolton', 'Kody',`Ale`,`Kevin`,`Andres`]; // Add more names to grow Loop City!

/////////////////////// DON'T ALTER THIS CODE //////////////////////////
const populationCount = document.getElementById('populationCount');
const citizenList = document.getElementById('citizenList');
const addCitizenBtn = document.getElementById('addCitizenBtn');
populationCount.innerText = citizens.length;
////////////////////////////////////////////////////////////////////////

// HINT!!! Looks like the way to get the amount of names is citizens.length
// Maybe that could be used in our loop.....just a thought


/*
  CODE TO PUT INSIDE OF LOOP BLOCK
  const listElement = document.createElement('li');
  listElement.innerText = citizens[i];
  citizenList.appendChild(listElement);
*/

/////////////////////// WRITE YOUR CODE HERE /////////////////////////
console.log( citizens )
console.log(populationCount)
console.log(addCitizenBtn)
console.log(citizenList)
citizenList.innerText = citizens

//Logic, I want the names that i have in citizen to appear

for (let i = 0; i < citizens.length; i++){
    const listElement = document.createElement('li');
    listElement.innerText = citizens[i];
    citizenList.appendChild(listElement);
    console.log(citizens [i])
}


//////////////////////////////////////////////////////////////////////