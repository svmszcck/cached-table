const checkHourDifference = (time1: number, time2: number): number => {
  const diff = time2 - time1;

  // convert ms to hour
  return diff / 1000 / 60 / 60;
};

export default checkHourDifference;
