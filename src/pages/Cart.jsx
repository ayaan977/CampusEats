function Cart() {
  return (
    <section className="cart-section">
      <div className="cart-container">
        <h2>Your Cart</h2>
        <div className="cart-items">
          <div className="cart-item">
            <img src="https://source.unsplash.com/80x80/?pizza" alt="Pizza" />
            <div className="item-details">
              <h4>Margherita Pizza</h4>
              <p>₹200</p>
              <div className="quantity">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-summary">
          <h3>Order Summary</h3>
          <div className="subtotal">
            <span>Subtotal:</span>
            <span>₹200</span>
          </div>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </section>
  );
}

export default Cart;