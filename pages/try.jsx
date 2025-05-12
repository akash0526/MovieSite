// React component example
import { useState } from 'react';

function MovieRedirect() {
  const [movieTitle, setMovieTitle] = useState('Under Therapy');
  const [mediaType, setMediaType] = useState('movie');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRedirect = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Note: This will likely fail due to CORS unless you use a proxy
      const searchUrl = `https://soap2day.pe/search?keyword=${encodeURIComponent(movieTitle)}`;
      const response = await fetch(searchUrl);
      const html = await response.text();
      
      // Parse HTML (this part won't work directly in React due to DOMParser limitations)
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      
      const targetLink = doc.querySelector(`a[title*="${movieTitle}"]`);
      
      if (targetLink) {
        window.location.href = targetLink.href;
      } else {
        setError('Movie/TV show not found in search results.');
      }
    } catch (err) {
      setError('Failed to fetch data. CORS restrictions may apply.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Redirect to Soap2Day</h2>
      <div>
        <label>
          Title:
          <input 
            type="text" 
            value={movieTitle} 
            onChange={(e) => setMovieTitle(e.target.value)} 
          />
        </label>
      </div>
      <div>
        <label>
          Media Type:
          <select value={mediaType} onChange={(e) => setMediaType(e.target.value)}>
            <option value="movie">Movie</option>
            <option value="tv">TV Show</option>
          </select>
        </label>
      </div>
      <button onClick={handleRedirect} disabled={isLoading}>
        {isLoading ? 'Searching...' : 'Find and Redirect'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default MovieRedirect;