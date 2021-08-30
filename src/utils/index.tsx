export const getDayOfStartWeekOnMonth = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;

  const preYear = year - 1;
  let numOfDays = preYear * 365 + Math.ceil(preYear / 4) - Math.ceil(preYear / 100) + Math.ceil(preYear / 400);
  console.log("numOfDays", numOfDays)
  const monthArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  for (let i = 0; i < month - 1; i++) {
    numOfDays += monthArr[i];
  }
  if (month >= 3 && (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)) {
    numOfDays++;
  }
  console.log("aft", numOfDays)

  numOfDays += monthArr[month - 1];

  let dayOfWeek = numOfDays % 7;
  console.log("dayOfWeek", dayOfWeek)

  return dayOfWeek;
}

export const getWeekOfMonth = (year = 2021, month = 8) => {
  const weeks = [],
    firstDate = new Date(year, month, 1),
    lastDate = new Date(year, month + 1, 0),
    numDays = lastDate.getDate();

  let dayOfWeekCounter = firstDate.getDay();

  for (let date: number = 1; date <= numDays; date++) {
    if (dayOfWeekCounter === 0 || weeks.length === 0) {
      const newArr = new Array();
      weeks.push(newArr);
    }
    weeks[weeks.length - 1].push(date);
    dayOfWeekCounter = (dayOfWeekCounter + 1) % 7;
  }
  return weeks;
}

export const getDaysOfMonth = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;

  if (month === 2) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
      return 29;
    }
    return 28;

  } else if (month !== 2 && month < 8) {
    return month % 2 === 1 ? 31 : 30
  } else {
    return month % 2 === 1 ? 30 : 31
  }
}