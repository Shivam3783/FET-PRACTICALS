export function processPayment(cn, price) {
    if (cn.length != 8 || price < 1) {
      return 0;
    }
    else {
      return "Payment sucessfull";
    }
  }

  