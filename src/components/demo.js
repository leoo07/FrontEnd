import React from "react";
import { Link } from "react-router-dom";
import ORDERS_IMG from '../assets/ord.png';
import customer_img from '../assets/customer.png';
import item_img from '../assets/item.png';
import Style from './LandingPage.module.css';


export const Demo = () => {
    return (       
        <>
           
                <div className="{Style.landingMainHeading}">
                    <h1 className={Style.landingMainHeading}>ORDER DETAILS</h1>
                </div>

                <div className={Style.buttonGroup}>
                    <Link to="/create" className={Style.imagewr}>
                        <img src={ORDERS_IMG} alt="Orders" className={Style.image} />
                        <span className="sty">ORDERS</span>
                    </Link>
                    <Link to="/create-orders" className={Style.imagewr}>
                        <img src={customer_img} alt="Customer" className={Style.image} />
                        <span className="sty">CUSTOMER</span>
                    </Link>
                    <Link to="/items" className={Style.imagewr}>
                        <img src={item_img} alt="Items" className={Style.image} />
                        <span className="sty">ITEMS</span>
                    </Link>
                </div>
            
        </>
    )
}