import React, { useState } from 'react'
import { Hidden, makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import logoKienHoa from "../assets/images/logo_kienhoa.jpg"

const BurgerMenu = () => {
   const classes = useStyles()
   const [isActiveBurger, setIsActiveBurger] = useState(false)
   return (
      <Hidden smUp>
         <div className={clsx(classes.burgerButton, { [classes.activedBurger]: isActiveBurger })}
            onClick={() => setIsActiveBurger(!isActiveBurger)}
         >
            <div></div>
            <div></div>
            <div></div>
         </div>
         <ul className={clsx(classes.burgerNavigator, { [classes.activedNavigator]: isActiveBurger })}>
            <li><a href='/'>Trang chủ</a></li>
            <li><a href="/du-an">Dự án</a></li>
            <li><a href="/xay-dung-va-hoan-thien">Xây dựng và hoàn thiện</a></li>
            <li><a href="/noi-that">Nội thất</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/gioi-thieu">Giới thiệu</a></li>
            <li><a href="/lien-he">Liên hệ</a></li>
            <img src={logoKienHoa} alt="#logo"/>
         </ul>
      </Hidden>
   )
}
const useStyles = makeStyles(theme => ({
   burgerButton: {
      cursor: "pointer",
      margin: "15px 20px",
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
      top: -12,
      opacity: 0,
      listStyle: "none",
      backgroundColor: "black",
      zIndex: 10,
      transform: "translate(-200px,100px)",
      transition: "all .5s ease",
      padding: "18px 25px 0px 20px",
      borderRadius: "10px",
      "& > li": {
         padding: "15px 20px",
         borderBottom: "1px solid #eee"
      },
      "& img":{
         width:"60px",
         height:"60px",
         margin:"10px",
         borderRadius:'8px',
         border:"#eee 1px solid"
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
