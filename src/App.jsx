// Import necessary hooks and components from React and React Router
import { useEffect, useRef } from 'react';
import { BrowserRouter } from "react-router-dom";
// import { Contact, Experience, Hero, Navbar, Portfolio } from "./components";
import { Contact, Experince, Hero, Navbar, Portfolio } from "./componets";

// Define the main App component
const App = () => {
  // Create a ref to hold a reference to the wrapper div
  const wrapperRef = useRef(null);

  return (
    // Wrap the entire application in BrowserRouter for routing capabilities
    <BrowserRouter>
      {/* Main container with a background color */}
      <div className='relative z-0 bg-primary'>
        {/* Navbar component for navigation */}
        <Navbar />
        
        {/* Wrapper div that can be referenced for scrolling or other purposes */}
        <div className='wrapper' ref={wrapperRef}>
          {/* Hero section with a unique ID for navigation and styling */}
          <div id="hero" className='z-10'>
            {/* Hero component, passing the wrapperRef for potential scrolling functionality */}
            <Hero scrollContainer={wrapperRef} />
          </div>
          
          {/* Portfolio section with a unique ID and specific styling */}
          <div id="portfolio" className='relative z-30 bg-primary mt-[-2px]'>
            {/* Portfolio component */}
            <Portfolio />
          </div>
          
          {/* Experience section with a unique ID and specific styling */}
          <div id="experience" className='relative z-30 bg-primary'>
            {/* Experience component */}
            <Experince />
          </div>
          
          {/* Contact section with a unique ID and specific styling */}
          <div id="contact" className='relative z-30 bg-primary'>
            {/* Contact component */}
            <Contact />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

// Export the App component as the default export
export default App;