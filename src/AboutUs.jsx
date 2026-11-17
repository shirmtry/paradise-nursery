import Navbar from './components/Navbar';

function AboutUs() {
  return (
    <div className="page">
      <Navbar />
      <main className="about-container">
        <h1 className="page-title">About Us</h1>
        <section className="about-section">
          <h2>Who We Are</h2>
          <p>
            Paradise Nursery is a family-owned plant shop founded in 2015. We
            started with a single greenhouse and a simple belief: everyone
            deserves a little green in their life. Today we grow and source
            over 100 varieties of houseplants, from easy-care air purifiers to
            fragrant aromatic herbs.
          </p>
        </section>
        <section className="about-section">
          <h2>What We Do</h2>
          <p>
            We hand-pick every plant in our collection for its health, beauty,
            and suitability for indoor living. Whether you are looking for a
            plant that cleans your air, fills your room with fragrance, or
            keeps insects away naturally, we have a category for you.
          </p>
        </section>
        <section className="about-section">
          <h2>Our Promise</h2>
          <ul className="about-list">
            <li>Every plant is grown with care and checked before shipping.</li>
            <li>Free care guides with every order.</li>
            <li>14-day happiness guarantee — if your plant arrives unhappy, we replace it.</li>
          </ul>
        </section>
        <section className="about-section">
          <h2>Visit Us</h2>
          <p>
            Our store is located at 12 Green Valley Road, and our virtual
            shelves are open 24/7 right here. Happy planting!
          </p>
        </section>
      </main>
    </div>
  );
}

export default AboutUs;
