import { daysAndMonths } from '../constans.js';

export default function getMonthNumAndName(monthShortName) {
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