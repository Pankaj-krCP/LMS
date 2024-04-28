import { useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
  footer,
  disabled,
}) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    onClose();
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [onSubmit, disabled]);

  if (!isOpen) {
    return null;
  }
  console.log("Hi, I am here");

  return (
    <>
      <div
        className="
          justify-center 
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          fixed 
          inset-0 
          z-[100] 
          outline-none 
          focus:outline-none
          bg-neutral-800
          bg-opacity-50
        "
      >
        <div className="relative w-[95%] 800px:w-[50%] my-6 mx-auto h-full lg:h-auto">
          <div
            className="
            h-full
            lg:h-auto
            border-0 
            rounded-lg 
            shadow-lg 
            relative 
            flex 
            flex-col 
            w-full 
            bg-white
            dark:bg-gray-900
            outline-none 
            focus:outline-none
            "
          >
            <div
              className="
              flex 
              items-center 
              justify-between 
              p-10 
              rounded-t
              "
            >
              <h3 className="text-3xl font-semibold">{title}</h3>
              <button
                className="
                  p-1 
                  ml-auto
                  border-0 
                  hover:opacity-70
                  transition
                "
                onClick={handleClose}
              >
                <AiOutlineClose size={20} />
              </button>
            </div>

            <div className="relative py-2 px-10 sm:px-10 flex-auto">{body}</div>

            <div className="flex flex-col gap-2 p-10">
              <Button
                disabled={disabled}
                label={actionLabel}
                fullWidth
                large
                onClick={handleSubmit}
              />
              {footer}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
