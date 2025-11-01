interface ResetButtonProps {
  onReset: () => void;
}

const ResetButton = ({onReset}: ResetButtonProps) => {
  return (
    <div className="reset">
      <button className="reset__button" onClick={onReset}>
        Reiniciar Jogo
      </button>
    </div>
  );
};

export default ResetButton;
