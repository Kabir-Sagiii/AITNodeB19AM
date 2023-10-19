function Nav() {
  return (
    <div className="bg-dark navbar navbar-dark p-3">
      <div>
        <a href="" className="navbar-brand px-5 mx-5 ">
          Ecommerce App
        </a>
      </div>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link text-white" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">
            Products
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">
            Users
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">
            Cart
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
