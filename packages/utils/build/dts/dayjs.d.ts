import type { Dayjs, OpUnitType } from "dayjs";
export type IDatePickerControl = Dayjs | null;
export type DatePickerFormat = Dayjs | Date | string | number | null | undefined;
export declare const formatPatterns: {
    dateTime: string;
    date: string;
    time: string;
    split: {
        dateTime: string;
        date: string;
    };
    paramCase: {
        dateTime: string;
        date: string;
    };
};
export declare function today(template?: string): string;
/**
 * @output 17 Apr 2022 12:00 am
 */
export declare function fDateTime(date: DatePickerFormat, template?: string): string;
/**
 * @output 17 Apr 2022
 */
export declare function fDate(date: DatePickerFormat, template?: string): string;
/**
 * @output 12:00 am
 */
export declare function fTime(date: DatePickerFormat, template?: string): string;
/**
 * @output 1713250100
 */
export declare function fTimestamp(date: DatePickerFormat): number | "Invalid date";
/**
 * @output a few seconds, 2 years
 */
export declare function fToNow(date: DatePickerFormat): string;
/**
 * @output boolean
 */
export declare function fIsBetween(inputDate: DatePickerFormat, startDate: DatePickerFormat, endDate: DatePickerFormat): boolean;
/**
 * @output boolean
 */
export declare function fIsAfter(startDate: DatePickerFormat, endDate: DatePickerFormat): boolean;
/**
 * @output boolean
 */
export declare function fIsSame(startDate: DatePickerFormat, endDate: DatePickerFormat, unitToCompare?: OpUnitType): boolean;
/**
 * @output
 * Same day: 26 Apr 2024
 * Same month: 25 - 26 Apr 2024
 * Same month: 25 - 26 Apr 2024
 * Same year: 25 Apr - 26 May 2024
 */
export declare function fDateRangeShortLabel(startDate: DatePickerFormat, endDate: DatePickerFormat, initial?: boolean): string;
/**
 * @output 2024-05-28T05:55:31+00:00
 */
export type DurationProps = {
    years?: number;
    months?: number;
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
    milliseconds?: number;
};
export declare function fAdd({ years, months, days, hours, minutes, seconds, milliseconds, }: DurationProps): string;
/**
 * @output 2024-05-28T05:55:31+00:00
 */
export declare function fSub({ years, months, days, hours, minutes, seconds, milliseconds, }: DurationProps): string;
//# sourceMappingURL=dayjs.d.ts.map