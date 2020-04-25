import { CardType } from './components/interfaces';
import { DEFAULT_TIME } from './mocks';

export const createDateString = (d: CardType) =>
  `${d.month} ${d.day}, ${d.year} ${DEFAULT_TIME}`;
