import { useState, useEffect } from 'react';

export default function useFetchVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch('http://localhost:3001/api/videos');
        const data = await response.json();
        setVideos(data.videos);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchVideos();
  }, []);

  return videos;
}