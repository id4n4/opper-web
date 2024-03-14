import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const SelectMenu = ({ label, items, menuSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handlerOpen = () => setIsOpen((prev) => !prev);
  useEffect(() => {
    setIsOpen(false);
  }, [menuSelected]);

  return (
    <>
      <button
        className="py-2 px-4 rounded-lg duration-300 text-sm hover:bg-cardBackground font-medium transition-all"
        onClick={handlerOpen}
      >
        <h3>{label}</h3>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed bg-cardBackground z-50 w-40 flex flex-col gap-2 p-2 rounded-lg "
          >
            {items.map(({ id, href, ariaLabel, label }) => (
              <li
                key={id}
                className={`w-full text-center ${
                  id === menuSelected
                    ? "border rounded-lg border-primary text-headline"
                    : "text-paragraph"
                }`}
              >
                <a
                  href={href}
                  aria-label={ariaLabel}
                  className="py-2.5 px-4 rounded-lg duration-300 text-sm  hover:text-primary font-medium transition-all"
                >
                  {label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};
