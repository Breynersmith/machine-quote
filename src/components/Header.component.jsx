const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
      <h2 className="navbar-brand px-5 fs-2">Machine Quote</h2>
      <div className="d-flex px-5 gap-3 fs-3">
        <a
          href="https://www.linkedin.com/in/breynerustariz/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin-in text-white"></i>
        </a>
        <a
          href="https://github.com/Breynersmith"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github text-white"></i>
        </a>
      </div>
    </nav>
  );
};

export default Header;
