/*import React, { useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

const fastFoodChains = [
  { name: "McDonald's", id: "513fbc1283aa2dc80c000053" },
  { name: "Starbucks", id: "513fbc1283aa2dc80c00000a" },
  { name: "Subway", id: "513fbc1283aa2dc80c00000f" },
  { name: "Wendy's", id: "513fbc1283aa2dc80c000036" },
  { name: "Burger King", id: "51db37d8176fe9790a899db2" },
  { name: "Taco Bell", id: "513fbc1283aa2dc80c000028" },
  { name: "Chick-fil-A", id: "5592f8cf498e889b5fb31aa0" },
  { name: "Dunkin' Donuts", id: "513fbc1283aa2dc80c00000d" },
  { name: "Domino's Pizza", id: "513fbc1283aa2dc80c000025" },
  { name: "Pizza Hut", id: "513fbc1283aa2dc80c00000c" }
];

function App() {
  const [selectedChain, setSelectedChain] = useState('');
  const [calorieLimit, setCalorieLimit] = useState('');
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchMeals = async () => {
    setLoading(true);
    setError('');
    setMeals([]);

    try {
      const response = await axios.post(
        'https://trackapi.nutritionix.com/v2/search/instant',
        {
          query: selectedChain,
          branded: true,
          detailed: true,
          full_nutrients: {
            "208": {
              "lte": parseInt(calorieLimit)
            }
          },
          brand_ids: fastFoodChains.find(chain => chain.name === selectedChain)?.id
        },
        {
          headers: {
            'x-app-id': 'a8af4a63',
            'x-app-key': 'ab18c7899e9bf8f18725378f5bab6f12',
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.data.branded) {
        setMeals(response.data.branded);
      } else {
        setError('No meals found within the specified calorie range.');
      }
    } catch (err) {
      setError('Failed to fetch meals. Please try again.');
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fast Food Calorie Finder</h1>
        
        <div className="Finder-container">
          <div className="Input-group">
            <label>Select a Fast Food Chain:</label>
            <select 
              value={selectedChain} 
              onChange={(e) => setSelectedChain(e.target.value)}
            >
              <option value="">Select a chain</option>
              {fastFoodChains.map(chain => (
                <option key={chain.id} value={chain.name}>{chain.name}</option>
              ))}
            </select>
          </div>

          <div className="Input-group">
            <label>Enter Calorie Limit:</label>
            <input 
              type="number" 
              value={calorieLimit} 
              onChange={(e) => setCalorieLimit(e.target.value)}
              placeholder="Enter calorie limit"
            />
          </div>

          <button 
            onClick={fetchMeals} 
            disabled={!selectedChain || !calorieLimit || loading}
            className="App-button"
          >
            {loading ? 'Loading...' : 'Find Meals'}
          </button>

          {error && <p className="Error-message">{error}</p>}

          {meals.length > 0 && (
            <div className="Meals-container">
              <h2>Meals under {calorieLimit} calories:</h2>
              <ul>
                {meals.map(meal => (
                  <li key={meal.nix_item_id}>
                    {meal.food_name} - {meal.nf_calories} calories
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;

*/

/*
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const fastFoodChains = [
  { name: "McDonald's", id: "513fbc1283aa2dc80c000053", logo: "mcdonalds.png" },
  { name: "Starbucks", id: "513fbc1283aa2dc80c00000a", logo: "starbucks.png" },
  { name: "Subway", id: "513fbc1283aa2dc80c00000f", logo: "subway.jpg" },
  { name: "Wendy's", id: "513fbc1283aa2dc80c000036", logo: "wendys.png" },
  { name: "Burger King", id: "51db37d8176fe9790a899db2", logo: "burgerking.png" },
  { name: "Taco Bell", id: "513fbc1283aa2dc80c000028", logo: "tacobell.svg" },
  { name: "Chick-fil-A", id: "5592f8cf498e889b5fb31aa0", logo: "chick-fill-a.png" },
  { name: "Dunkin' Donuts", id: "513fbc1283aa2dc80c00000d", logo: "dunkin.jpg" },
  { name: "Domino's Pizza", id: "513fbc1283aa2dc80c000025", logo: "dominos.png" },
  { name: "Pizza Hut", id: "513fbc1283aa2dc80c00000c", logo: "pizza_hut.png" }
];

function App() {
  const [selectedChain, setSelectedChain] = useState('');
  const [calorieLimit, setCalorieLimit] = useState('');
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchMeals = async () => {
    setLoading(true);
    setError('');
    setMeals([]);

    try {
      const response = await axios.post(
        'https://trackapi.nutritionix.com/v2/search/instant',
        {
          query: selectedChain,
          branded: true,
          detailed: true,
          full_nutrients: {
            "208": {
              "lte": parseInt(calorieLimit)
            }
          },
          brand_ids: fastFoodChains.find(chain => chain.name === selectedChain)?.id
        },
        {
          headers: {
            'x-app-id': 'a8af4a63',
            'x-app-key': 'ab18c7899e9bf8f18725378f5bab6f12',
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.data.branded) {
        setMeals(response.data.branded);
      } else {
        setError('No meals found within the specified calorie range.');
      }
    } catch (err) {
      setError('Failed to fetch meals. Please try again.');
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fast Food Calorie Finder</h1>
        
        <div className="Finder-container">
          <div className="Logo-grid">
            {fastFoodChains.map(chain => (
              <div 
                key={chain.id} 
                className={`Logo-item ${selectedChain === chain.name ? 'selected' : ''}`}
                onClick={() => setSelectedChain(chain.name)}
              >
                <img 
                  src={`${process.env.PUBLIC_URL}/logos/${chain.logo}`} 
                  alt={chain.name} 
                  className="Chain-logo" 
                />
                <p>{chain.name}</p>
              </div>
            ))}
          </div>

          <div className="Input-group">
            <label>Enter Calorie Limit:</label>
            <input 
              type="number" 
              value={calorieLimit} 
              onChange={(e) => setCalorieLimit(e.target.value)}
              placeholder="Enter calorie limit"
            />
          </div>

          <button 
            onClick={fetchMeals} 
            disabled={!selectedChain || !calorieLimit || loading}
            className="App-button"
          >
            {loading ? 'Loading...' : 'Find Meals'}
          </button>

          {error && <p className="Error-message">{error}</p>}

          {meals.length > 0 && (
            <div className="Meals-container">
              <h2>Meals under {calorieLimit} calories:</h2>
              <ul>
                {meals.map(meal => (
                  <li key={meal.nix_item_id}>
                    {meal.food_name} - {meal.nf_calories} calories
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
*/
/*

import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const fastFoodChains = [
  { name: "McDonald's", id: "513fbc1283aa2dc80c000053", logo: "mcdonalds.png" },
  { name: "Starbucks", id: "513fbc1283aa2dc80c00000a", logo: "starbucks.png" },
  { name: "Subway", id: "513fbc1283aa2dc80c00000f", logo: "subway.jpg" },
  { name: "Wendy's", id: "513fbc1283aa2dc80c000036", logo: "wendys.webp" },
  { name: "Burger King", id: "51db37d8176fe9790a899db2", logo: "burgerking.png" },
  { name: "Taco Bell", id: "513fbc1283aa2dc80c000028", logo: "tacobell.svg" },
  { name: "Chick-fil-A", id: "5592f8cf498e889b5fb31aa0", logo: "chick-fill-a.png" },
  { name: "Dunkin' Donuts", id: "513fbc1283aa2dc80c00000d", logo: "dunkin.jpg" },
  { name: "Domino's Pizza", id: "513fbc1283aa2dc80c000025", logo: "dominos.png" },
  { name: "Pizza Hut", id: "513fbc1283aa2dc80c00000c", logo: "pizza_hut.png" }
];

function App() {
  const [selectedChain, setSelectedChain] = useState('');
  const [calorieLimit, setCalorieLimit] = useState('');
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchMeals = async () => {
    setLoading(true);
    setError('');
    setMeals([]);

    try {
      const response = await axios.post(
        'https://trackapi.nutritionix.com/v2/search/instant',
        {
          query: selectedChain,
          branded: true,
          detailed: true,
          full_nutrients: {
            "208": {
              "lte": parseInt(calorieLimit)
            }
          },
          brand_ids: fastFoodChains.find(chain => chain.name === selectedChain)?.id
        },
        {
          headers: {
            'x-app-id': 'a8af4a63',
            'x-app-key': 'ab18c7899e9bf8f18725378f5bab6f12',
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.data.branded) {
        setMeals(response.data.branded);
      } else {
        setError('No meals found within the specified calorie range.');
      }
    } catch (err) {
      setError('Failed to fetch meals. Please try again.');
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fast Food Calorie Finder</h1>
        
        <div className="Finder-container">
          <div className="Logo-grid">
            {fastFoodChains.map(chain => (
              <div 
                key={chain.id} 
                className={`Logo-item ${selectedChain === chain.name ? 'selected' : ''}`}
                onClick={() => setSelectedChain(chain.name)}
              >
                <img 
                  src={`${process.env.PUBLIC_URL}/logos/${chain.logo}`} 
                  alt={chain.name} 
                  className="Chain-logo" 
                />
              </div>
            ))}
          </div>

          <div className="Input-group">
            <input 
              type="number" 
              id="calorieLimit"
              value={calorieLimit} 
              onChange={(e) => setCalorieLimit(e.target.value)}
              placeholder=" "
            />
            <label htmlFor="calorieLimit">Enter Calorie Limit</label>
          </div>

          <button 
            onClick={fetchMeals} 
            disabled={!selectedChain || !calorieLimit || loading}
            className="App-button"
          >
            {loading ? 'Loading...' : 'Find Meals'}
          </button>

          {error && <p className="Error-message">{error}</p>}

          {meals.length > 0 && (
            <div className="Meals-container">
              <h2>Meals under {calorieLimit} calories:</h2>
              <ul>
                {meals.map(meal => (
                  <li key={meal.nix_item_id}>
                    {meal.food_name} - {meal.nf_calories} calories
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;

*/

import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const fastFoodChains = [
  { name: "McDonald's", id: "513fbc1283aa2dc80c000053", logo: "mcdonalds.png" },
  { name: "Starbucks", id: "513fbc1283aa2dc80c00000a", logo: "starbucks.png" },
  { name: "Subway", id: "513fbc1283aa2dc80c00000f", logo: "subway.jpg" },
  { name: "Wendy's", id: "513fbc1283aa2dc80c000036", logo: "wendys.webp" },
  { name: "Burger King", id: "51db37d8176fe9790a899db2", logo: "burgerking.png" },
  { name: "Taco Bell", id: "513fbc1283aa2dc80c000028", logo: "tacobell.svg" },
  { name: "Chick-fil-A", id: "5592f8cf498e889b5fb31aa0", logo: "chick-fill-a.png" },
  { name: "Dunkin' Donuts", id: "513fbc1283aa2dc80c00000d", logo: "dunkin.jpg" },
  { name: "Domino's Pizza", id: "513fbc1283aa2dc80c000025", logo: "dominos.png" },
  { name: "Pizza Hut", id: "513fbc1283aa2dc80c00000c", logo: "pizza_hut.png" }
];

function Popup({ title, content, onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>{title}</h2>
        {content}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

function App() {
  const [selectedChain, setSelectedChain] = useState('');
  const [calorieLimit, setCalorieLimit] = useState('');
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [popupInfo, setPopupInfo] = useState(null);

  const fetchMeals = async () => {
    setLoading(true);
    setMeals([]);

    try {
      const response = await axios.post(
        'https://trackapi.nutritionix.com/v2/search/instant',
        {
          query: selectedChain,
          branded: true,
          detailed: true,
          full_nutrients: {
            "208": {
              "lte": parseInt(calorieLimit)
            }
          },
          brand_ids: fastFoodChains.find(chain => chain.name === selectedChain)?.id
        },
        {
          headers: {
            'x-app-id': process.env.REACT_APP_NUTRITIONIX_APP_ID,
            'x-app-key': process.env.REACT_APP_NUTRITIONIX_API_KEY,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.data.branded && response.data.branded.length > 0) {
        setMeals(response.data.branded);
        setPopupInfo({
          title: `Cheat Meals under ${calorieLimit} calories:`,
          content: (
            <ul>
              {response.data.branded.map(meal => (
                <li key={meal.nix_item_id}>
                  {meal.food_name} - {meal.nf_calories} calories
                </li>
              ))}
            </ul>
          )
        });
      } else {
        setPopupInfo({
          title: "No Results",
          content: <p>No cheat meals found under {calorieLimit} calories for {selectedChain}.</p>
        });
      }
    } catch (err) {
      setPopupInfo({
        title: "Error",
        content: <p>Failed to fetch cheat meals. Please try again.</p>
      });
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cheat Meal Generator</h1>
        
        <div className="Finder-container">
          <div className="Logo-grid">
            {fastFoodChains.map(chain => (
              <div 
                key={chain.id} 
                className={`Logo-item ${selectedChain === chain.name ? 'selected' : ''}`}
                onClick={() => setSelectedChain(chain.name)}
              >
                <img 
                  src={`${process.env.PUBLIC_URL}/logos/${chain.logo}`} 
                  alt={chain.name} 
                  className="Chain-logo" 
                />
              </div>
            ))}
          </div>

          <div className="Input-group">
            <input 
              type="number" 
              id="calorieLimit"
              value={calorieLimit} 
              onChange={(e) => setCalorieLimit(e.target.value)}
              placeholder=" "
            />
            <label htmlFor="calorieLimit">Enter Calorie Limit</label>
          </div>

          <button 
            onClick={fetchMeals} 
            disabled={!selectedChain || !calorieLimit || loading}
            className="App-button"
          >
            {loading ? 'Loading...' : 'Find Cheat Meals'}
          </button>
        </div>
      </header>

      {popupInfo && (
        <Popup 
          title={popupInfo.title}
          content={popupInfo.content}
          onClose={() => setPopupInfo(null)} 
        />
      )}
    </div>
  );
}

export default App;