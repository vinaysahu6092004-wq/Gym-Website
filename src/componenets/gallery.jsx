import React from "react";
import "./gallery.css";

const images = [
  {
    url: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba",
    title: "Strength Training Zone",
  },
  {
    url: "https://imgs.search.brave.com/uPczQq43hxq7s6r3uD3A-40wjLR5LWIQ0RSr9e694kc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDQv/Njc1LzA2MS9zbWFs/bC9wZXJzb25hbC10/cmFpbmVyLWFuZC1j/bGllbnQtbG9va2lu/Zy1hdC1oZXItcHJv/Z3Jlc3MtYXQtdGhl/LWd5bS1waG90by5q/cGc",
    title: "Personal Coaching",
  },
  {
    url: "https://imgs.search.brave.com/Pz_fpjTED257yaKl-0cCDnlazQaBOy-t76uCH-q6Hdo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zcG9y/dC1neW0tZXF1aXBt/ZW50LWZpdG5lc3Mt/Ym9keS1idWlsZGlu/Zy13b3Jrb3V0LXRy/YWluaW5nLWJhcmJl/bGwtYmFycy1kdW1i/YmVsbHMta2V0dGxl/YmVsbHMtYmFsbHMt/c3RhbmQtMTQwODI2/MjQ4LmpwZw",
    title: "Modern Equipment",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-header">
        <h2>Experience FitZone</h2>
        <p>Explore our world-class training environment</p>
      </div>

      <div className="gallery-grid">
        {images.map((item, idx) => (
          <div key={idx} className="gallery-card">
            <img src={item.url} alt={item.title} />
            <div className="overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;