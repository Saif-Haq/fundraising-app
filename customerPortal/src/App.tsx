import './App.css'
import { HeroSection } from './HeroSection';

const App = () =>
  <>
    <div className='w-100'>
      <HeroSection />

      <div className="container">
        <div className="circle-row">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>

        <div className="circle-row">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>

        <div className="circle-row">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>

        <div className="circle-row">
          <div className="circle"></div>
        </div>
      </div>
    </div>
  </>

export default App;
