// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  //We call the function inside the previous one
  getInstruction("mashedPotatoes", 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction("mashedPotatoes", 2, (step2) => {
      document.querySelector(
        "#mashedPotatoes"
      ).innerHTML += `<li>${step2}</li>`;
      getInstruction("mashedPotatoes", 3, (step3) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step3}</li>`;
        getInstruction("mashedPotatoes", 4, (step4) => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>${step4}</li>`;
          getInstruction("mashedPotatoes", 5, (step5) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step5}</li>`;
          });
          document
            .querySelector("#mashedPotatoesImg")
            .removeAttribute("hidden");
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>READY!</li>`;
        });
      });
    });
  });
});
    //

  const promiseStep1 = obtainInstruction("steak", 1);
  const promiseStep2 = obtainInstruction("steak", 2);
  const promiseStep3 = obtainInstruction("steak", 3);
  const promiseStep4 = obtainInstruction("steak", 4);
  const promiseStep5 = obtainInstruction("steak", 5);
  const promiseStep6 = obtainInstruction("steak", 6);
  const promiseStep7 = obtainInstruction("steak", 7);
  
  obtainInstruction("steak", 0)
    .then((instruction) => {
      document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    })
    .then(() => {
      return promiseStep1.then((instruction) => {
        document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
      });
    })
    .then(() => {
      return promiseStep2.then((instruction) => {
        document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
      });
    })
    .then(() => {
      return promiseStep3.then((instruction) => {
        document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
      });
    })
    .then(() => {
      return promiseStep4.then((instruction) => {
        document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
      });
    })
    .then(() => {
      return promiseStep5.then((instruction) => {
        document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
      });
    })
    .then(() => {
      return promiseStep6.then((instruction) => {
        document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
      });
    })
    .then(() => {
      return promiseStep7.then((instruction) => {
        document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
        document.querySelector("#steakImg").removeAttribute("hidden");
      });
    })
    .catch((error) => console.log(error));

//

obtainInstruction("brusselsSprouts", 0)
.then((step1) => {
document.querySelector("#brusselsSprouts").innerHTML += `<li>${step1}<li>`;
return obtainInstruction("brusselsSprouts", 1);
})
.then((step2) => {
document.querySelector("#brusselsSprouts").innerHTML += `<li>${step2}<li>`;
return obtainInstruction("brusselsSprouts", 2);
})
.then((step3) => {
document.querySelector("#brusselsSprouts").innerHTML += `<li>${step3}<li>`;
return obtainInstruction("brusselsSprouts", 3);
})
.then((step4) => {
document.querySelector("#brusselsSprouts").innerHTML += `<li>${step4}<li>`;
return obtainInstruction("brusselsSprouts", 4);
})
.then((step5) => {
document.querySelector("#brusselsSprouts").innerHTML += `<li>${step5}<li>`;
return obtainInstruction("brusselsSprouts", 5);
})
.then((step6) => {
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step6}<li>`;
  return obtainInstruction("brusselsSprouts", 6);
  })
  .then((step7) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step7}<li>`;
    return obtainInstruction("brusselsSprouts", 7);
    })
    .then((step8) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step8}<li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
    })




// Iteration 1 - using callbacks
// ...

// Iteration 2 - using promises
// ...

// Iteration 3 using async/await
// ...

// Bonus 2 - Promise all
// ...
