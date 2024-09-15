import React from 'react';
import styles from './Results.module.css';
import {calculateInvestmentResults, formatter} from '../../util/investent.js';

const Results = ({userInput}) => {
   const resultData = calculateInvestmentResults(userInput)
   const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;
//    console.log(resultData)
  return (
    <>
      <table id={styles.result}>
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Investment (year)</th>
                <th>Total Investment</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {resultData.map(yearData =>{
            const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment* yearData.year - initialInvestment;
            const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
                return <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
            })}
        </tbody>
      </table>
    </>
  )
}

export default Results
