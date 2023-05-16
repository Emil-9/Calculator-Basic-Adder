import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer>
      <div className={classes["footer-container"]}>
        <p>
          Made with <span>{"💙"}</span> by &nbsp;
          <a
            rel="noreferrer"
            target="_blank"
            href="https://linkedin.com/in/emil-aljoudeh"
          >
            Emil
          </a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
