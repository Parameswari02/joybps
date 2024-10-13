import '../styles/style.css';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="hero" className="hero_section">
      <div className="image_collage">
        <img src="https://media.istockphoto.com/id/1533636957/photo/search-engine-concept-background-a-look-into-the-future-of-ai-search-digital-loupe-icon.jpg?s=612x612&w=0&k=20&c=xRHYC8_JT66_GJuAJZ85xNybJa5B5MhQwYrLEKkoCVI=" alt="SEO" />
        <img src="https://media.istockphoto.com/id/2005560684/photo/digital-marketing-concept-business-market-channel-solution-investment-e-commerce-online-sale.jpg?s=612x612&w=0&k=20&c=wJ6OEeP_1KWL-wUO9uc2CBx_QwwaU6lj6H4E3MYidUY=" alt="Social Media" />
        <img src="https://media.istockphoto.com/id/1403168404/photo/virtual-screen-icons-document-management-system-online-document-file-data-software-for.jpg?s=612x612&w=0&k=20&c=uAXvcVeFntO5Ue-TTpNcjkYgaejlfGFbNkgBDClyDBQ=" alt="Content Marketing" />
        <img src="https://media.istockphoto.com/id/2119758624/photo/artificial-intelligence-content-generator-a-man-uses-a-laptop-to-interact-with-ai-assistant.jpg?s=612x612&w=0&k=20&c=nJcuknvnb3q9sR8zJ8NRYsopXJJNBe1_KcA3iGk1344=" alt="PPC" />
        <img src="https://media.istockphoto.com/id/1308647488/vector/bitcoin-logo-with-electronic-circuit-on-blue-background.jpg?s=612x612&w=0&k=20&c=6LCi-nFG3VrhD7L8j1ncGAod0yeSBoz7-rk7jiS3KYs=" alt="Analytics" />
        <img src="https://media.istockphoto.com/id/1290538756/photo/3d-code-programming-for-website-editors-view.jpg?s=612x612&w=0&k=20&c=i8Z2iFXt7-IyCUppGxEhOqYwwx9QYihPKHEtIRNh-es=" alt="Web Development" />
      </div>

      <div className="hero_text">
        <h1>Welcome to JoyBPS</h1>
        <p>Your SEO and Digital Marketing Experts</p>
        <Link href="/form-page">
          <button className="start_btn">Get Started</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;



