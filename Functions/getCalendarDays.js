import { daysAndMonths, monthsAhead } from '../constans.js';

export function getCalendarDays() {

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    return (
        getDates().map((item) => {
            const dayNumber = item.split(' ')[2]; // Number is 0-6
            const monthShortName = item.slice(4, 7);
            let { monthNumber, enMonthName, hbMonthName } = getMonthNumAndName(monthShortName)
            monthNumber += 1;
            const monthString = monthNumber < 10 ? `0${monthNumber}` : `${monthNumber}`; // with the 0 befor is < 10
            const dateStr = `${year}-${monthString}-${dayNumber}`;
            const shortEnName = item.split(' ')[0];
            const { enDayName, hbDayName } = getDayFullName(shortEnName);
            
            // Each day object.
            return {
                dayNumber,
                dateStr,
                enDayName,
                hbDayName,
                enMonthName,
                hbMonthName,
                shortEnName
            }
        }))
}

function getDates() {
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
    console.log(firstDate)
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




// From here on was used for monthly calender.

function getCalendersLongStringDates(year, month) {
    const date = new Date(year, month, 1);
    const longStringDates = [];
    let countBack = 0;
    // Going back to sunday, the first day to show in the calender.
    while (date.getDay()) {
        countBack++
        date.setDate(date.getDate() - 1);
    }
    // pushing by order as meny times that i went back.
    while (countBack) {
        longStringDates.push(new Date(date).toString());
        date.setDate(date.getDate() + 1);
        countBack--
    }
    // pushing the hole month.
    while (date.getMonth() === month) {
        longStringDates.push(new Date(date).toString());
        date.setDate(date.getDate() + 1);
    }
    // pushing untill saturday.
    while (date.getDay()) {
        longStringDates.push(new Date(date).toString());
        date.setDate(date.getDate() + 1);
    }

    return longStringDates;
}

export function getMonthNumAndName(monthShortName) {
    switch (monthShortName) {
        case 'Jan':
            return {
                monthNumber: 0,
                enMonthName: daysAndMonths.enMonthNames[0],
                hbMonthName: daysAndMonths.hbMonthNames[0]
            }
        case 'Feb':
            return {
                monthNumber: 1,
                enMonthName: daysAndMonths.enMonthNames[1],
                hbMonthName: daysAndMonths.hbMonthNames[1]
            }
        case 'Mar':
            return {
                monthNumber: 2,
                enMonthName: daysAndMonths.enMonthNames[2],
                hbMonthName: daysAndMonths.hbMonthNames[2]
            }
        case 'Apr':
            return {
                monthNumber: 3,
                enMonthName: daysAndMonths.enMonthNames[3],
                hbMonthName: daysAndMonths.hbMonthNames[3]
            }
        case 'May':
            return {
                monthNumber: 4,
                enMonthName: daysAndMonths.enMonthNames[4],
                hbMonthName: daysAndMonths.hbMonthNames[4]
            }
        case 'Jun':
            return {
                monthNumber: 5,
                enMonthName: daysAndMonths.enMonthNames[5],
                hbMonthName: daysAndMonths.hbMonthNames[5]
            }
        case 'Jul':
            return {
                monthNumber: 6,
                enMonthName: daysAndMonths.enMonthNames[6],
                hbMonthName: daysAndMonths.hbMonthNames[6]
            }
        case 'Aug':
            return {
                monthNumber: 7,
                enMonthName: daysAndMonths.enMonthNames[7],
                hbMonthName: daysAndMonths.hbMonthNames[7]
            }
        case 'Sep':
            return {
                monthNumber: 8,
                enMonthName: daysAndMonths.enMonthNames[8],
                hbMonthName: daysAndMonths.hbMonthNames[8]
            }
        case 'Oct':
            return {
                monthNumber: 9,
                enMonthName: daysAndMonths.enMonthNames[9],
                hbMonthName: daysAndMonths.hbMonthNames[9]
            }
        case 'Nov':
            return {
                monthNumber: 10,
                enMonthName: daysAndMonths.enMonthNames[10],
                hbMonthName: daysAndMonths.hbMonthNames[10]
            }
        case 'Dec':
            return {
                monthNumber: 11,
                enMonthName: daysAndMonths.enMonthNames[11],
                hbMonthName: daysAndMonths.hbMonthNames[11]
            }
        default:
            return {}
    }
}

function getDayFullName(shortDayName) {
    switch (shortDayName) {
        case 'Sun':
            return {
                enDayName: daysAndMonths.enDayNames[0],
                hbDayName: daysAndMonths.hbDayNames[0]
            };
        case 'Mon':
            return {
                enDayName: daysAndMonths.enDayNames[1],
                hbDayName: daysAndMonths.hbDayNames[1]
            }
        case 'Tue':
            return {
                enDayName: daysAndMonths.enDayNames[2],
                hbDayName: daysAndMonths.hbDayNames[2]
            }
        case 'Wed':
            return {
                enDayName: daysAndMonths.enDayNames[3],
                hbDayName: daysAndMonths.hbDayNames[3]
            }
        case 'Thu':
            return {
                enDayName: daysAndMonths.enDayNames[4],
                hbDayName: daysAndMonths.hbDayNames[4]
            }
        case 'Fri':
            return {
                enDayName: daysAndMonths.enDayNames[5],
                hbDayName: daysAndMonths.hbDayNames[5]
            }
        case 'Sat':
            return {
                enDayName: daysAndMonths.enDayNames[6],
                hbDayName: daysAndMonths.hbDayNames[6],
            }
        default:
            console.log('THIS SHOULDNT CONSOLE');
            break
    }
}