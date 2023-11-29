// src/components/Navbar.js
import React, { useRef, useEffect } from 'react';

const Navbar = () => {
  const indicatorRef = useRef(null);
  const itemsRef = useRef(null);

  useEffect(() => {
    const indicator = indicatorRef.current;
    const items = itemsRef.current.children;

    const handleIndicator = (el) => {
      Array.from(items).forEach((item) => {
        item.classList.remove('is-active');
        item.removeAttribute('style');
      });

      indicator.style.width = `${el.offsetWidth}px`;
      indicator.style.left = `${el.offsetLeft}px`;
      indicator.style.backgroundColor = el.getAttribute('active-color');

      el.classList.add('is-active');
      el.style.color = el.getAttribute('active-color');
    };

    Array.from(items).forEach((item) => {
      item.addEventListener('click', (e) => handleIndicator(e.target));
      item.classList.contains('is-active') && handleIndicator(item);
    });
  }, []);

  return (
    <nav className="nav relative overflow-hidden max-w-full bg-white p-4 md:p-6 rounded-md shadow-md">
      <a href="#" className="nav-item block py-2 px-4 md:px-6 is-active" active-color="orange">
        Home
      </a>
      <a href="#" className="nav-item block py-2 px-4 md:px-6" active-color="green">
        About
      </a>
      <a href="#" className="nav-item block py-2 px-4 md:px-6" active-color="blue">
        Testimonials
      </a>
      <a href="#" className="nav-item block py-2 px-4 md:px-6" active-color="red">
        Blog
      </a>
      <a href="#" className="nav-item block py-2 px-4 md:px-6" active-color="rebeccapurple">
        Contact
      </a>
      <span className="nav-indicator absolute left-0 bottom-0 h-1 bg-blue-500 transition duration-300"></span>
    </nav>
  );
};

export default Navbar;
