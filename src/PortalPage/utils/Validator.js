export function validateUsername(username) {
  // Validate username
  if (!username || username.trim() === "") {
    throw new Error("Username is required");
  }
  return true;
}

export function validateSolution(solution , limit) {
  // Validate username
  if (!solution || solution.trim() === "") {
    throw new Error("solution is required");
  }

  if(solution.length > limit) {
    throw new Error(`word count must be below ${limit}`)
  }


  return true;
}


export function validateWordCount(input, limit) {
  if (input.length > limit) {
    throw new Error(`word count must be below ${limit}`);
  }

  return true;
}





export function validateEmail(email) {
  // Validate email
  if (!email || email.trim() === "") {
    throw new Error("Email is required");
  }

  if (!isValidEmail(email)) {
    throw new Error("Invalid email format");
  }

  return true;
}

export function validatePhone(phonenumber) {
     if (!phonenumber || phonenumber.trim() === "") {
       throw new Error("Phone number is required");
     }

     if(phonenumber.length < 10 || phonenumber.length >= 13) {
        throw new Error("Please provide a valid Phone number");
     }

     return true;
}

export function validateMarianEmail(email) {
  var emailRegex = /^[A-Za-z0-9._%+-]+@marian\.ac\.in$/;
  // Validate email
  if (!email || email.trim() === "") {
    throw new Error("Email is required");
  }

  if (!emailRegex.test(email)) {
    throw new Error("Use only student email provided by marian college.")
  } 
  
  return true;
}

export function validatePassword(password) {
  // Validate password
  if (!password || password.trim() === "") {
    throw new Error("Password is required");
  }

  if (password.length < 6) {
    throw new Error("Password should be at least 6 characters long");
  }

  return true;
}

export function validateConfirmPassword(confirmpassword) {
  // Validate confirmpassword
  if (!confirmpassword || confirmpassword.trim() === "") {
    throw new Error("Confirmpassword is required");
  }

  return true;
}

export function matchPasswords(password, confirmpassword) {
  // Check if the passwords are the same.
  if (password !== confirmpassword) {
    throw new Error("Passwords doesnt match");
  }

  return true;
}

export function isValidEmail(email) {
  // Simple email format validation
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}
