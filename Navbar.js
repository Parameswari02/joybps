
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_main">
        <h2 className="heading">JOYBPS</h2>
        <ul className="nav_link">
          <li><Link href="#hero">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#services">Services</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
        <div className="search-box">
          <input type="text" placeholder="Type to Search" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
