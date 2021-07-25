import { h } from 'preact';
import Styles from './styles.module.scss';

function Footer() {
  return (
    <footer className={Styles.footer}>
      &copy; {new Date().getFullYear()} Tridib Ghosh
      <small className={Styles.byline}>Developer Consultant @ <span className={Styles.noTextTransform}>MaiaLearning</span></small>
    </footer>
  );
}
export default Footer;
