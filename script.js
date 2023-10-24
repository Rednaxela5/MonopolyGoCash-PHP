document.addEventListener("DOMContentLoaded", function() {
  const convertButton = document.getElementById("convert-button");
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

  monopolyAmountInput.addEventListener("input", function() {
    // Automatically add commas for thousands as the user types
    monopolyAmountInput.value = formatWithCommas(monopolyAmountInput.value.replace(/,/g, ''));
  });

  // Function to format a number with commas for thousands
  function formatWithCommas(number) {
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
});
