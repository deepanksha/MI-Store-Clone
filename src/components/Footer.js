import React from 'react'
import "../style/PreFooter.css"
import "../style/Footer.css"



const repeatIcon=<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M4 20v-2h2.75l-.4-.35q-1.3-1.15-1.825-2.625Q4 13.55 4 12.05q0-2.775 1.662-4.938Q7.325 4.95 10 4.25v2.1Q8.2 7 7.1 8.562 6 10.125 6 12.05q0 1.125.425 2.187Q6.85 15.3 7.75 16.2l.25.25V14h2v6Zm10-.25v-2.1q1.8-.65 2.9-2.212Q18 13.875 18 11.95q0-1.125-.425-2.188Q17.15 8.7 16.25 7.8L16 7.55V10h-2V4h6v2h-2.75l.4.35q1.225 1.225 1.788 2.662Q20 10.45 20 11.95q0 2.775-1.663 4.937Q16.675 19.05 14 19.75Z"/></svg>

const shieldIcon=<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M10.95 15.55 16.6 9.9l-1.425-1.425L10.95 12.7l-2.1-2.1-1.425 1.425ZM12 22q-3.475-.875-5.737-3.988Q4 14.9 4 11.1V5l8-3 8 3v6.1q0 3.8-2.262 6.912Q15.475 21.125 12 22Zm0-2.1q2.6-.825 4.3-3.3 1.7-2.475 1.7-5.5V6.375l-6-2.25-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3Zm0-7.9Z"/></svg>

const mapIcon=<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m15 21-6-2.1-4.65 1.8q-.5.2-.925-.113Q3 20.275 3 19.75v-14q0-.325.188-.575.187-.25.512-.375L9 3l6 2.1 4.65-1.8q.5-.2.925.112.425.313.425.838v14q0 .325-.188.575-.187.25-.512.375Zm-1-2.45V6.85l-4-1.4v11.7Zm2 0 3-1V5.7l-3 1.15ZM5 18.3l3-1.15V5.45l-3 1ZM16 6.85v11.7Zm-8-1.4v11.7Z"/></svg>

const youtubeIcon=<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="#7F8588" d="M23,9.71a8.5,8.5,0,0,0-.91-4.13,2.92,2.92,0,0,0-1.72-1A78.36,78.36,0,0,0,12,4.27a78.45,78.45,0,0,0-8.34.3,2.87,2.87,0,0,0-1.46.74c-.9.83-1,2.25-1.1,3.45a48.29,48.29,0,0,0,0,6.48,9.55,9.55,0,0,0,.3,2,3.14,3.14,0,0,0,.71,1.36,2.86,2.86,0,0,0,1.49.78,45.18,45.18,0,0,0,6.5.33c3.5.05,6.57,0,10.2-.28a2.88,2.88,0,0,0,1.53-.78,2.49,2.49,0,0,0,.61-1,10.58,10.58,0,0,0,.52-3.4C23,13.69,23,10.31,23,9.71ZM9.74,14.85V8.66l5.92,3.11C14,12.69,11.81,13.73,9.74,14.85Z"/></svg>

const facebookIcon=<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="#7F8588" d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"/></svg>

const twitterIcon=<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="#7F8588" d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"/></svg>

const instagramIcon=<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="#7F8588" d="M12,9.52A2.48,2.48,0,1,0,14.48,12,2.48,2.48,0,0,0,12,9.52Zm9.93-2.45a6.53,6.53,0,0,0-.42-2.26,4,4,0,0,0-2.32-2.32,6.53,6.53,0,0,0-2.26-.42C15.64,2,15.26,2,12,2s-3.64,0-4.93.07a6.53,6.53,0,0,0-2.26.42A4,4,0,0,0,2.49,4.81a6.53,6.53,0,0,0-.42,2.26C2,8.36,2,8.74,2,12s0,3.64.07,4.93a6.86,6.86,0,0,0,.42,2.27,3.94,3.94,0,0,0,.91,1.4,3.89,3.89,0,0,0,1.41.91,6.53,6.53,0,0,0,2.26.42C8.36,22,8.74,22,12,22s3.64,0,4.93-.07a6.53,6.53,0,0,0,2.26-.42,3.89,3.89,0,0,0,1.41-.91,3.94,3.94,0,0,0,.91-1.4,6.6,6.6,0,0,0,.42-2.27C22,15.64,22,15.26,22,12S22,8.36,21.93,7.07Zm-2.54,8A5.73,5.73,0,0,1,19,16.87,3.86,3.86,0,0,1,16.87,19a5.73,5.73,0,0,1-1.81.35c-.79,0-1,0-3.06,0s-2.27,0-3.06,0A5.73,5.73,0,0,1,7.13,19a3.51,3.51,0,0,1-1.31-.86A3.51,3.51,0,0,1,5,16.87a5.49,5.49,0,0,1-.34-1.81c0-.79,0-1,0-3.06s0-2.27,0-3.06A5.49,5.49,0,0,1,5,7.13a3.51,3.51,0,0,1,.86-1.31A3.59,3.59,0,0,1,7.13,5a5.73,5.73,0,0,1,1.81-.35h0c.79,0,1,0,3.06,0s2.27,0,3.06,0A5.73,5.73,0,0,1,16.87,5a3.51,3.51,0,0,1,1.31.86A3.51,3.51,0,0,1,19,7.13a5.73,5.73,0,0,1,.35,1.81c0,.79,0,1,0,3.06S19.42,14.27,19.39,15.06Zm-1.6-7.44a2.38,2.38,0,0,0-1.41-1.41A4,4,0,0,0,15,6c-.78,0-1,0-3,0s-2.22,0-3,0a4,4,0,0,0-1.38.26A2.38,2.38,0,0,0,6.21,7.62,4.27,4.27,0,0,0,6,9c0,.78,0,1,0,3s0,2.22,0,3a4.27,4.27,0,0,0,.26,1.38,2.38,2.38,0,0,0,1.41,1.41A4.27,4.27,0,0,0,9,18.05H9c.78,0,1,0,3,0s2.22,0,3,0a4,4,0,0,0,1.38-.26,2.38,2.38,0,0,0,1.41-1.41A4,4,0,0,0,18.05,15c0-.78,0-1,0-3s0-2.22,0-3A3.78,3.78,0,0,0,17.79,7.62ZM12,15.82A3.81,3.81,0,0,1,8.19,12h0A3.82,3.82,0,1,1,12,15.82Zm4-6.89a.9.9,0,0,1,0-1.79h0a.9.9,0,0,1,0,1.79Z"/></svg>

 const greater=<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M9.4 18 8 16.6l4.6-4.6L8 7.4 9.4 6l6 6Z"/></svg>

const Footer = ({footer}) => {
  return (
    <>

     <div className="PreFooter">
        <div>
            {repeatIcon}
            <p>
                <b>
                    Hassle-free replacement
                </b>
                <br />
                10-day easy replacement policy on mi.com
            </p>
        </div>

        <div>
            {shieldIcon}
            <p>
                <b>100% secure payments</b>
                <br />
                We support Cards,Wallets,EMI and COD
            </p>
        </div>

        <div>
            {mapIcon}
            <p>
                <b>Vast service network</b>
                <br />
                1000 Mi service-centers across 600 cities
            </p>
        </div>

     </div>



     <div className="PreFooter2">
        <div>
            <p>LET'S STAY IN TOUCH</p>
            <span>Get updates on sales specials and more</span>
        </div>

        <div>
            <div>
                <input type="email" name='email' placeholder='Enter Email Address' />
                <button>{greater}</button>
            </div>
            <span>Thanks.You're on our email list for special offers.</span>
        </div>

        <div>
            <p>FOLLOW MI</p>
            <span>We want to hear from you!</span>
        </div>

        <div>
            {facebookIcon} {youtubeIcon} {instagramIcon} {twitterIcon}
        </div>
     </div>

     <div className="footer">
        <div>
            <p>SUPPORT</p>
            {
                footer.support.map((item,index) =>(
                    <a key={item.url} href={item.url} >{item.name} </a>
                ))
            }
        </div>

        <div>
            <p>SHOP AND LEARN</p>
            {
                footer.shopAndLearn.map((item,index) =>(
                    <a key={item.url} href={item.url} >{item.name} </a>

                ))
            }
        </div>

        <div>
            <p>RETAIL STORE</p>
            {
                footer.retailStore.map((item,index) =>(
                    <a key={item.url} href={item.url}>{item.name} </a>

                ))
            }
        </div>

        <div>
            <p>ABOUT</p>
            {
                footer.aboutUS.map((item,index) =>(
                    <a key={item.url} href={item.url} >{item.name} </a>

                ))
            }
        </div>

        <div>
          <p> CONTACT US</p>
          {
            footer.contactUs.map((item,index) =>(
                <a key={item.url} href={item.url}>{item.name} </a> 
            ))
          }
        </div>

        <div>
        <div>Chat with our Virtual AI Bot (24/7 Live Agent Support)</div>
        <button>CHAT NOW</button>
        </div>
        
     </div>


     <div className="footerBorder">
        <div>
            Copyright &copy; 2010 - 2021 Xiaomi.All Rights REserved
        </div>
     </div>


    </>


  )
}

export default Footer














