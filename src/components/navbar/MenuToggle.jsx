import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle, isOpen }) => (
  <button
    onClick={toggle}
    className="lg:hidden p-3 border-solid border border-gray-600 rounded-md hover:bg-cardBackground z-50"
  >
    <svg width="23" height="23" viewBox="0 0 20 20">
      <Path
        d="m 2 2 L 18 2"
        variants={{
          closed: { d: "m 2 2 L 18 2", transition: { duration: 0.1 } },
          open: { d: "m 2 18 L 18 2" },
        }}
        animate={isOpen ? "open" : "closed"}
      />
      <Path
        d="m 2 10 L 18 10"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
        animate={isOpen ? "open" : "closed"}
      />
      <Path
        d="m 2 18 L 18 18"
        variants={{
          closed: { d: "m 2 18 L 18 18", transition: { duration: 0.1 } },
          open: { d: "m 2 2 L 18 18" },
        }}
        animate={isOpen ? "open" : "closed"}
      />
    </svg>
  </button>
);
