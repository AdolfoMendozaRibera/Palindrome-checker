document.addEventListener('DOMContentLoaded', () => {
  const checkBtn = document.getElementById('check-btn');
  const textInput = document.getElementById('text-input');
  const resultDiv = document.getElementById('result');

  const checkPalindrome = (str) => {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    if (!cleanedStr.length) return false;
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
  };

  const handleCheck = () => {
    const inputValue = textInput.value.trim();
    
    if (!inputValue) {
      alert('Please input a value');
      resultDiv.classList.remove('show');
      return;
    }
    
    const isPalindrome = checkPalindrome(inputValue);
    
    resultDiv.textContent = `${inputValue} ${isPalindrome ? 'is' : 'is not'} a palindrome`;
    resultDiv.className = `result ${isPalindrome ? 'palindrome' : 'not-palindrome'} show`;
    
    void resultDiv.offsetWidth; // Reinicia animación
  };

  checkBtn.addEventListener('click', handleCheck);
  
  textInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleCheck();
  });
});