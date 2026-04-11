import React, { useState } from 'react';
import './VideoShowcase.css';

const VideoShowcase = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: 'Invisible Grill Installation View',
      description: 'Watch how invisible grills maintain crystal-clear views',
      thumbnail: '🎬',
      videoUrl: '/videos/grill-view.mp4',
      duration: '0:45'
    },
    {
      id: 2,
      title: 'Professional Installation Process',
      description: 'Step-by-step professional installation of invisible grills in 48 hours',
      thumbnail: '🔧',
      videoUrl: '/videos/installation.mp4',
      duration: '1:30'
    },
    {
      id: 3,
      title: 'Strength & Durability Test',
      description: '400kg weight capacity - tested for ultimate strength and safety',
      thumbnail: '💪',
      videoUrl: '/videos/strength.mp4',
      duration: '0:50'
    },
    {
      id: 4,
      title: 'Invisible Grills Structure',
      description: 'Detailed look at transparent nylon coating and cable structure',
      thumbnail: '🔍',
      videoUrl: '/videos/structure.mp4',
      duration: '1:00'
    },
    {
      id: 5,
      title: 'Balcony Invisible Grills Demo',
      description: 'Balcony installation showcasing unobstructed views and safety',
      thumbnail: '🏢',
      videoUrl: '/videos/balcony.mp4',
      duration: '1:15'
    },
    {
      id: 6,
      title: 'Window Grills Installation',
      description: 'How invisible window grills fit seamlessly on any window type',
      thumbnail: '🪟',
      videoUrl: '/videos/window.mp4',
      duration: '0:55'
    }
  ];

  return (
    <section className="video-showcase">
      <div className="video-container">
        <div className="video-header">
          <h2 className="section-title">Invisible Grills Video Gallery - See Quality & Installation</h2>
          <p className="section-subtitle">
            Watch real invisible grills installation, strength tests, and product demonstrations. See why 4500+ customers trust Falcon Invisible Grills.
          </p>
        </div>

        <div className="video-grid">
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="video-card"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="video-thumbnail">
                <span className="video-icon">{video.thumbnail}</span>
                <span className="play-button">▶</span>
                <span className="duration">{video.duration}</span>
              </div>
              <div className="video-info">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <div className="video-modal" onClick={() => setSelectedVideo(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedVideo(null)}>✕</button>
            <div className="video-player">
              <video controls autoPlay width="100%" height="100%">
                <source src={selectedVideo.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="video-details">
              <h2>{selectedVideo.title}</h2>
              <p>{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoShowcase;
