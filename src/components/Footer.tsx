
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 text-center text-portfolio-slate text-sm">
      <div className="container mx-auto px-4">
        <p>
          Designed & Built with ❤️
        </p>
        <p className="mt-2">
          © {currentYear} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
