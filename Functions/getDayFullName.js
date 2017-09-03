import { daysAndMonths } from '../constans.js';

export default function getDayFullName(shortDayName) {
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