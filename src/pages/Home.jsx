function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Delicious Meals Delivered to Your Hostel</h1>
          <p>Order from top restaurants in Gurgaon right to your campus gate 🚀</p>
          <div className="search-container">
            <input type="text" placeholder="Search for food or restaurants..." />
            <button>Search</button>
          </div>
        </div>
      </section>

      <section className="restaurant-list">
        <h2>Popular Restaurants near Campus</h2>
        <div className="restaurants">
          <div className="card">
            <img src="https://source.unsplash.com/200x150/?pizza" alt="Pizza" />
            <h3>Pizza Empire</h3>
            <p>Italian • ₹200 for one</p>
          </div>
          <div className="card">
            <img src="https://source.unsplash.com/200x150/?burger" alt="Burger" />
            <h3>Grill Master</h3>
            <p>American • ₹150 for one</p>
          </div>
          <div className="card">
            <img src="https://source.unsplash.com/200x150/?indianfood" alt="Indian Food" />
            <h3>Desi Zaika</h3>
            <p>Indian • ₹100 for one</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;