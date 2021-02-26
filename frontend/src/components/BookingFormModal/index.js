import { useState } from "react";
import { Modal } from "../../context/Modal";
import BookingForm from "./BookingForm";

function BookingFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="nav-btn" onClick={() => setShowModal(true)}>
        Reserve
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <BookingForm />
        </Modal>
      )}
    </>
  );
}

export default BookingFormModal;
