import { getCalendarDays } from './Functions/getCalendarDays';
import { daysAndMonths } from './constans.js';

const getInitialCalenderState = (function () {

    const calenderDays = getCalendarDays();

    return function (date) {
        if (typeof date === 'string') {
            date = new Date(date)
            date.setDate(date.getDate() + 1)
        } else {
            date = new Date()
        }
        const month = date.getMonth();
        const talkedMonth = month + 1;
        const strMonth = talkedMonth < 10 ? `0${talkedMonth}` : talkedMonth;
        const year = date.getFullYear();
        const monthDay = date.getDate();
        const dayStr = monthDay < 10 ? `0${monthDay}` : monthDay;
        const day = date.getDay();
        return {
            calenderDays,
            enMonthName: daysAndMonths.enMonthNames[month],
            hbMonthName: daysAndMonths.hbMonthNames[month],
            enDayName: daysAndMonths.enDayNames[day],
            hbDayName: daysAndMonths.hbDayNames[day],
            focusedDateSrt: `${year}-${strMonth}-${dayStr}`,
            year,
        }
    }
})();

export default getInitialCalenderState;