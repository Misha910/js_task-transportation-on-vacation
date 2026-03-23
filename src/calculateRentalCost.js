/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const preicOneDay = 40;
  const bigDiscount = 50;
  const somoulDiscount = 20;

  if (days >= 7) {
    return days * preicOneDay - bigDiscount;
  }

  if (days >= 3 && days < 7) {
    return days * preicOneDay - somoulDiscount; // write code here
  }

  if (days < 3) {
    return days * preicOneDay;
  }
}

module.exports = calculateRentalCost;
