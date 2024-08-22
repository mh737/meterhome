

import Navbar from "../components/Navbar";
import { useTranslations } from 'next-intl';
import "./Specsty.css"


function Contact() {
    const t = useTranslations('ContactPage');

    return (
        // <div className="App">
<>
            <Navbar></Navbar>
            <div className="home">

                <h1 className="title">{t("title")}</h1>
                <form className="contact-form row border-amber-50" action="https://formspree.io/f/mrbzlvvd"
                    method="POST">
                    <div className="form-field col x-50">
                        <input name="name" className="input-text js-input" type="text" required />
                        <label className="label" htmlFor="name">Name</label>
                    </div>
                    <div className="form-field col x-50">
                        <input name="email" className="input-text js-input" type="email" required />
                        <label className="label" htmlFor="email">E-mail</label>
                    </div>
                    <div className="form-field col x-100">
                        <input name="message" className="input-text js-input" type="text" required />
                        <label className="label" htmlFor="message">Message</label>
                    </div>
                    <div className="form-field col x-100 align-center">
                        <input className="submit-btn" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        {/* </div
        </>> */}</>
    );
}

export default Contact
export const runtime = 'experimental-edge';