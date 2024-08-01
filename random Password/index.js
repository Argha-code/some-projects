const generatePassword = (length,includeLowercase,includeUppercase,includeNumber,includeSymbols) =>{
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const UppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+=";

    let allowedChars = "";
    let password = "";

    allowedChars +=  includeLowercase ? lowercaseChars : "";
    allowedChars +=  includeUppercase ? UppercaseChars : "";
    allowedChars +=  includeNumber ? numberChars : "";
    allowedChars +=  includeSymbols ? symbolChars : "";

    if(length<=0){
        return `(password length must be at least 1)`
    }
    if(allowedChars.length === 0){
        return `(At leaste 1 set of charecter needs to be selected)`;

    }
    
    

    for(let i = 0;i<length;i++){
        const randomIndex = Math.floor(Math.random()  * allowedChars.length)
        password +=  allowedChars[randomIndex]
    }

    return password;

}




const passwordLength = 10;
const includeLowercase = true;
const includeUppercase = true;
const includeNumber = true;
const includeSymbols = true;


const password  = generatePassword(passwordLength,includeLowercase,includeUppercase,includeNumber,includeSymbols);
console.log(`Generate a password : ${password}`);