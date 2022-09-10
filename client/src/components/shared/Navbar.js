import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <Link to='/'>
        <li>Home</li>
      </Link>
      <Link to='/users'>
        <li>Users</li>
      </Link>
    </ul>
  </nav>
)

export default Navbar;