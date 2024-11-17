import { FC } from "react";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center">
      <div className="p-2 text-sm">
        <p>
          <small>
            Copyright © {currentYear} Alaric Li, all rights reserved
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
