export interface CardProps {
  cardState: CardType;
  handleClick: (cardState: CardType, selectedItem?: string) => void;
}

export type CardType = {
  id: string;
  title: string;
  day: string;
  month: string;
  year: string;
  dateString: string;
  editMode: boolean;
};

export type CardsType = CardType[];

export type State = {
  state: StateType;
  updateState: (s: StateType) => void;
};

export type StateType = {
  items: CardsType;
  selectedItem: string | null;
};
