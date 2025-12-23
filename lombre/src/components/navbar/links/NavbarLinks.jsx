import style from "./navbarLinks.module.scss";

export const NavbarLinks = ({subscribe}) => {
  const links = [
    { text: "about", href: "/" },
    { text: "articles", href: "/" },
    { text: "coffee", href: "/" },
  ];
  subscribe ? links.push({ text: "subscribe", href: "/" }) : null

  return (
    <ul className={style.navLink}>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href}>{link.text}</a>
        </li>
      ))}
    </ul>
  );
};
