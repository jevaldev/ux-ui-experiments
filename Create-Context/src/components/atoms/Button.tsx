type buttonProps = {
  text: string;
  theme: string;
  onClickFun: () => void;
};

export const Button = ({ text, theme, onClickFun }: buttonProps) => {
  return (
    <button className={`button-${theme}`} onClick={onClickFun}>
      {text}
    </button>
  );
};
