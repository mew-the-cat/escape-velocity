export const randomizeDepletion = (timesSearched: number): boolean => {
  if (timesSearched <= 2) {
    console.log(timesSearched, "GUARANTEED OK");
    return false;
  } else if (timesSearched > 2 && timesSearched <= 5) {
    const randomNumber = Math.random() * 100;
    console.log(
      timesSearched,
      randomNumber,
      (timesSearched - 2) * 25,
      !(randomNumber > (timesSearched - 2) * 25)
    );
    return !(randomNumber > (timesSearched - 2) * 25);
  } else {
    console.log(timesSearched, "GUARANTEED FAIL");
    return true;
  }
};
