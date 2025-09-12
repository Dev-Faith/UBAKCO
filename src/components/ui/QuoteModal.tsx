"use client"
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import {useStore} from "@/lib/store/useStore";
import QuoteRequestForm from "./forms/QuoteRequestForm";

interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const modalVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 30
    }
  }
};



export default function QuoteModal() {
    const {isQuoteModalOpen, closeQuoteModal} = useStore();
  return (
    <AnimatePresence>
      {isQuoteModalOpen && (
        <motion.div
          className="fixed inset-0 z-50  flex items-center justify-center bg-black/40 backdrop-blur-[8px] overflow-hidden" 
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
          onClick={closeQuoteModal}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full relative overflow-y-auto max-h-[90vh]"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-[#EA5C2B] text-2xl"
              onClick={closeQuoteModal}
              aria-label="Close"
            >
              &times;
            </button>
            <QuoteRequestForm />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
