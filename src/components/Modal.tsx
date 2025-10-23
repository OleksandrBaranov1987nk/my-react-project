import { createPortal } from "react-dom";
import css from "./Modal.module.css";

export default function Modal() {
  return createPortal(
    <div className={css.backdrop}>
      <div className={css.modal}>
        <h2>Modal Title</h2>
        <p>This is some content inside the modal.</p>
      </div>
    </div>,
    document.body
  );
}
