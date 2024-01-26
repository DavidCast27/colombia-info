import Link from "next/link";

import { Typography } from "../ui/typography";

export function Nav() {
  const MENU = [
    { href: "/regions", label: "Regiones" },
    { href: "/maps", label: "Mapas" },
  ];

  return (
    <nav>
      <ul className="space-y-2 font-medium justify-center">
        {MENU.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="flex items-center justify-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <Typography variant="span">{label}</Typography>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
