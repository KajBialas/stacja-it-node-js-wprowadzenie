import { APPLICATION_HEADER_TEMPLATE } from '../partials/header';
import { APPLICATION_FOOTER_TEMPLATE } from '../partials/footer';

export const response404Body = `
  ${APPLICATION_HEADER_TEMPLATE}
  <h3>Nie znaleziono - 404</h3>
  ${APPLICATION_FOOTER_TEMPLATE}
`;