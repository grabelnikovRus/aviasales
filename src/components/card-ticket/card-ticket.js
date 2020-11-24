import React from 'react';
import classes from'./card-ticket.module.scss';

const CardTicket = () => {

    return (
        <div className={classes['card-ticket']}>
            <ul className={`${classes['card-ticket__info']} ${classes.info}`} >
                <li className={classes['info__prices']}>13700</li>
                <li className={classes['info__logo']}>
                    <img src="http://pics.avs.io/99/36/S7.png" alt="airline logo" />
                </li>
            </ul>
            <ul className={`${classes['card-ticket__there']} ${classes.there}`}>
                <li className={classes['there__direction']}>
                    <span className={classes['there__title']}>MOW - HKT</span>
                    <span className={classes['there__value']}>10:45 - 08:00</span>
                </li>
                <li className={classes['there__time-path']}>
                    <span className={classes['there__title']}>В ПУТИ</span>
                    <span className={classes['there__value']}>21ч 15м</span>
                </li>
                <li className={classes['there__transfer']}>
                    <span className={classes['there__title']}>2 ПЕРЕСАДКИ</span>
                    <span className={classes['there__value']}>HKG JNB</span>
                </li>
            </ul>
            <ul className={`${classes['card-ticket__back']} ${classes.back}`}>
                <li className={classes['back__direction']}>
                    <span className={classes['back__title']}>MOW - HKT</span>
                    <span className={classes['back__value']}>11:20 - 00:50</span>
                </li>
                <li className={classes['back__time-path']}>
                    <span className={classes['back__title']}>В ПУТИ</span>
                    <span className={classes['back__value']}>13ч 30м</span>
                </li>
                <li className={classes['back__transfer']}>
                    <span className={classes['back__title']}>1 ПЕРЕСАДКА</span>
                    <span className={classes['back__value']}>HKG</span>
                </li>
            </ul>
        </div>
    )
}

export default CardTicket