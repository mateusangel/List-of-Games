/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
import { useEffect, useState } from "react";
import { ModalDescriptionStyled } from "./ModalDescriptionStyled";
import { BsXSquareFill } from "react-icons/bs";

export const ModalDescription = ({ selectedCard, onClose }) => {
  const [Open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  useEffect(() => {
    setOpen(true);
  }, [selectedCard]);

  if (!Open) return null;

  return (
    <ModalDescriptionStyled>
      <div className="modal-header">
        <h1>{selectedCard.title}</h1>
        <BsXSquareFill className="iconBy" color="black" onClick={handleClose} />
      </div>
      <p>
        <strong className="custom-color">Genre : </strong>
        {selectedCard.genre}
      </p>
      <p>
        <strong className="custom-color">Developer:</strong>
        {selectedCard.developer}
      </p>
      <p>
        <strong className="custom-color">Publisher: </strong>
        {selectedCard.publisher}
      </p>
      <p>
        <strong className="custom-color">Release Date:</strong>
        {selectedCard.release_date}
      </p>
      <p>
        <strong className="custom-color">Platform:</strong>
        {selectedCard.platform}
      </p>
      <p>{selectedCard.short_description}</p>
      <img src={selectedCard.thumbnail} alt={selectedCard.title} />
      <div className="modal-links">
        <a
          href={selectedCard.freetogame_profile_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          FreeToGame Profile
        </a>
        <a
          href={selectedCard.game_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Game Website
        </a>
      </div>
    </ModalDescriptionStyled>
  );
};
