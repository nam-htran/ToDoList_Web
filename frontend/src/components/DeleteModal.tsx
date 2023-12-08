import { deleteModalType } from "@/types/deleteModalType";
import React from "react";

const DeleteModal = ({ deleteModal, setDeleteModal }: deleteModalType) => {
  return (
    <div>
      <dialog className={`modal ${deleteModal ? "modal-open" : ""}`}>
        <div className="modal-box">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => setDeleteModal(false)}
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </div>
  );
};

export default DeleteModal;
