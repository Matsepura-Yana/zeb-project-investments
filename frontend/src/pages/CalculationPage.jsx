import { useState } from "react";
import "../styles/CalculationPade.css";

const CalculationPage = () => {
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState("");
  const [investmentType, setInvestmentType] = useState("");
  const [results, setResults] = useState(null);

  const handleCalculate = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: Number(amount),
          duration: Number(duration),
          investmentType,
        }),
      });

      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="calculation-page">
      <div className="calculation-page-content">
        {results === null ? <div className="calculation-page-text">
          <h2 className="calculation-page-title">Investment Calculator</h2>
          <p className="calculation-page-description">Enter your investment details below to see how your money could grow over time. Adjust the amount and duration to explore different scenarios and better understand potential outcomes.</p>
        </div> : <><div className="table-container">
          <table className="result-table">
            <thead>
              <tr>
                <th className="table-header">Year</th>
                <th className="table-header">Start Capital</th>
                <th className="table-header">Return (%)</th>
                <th className="table-header">End Capital</th>
              </tr>
            </thead>
            <tbody>
              {results.rows.map((row, index) => (<tr key={index}>
                <td className="result-table-row">{row.jahr}</td>
                <td className="result-table-row">{row.startKapital.toFixed(2)}</td>
                <td className="result-table-row">{row.rendite.toFixed(2)}</td>
                <td className="result-table-row">{row.endKapital.toFixed(2)}</td>
              </tr>))}
            </tbody>
          </table>
          <p className="total-return"><strong>Total Return:</strong> {(results.rows[duration - 1].endKapital - results.rows[0].startKapital).toFixed(2)}</p>
          <p className="end-capital"><strong>End Capital:</strong> {results.rows[duration - 1].endKapital.toFixed(2)}</p>
        </div> </>}
        <div className="calculation-form"> <label htmlFor="investment-amount">Investment Amount:</label>
          <input type="text" id="investment-amount" placeholder="Enter investment amount" label="Investment Amount" value={amount} onChange={(e) => setAmount(e.target.value)} /><br />
          <label htmlFor="investment-duration">Investment Duration in years:</label>
          <input type="text" placeholder="Enter investment duration in years" label="Investment Duration" value={duration} onChange={(e) => setDuration(e.target.value)} /><br />
          <label htmlFor="investment-type">Investment type:</label> <input list="investment-type-list" id="investment-type" name="investment-type" placeholder="Choose your investment type" value={investmentType} onChange={(e) => setInvestmentType(e.target.value)} />
          <datalist id="investment-type-list"> <option value="Shares" /> <option value="Bonds" /> <option value="Property" /> <option value="Securities" />
          </datalist><br /><br />
          <div className="calculation-button-container">
            <button type="button" onClick={handleCalculate}>Calculate</button> </div>
        </div>
      </div>
    </main>)
};

export default CalculationPage;
