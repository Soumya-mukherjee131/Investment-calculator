import React from 'react'
import styles from './UserInput.module.css';

const UserInput = ({onChange, userInput}) => {

  return (
    <section id={styles.userinput}>
      <div className={styles.inputgroup}>
        <p>
            <label>Initial Investment</label>
            <input type="number" required 
            value={userInput.initialInvestment}
            onChange={(event) => onChange('initialInvestment', event.target.value)}/>
        </p>
        <p>
            <label>Annual Investment</label>
            <input type="number" required
            value={userInput.annualInvestment}
            onChange={(event) => onChange('annualInvestment', event.target.value)}/>
        </p>
      </div>
      <div className={styles.inputgroup}>
        <p>
            <label>Expected Return</label>
            <input type="number" required
            value={userInput.expectedReturn}
            onChange={(event) => onChange('expectedReturn', event.target.value)}/>
        </p>
        <p>
            <label>Duration</label>
            <input type="number" required
            value={userInput.duration}
            onChange={(event) => onChange('duration', event.target.value)}/>
        </p>
      </div>
    </section>
  )
}

export default UserInput
