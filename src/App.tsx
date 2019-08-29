import React, { useState } from 'react';
import styles from './App.module.scss';

const App: React.FC = () => {
  const samplePracticeId = "ABC12345";
  const [practiceId, setPracticeId] = useState("");
  
  return (
    <div className="App">
      <div className={styles.outer_container}>
        <div className={styles.header_container} >
          <h1>Pet Plan Checkout - Practice link generator</h1>
        </div>
        <div className={styles.content_container} >
          <div className={styles.label_container}>
            <label>Please enter your practice identifer</label>
          </div>
          <input className={styles.practice_id_input}
            placeholder={`example ${samplePracticeId}`}
            value={practiceId}
            onChange={e => setPracticeId(e.currentTarget.value)} />
          <div className={styles.sample_link_container}>
            <div className={styles.label_container}>
              <label>Anchor tag element sample.</label>
            </div>
            <code>{`<a href="https://simplyhealth.co.uk/petplancheckout?practiceid=${practiceId}"</a>`}</code>
            <div className={styles.button_container}>
              <button className={styles.button}>Copy Link</button>
            </div>
            <div className={styles.label_container}>
              <label>Javascript sample.</label>
            </div>
            <code>{`window.location.href="https://simplyhealth.co.uk/petplancheckout?practiceid=${practiceId};`}</code>
            <div className={styles.button_container}>
              <button className={styles.button}>Copy Script</button>
            </div>
          </div>
        </div>
        <div className={styles.footer_container}>
          <p>Need extra help</p>
          <p>support@petplancheckout.co.uk</p>
        </div>
      </div>
    </div>
  );
}

export default App;
