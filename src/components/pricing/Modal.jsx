import Styles from "./Modal.module.css";
import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';
import firebaseConfig from '../../firebaseConfig'; // Import your Firebase configuration

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);


export default function Modal(props) {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [buttonAvailable, setButtonAvailable] = useState(true);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      
      if(!name || !phoneNumber){
        alert("Ism va Telefon raqamni kiritish majburiy");
        return;
      }
      try {
        setButtonAvailable(false);
        // Reference to the 'formData' collection in Firebase Realtime Database
        const formDataRef = ref(database, 'formData');
  
        // Push the form data to the 'formData' collection
        await push(formDataRef, {
          name,
          phoneNumber,
        });
        alert("Javobinginz yuborildi😊")
        console.log('Form data submitted to Firebase');
      } catch (error) {
        console.error('Error submitting form data to Firebase:', error);
      }
      setButtonAvailable(true);
      props.closeModal();
    };
    return(
    <>
        <div className={Styles.backdrop} onClick={props.closeModal}></div>
        <div className={Styles.modal}>
            <h2>Batafsil ma'lumot olish uchun ma'lumotlaringizni kiriting.</h2>
            <p>Bizning operatorlar tez orada siz bilan bog'lanishadi.</p>      
            <form className="form">
                <div className={Styles.form_item}>
                <label htmlFor="name">Ism:</label>
                <br />
                    <input
                        id="name"
                        name="name"
                        placeholder='Aziz Azizov'
                        required
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />  
                {/* <span className='alertMessage'>Ism kiritish majburiy.</span> */}
                </div>
                <div className={Styles.form_item}>
                    <label htmlFor="phone">Telefon Raqam:</label>
                <br />
                    <input
                        type="tel"
                        id="phone"
                        name="phone"    
                        placeholder='+998 99 999 9999'
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    {/* <span className='alertMessage'>Raqam kiritish majburiy.</span> */}
                </div>
            </form>
            <div className={Styles.actions}>
              {buttonAvailable ? <button type="submit" className={Styles.submit_btn} onClick={handleSubmit}>Yuborish</button> : null}
                <button type="submit" className={Styles.cancel_btn} onClick={props.closeModal}>Yopish</button>
            </div>
        </div> 
    </>
    )
}