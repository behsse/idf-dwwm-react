import { Links } from "./Links";

export const Nav = () => {
  const links = [
    {
      text: "Destinations",
      href: "/",
    },
    {
      text: "Expériences",
      href: "/",
    },
    {
      text: "Services",
      href: "/",
    },
  ];
  return (
        <ul className="flex items-center gap-10">
            {
                links.map((link, index) => (
                    <Links key={index} text={link.text} href={link.href}/>
                ))
            }
        </ul>
    )
};
