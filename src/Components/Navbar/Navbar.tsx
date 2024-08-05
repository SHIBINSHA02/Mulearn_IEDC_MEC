import styles from "./Navbar.module.css";
import { useEffect, useState } from "react";
import { ULearn } from "../../assets/svg/svg";
import { useReactPath } from "./path.hook.ts";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [openmenu, setopenmenu] = useState(false);
    const [navbg, setNavBg] = useState(false);

    const openMenu = () => {
        setopenmenu(!openmenu);
    };

    const path = useReactPath();
    const navContent = ["home", "about", "gallery", "team", "contact"];

    useEffect(() => {}, [path]);

    const changeNavBg = () => {
        window.scrollY >= 600 ? setNavBg(true) : setNavBg(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNavBg);
        return () => {
            window.removeEventListener("scroll", changeNavBg);
        };
    }, []);

    return (
        <div
            className={styles.navbarWrapper}
            style={{
                background: navbg ? "rgb(174 89 255 / 64%)" : "transparent",
            }}
        >
            <div className={styles.navbarLeft}>
                <a href="#home">
                    <ULearn />
                </a>
            </div>
            <div className={styles.navbarRight}>
                <div>
                    {navContent.map((content, i) => (
                        <a href={`#${content}`} key={i.toString() + content}>
                            <p
                                className={`${styles.navbarItem} ${window.location.href.includes(`#${content}`) ? styles.selected : ''}`}
                                style={{
                                    borderBottom: window.location.href.includes(`#${content}`) ? "4px solid #B3B3FF" : "",
                                    fontSize: "18px",
                                    fontWeight: 600,
                                }}
                            >
                                {content}
                            </p>
                        </a>
                    ))}
                </div>
                <button>
                    <a href ="#explore">Join us</a>
                </button>
            </div>

            <div className={styles.navbarMobile}>
                <button onClick={openMenu} className={styles.hamburger}>
                    <AiOutlineMenu />
                </button>
                {openmenu && (
                    <div>
                        {navContent.map((content, i) => (
                            <a href={`#${content}`} key={i.toString() + content}>
                                <p
                                    className={`${styles.navbarItem} ${window.location.href.includes(`#${content}`) ? styles.selected : ''}`}
                                    style={{
                                        borderBottom: window.location.href.includes(`#${content}`) ? "4px solid #B3B3FF" : "",
                                        fontSize: "18px",
                                        fontWeight: 600,
                                    }}
                                >
                                    {content}
                                </p>
                            </a>
                        ))}
                        <button>
                            <a href="#explore">Join us</a>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
