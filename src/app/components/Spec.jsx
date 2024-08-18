import "./Specsty.css"
// import {Card} from "";
import {Image} from "next/image";

 function Spec(){
    return(
    <>
    <div className="home">

   <h1 class="title">Get in touch</h1>
   <form class="contact-form row"   action="https://formspree.io/f/mrbzlvvd"
  method="POST">
      <div class="form-field col x-50">
         <input id="name" class="input-text js-input" type="text" required/>
         <label class="label" for="name">Name</label>
      </div>
      <div class="form-field col x-50">
         <input id="email" class="input-text js-input" type="email" required/>
         <label class="label" for="email">E-mail</label>
      </div>
      <div class="form-field col x-100">
         <input id="message" class="input-text js-input" type="text" required/>
         <label class="label" for="message">Message</label>
      </div>
      <div class="form-field col x-100 align-center">
         <input class="submit-btn" type="submit" value="Submit"/>
      </div>
   </form>
   </div>
    
    </>)
}
export default Spec