export interface DisplayProps {
  dateState: StateType;
  onUpdate: (d: DateType) => void;
  onClose?: () => void;
}

export type DateType = {
  day: string;
  month: string;
  year: string;
};

export type StateType = {
  dateMonthYear: DateType;
  dateString: string;
};
