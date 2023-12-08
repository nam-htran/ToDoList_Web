import { deleteModalType } from "@/types/deleteModalType";
import React from "react";

const DeleteModal = ({
  deleteModal,
  setDeleteModal,
  userData,
}: deleteModalType) => {
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
          <h1 className="font-bold text-2xl">Are you sure to delete!</h1>
          <p className="py-4">
            Are you sure to delete
            <span className="text-xl font-bold mx-2">{userData.userName}</span>
          </p>
          <button className="btn btn-primary">Submit</button>
        </div>
      </dialog>
    </div>
  );
};

export default DeleteModal;
