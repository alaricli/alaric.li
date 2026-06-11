const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container mx-auto max-w-4xl px-6 py-6">
        <p className="text-center text-xs text-muted-foreground">
          Copyright © {currentYear} Alaric Li, all rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
