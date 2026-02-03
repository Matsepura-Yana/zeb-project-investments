import '../styles/MainPage.css'

const MainPage = () => {
  return (
    <main className="main-page">
      <h2 className="main-page-title">Calculate Your Future</h2>
      <p className="main-page-description">How will your investment grow over time?
        Enter your data and instantly get a clear overview of potential returns. Our investment calculator helps you compare different scenarios and make confident decisions aligned with your financial goals.</p>
        <button className='main-page-button'><a href="/calculation">Start calculation</a></button>
    </main>
  )
}

export default MainPage