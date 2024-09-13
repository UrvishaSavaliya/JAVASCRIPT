const accountId = 10;
let email = "urvi@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
console.log(accountId);

// accountId = 2        //not allowed
console.log(accountId);


email = "hr@gmail.com";
accountPassword = "21212121"
accountCity = "Bengluru";

console.table([accountId,email,accountPassword,accountCity]);

/*scope 
    prefer not to use var
    because of issue in block scope and functional scope
    no control in scope
    problem in var like name one developer is coming and name is xyz and second developer coming and same name variable defined and different name so before name changed in all defined
    scope problem in var keyword

in let scope problem resolve*/

//================================================================================================

let name;
console.log(name);
