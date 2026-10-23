import React, { useState } from 'react';
import './Samples.css';

export const Samples: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'desc' | 'brew' | 'shipping' | 'faq'>('desc');
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity(prev => prev + 1);
  const decreaseQty = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  return (
    <div className="wrap" style={{ paddingTop: '100px' }}> {/* padding added to account for global fixed navbar */}
      
      <div className="breadcrumb">
        <a href="/">Home</a> <span>/</span> <span style={{ color: 'var(--coffee-900)' }}>Sampler Kit</span>
      </div>

      <div className="product-grid">
        
        {/* Left Side: Images */}
        <div className="gallery">
          <div className="main-img">
            {/* TODO: Here is where you can upload the photo where you are showcasing the sampler kit! Just replace this URL below. */}
            <img 
              src="https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=1200" 
              alt="Showcasing the Arka Originals Sampler Kit"
            />
          </div>
          <div className="thumbnails">
            <div className="thumb-img"></div>
            <div className="thumb-img"></div>
            <div className="thumb-img"></div>
            <div className="thumb-img"></div>
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="product-info">
          
          <div className="badges">
            <span className="badge">Best Seller</span>
            <span className="badge" style={{ background: '#c8742a' }}>Limited Stock</span>
          </div>

          <div>
            <h1 className="product-title">Signature Sampler Kit</h1>
            <p className="product-tagline">Three carefully curated items delivered to your door.</p>
          </div>

          {/* Pricing */}
          <div className="price-block">
            <div className="price-left">
              <span className="price-note">1 Kit = 200g Beans + 100ml Liquid</span>
              <span style={{ fontSize: '12px', color: 'var(--coffee-600)' }}>Secure Order Form</span>
            </div>
            <div className="price-right">
              <div className="price-amount">₹579</div>
            </div>
          </div>

          {/* Actions */}
          <div className="actions">
            <div className="qty-selector">
              <button className="qty-btn" onClick={decreaseQty}>-</button>
              <input type="text" className="qty-input" value={quantity} readOnly />
              <button className="qty-btn" onClick={increaseQty}>+</button>
            </div>
            
            <a 
              href="https://forms.gle/c2TTB7Uy4MuBjLn3A" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
            >
              BUY NOW
            </a>
          </div>

          {/* Update Guide */}
          <div className="update-guide">
            <h4>Setup Required:</h4>
            <ul>
              <li>Upload your main image using the code editor.</li>
              <li>Replace testing thumbnails with actual images if needed.</li>
            </ul>
          </div>
          
        </div>
      </div>

      {/* What's Inside Section */}
      <div className="whats-inside">
        <h3 className="section-heading">What's Inside</h3>
        
        <div className="bean-item">
          <div className="bean-title">1. 100% PLAAA Arabica (100g)</div>
          <div className="bean-origin">Origin: Chikamagalur • Elevation: 1200 - 1400m</div>
          <div className="bean-notes">Notes: Dark Chocolate, Orange with a hint of spice.</div>
        </div>

        <div className="bean-item">
          <div className="bean-title">2. Espresso Blend 70/30 (100g)</div>
          <div className="bean-origin">Origin: Chikamagalur • Elevation: 900-1200m</div>
          <div className="bean-notes">Notes: Dark Chocolate, nutty. Blend 70/30.</div>
        </div>

        <div className="bean-item">
          <div className="bean-title">3. Liquid Coffee Concentrate (100ml)</div>
          <div className="bean-origin">Roast: Custom Profile for Maximum Extraction</div>
          <div className="bean-notes">Notes: Highly concentrated, rich coffee extract ideal for quick, consistent iced coffees and milk beverages.</div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="tabs-section">
        <div className="tabs-header">
          <button className={`tab-btn ${activeTab === 'desc' ? 'active' : ''}`} onClick={() => setActiveTab('desc')}>Description</button>
          <button className={`tab-btn ${activeTab === 'brew' ? 'active' : ''}`} onClick={() => setActiveTab('brew')}>Brewing Guide</button>
          <button className={`tab-btn ${activeTab === 'shipping' ? 'active' : ''}`} onClick={() => setActiveTab('shipping')}>Shipping</button>
          <button className={`tab-btn ${activeTab === 'faq' ? 'active' : ''}`} onClick={() => setActiveTab('faq')}>FAQs</button>
        </div>
        
        <div className="tab-content">
          {activeTab === 'desc' && (
            <div>
              <h4>Experience Arka Originals before committing to scale.</h4>
              <p>Everything you need to discover the distinct flavor profiles of our carefully roasted beans and concentrates before committing to a larger volume. Our sampler kit is the perfect start for cafes, restaurants, and hotels wanting to taste our signature commercial-scale roasts.</p>
              <p>We don't just sell coffee. We provide the foundation for your cafe's beverage program — crafted for quality and consistency.</p>
            </div>
          )}
          {activeTab === 'brew' && (
            <div>
              <h4>Arabica & Blends</h4>
              <p>For espresso, we recommend a 1:2 ratio. 18g in, 36g out in about 28-32 seconds.</p>
              <h4>Liquid Concentrate</h4>
              <p>Mix 1 part concentrate with 4 parts milk or water. Adjust to taste. Perfect for creating consistent iced lattes rapidly during rush hour.</p>
            </div>
          )}
          {activeTab === 'shipping' && (
            <div>
              <p>Roasted to order in Delhi NCR. All sampler kits ship within 72 hours of placing the order to ensure maximum freshness.</p>
              <p>We use standard domestic couriers. Delivery time is usually 3-5 business days depending on your location in North India.</p>
            </div>
          )}
          {activeTab === 'faq' && (
            <div>
              <h4>Can I choose the beans in the sampler kit?</h4>
              <p>Currently, the kit is pre-curated to include our 3 most popular commercial items to give you a well-rounded experience of our roasting capabilities.</p>
              <h4>Do you offer this for retail?</h4>
              <p>This kit is specifically designed for HoReCa (Hotels, Restaurants, Cafes) professionals evaluating our wholesale supply, though individuals may purchase it.</p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};
