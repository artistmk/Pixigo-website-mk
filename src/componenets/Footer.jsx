import '../responsive/Footer.css'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="panel2">
          <div className="footer-content">
            <ul>
              <p>Terms & Condition</p>
              <a href="#">About Us</a>
              <a href="#">Carrers</a>
              <a href="#">Articles</a>
              <a href="#">Our Terms</a>
            </ul>

            <ul>
              <p>Connect With Us</p>
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
              <a href="#">Youtube</a>
            </ul>

            <ul>
            <p>Upload Your Images</p>               	
            <a href='#'>See on Pixigo</a>
            <a href='#'>Protect and Build Your Brand</a>
            <a href='#'>Pixigo Offering</a>
            <a href='#'>Advertise Your Images</a>
            </ul>

            <ul>
           <p>Help & Support</p>                  
           <a href='#'>Your Account</a>
           <a href='#'>100% Protection</a>
           <a href='#'>Recalls and Product Safety Alerts</a>
           <a href='#'>Help</a>
            </ul>
          </div>
        </div>

        <div className="panel3">
          <p className="text-center">Copyright &copy; PIXIGO.com</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
