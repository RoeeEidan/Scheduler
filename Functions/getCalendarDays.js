import getDayFullName from './getDayFullName.js';
import getDates from './getDates.js';
import getMonthNumAndName from './getMonthNumAndName.js';

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