import React, { useState } from 'react';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { FiEdit } from "react-icons/fi";

const CartItem = ({ item, onCheck, onDelete, onEdit, onEditSubChore, onDeleteSubChore }) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [isEditingSubChore, setIsEditingSubChore] = useState(false);
  const [editedTitle, setEditedTitle] = useState(item.title);
  const [editedDescription, setEditedDescription] = useState(item.description);
  const [editedSubChore, setEditedSubChore] = useState(item.subChore);
  const [titleChecked, setTitleChecked] = useState(item.checked || false); 
  const [descriptionChecked, setDescriptionChecked] = useState(item.checked || false);
  const [subChoreChecked, setSubChoreChecked] = useState(item.subChoreChecked || false);

  const handleSave = () => {
    if (isEditingTitle) {
      onEdit(item.id, editedTitle, item.description, item.subChore);
    } else if (isEditingDescription) {
      onEdit(item.id, item.title, editedDescription, item.subChore);
    } else if (isEditingSubChore) {
      onEditSubChore(item.id, editedSubChore);
    }
    setIsEditingTitle(false);
    setIsEditingDescription(false);
    setIsEditingSubChore(false);
  };

  const handleCheckTitle = () => {
    setTitleChecked(!titleChecked);
    setDescriptionChecked(!descriptionChecked);
  };

  return (
    <div className="cart-item">
      {!isEditingTitle && !isEditingDescription && !isEditingSubChore ? (
        <>
          <div className="checkboxes">
            <input
              type="checkbox"
              checked={titleChecked}
              onChange={handleCheckTitle}
            />
            <h3 className={titleChecked ? 'item-title checked' : 'item-title'}>
              {item.title}
            </h3>
            <div>
              <button className="edit-button" onClick={() => setIsEditingTitle(true)}><FiEdit /></button>
              <button className="delete-button" onClick={() => onDelete(item.id)}><RiDeleteBin2Line /></button>
            </div>
          </div>
          <div className="checkboxes">
            <p className={descriptionChecked ? 'item-description checked' : 'item-description'}>
              {item.description}
            </p>
            <div>
              <button className="edit-button" onClick={() => setIsEditingDescription(true)}><FiEdit /></button>
            </div>
          </div>
          {item.subChore && (
            <div className="checkboxes">
              <input
                type="checkbox"
                checked={subChoreChecked}
                onChange={() => setSubChoreChecked(!subChoreChecked)}
              />
              <p className={subChoreChecked ? 'item-subchore checked' : 'item-subchore'}>
                Sub-Chore: {item.subChore}
              </p>
              <div>
                <button className="edit-button" onClick={() => setIsEditingSubChore(true)}><FiEdit /></button>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          {isEditingTitle && (
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
          )}
          {isEditingDescription && (
            <input
              type="text"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
          )}
          {isEditingSubChore && (
            <input
              type="text"
              value={editedSubChore}
              onChange={(e) => setEditedSubChore(e.target.value)}
            />
          )}
          <button onClick={handleSave}>Save</button>
          <button onClick={() => {
            setIsEditingTitle(false);
            setIsEditingDescription(false);
            setIsEditingSubChore(false);
          }}>Cancel</button>
        </>
      )}
    </div>
  );
};

export default CartItem;
