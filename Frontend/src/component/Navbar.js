import { Link } from 'react-router-dom';

const Navbar = ()=>{
    return(
    <>
    <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div class="container-fluid">
      <Link className='navbar-brand' to='/'>TRIKL Option-2</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link className="nav-link active" to="/Get">GET</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link active" to="/">POST</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link active" to="/Update">PUT</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link active" to="/Delete">DELETE</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </>
  );
}

export default Navbar;