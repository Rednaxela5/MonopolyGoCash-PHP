document.addEventListener("DOMContentLoaded", function() {
  const convertButton = document.getElementById("convert-button");
  const clearButton = document.getElementById("clear-button");
  const monopolyAmountInput = document.getElementById("monopoly-amount");
  const convertedAmountSpan = document.getElementById("converted-amount");

  convertButton.addEventListener("click", function() {
    const monopolyAmount = monopolyAmountInput.value.replace(/,/g, ''); // Remove existing commas
    const monopolyCredits = parseFloat(monopolyAmount);
    
    if (!isNaN(monopolyCredits)) {
      const conversionRate = 0.6; // 60%
      const convertedAmount = monopolyCredits * conversionRate;
      convertedAmountSpan.textContent = formatWithCommas(convertedAmount.toFixed(2));
    } else {
      convertedAmountSpan.textContent = "Invalid input";
    }
  });

  // click event listener for the Clear button
  clearButton.addEventListener("click", function() {
    monopolyAmountInput.value = ""; // clear the input
    convertedAmountSpan.textContent = "0"; // reset the converted amount
  });

  monopolyAmountInput.addEventListener("input", function() {
    // Automatically add commas for thousands as the user types
    monopolyAmountInput.value = formatWithCommas(monopolyAmountInput.value.replace(/,/g, ''));
  });

  // Function to format a number with commas for thousands
  function formatWithCommas(number) {
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
});
