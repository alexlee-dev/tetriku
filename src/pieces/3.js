import React from "react";
import PropTypes from "prop-types";

const Three = ({ pieceNumber, selectedPiece, setSelectedPiece, stageArea }) => {
  const classList = ["piece-container"];
  if (selectedPiece === pieceNumber)
    classList.push("piece-container__selected");
  return (
    <div
      className={classList.join(" ")}
      id="piece-3"
      onClick={() => {
        setSelectedPiece(pieceNumber);
      }}
      style={{ gridArea: stageArea }}
    >
      <div className="piece__single" />
      <div className="piece__single" />
      <div className="piece__single" />
    </div>
  );
};

Three.propTypes = {
  pieceNumber: PropTypes.number.isRequired,
  selectedPiece: PropTypes.number,
  setSelectedPiece: PropTypes.func.isRequired,
  stageArea: PropTypes.string
};

export default Three;
