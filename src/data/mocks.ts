import { CardsType } from '../components/interfaces';

export const emptyState = { items: [], selectedItem: null };
export const mockResponse: CardsType = [
  {
    id: '8912830912830',
    title: "Daniel's birthday",
    day: '27',
    month: 'Jun',
    year: '2020',
    dateString: 'Jun 27, 2020 23:59:59',
    editMode: false,
  },
  {
    id: '367234548682348',
    title: "New Years's eve",
    day: '31',
    month: 'Dec',
    year: '2020',
    dateString: 'Dec 31, 2020 23:59:59',
    editMode: false,
  },
  {
    id: '367345345248682348',
    title: '3rd meeting with Mr. Trump',
    day: '1',
    month: 'Oct',
    year: '2019',
    dateString: 'Oct 1, 2019 23:59:59',
    editMode: false,
  },
];
export const DEFAULT_TIME = '23:59:59';

export const MONTHS_LIST = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
