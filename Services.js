import '../styles/services.css';

const Services = () => {
   return (
      <section id="services" className="services">
         <h1>Our Services</h1>
         <div className="services_main">
            <div className="service_box">
               <div className="service_icon">📈</div>
               <h3>SEO Optimization</h3>
               <p>Boost your search rankings with our effective SEO strategies.</p>
               <button className="learn_more">Learn More</button>
            </div>
            <div className="service_box">
               <div className="service_icon">📱</div>
               <h3>Social Media Marketing</h3>
               <p>Engage your audience on all major social media platforms.</p>
               <button className="learn_more">Learn More</button>
            </div>
            <div className="service_box">
               <div className="service_icon">💡</div>
               <h3>PPC Campaigns</h3>
               <p>Maximize your ROI with targeted PPC advertising.</p>
               <button className="learn_more">Learn More</button>
            </div>
            <div className="service_box">
               <div className="service_icon">🖊️</div>
               <h3>Content Marketing</h3>
               <p>Create and distribute valuable content to attract your audience.</p>
               <button className="learn_more">Learn More</button>
            </div>
         </div>
      </section>

   );
};

export default Services;
