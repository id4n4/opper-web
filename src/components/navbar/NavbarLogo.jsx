import { PATH } from "../../constants/paths";

export const NavbarLogo = () => {
  return (
    <a className="navbar-link" href={PATH.HOME} aria-label="Home">
      <img src={"../img/logoV2.png"} alt="Opper" className="h-10" />
    </a>
  );
};
