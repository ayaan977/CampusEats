function Restaurants() {
  return (
    <section className="restaurant-list">
      <h2>All Restaurants</h2>
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
        <div className="card">
          <img src="https://source.unsplash.com/200x150/?chinese" alt="Chinese Food" />
          <h3>Dragon Wok</h3>
          <p>Chinese • ₹180 for one</p>
        </div>
        <div className="card">
          <img src="https://source.unsplash.com/200x150/?sandwich" alt="Sandwich" />
          <h3>Subway</h3>
          <p>Fast Food • ₹120 for one</p>
        </div>
        <div className="card">
          <img src="https://source.unsplash.com/200x150/?biryani" alt="Biryani" />
          <h3>Biryani House</h3>
          <p>Indian • ₹160 for one</p>
        </div>
      </div>
    </section>
  );
}

export default Restaurants;