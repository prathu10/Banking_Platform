import TotalBalanceBox from "@/components/TotalBalanceBox"
import HeaderBox from "@/components/ui/HeaderBox"

const Home = () => {
  const loggedIn = {firstName: "Prathamesh"}
  return (
    <section className='home'>
      <div className='home-content'>
        <div className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."/>

            <TotalBalanceBox 
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={1250.35}/>
        </div>

      </div>
    </section>
  )
}

export default Home
