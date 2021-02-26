import { useState } from "react";
import { Modal } from "../../context/Modal";
import BookingForm from "./BookingForm";

function BookingFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="booking-btn" onClick={() => setShowModal(true)}>
        Book now
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
