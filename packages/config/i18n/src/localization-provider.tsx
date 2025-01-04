'use client';

import 'dayjs/locale/en';
import 'dayjs/locale/vi';
import 'dayjs/locale/fr';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/ar-sa';
import type { ReactNode } from "react";
import dayjs from 'dayjs';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider as Provider } from '@mui/x-date-pickers/LocalizationProvider';



// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
  // TODO: type this
  currentLang: any;
};

export function LocalizationProvider({ children, currentLang }: Props) {

  dayjs.locale(currentLang?.adapterLocale ?? "en");

  return (
    <Provider dateAdapter={AdapterDayjs} adapterLocale={currentLang?.adapterLocale ?? "en"}>
      {children}
    </Provider>
  );
}
