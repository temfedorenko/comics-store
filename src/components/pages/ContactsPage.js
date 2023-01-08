import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/icons8-linkedin.svg";
import { ReactComponent as GithubIcon } from "../../assets/icons/icons8-github.svg";

import "./ContactsPage.scss";

const ContactsPage = () => {
  return (
    <section className="contacts">
      <Breadcrumbs firstPath={"Contacts"} />
      <h1 className="section-title">Contacts</h1>
      <div className="contacts__content">
        <h2 className="contacts__subtitle">
          Developed by <span>Artem Fedorenko</span>
        </h2>
        <p className="contacts__info">
          If I can be of assistance, please don't hesitate to contact me:
        </p>
        <div className="contacts__icons">
          <a
            className="contacts__link"
            href="https://www.linkedin.com/in/temfedorenko/"
            target="_blank">
            <LinkedinIcon />
          </a>
          <a className="contacts__link" href="https://github.com/temfedorenko" target="_blank">
            <GithubIcon />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactsPage;
