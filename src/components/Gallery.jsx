import "./Gallery.css";

const galleryItems = [
  {
    image: '/images/IMAGE.png',
    title: 'GIR: One Year In',
    subtitle: 'Case Study'
  },
  {
    image: '/images/IMAGE2.png',
    title: 'Introducing Onsen',
    subtitle: 'New Additions'
  },
  {
    image: '/images/IMAGE3.png',
    title: 'Selling Your Shopify Brand: An Introduction',
    subtitle: 'Members & Acquisitions 101'
  },
  {
    image: '/images/IMAGE4.png',
    title: '5 Reasons We Are Optimistic for 2023',
    subtitle: 'Members & Acquisitions 101'
  },
  {
    image: '/images/IMAGE5.png',
    title: 'Why Right Now is a Great Time to Sell Your Brand',
    subtitle: 'Members & Acquisitions 101'
  },
  {
    image: '/images/IMAGE3.png',
    title: 'Selling Your Shopify Brand: Week 1',
    subtitle: 'Members & Acquisitions 101'
  },
  {
    image: '/images/IMAGE6.png',
    title: 'Pattern\'s 2022 Update',
    subtitle: 'Thought leadership'
  },
  {
    image: '/images/IMAGE7.png',
    title: 'Introducing Yield',
    subtitle: 'New additions'
  },
  {
    image: '/images/IMAGE8.png',
    title: 'Introducing Poketo',
    subtitle: 'New additions'
  },
];

function Gallery() {
  return (
    <section className="gallery-section">
      <p className="promo-description">
        Explore the brands joining Pattern Brands, the sales process & the
        founders behind them. 👇🏽
      </p>
      <div className="gallery-container">
        {galleryItems.map((item, index) => (
          <div key={index} className="gallery-item">
            <img src={item.image} alt={item.title} className="gallery-image" />
            <h3 className="gallery-title">{item.title}</h3>
            <p className="gallery-subtitle">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
