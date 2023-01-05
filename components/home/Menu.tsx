import Link from "next/link";
import React from "react";

const items = [
  { id: 1, name: "مشاوره آنلاین", link: "/chat" },
  { id: 2, name: "گزارش ماهانه", link: "/search/list" },
  { id: 3, name: "آشپزی", link: "/cooking" },
  // { id: 4, name: "ورزش", link: "/workout" },
];

const Menu = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-8">
      <div className="w-fit grid grid-cols-3 items-center gap-5 justify-center">
        {items.map((item) => (
          <Link key={item.id} href={item.link}>
            <a className="w-20 h-20 rounded-full bg-zinc-200 shadow-md  flex items-center justify-center hover:scale-90 transition duration-300">
              <p>{item.name}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
