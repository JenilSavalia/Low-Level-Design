

// function with same name and different parameters

class Calculator {
    add(...number) {
        if (number.length === 0) {
            return "Please provide at least one number to add.";
        }
        if (number.length === 1 && typeof number[0] === 'number') {
            return number[0];
        }
        if (number.length === 2) {
            return number[0] + number[1];
        }
        if (number.length > 2) {
            return number.reduce((sum, num) => sum + num, 0);
        }
    }
};

const calc = new Calculator();
console.log(calc.add());
console.log(calc.add(5));
console.log(calc.add(5, 10));
console.log(calc.add(1, 2, 3, 4, 5));



class DebitCard {
    pay() {
        console.log("Payment done using Debit Card");
    }
};

class CreditCard {
    pay() {
        console.log("Payment done using Credit Card");
    }
};

class UPI {
    pay() {
        console.log("Payment done using UPI");
    }
};

function PayNow(paymentMethod) {
    paymentMethod.pay();
}

const debit = new DebitCard();
const credit = new CreditCard();
const upi = new UPI();
PayNow(debit);
PayNow(credit);
PayNow(upi);