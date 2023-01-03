import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="select-none bg-zinc-100">
      <main>{children}</main>
    </div>
  );
};

export default Layout;
