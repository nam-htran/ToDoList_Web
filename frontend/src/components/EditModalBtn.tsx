"use client";

import { editModalType } from "@/types/editModalType";

const EditModalBtn = ({ editModal, setEditModal, userData }: editModalType) => {
  return (
    <div>
      <div>
        <dialog className={`modal ${editModal ? "modal-open" : ""}`}>
          <div className="modal-box">
            <form method="dialog">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => {
                  setEditModal(false);
                }}
              >
                ✕
              </button>
            </form>
            <h1 className="font-bold text-2xl">Insert</h1>
            <div>
              <input
                className="input input-bordered my-5 mx-2"
                placeholder={userData.name}
              ></input>
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default EditModalBtn;
