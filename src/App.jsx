import { useEffect, useState } from 'react'
import './App.css'
// import Navbar from './Navbar';

function App() {
  const items = [
    { label: 'Home', activeColor: 'orange' },
    { label: 'About', activeColor: 'green' },
    { label: 'Testimonials', activeColor: 'blue' },
    { label: 'Blog', activeColor: 'red' },
    { label: 'Contact', activeColor: 'rebeccapurple' },
  ];
  const [activeItem, setActiveItem] = useState(0);

  const handleIndicator = (index) => {
    setActiveItem(index);
  };
  useEffect(() => {
    const indicator = document.querySelector('.nav-indicator');
    const items = document.querySelectorAll('.nav-item');

    const activeItemElement = items[activeItem];

    if (indicator && activeItemElement) {
      indicator.style.width = `${activeItemElement.offsetWidth}px`;
      indicator.style.left = `${activeItemElement.offsetLeft}px`;
      indicator.style.backgroundColor = activeItemElement.getAttribute('active-color');
    }
  }, [activeItem]);

  return (
    <>
    {/* <Navbar/> */}
    <nav className="nav">
    {items.map((item, index) => (
      <a
        key={index}
        href="#"
        className={`nav-item ${index === activeItem ? 'is-active' : ''}`}
        // eslint-disable-next-line react/no-unknown-property
        active-color={item.activeColor}
        onClick={() => handleIndicator(index)}
      >
        {item.label}
      </a>
    ))}
    <span className="nav-indicator"></span>
  </nav>
  </>
  )
}

export default App
