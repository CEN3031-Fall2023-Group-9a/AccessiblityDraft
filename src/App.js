import React, { useState } from 'react';
import './App.css';

function App() {
  const [fontSize, setFontSize] = useState('medium');
  const [fontColor, setFontColor] = useState('black');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [language, setLanguage] = useState('english');

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const handleApplyChanges = () => {
    setIsModalOpen(false);
  };

  const getFontSizeInPixels = (size) => {
    switch (size) {
      case 'small':
        return '10px';
      case 'medium':
        return '14px';
      case 'large':
        return '24px';
      default:
        return '14px'; // Default to medium if size is invalid
    }
  };

  return (
    <div className="App">
      <button onClick={() => setIsModalOpen(true)}>Customize Text</button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsModalOpen(false)}>
              &times;
            </span>
            <h2>Text Customization</h2>
            <label htmlFor="fontSize">Font Size:</label>
            <select
              id="fontSize"
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
            >
              <option value="small">Small (10px)</option>
              <option value="medium">Medium (14px)</option>
              <option value="large">Large (24px)</option>
            </select>
            <br />
            <label htmlFor="fontColor">Font Color:</label>
            <input
              type="color"
              id="fontColor"
              value={fontColor}
              onChange={(e) => setFontColor(e.target.value)}
            />
            <br />
            <button onClick={handleApplyChanges}>Apply Changes</button>

            <button onClick={() => handleLanguageChange('english')}>English</button>
            <button onClick={() => handleLanguageChange('spanish')}>Spanish</button>
          </div>
        </div>
      )}
      <p style={{ fontSize: getFontSizeInPixels(fontSize), color: fontColor }}>
        {language === 'english' ? 'Hello, World!' : '¡Hola, Mundo!'}
      </p>
    </div>
  );
}

export default App;
