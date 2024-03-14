import { SelectMenu } from "./SelectMenu";

export const Menu = ({ menuSelected, navbarLinks }) => {
  return (
    <div className="hidden lg:flex h-full pl-12 pb-2 gap">
      <ul className="w-full  flex items-center gap-x-3 overflow-x-auto">
        {navbarLinks.map(({ id, href, label, ariaLabel, children }) => (
          <li
            key={id}
            className={`${
              id === menuSelected ||
              children?.some((c) => c.id === menuSelected)
                ? "border-b-2 border-primary text-headline"
                : "text-paragraph"
            } ${children?.length ? "" : "py-2"}`}
          >
            {children?.length ? (
              <SelectMenu
                items={children}
                label={label}
                menuSelected={menuSelected}
              />
            ) : (
              <a
                href={href}
                aria-label={ariaLabel}
                className="py-2.5 px-4 rounded-lg duration-300 text-sm  hover:bg-cardBackground font-medium transition-all"
              >
                {label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
