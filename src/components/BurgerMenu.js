import React, { useState } from 'react'
import { Hidden, makeStyles } from '@material-ui/core'

const BurgerMenu = () => {
   const classes = useStyles()
   const [isActiveBurger, setIsActiveBurger] = useState(false)
   return (
      <Hidden smUp>
         <div className={isActiveBurger ? `${classes.burgerButton} ${classes.activedBurger}` : classes.burgerButton}
            onClick={() => setIsActiveBurger(!isActiveBurger)}
         >
            <div></div>
            <div></div>
            <div></div>
         </div>
         <ul className={isActiveBurger ? `${classes.burgerNavigator} ${classes.activedNavigator}` : classes.burgerNavigator}>
            <li><a href="#">Dự án</a></li>
            <li><a href="#">Xây dựng và hoàn thiện</a></li>
            <li><a href="#">Nội thất</a></li>
            <li><a href="#">Phong thuỷ</a></li>
            <li><a href="#">Giới thiệu</a></li>
            <li><a href="#">Liên hệ</a></li>
         </ul>
      </Hidden>
   )
}
const useStyles = makeStyles(theme => ({
   burgerButton: {
      cursor: "pointer",
      margin: "15px 0",
      padding: "5px",
      backgroundColor: "black",
      border: "1px solid black",
      borderRadius: "10px",
      zIndex: "100",
      "& > div": {
         width: "30px",
         transition: "all .5s ease",
         height: "3px",
         margin: "6px 0",
         backgroundColor: "#fff"
      },
   },
   activedBurger: {
      "& div:nth-child(1)": {
         transform: "rotate(45deg) translate(6px,6px)"
      },
      "& div:nth-child(2)": {
         opacity: 0
      },
      "& div:nth-child(3)": {
         transform: "rotate(-45deg) translate(6px,-6px)"
      }
   },
   burgerNavigator: {
      position: "absolute",
      top:-25,
      opacity: 0,
      listStyle: "none",
      backgroundColor: "black",
      zIndex: 10,
      transform: "translate(-200px,100px)",
      transition: "all .5s ease",
      padding: "20px 25px",
      borderRadius: "10px",
      "& > li": {
         padding: "15px 20px",
         borderBottom: "1px solid #eee"
      },
      "& a": {
         fontWeight: 600,
         textDecoration: "none",
         color: "#fff",
         letterSpacing: "1.5px"
      }
   },
   activedNavigator: {
      opacity: 1,
      transform: "translate(-10px,100px)",
   },
}))

export default BurgerMenu
