// import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PATH } from "@/constants/paths";
import { NavbarLogo } from "./NavbarLogo";
import { Menu } from "./Menu";
import { MenuToggle } from "./MenuToggle";
import { MenuMobile } from "./MenuMobile";

const navbarLinks = [
  { id: 1, label: "Inicio", href: PATH.HOME, ariaLabel: "Inicio" },
  { id: 2, label: "Servicios", href: PATH.SERVICES, ariaLabel: "Servicios" },
  { id: 3, label: "Nosotros", href: PATH.ABOUT, ariaLabel: "Nosotros" },
  {
    label: "Herramientas",
    id: 4,
    children: [
      {
        id: 41,
        label: "Opper apps",
        href: PATH.OPPER_APPS,
        ariaLabel: "Opper apps",
      },
      {
        id: 42,
        label: "TG",
        href: PATH.TG,
        ariaLabel: "Opper API",
      },
      {
        id: 43,
        label: "Herramientas de modelación",
        href: PATH.MODELING_TOOLS,
        ariaLabel: "Herramientas de modelación",
      },
    ],
  },
  { id: 5, label: "Contacto", href: PATH.CONTACT, ariaLabel: "Contacto" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuSelected, setMenuSelected] = useState(1);
  const changeMenu = (index) => {
    setMenuSelected(index);
  };

  return (
    <nav className="w-full h-20 flex flex-col justify-center items-center sticky top-0 bg-background lg:bg-background/15 z-40 lg:backdrop-blur-xl">
      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
        <NavbarLogo />
        <Menu
          menuSelected={menuSelected}
          onChangeMenuSelected={changeMenu}
          navbarLinks={navbarLinks}
        />
        <MenuToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      </div>
      {/* Mobile navbar */}
      {/* <AnimatePresence>
        {isOpen && (
          <MenuMobile
            hideMenu={() => setIsOpen(false)}
            isOpen={isOpen}
            menuSelected={menuSelected}
            navbarLinks={navbarLinks}
            onChangeMenuSelected={changeMenu}
          />
        )}
      </AnimatePresence> */}
      <MenuMobile
        hideMenu={() => setIsOpen(false)}
        isOpen={isOpen}
        menuSelected={menuSelected}
        navbarLinks={navbarLinks}
        onChangeMenuSelected={changeMenu}
      />
    </nav>
  );
};
