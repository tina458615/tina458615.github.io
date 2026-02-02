import { motion, AnimatePresence } from 'motion/react';

interface NotificationProps {
  message: string;
  type: 'error' | 'success';
}

export default function Notification({ message, type }: NotificationProps) {
  const bgColor = type === 'error' ? 'bg-red-600' : 'bg-green-600';
  const icon = type === 'error' ? '⚠️' : '✅';

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className={`absolute left-1/2 top-[200px] -translate-x-1/2 z-[60] px-12 py-6 ${bgColor} rounded-2xl shadow-2xl`}
        >
          <p className="font-['GenSenRounded_TW:H',sans-serif] text-white text-[40px] text-center whitespace-nowrap">
            {icon} {message}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
