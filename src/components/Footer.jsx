import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>&copy; {new Date().getFullYear()} Clothery - All rights reserved.</p>
      </div>
    </footer>
  );
}
