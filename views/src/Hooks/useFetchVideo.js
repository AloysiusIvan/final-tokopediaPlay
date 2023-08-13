import { useState, useEffect } from 'react';

export default function useFetchVideo(id) {
  const [video, setVideo] = useState({});

  useEffect(() => {
    async function fetchVideo() {
      try {
        const response = await fetch(`http://localhost:3001/api/videos/${id}`);
        const data = await response.json();
        setVideo(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchVideo();
  }, [id]);

  return video;
}
