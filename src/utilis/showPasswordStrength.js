const updatePasswordStrengthIndicator = strengthScore => {
    const weakBar = document.querySelector(".weak"),
    fairBar = document.querySelector(".fair"),
    goodBar = document.querySelector(".good"),
    strongBar = document.querySelector(".strong");

    switch (true) {
        case strengthScore === 0:
          weakBar.style.background = "none";
          weakBar.style.border = "1px solid gray";
          fairBar.style.background = "none";
          fairBar.style.border = "1px solid gray";
          goodBar.style.background = "none";
          goodBar.style.border = "1px solid gray";
          strongBar.style.background = "none";
          strongBar.style.border = "1px solid gray";
        break;
        case strengthScore <= 60:
            weakBar.style.border = "none";
            weakBar.style.background = "red";
            fairBar.style.background = "none";
            goodBar.style.background = "none";
            strongBar.style.background = "none";
            fairBar.style.border = "1px solid gray";
            goodBar.style.border = "1px solid gray";
            strongBar.style.border = "1px solid gray";
        break;
        case strengthScore >= 61 && strengthScore <= 80:
            weakBar.style.border = "none";
            weakBar.style.background = "yellow";
            fairBar.style.border = "none";
            fairBar.style.background = "yellow";
            goodBar.style.background = "none";
            strongBar.style.background = "none";
            goodBar.style.border = "1px solid gray";
            strongBar.style.border = "1px solid gray";
        break;
        case strengthScore >= 81 && strengthScore <= 95:
            weakBar.style.border = "none";
            weakBar.style.background = "#51c051";
            fairBar.style.border = "none";
            fairBar.style.background = "#51c051";
            goodBar.style.border = "none";
            goodBar.style.background = "#51c051";
            strongBar.style.background = "none";
            strongBar.style.border = "1px solid gray";
        break;
        case strengthScore >= 96 && strengthScore <= 100:
            weakBar.style.border = "none";
            weakBar.style.background = "green";
            fairBar.style.border = "none";
            fairBar.style.background = "green";
            goodBar.style.border = "none";
            goodBar.style.background = "green";
            strongBar.style.border = "none";
            strongBar.style.background = "green";
        break;
    }
}

const showPasswordStrength = password => {
    let strengthScore = 0;
    const minLowerCaseLetters = 1, minUpperCaseLetters = 1, minNumbers = 1, minSpecialChars = 1;
    
      // Strength score calculation based on password complexity and length
      if (password.match(/[a-z]/g)) {
        strengthScore += password.toLowerCase().split('').filter(char => char === 'a' || char === 'b' || char ===
    'c' || char === 'd' || char === 'e' || char === 'f' || char === 'g' || char === 'h' || char === 'i' || char === 'j' || char === 'k' || char === 'l' || char === 'm' || char === 'n' || char === 'o' || char === 'p'
    || char === 'q' || char === 'r' || char === 's' || char === 't' || char === 'u' || char === 'v' || char === 'w' || char === 'x' || char === 'y' || char === 'z'
    ).length >= minLowerCaseLetters ? 10 : 0;
      }
      if (password.match(/[A-Z]/g)) {
        strengthScore += password.toUpperCase().split('').filter(char => char === 'A' || char === 'B' || char ===
    'C'|| char === 'D' || char === 'E' || char === 'F' || char === 'G' || char === 'H' || char === 'I' || char === 'J' || char === 'K' || char === 'L' || char === 'M' || char === 'N' || char === 'O' || char === 'P'
    || char === 'Q' || char === 'R' || char === 'S' || char === 'T' || char === 'U' || char === 'V' || char === 'W' || char === 'X' || char === 'Y' || char === 'Z'
).length >= minUpperCaseLetters ? 20 : 0;
      }
      if (password.match(/[0-9]/g)) {
        strengthScore += password.split('').filter(char => char === '0' || char === '1' || char === '2'
            || char === '3' || char === '4' || char === '5' || char === '6' || char === '7' || char === '8' || char === '9' || char === '0'
        ).length >=
    minNumbers ? 30 : 0;
      }
      if (password.match(/[!@#$%^&*_=+-]/g)) {
        strengthScore += password.split('').filter(char => ['!', '@', '#', '$', '%', '^', '&', '*', '_',
    '+', '=', '-']).length >=
    minSpecialChars ? 40 : 0;
      }
    
      // Password length score calculation (max of 10)
    //   const passwordLengthScore = Math.min(password.length, 20) / password.length;
      const passwordLengthScore = (Number(`${password.length > 10 ? 10 : password.length}`)/10) * 100;
    
      // Combine scores and normalize strength score to a maximum of 100
      const strengthIndex = (strengthScore + passwordLengthScore) / 2;
      
      updatePasswordStrengthIndicator(strengthIndex);
};

export default showPasswordStrength;