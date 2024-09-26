import { Button } from "./button";

type ConfirmationModalProps = {
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
};

const ConfirmationModal = ({
  show,
  onClose,
  onConfirm,
  title,
  message,
}: ConfirmationModalProps) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        <p className="mb-6">{message}</p>
        <div className="flex justify-end space-x-4">
          <Button className="bg-gray-500 text-white" onClick={onClose}>
            Cancel
          </Button>
          <Button className="bg-red-500 text-white" onClick={onConfirm}>
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
