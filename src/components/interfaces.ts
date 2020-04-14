export interface BaseDateProps {
  dateState: StateType;
  onUpdate: (d: DateType) => void;
}

export interface DisplayProps extends BaseDateProps {
  onClick: () => void;
}

export interface DateSegmentsProps extends BaseDateProps {
  onClose: () => void;
}

export type DateType = {
  day: string;
  month: string;
  year: string;
};

export type StateType = {
  dateMonthYear: DateType;
  dateString: string;
  editMode: boolean;
};
