import { format } from 'date-fns';

export const APPLICATION_FOOTER_TEMPLATE =
  `<footer>Copyright ${format(new Date(),'yyyy-MM-dd')}</footer>`;