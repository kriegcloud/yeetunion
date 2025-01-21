import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

// import { _faqs } from 'src/_mock';

import { Iconify } from '../../components/iconify';
export const _faqs = Array.from({ length: 8 }, (_, index) => ({
  id: crypto.randomUUID(),
  value: `panel${index + 1}`,
  heading: `Questions ${index + 1}`,
  detail: `Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.`,
}));
// ----------------------------------------------------------------------

export function FaqsList({ sx, ...other }: BoxProps) {
  return (
    <Box sx={sx} {...other}>
      {_faqs.map((accordion) => (
        <Accordion key={accordion.id}>
          <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}>
            <Typography variant="subtitle1">{accordion.heading}</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>{accordion.detail}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
