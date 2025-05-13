import './MediaCard.css'
export default function MediaCard({ item }){
    const genreMap = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  18: 'Drama',
  27: 'Horror',
  35: 'Comedy',
  80: 'Crime',
  53: 'Thriller',
  10749: 'Romance',
  878: 'Sci-Fi',
  9648: 'Mystery',
  10752: 'War',
  14: 'Fantasy',
};
    return(
        <div className="media-card">
      <img
        src={
          item.poster_path
            ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
            : 'https://via.placeholder.com/500x750?text=No+Image'
        }
        alt={item.title}
        className="media-image"
      />
      <div className="media-content">
        <div className='media-heading'>
            <h2 className="media-title">{item.title}</h2>
            <div className="media-rating">⭐ {item.vote_average.toFixed(1)}</div>
        </div>
        <p className="media-date">{item.release_date}</p>
        <div className="media-genres">
          {item.genre_ids.slice(0, 3).map((id) => (
            <span key={id} className="genre-badge">
              {genreMap[id] || 'Genre'}
            </span>
          ))}
        </div>
        <p className="media-overview">{item.overview}</p>
        {/* <div className="media-rating">⭐ {item.vote_average.toFixed(1)}</div> */}
      </div>
    </div>
    )
}