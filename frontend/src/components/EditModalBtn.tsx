"use client";

import { editModalType } from "@/types/editModalType";
import { useState } from "react";

const EditModalBtn = ({ editModal, setEditModal }: editModalType) => {
  const [isOpenModal, setOpenModal] = useState(false);
  return (
    <div>
      <div
        className="bg-gray-200 rounded w-full my-3 hover:bg-gray-300 btn"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <div>Insert new task</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="14"
          viewBox="0 0 448 512"
        >
          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
        </svg>
      </div>
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
              <input className="input input-bordered my-5 mx-2"></input>
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default EditModalBtn;
