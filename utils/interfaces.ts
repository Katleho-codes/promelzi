export interface IModal {
  isVisible: true | false;
  title: string | number | any;
  content: string | number | boolean | React.ReactNode | any;
  onClose: () => void;
  footer?: string | number | boolean | React.ReactNode | any;
}
