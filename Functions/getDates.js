import { monthsAhead } from '../constans.js';

export default function getDates() {
    const data = [];
    const firstDateStr = getFirstDate();
    const lastDateStr = getLastDate(firstDateStr);
    const firstDate = new Date(firstDateStr);
    const lastDate = new Date(lastDateStr);
    while (firstDate < lastDate) {
        firstDate.setDate(firstDate.getDate() + 1);
        data.push(firstDate.toString());
    }
    return data
}


function getFirstDate() {
    const date = new Date();
    while (date.getDay()) {
        date.setDate(date.getDate() - 1);
    }
    const day = date.getDate();
    const dayStr = day < 10 ? `0${day}` : day;
    const talkedMonth = date.getMonth() + 1;
    const month = talkedMonth < 10 ? `0${talkedMonth}` : talkedMonth;
    const year = date.getFullYear();
    return `${year}-${month}-${dayStr}`
}


function getLastDate(firstDate) {
    const date = new Date(firstDate);
    const thisTalkedMonth = date.getMonth() + 1;
    const firstGoalMonth = thisTalkedMonth + monthsAhead;
    const day = date.getDate();
    const dayStr = day < 10 ? `0${day}` : day ; 
    let year = date.getFullYear();

    let goalMonth;
    if (firstGoalMonth < 12) {
        goalMonth = firstGoalMonth;
    } else {
        goalMonth = firstGoalMonth - 12;
        year++
    }
    goalMonth = goalMonth < 10 ? `0${goalMonth}` : goalMonth;
    return `${year}-${goalMonth}-${dayStr}`
}
