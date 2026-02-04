import { useState, useEffect } from "react";
import "../styles/CalculationPade.css";

const CalculationPage = () => {
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState("");
  const [investmentType, setInvestmentType] = useState("");
  const [amountForTable, setAmountForTable] = useState("");
  const [durationForTable, setDurationForTable] = useState("");
  const [investmentTypeForTable, setInvestmentTypeForTable] = useState("");
  const [isShifted, setIsShifted] = useState(false);
  const [results, setResults] = useState(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const numberFormatter = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const lastRow =
    results && results.rows && results.rows.length > 0
      ? results.rows.at(-1)
      : null;

  const totalReturn = lastRow
    ? lastRow.endKapital - results.rows[0].startKapital
    : null;

  const handleCalculate = async () => {
    if (!amount || !duration || duration <= 0) return;

    if (!isMobile) setIsShifted(true);

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

      setAmountForTable(amount);
      setDurationForTable(duration);
      setInvestmentTypeForTable(investmentType);

      setAmount("");
      setDuration("");
      setInvestmentType("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="calculation-page">
      <div className="calculation-page-content">
        {!results && (
          <>
            <div className="calculation-page-text">
              <h2 className="calculation-page-title">Investment Calculator</h2>
              <p className="calculation-page-description">
                Enter your investment details below to see how your money could
                grow over time. Adjust the amount and duration to explore
                different scenarios and better understand potential outcomes.
              </p>
            </div>
            {!isMobile && <div className="calculation-form"></div>}
          </>
        )}

        {results && (
          <>
            <div className={`calculation-form `}></div>
            <div className="table-container">
              <div className="investment-info">
                <p>
                  <strong>Amount:</strong>{" "}
                  {numberFormatter.format(Number(amountForTable))} |{" "}
                  <strong>Duration:</strong> {Number(durationForTable)} years |{" "}
                  <strong>Investment type:</strong> {investmentTypeForTable}
                </p>
              </div>

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
                  {results.rows.map((row, index) => (
                    <tr key={index}>
                      <td className="result-table-row">{row.jahr}</td>
                      <td className="result-table-row">
                        {numberFormatter.format(row.startKapital)}
                      </td>
                      <td className="result-table-row">
                        {row.rendite.toFixed(2)}
                      </td>
                      <td className="result-table-row">
                        {numberFormatter.format(row.endKapital)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {lastRow && (
                <>
                  <p className="total-return">
                    <strong>Total Return:</strong>{" "}
                    {numberFormatter.format(totalReturn)}
                  </p>
                  <p className="end-capital">
                    <strong>End Capital:</strong>{" "}
                    {numberFormatter.format(lastRow.endKapital)}
                  </p>
                </>
              )}
            </div>
          </>
        )}

        {/* 📱 MOBILE: Formular unter Tabelle */}
        {isMobile && (
          <div className="calculation-form">
            <label htmlFor="investment-amount">Investment Amount:</label>
            <input
              type="number"
              id="investment-amount"
              placeholder="Enter investment amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <label htmlFor="investment-duration">
              Investment Duration in years:
            </label>
            <input
              type="number"
              id="investment-duration"
              placeholder="Enter investment duration in years"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />

            <label htmlFor="investment-type">Investment type:</label>
            <input
              list="investment-type-list"
              id="investment-type"
              name="investment-type"
              placeholder="Choose your investment type"
              value={investmentType}
              onChange={(e) => setInvestmentType(e.target.value)}
            />
            <datalist id="investment-type-list">
              <option value="Shares" />
              <option value="Bonds" />
              <option value="Property" />
              <option value="Securities" />
            </datalist>

            <div className="calculation-button-container">
              <button type="button" onClick={handleCalculate}>
                {results ? "Calculate again" : "Calculate"}
              </button>
            </div>
          </div>
        )}

        {/* 💻 DESKTOP: Overlay bleibt unverändert */}
        {results
          ? !isMobile && (
              <>
                <div
                  className={`calculation-form overlay-form ${
                    isShifted ? "shifted" : ""
                  }`}>
                  <label htmlFor="investment-amount">Investment Amount:</label>
                  <input
                    type="number"
                    id="investment-amount"
                    placeholder="Enter investment amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />

                  <label htmlFor="investment-duration">
                    Investment Duration in years:
                  </label>
                  <input
                    type="number"
                    id="investment-duration"
                    placeholder="Enter investment duration in years"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                  />

                  <label htmlFor="investment-type">Investment type:</label>
                  <input
                    list="investment-type-list"
                    id="investment-type"
                    name="investment-type"
                    placeholder="Choose your investment type"
                    value={investmentType}
                    onChange={(e) => setInvestmentType(e.target.value)}
                  />
                  <datalist id="investment-type-list">
                    <option value="Shares" />
                    <option value="Bonds" />
                    <option value="Property" />
                    <option value="Securities" />
                  </datalist>

                  <div className="calculation-button-container">
                    <button type="button" onClick={handleCalculate}>
                      {results ? "Calculate again" : "Calculate"}
                    </button>
                  </div>
                </div>
              </>
            )
          : !isMobile && (
              <>
                <div className={`calculation-form overlay-form`}>
                  <label htmlFor="investment-amount">Investment Amount:</label>
                  <input
                    type="number"
                    id="investment-amount"
                    placeholder="Enter investment amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />

                  <label htmlFor="investment-duration">
                    Investment Duration in years:
                  </label>
                  <input
                    type="number"
                    id="investment-duration"
                    placeholder="Enter investment duration in years"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                  />

                  <label htmlFor="investment-type">Investment type:</label>
                  <input
                    list="investment-type-list"
                    id="investment-type"
                    name="investment-type"
                    placeholder="Choose your investment type"
                    value={investmentType}
                    onChange={(e) => setInvestmentType(e.target.value)}
                  />
                  <datalist id="investment-type-list">
                    <option value="Shares" />
                    <option value="Bonds" />
                    <option value="Property" />
                    <option value="Securities" />
                  </datalist>
                  <div className="calculation-button-container">
                    <button type="button" onClick={handleCalculate}>
                      {results ? "Calculate again" : "Calculate"}
                    </button>
                  </div>
                </div>
              </>
            )}
      </div>
    </main>
  );
};

export default CalculationPage;
