import { format, utcToZonedTime } from 'date-fns-tz';

export const convertToTimeZone = (date: Date, timeZone: string): Date => {
    return utcToZonedTime(date, timeZone);
};

export const formatDateInTimeZone = (date: Date, timeZone: string, dateFormat: string): string => {
    const zonedDate = convertToTimeZone(date, timeZone);
    return format(zonedDate, dateFormat);
};