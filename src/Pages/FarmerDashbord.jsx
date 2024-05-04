import "../styles/FarmerDashbord.css";
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function App() {
  const [open, setOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const links = [
    { text: "Add", to: "/AddProduct" },
    { text: "Edit", to: "/EditProduct" },
    { text: "Delete", to: "/DeleteProduct" },
  ];

  // the stagger effect
  const staggerList = stagger(0.1, { startDelay: 0.25 });

  // create the animations that will be applied
  // whenever the open state is toggled

  useEffect(() => {
    animate(
      "ul",
      {
        width: open ? 200 : 0,
        height: open ? 300 : 0,
        opacity: open ? 1 : 0,
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.4,
      }
    );
    animate(
      "li",
      open
        ? { opacity: 1, scale: 1, x: 0 }
        : { opacity: 0, scale: 0.3, x: -50 },
      {
        duration: 0.2,
        delay: open ? staggerList : 0,
      }
    );
  }, [open]);

  return (
    <div className="Farmer-Dashbord" ref={scope}>
      <motion.button
        className="inventoryButton"
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.95 }}
      >
        Inventory
      </motion.button>
      <ul>
        {links.map((link, index) => (
          <motion.li key={index}>
            <Link to={link.to}>{link.text}</Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}