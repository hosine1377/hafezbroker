import './App.css'
import Banner from './Component/Bannner/Banner'
import Header from './Component/Header/Header'
import Access from './Component/Access/Access'
import Reason from './Component/Reason/Reason'
import Blog from './Component/Blog/Blog'
import Landing from './Component/Landing/Landing'
import Footer from './Component/Footer/Footer'
import Slider from './Component/Slider/Slider'
// import Test from './Component/Test/Test'

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Access />
      <Reason />
      {/* <Test /> */}
      <Blog />
      <Landing />
      <Slider />
      <Footer />
    </>
  )
}

export default App
