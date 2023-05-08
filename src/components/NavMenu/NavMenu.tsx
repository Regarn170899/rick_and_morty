import React, { ReactElement, useState } from "react";
import { arrMenu } from "@constants/index";
import { Link } from "react-router-dom";
import styles from "./NavMenu.module.scss";
import cx from "classnames";

const NavMenu = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  return (
    <div>
      <div
        className={cx(styles.burger_btn, { [styles.open]: isMenuActive })}
        onClick={() => {
          setIsMenuActive(!isMenuActive);
          isMenuActive
            ? (document.body.className = "activeScroll")
            : (document.body.className = "deactivateScroll");
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div>
        <div
          className={cx(styles.navContainer, { [styles.active]: isMenuActive })}
        >
          {arrMenu.map((itemMenu): ReactElement => {
            return (
              <Link
                onClick={() => {
                  setIsMenuActive(false);
                  isMenuActive
                    ? (document.body.className = "activeScroll")
                    : (document.body.className = "deactivateScroll");
                }}
                key={itemMenu.id}
                className={styles.navItem}
                to={itemMenu.path}
              >
                {itemMenu.name}
              </Link>
            );
          })}
        </div>
      </div>{" "}
    </div>
  );
};

export default NavMenu;
