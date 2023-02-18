import { calculateRating } from './calculateRating.js';
import { processPayment } from './processPayment.js';
import { validateInfo } from './validateInfo.js';

function create_Account() {
  let name = prompt("Enter the Username:");
  let pass = prompt("Enter the Password:");
  if (validateInfo(name, pass)) {
    let card_number = prompt("Enter the card number.");
    let amount = prompt("Enter the amount.");
    let hold = processPayment(card_number, amount);
    if (hold) {
      alert(hold);
      let n = prompt("Enter rating (1 to 10)")
      console.log(calculateRating(n));
    }
    else{
      alert("Payment unsuccesful");
    }
  }
  else {
    alert("Invalid user.");
  }
}
create_Account();