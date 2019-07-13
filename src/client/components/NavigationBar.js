import PropTypes from "prop-types";
import "../../../static/css/styles.css";

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

  return (
    <ul className="navbar-nav ml-auto d-none d-lg-flex d-xl-flex">{items}</ul>
  );
};

const NavigationBar = ({ active }) => (
  <nav id="navbar" className="d-xs-none d-sm-none d-md-none d-lg-block">
    <div className="collapse navbar-collapse" id="top-nav">
      {renderNavItem(active)}
    </div>
  </nav>
);

export default NavigationBar;

NavigationBar.propTypes = {
  active: PropTypes.string
};
