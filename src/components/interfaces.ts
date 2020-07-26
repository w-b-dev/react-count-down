import { type } from "os";

export type CardsGridProps = {
  cards: CardState[];
  handleClick: (s: string) => void;
}
export type CardProps = CardState & {
  handleClick: (s: string) => void;
}
export type CardState = {
  id: string;
  title: string;
  day: string;
  month: string;
  year: string;
  dateString: string;
  selected: boolean;
};
