// src/app/components/Navbar.js
import HomeItem from './navitems/HomeItem';
import AboutItem from './navitems/AboutItem';
import ContactItem from './navitems/ContactItem';

const Navbar = () => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Menu</h2>
      <ul>
        <HomeItem /> {/* Navbar item for Home */}
        <AboutItem /> {/* Navbar item for About */}
        <ContactItem /> {/* Navbar item for Contact */}
      </ul>
    </div>
  );
};

export default Navbar;
