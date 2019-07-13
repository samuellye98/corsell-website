import PropTypes from "prop-types";
import styles from "../../../static/css/styles.module.css";

const navItems = [
  {
    id: "home",
    label: "Home",
    path: "/"
  },
  {
    id: "faq",
    label: "FAQ",
    path: "/faq"
  }
];

const renderNavItem = active => {
  const items = navItems.map((n, i) => (
    <li className={`${n.id === active ? active : ""}`} key={i}>
      <a href={n.path}>{n.label}</a>
    </li>
  ));

  return <ul>{items}</ul>;
};

const NavigationBar = ({ active }) => (
  <nav className={`${styles.navbar} d-xs-none d-sm-none d-md-none d-lg-block`}>
    {renderNavItem(active)}
  </nav>
);

export default NavigationBar;

NavigationBar.propTypes = {
  active: PropTypes.string
};
