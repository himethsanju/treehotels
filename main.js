//the global variables booking 
let fullName = "";
let email = "";
let checkInDate = "";
let roomTypes = [];
let noOfAdults = 1;
let noOfChildren = 1;
let checkOutDate = "";
let extras = [];
let views = [];

//the global variables adventure
let locAdults = 1;
let locChildren = 1;
let forAdults = 1;
let forChildren = 1;

//constants
const singleRoomCost = 25000;
const doubleRoomCost = 35000;
const tripleRoomCost = 40000;
const extraBed = 8000;
const mealCostAboveFive = 5000;
const localAdultCost = 5000;
const adultGuideCost = 1000;
const childrenGuideCost = 500;
const locAdultDiving = 5000;
const locChildrenDiving = 2000;
const forAdultDiving = 10000;
const forChildrenDiving = 5000;

//other global variables
let totalCost = 0;
let roomCost = 0;
let guideCost = 0;

//getting html elements
const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("fullEmail");
const singleRoomCheckbox = document.getElementById("singleRoom");
const doubleRoomCheckbox = document.getElementById("doubleRoom");
const tripleRoomCheckbox = document.getElementById("tripleRoom");
const noAdultsInput = document.getElementById("noAdults");
const noChildrenInput = document.getElementById("noChildren");
const aboveFiveInput = document.getElementById("aboveFive");
const checkInInput = document.getElementById("checkIn");
const checkOutInput = document.getElementById("checkOut");
const checkInDisplay = document.getElementById("checkInDisplay");
const checkOutDisplay = document.getElementById("checkOutDisplay");
const localAdults = document.getElementById("locAdults");
const localChildren = document.getElementById("locChildren");
const foreignAdults = document.getElementById("forAdults");
const foreignChildren = document.getElementById("forChildren");
const adultGuideCheckBox = document.getElementById("adultGuide");
const childrenGuideCheckBox = document.getElementById("childrenGuide");
const localAdultDive = document.getElementById("adultHours");
const localChildrenDive = document.getElementById("childHours");
const forAdultDive = document.getElementById("forAdultHours");
const forChildrenDive = document.getElementById("forChildHours");
const costDisplayAboveFive = document.getElementById("childrenCostDisplay");


//for atleast one room type to be selected 
document.getElementById("detailBook").addEventListener("click", function(event) {
  const roomTypes = document.querySelectorAll(".roomType");
  let atLeastOneChecked = false;

  roomTypes.forEach(function(room) {
      if (room.checked) {
          atLeastOneChecked = true;
      }
  });

  if (!atLeastOneChecked) {
      alert("Please select at least one room type.");
      event.preventDefault();
  }
}); 

//for the hover effect to be active in rooms
document.addEventListener("DOMContentLoaded", function() {
  const roomButtons = document.querySelectorAll('.roomButton input[type="checkbox"]');

  roomButtons.forEach(function(button) {
      button.addEventListener("change", function() {
          if (this.checked) {
              this.parentElement.classList.add("active");
          } else {
              this.parentElement.classList.remove("active");
          }
      });
  });
});

//for the hover effect to be active in extra requirements
document.addEventListener("DOMContentLoaded", function() {
  const extraButtons = document.querySelectorAll('.extraButton input[type="checkbox"]');

  extraButtons.forEach(function(button) {
      button.addEventListener("change", function() {
          if (this.checked) {
              this.parentElement.classList.add("active");
          } else {
              this.parentElement.classList.remove("active");
          }
      });
  });
});

//for the hover effect to be active in rooms
document.addEventListener("DOMContentLoaded", function() {
  const guideButtons = document.querySelectorAll('.guideButton input[type="checkbox"]');

  guideButtons.forEach(function(button) {
      button.addEventListener("change", function() {
          if (this.checked) {
              this.parentElement.classList.add("active");
          } else {
              this.parentElement.classList.remove("active");
          }
      });
  });
});


//display the full name
const fullNameDisplay = document.getElementById("fullNameDisplay");

function updateFullName() {
    fullNameDisplay.textContent = `Full Name: ${fullNameInput.value}`;
}

const fullEmailDisplay = document.getElementById("fullEmailDisplay");

function updateFullEmail() {
    fullEmailDisplay.textContent = `Email: ${emailInput.value}`;
}

//display number of adults for booking details
const displayAdults = document.getElementById("noOfAdultsDisplay");

function updateCostA() {
    const numAdults = parseInt(noAdultsInput.value);
    const totalNoOfAdults = numAdults * noOfAdults;

    noOfAdultsDisplay.textContent = `No of Adults: ${totalNoOfAdults}`;
}

//display number of children for booking details
const displayChildren = document.getElementById("noOfChildrenDisplay");

function updateCostB() {
    const numChildren = parseInt(noChildrenInput.value);
    const totalNoOfChildren = numChildren * noOfChildren;

    noOfChildrenDisplay.textContent = `No of Children: ${totalNoOfChildren}`;
}

//display number of local adults for adventure details
const displayLocalAdults = document.getElementById("adultNumber");

function updateCostC() {
    const numLocAdult = parseInt(localAdults.value);
    const totalNoOfLocAdults = numLocAdult * locAdults;

    adultNumber.textContent = `No of Adults: ${totalNoOfLocAdults}`;
}

//display number of local children for adventure details
const displayLocalChildren = document.getElementById("childrenNumber");

function updateCostD() {
    const numLocChildren = parseInt(localChildren.value);
    const totalNoOfLocChildren = numLocChildren * locChildren;

    displayLocalChildren.textContent = `No of Children (above 5yrs): ${totalNoOfLocChildren}`;
}

//display check in dates
function updateCheckInDisplay() {
  checkInDisplay.textContent = `Check In date: ${checkInInput.value}`;
}

//display check out dates
function updateCheckOutDisplay() {
  checkOutDisplay.textContent = `Check Out date: ${checkOutInput.value}`;
}

//select one or more extra requirements and display 
const checkboxes = document.querySelectorAll(".extraRequire");
const extraDisplay = document.getElementById("extraDisplay");

function updateExtraDisplay() {
    const selectedOptions = [...checkboxes].filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
    extraDisplay.textContent = `Extra Requirements: ${selectedOptions.join(", ") || "None"}`;
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", updateExtraDisplay);
});

//display single room cost
function calculateSingleRoom() {
  const singleRoomCostDisplay = document.getElementById("singleRoomCostDisplay");

  if (singleRoomCheckbox.checked) {
    roomCost = singleRoomCost; 
  } else {
    roomCost = 0;
  }

  singleRoomCostDisplay.textContent = `Single Room Cost: $${roomCost}`;
}

//display double room cost
function calculateDoubleRoom() {
  const doubleRoomCostDisplay = document.getElementById("doubleRoomCostDisplay");

  if (doubleRoomCheckbox.checked) {
    roomCost = doubleRoomCost; 
  } else {
    roomCost = 0; 
  }

  doubleRoomCostDisplay.textContent = `Double Room Cost: $${roomCost}`;
}

//display triple room cost
function calculateTripleRoom() {
  const tripleRoomCostDisplay = document.getElementById("tripleRoomCostDisplay");

  if (tripleRoomCheckbox.checked) {
    roomCost = tripleRoomCost; 
  } else {
    roomCost = 0; 
  }

  tripleRoomCostDisplay.textContent = `Triple Room Cost: $${roomCost}`;
}


// Function to calculate the total cost
function calculateTotalCost() {
  totalCost = 0;

  if (singleRoomCheckbox.checked) {
    totalCost += singleRoomCost;
  }

  if (doubleRoomCheckbox.checked) {
    totalCost += doubleRoomCost;
  }

  if (tripleRoomCheckbox.checked) {
    totalCost += tripleRoomCost;
  }

  const childrenAbove = parseInt(aboveFiveInput.value);
  totalCost += childrenAbove * mealCostAboveFive;

  totalCostDisplay.textContent = `Current booking cost : $${totalCost}`;

  const totalCostAboveFive = childrenAbove * mealCostAboveFive;
  costDisplayAboveFive.textContent = `Extra meal for Kids above 5yrs: $${totalCostAboveFive}`;

}

// Functions to calculate guide costs
function calculateAdultGuide() {
  const adultGuideCostDisplay = document.getElementById("adultGuideCost");

  if (adultGuideCheckBox.checked) {
    guideCost = adultGuideCost; 
  } else {
    guideCost = 0;
  }

  adultGuideCostDisplay.textContent = `Adult Guide Cost: $${guideCost}`;
}

function calculateChildrenGuide() {
  const childrenGuideCostDisplay = document.getElementById("childrenGuideCost");

  if (childrenGuideCheckBox.checked) {
    guideCost = childrenGuideCost; 
  } else {
    guideCost = 0;
  }

  childrenGuideCostDisplay.textContent = `Children Guide Cost: $${guideCost}`;
}

// Functions to display adventure details for locals
const durationLocalAdult = document.getElementById("adultNoCost");

function calculateCost() {
  const durLocAdult = parseInt(localAdultDive.value);
  const totalDuration = durLocAdult * locAdultDiving;

  durationLocalAdult.textContent = `Cost for Adults per (${durLocAdult}hr): $${totalDuration}`;
}

const durationLocalChildren = document.getElementById("childrenNoCost");

function calculateCostA() {
  const durLocChild = parseInt(localChildrenDive.value);
  const locChildrenDuration = durLocChild * locChildrenDiving;

  durationLocalChildren.textContent = `Cost for Children per (${durLocChild}hr): $${locChildrenDuration}`;
}

// Functions to display adventure details for foreigners
const durationForeignAdults = document.getElementById("foreignNoAdultCost");

function calculateCostB() {
  const durationForAdults = parseInt(forAdultDive.value);
  const forAdultDuration = durationForAdults * forAdultDiving;

  durationForeignAdults.textContent = `Cost for Foreign adults per (${durationForAdults}hr): $${forAdultDuration}`;
}

const durationForeignChildren = document.getElementById("foreignChildrenNoCost");

function calculateCostC() {
  const durationForChildren = parseInt(forChildrenDive.value);
  const forChildrenDuration = durationForChildren * forChildrenDiving;

  durationForeignChildren.textContent = `Cost for Foreign Children per (${durationForChildren}hr): $${forChildrenDuration}`;
}

//display number of foreign adults for adventure details
const displayForeignAdults = document.getElementById("foreignAdults");

function updateCostE() {
  const numForAdults = parseInt(foreignAdults.value);
  const totalNoOfForAdults = numForAdults * forAdults;

  foreignNumber.textContent = `No of Foreign Adults: ${totalNoOfForAdults}`;
}

//display number of foreign children for adventure details
const displayForeignChildren = document.getElementById("foreignChildNumber");

function updateCostF() {
  const numForChildren = parseInt(foreignChildren.value);
  const totalNoOfForChildren = forChildren * numForChildren;

  displayForeignChildren.textContent = `No of Children (above 5yrs): ${totalNoOfForChildren}`;
}

//the event listeners
fullNameInput.addEventListener("input", updateFullName);
emailInput.addEventListener("input", updateFullEmail);
singleRoomCheckbox.addEventListener("change", calculateTotalCost);
doubleRoomCheckbox.addEventListener("change", calculateTotalCost);
tripleRoomCheckbox.addEventListener("change", calculateTotalCost);
noAdultsInput.addEventListener("input", updateCostA);
noChildrenInput.addEventListener("input", updateCostB);
aboveFiveInput.addEventListener("input", calculateTotalCost);
checkInInput.addEventListener("input", updateCheckInDisplay);
checkOutInput.addEventListener("input", updateCheckOutDisplay);
localAdults.addEventListener("input", updateCostC);
localChildren.addEventListener("input", updateCostD);
foreignAdults.addEventListener("input", updateCostE);
foreignChildren.addEventListener("input", updateCostF);
adultGuideCheckBox.addEventListener("change", calculateAdultGuide);
childrenGuideCheckBox.addEventListener("change", calculateChildrenGuide);
localAdultDive.addEventListener("input", calculateCost);
localChildrenDive.addEventListener("input", calculateCostA);
forAdultDive.addEventListener("input", calculateCostB);
forChildrenDive.addEventListener("input", calculateCostC);
