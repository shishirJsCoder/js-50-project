let inputText = document.getElementById('password');
let outputEle = document.getElementById('output');

  

inputText.addEventListener('input', () => {
  let pwd = inputText.value;
  let score = 0;
  let feedback = [];
   
  
  if(pwd.length===0)
  {
    outputEle.innerHTML="";
    return
  }
 if (pwd.length >= 1 && pwd.length <= 6) {
    feedback.push('❌ Too short (min 6 characters)');
  } else {
    score++;
    feedback.push('✅ Length is good');
  }

  if (/[A-Z]/.test(pwd)) {
    score++;
    feedback.push('✅ Has uppercase letter');
  } else {
    feedback.push('❌ Add uppercase letter');
  }

  if (/[a-z]/.test(pwd)) {
    score++;
    feedback.push('✅ Has lowercase letter');
  } else {
    feedback.push('❌ Add lowercase letter');
  }

  if (/[0-9]/.test(pwd)) {
    score++;
    feedback.push('✅ Has number');
  } else {
    feedback.push('❌ Add number');
  }

  if (/[^A-Za-z0-9]/.test(pwd)) {
    score++;
    feedback.push('✅ Has special character');
  } else {
    feedback.push('❌ Add special character');
  }

  let strength = '';
  if (score <= 2) {
    strength = '🔴 Weak Password';
  } else if (score <= 4) {
    strength = '🟠 Medium Strength';
  } else {
    strength = '🟢 Strong Password';
  }

  outputEle.innerHTML = strength + '<br><br>' + feedback.join('<br>');
});