import React, { useState } from 'react';

/**
 * PUBLIC_INTERFACE
 * MainContainer is the root component for the WeatherEase application.
 * It manages weather data state, fetches (future) weather info, and renders
 * placeholders for user interface sections: location search, current weather, and forecast.
 */
function MainContainer() {
  // State management for location, weather, etc.
  const [location, setLocation] = useState('New York');
  const [currentWeather, setCurrentWeather] = useState({
    temperature: '--',
    condition: 'Clear',
    icon: '☀️',
  });
  const [forecast, setForecast] = useState([
    { day: 'Tue', temperature: '--', icon: '⛅' },
    { day: 'Wed', temperature: '--', icon: '🌧️' },
    { day: 'Thu', temperature: '--', icon: '☀️' },
  ]);

  // Placeholder for future weather data fetching logic
  // function fetchWeather(location) { ... }

  // PUBLIC_INTERFACE
  function handleLocationChange(e) {
    setLocation(e.target.value);
    // Would trigger data fetch here in a real app
  }

  return (
    <div className="container" style={{ marginTop: 110, marginBottom: 50, maxWidth: 480 }}>
      <div style={{ marginBottom: 32 }}>
        <h1 className="title" style={{ fontSize: '2.2rem', marginBottom: 8 }}>
          WeatherEase
        </h1>
        <div className="description" style={{ marginBottom: 0 }}>
          Your simple, friendly weather dashboard.
        </div>
      </div>

      {/* Location Search */}
      <section style={{ marginBottom: 36 }}>
        <label htmlFor="location-input" className="subtitle" style={{ display: 'block', marginBottom: 8 }}>
          Enter a location
        </label>
        <input
          id="location-input"
          type="text"
          value={location}
          onChange={handleLocationChange}
          style={{
            padding: '10px 14px',
            borderRadius: 4,
            border: '1px solid var(--border-color)',
            width: '100%',
            maxWidth: 260,
            fontSize: '1rem',
          }}
          placeholder="e.g. New York, London"
        />
      </section>

      {/* Current Weather */}
      <section style={{
        background: 'rgba(255,255,255,0.02)',
        borderRadius: 8,
        padding: '22px 18px',
        marginBottom: 28,
        border: '1px solid var(--border-color)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ fontSize: '2.5rem' }}>{currentWeather.icon}</span>
          <div>
            <strong style={{ fontSize: '1.9rem' }}>{currentWeather.temperature}°</strong>
            <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: 2 }}>
              {currentWeather.condition}
            </div>
            <div style={{ fontSize: '0.98rem', color: 'var(--text-secondary)' }}>
              {location}
            </div>
          </div>
        </div>
      </section>

      {/* Forecast */}
      <section>
        <div className="subtitle" style={{ marginBottom: 16 }}>
          3-Day Forecast
        </div>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
          {forecast.map((day, i) => (
            <div key={day.day} style={{
              background: 'rgba(255,255,255,0.03)',
              borderRadius: 6,
              padding: '12px 14px',
              textAlign: 'center',
              minWidth: 64,
              border: '1px solid var(--border-color)'
            }}>
              <div style={{ fontWeight: 600 }}>{day.day}</div>
              <div style={{ fontSize: '1.7rem', margin: '6px 0' }}>{day.icon}</div>
              <div style={{ fontSize: '1.05rem' }}>{day.temperature}°</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MainContainer;
