import { X } from "react-feather"

import { ReactNode } from "react";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
    return (
        // backdrop
        <div
            onClick={onClose}
            className={`
        fixed inset-0 flex justify-center items-center transition-colors bg-black
        ${open ? "visible" : "invisible"}
    `}
        >
            {/* modal */}
            <div
                onClick={(e) => e.stopPropagation()}
                className={`bg-green rounded-xl shadow p-6 transition-all
        ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 p-1 rounded-lg text-white bg-lightgreen hover:bg-gray-50 hover:text-gray-600"
                >
                    <X />
                </button>
                {children}
            </div>
        </div>
    )
}