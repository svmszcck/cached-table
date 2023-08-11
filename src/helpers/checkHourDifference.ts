const checkHourDifference = (time1: number, time2: number): number => {
  const diff = time2 - time1;
  return diff / 1000 / 60 / 60;
};

export default checkHourDifference;
