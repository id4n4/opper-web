import { motion } from "framer-motion";
import { useState } from "react";

export const MenuMobile = ({
  navbarLinks,
  menuSelected,
  onChangeMenuSelected,
  isOpen,
  hideMenu,
}) => {
  const selectNewMenu = (id) => {
    onChangeMenuSelected(id);
    hideMenu();
  };
  return (
    <motion.div
      variants={{
        open: {
          clipPath: "inset(0% 0% 0% 0% round 10px)",
          transition: {
            type: "spring",
            bounce: 0,
            duration: 0.7,
          },
        },
        closed: {
          clipPath: "inset(10% 50% 90% 50% round 10px)",
          transition: {
            type: "spring",
            bounce: 0,
            duration: 0.3,
          },
        },
      }}
      animate={isOpen ? "open" : "closed"}
      className="absolute top-3 left-0 right-0 z-40"
    >
      <ul className="flex flex-col mt-16 lg:hidden  bg-cardBackground z-50 w-full items-center gap-2 py-5 px-10">
        {navbarLinks.map(({ id, label, href, ariaLabel, children }) => (
          <li
            key={id}
            className={`w-full text-start  py-2  ${
              id === menuSelected ||
              children?.some((c) => c.id === menuSelected)
                ? "border rounded-lg border-primary text-headline"
                : "text-paragraph "
            }`}
          >
            {children?.length ? (
              <SelectMenuMobile
                items={children}
                menuSelected={menuSelected}
                onChangeMenuSelected={selectNewMenu}
                label={label}
              />
            ) : (
              <a
                href={href}
                aria-label={ariaLabel}
                className="py-2.5 px-4 rounded-lg duration-300 text-sm  hover:text-primary font-medium transition-all block w-full"
                onClick={() => selectNewMenu(id)}
              >
                {label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const SelectMenuMobile = ({
  items,
  onChangeMenuSelected,
  menuSelected,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handlerOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <button
        className="py-2 px-4 rounded-lg duration-300 text-sm hover:bg-cardBackground font-medium transition-all w-full text-start"
        onClick={handlerOpen}
      >
        <h3>{label}</h3>
      </button>
      <ul
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className=" bg-cardBackground z-50 w-full px-10 flex flex-col gap-2 rounded-lg overflow-hidden duration-300 transition-all"
        style={{
          maxHeight: isOpen ? `500px` : "0px",
        }}
      >
        {items.map(({ id, href, ariaLabel, label }) => (
          <li
            key={id}
            className={`w-full text-start text-balance py-2 ${
              id === menuSelected
                ? "border rounded-lg border-primary text-headline"
                : "text-paragraph"
            }`}
          >
            <a
              href={href}
              aria-label={ariaLabel}
              className="py-2.5 px-4 rounded-lg duration-300 text-sm  hover:text-primary font-medium transition-all block w-full"
              onClick={() => onChangeMenuSelected(id)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
