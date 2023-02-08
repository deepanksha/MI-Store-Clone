import React from 'react'
import "../style/PreNavbar.css"

// const down=<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m12 15.4-6-6L7.4 8l4.6 4.6L16.6 8 18 9.4Z"/></svg>

const expand=<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m12 15.375-6-6 1.4-1.4 4.6 4.6 4.6-4.6 1.4 1.4Z"/></svg>

const cart = <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M7 22q-.825 0-1.412-.587Q5 20.825 5 20q0-.825.588-1.413Q6.175 18 7 18t1.412.587Q9 19.175 9 20q0 .825-.588 1.413Q7.825 22 7 22Zm10 0q-.825 0-1.412-.587Q15 20.825 15 20q0-.825.588-1.413Q16.175 18 17 18t1.413.587Q19 19.175 19 20q0 .825-.587 1.413Q17.825 22 17 22ZM6.15 6l2.4 5h7l2.75-5ZM5.2 4h14.75q.575 0 .875.512.3.513.025 1.038l-3.55 6.4q-.275.5-.738.775Q16.1 13 15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.988-.575-.987-.05-1.962L6.6 11.6 3 4H1V2h3.25Zm3.35 7h7Z"/></svg>

const PreNavbar = () => {
  return (
    
 <div className='preNav'>
      <div>  
      <a href="http://www.mi.com/in">MI INDIA </a><span> | </span>
      <a href="http://in.event.mi.com/in/install-mi-store">GET MI STORE APP </a> <span> | </span>
      <a href="http://www.mi.com/in/services/help/#category_id=1&pagenum=1&channel=1">ONLINE HELP </a><span> | </span> 
      <a href="http://www.mi.com/in/services/authorized_store/">RETAIL STORE{expand}</a> 
     </div>

     <div>
       <a href="https://store.mi.com/in/site/login">SIGN IN </a><span> | </span>
       <a href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN">SIGN UP </a><span> | </span>
       <a href="https://store.mi.com/in/site/login">{cart} CART (0)</a>
     </div>
 </div> 
  )
}

export default PreNavbar
