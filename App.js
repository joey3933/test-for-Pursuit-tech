import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import logo  from './photo.jpg';


export default function ContactUs() {

  
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_99cc1zj', 'template_1ej1lq8', e.target, 'user_7ILjazucjP8eOGWFD6Vvy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  
      function formSubmit(event) {
        event.preventDefault();
        emailjs.sendForm('service_99cc1zj', 'template_1ej1lq8', this);
    }

  }

 function shoot() {document.getElementById('hide1').style.cssText = 'display:block;'}
 function does() {document.getElementById('hide2').style.cssText = 'display:block;'} 

 

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <img src={logo} alt=""/>
      <p>This course is identified in my Work Plan and Learning Agreement</p>
        <label>Yes</label><input type="checkbox" value="yes" name="c1y"/>
        <br/>
        <label>No</label><input type="checkbox" value="no"name="c1n" onClick={shoot}/>
        <div id="hide1" style={{display:'none'}}>
            <p>I am attending this session because (tick all that apply)</p>
            <input type="checkbox" value="It will help me develop the skills and knowledge required for my current role" name="c2-1"/><label>It will help me develop the skills and knowledge required for my current role</label>
            <br/>
            <input type="checkbox"value="It will help me develop the skills and knowledge for a possible future role/body of work " name="c2-2"/><label>It will help me develop the skills and knowledge for a possible future role/body of work </label>
            <br/>
            <input type="checkbox"value="It was identified as a need during my performance management discussions" name="c2-3"/><label>It was identified as a need during my performance management discussions</label>
            <br/>
            <input type="checkbox"value="My manager recommended that I attend" name="c2-4"/><label>My manager recommended that I attend</label>
            <br/>
            <input type="checkbox"value="I am interested in the content" name="c2-5"/><label>I am interested in the content</label>
                    
            <p>What would you like to achieve as a result of your attendance? For example, “I would like to learn to write better emails to improve my communication skills”.</p>
            <textarea name="message1" />
        </div>

          <p>Do you require adjustments or additions to the session delivery to support your participation? For example, hearing loop or wheelchair access.</p>
                <label>Yes</label><input type="checkbox" value="yes" name="c3y"  onClick={does}/>
                <br/>
                <label>No</label><input type="checkbox" value="no" name="c3n"/>
        <div id="hide2" style={{display:'none'}}>     
            <p>Please provide details of your requirements.</p>
            <textarea name="message2" />
        </div> 
           <p>Please upload any supporting documentation to support your registration request</p>
            <label>Choose File: </label><input type="file" name="my_file"/>

            <br/>
      <input type="submit" value="Submit" />
    </form>
  );
}
