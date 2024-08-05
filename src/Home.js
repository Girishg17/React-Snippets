import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import './Home.css';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [buttons] = useState([
    'Spinner', 'Alert', 'Drawer', 'NavBar', 'Progress','SnackBar','Carousel','Stepper','Forms'
  ]);
  const [filteredButtons, setFilteredButtons] = useState(buttons);
  const navigate = useNavigate();

  const handleSearchClick = () => {
    if (searchQuery === '') {
      setFilteredButtons(buttons);
    } else {
      const result = buttons.filter(button =>
        button.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredButtons(result);
    }
  };

  const handleButtonClick = (button) => {
    if (button.toLowerCase() === 'spinner') {
      navigate('/spinner');
    }
    if (button.toLowerCase() === 'navbar') {
      navigate('/navbar');
    }
    if (button.toLowerCase() === 'drawer') {
      navigate('/drawer');
    }
    if (button.toLowerCase() === 'alert') {
      navigate('/alert');
    }
    if (button.toLowerCase() === 'progress') {
      navigate('/progress');
    }
    if (button.toLowerCase() === 'carousel') {
      navigate('/carousel');
    }
    if (button.toLowerCase() === 'snackbar') {
      navigate('/snackbar');
    }
    if (button.toLowerCase() === 'stepper') {
      navigate('/stepper');
    }
    if (button.toLowerCase() === 'forms') {
      navigate('/form');
    }
  };

  const handleGitHubButtonClick = () => {
    window.open('https://github.com/Girishg17/React-Snippets', '_blank');
  };

  return (
    <div className="home-container">
      <div className="top-bar">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search React Snippets..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
        <BsSearch className="search-icon" style={{marginRight:'px'}} onClick={handleSearchClick} />
        </div>
        <button className="github-button" onClick={handleGitHubButtonClick}>
          GitHub
        </button>
      </div>
      <div className="buttons-container">
        {filteredButtons.map(button => (
          <button
            key={button}
            className="home-button"
            onClick={() => handleButtonClick(button)}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;
