import { Typography, Grid  } from '@mui/material';
import { Link } from 'react-router-dom';
import useFetchVideos from '../Hooks/useFetchVideos';

function formatNumber(number) {
    const abbreviations = {
        K: 1000,
        M: 1000000,
        B: 1000000000,
    };
    for (const key in abbreviations) {
        if (number >= abbreviations[key]) {
            return (number / abbreviations[key]).toFixed(0) + key;
        }
    }
    return number.toString();
}

function VideoItem({ backgroundImage, title, channel, views }) {
    return (
      <div className='videoItem'
        style={{
          backgroundImage: `linear-gradient(transparent, rgba(0, 0, 0, 0.6)),url('${backgroundImage}')`,
          height: '27rem',
          borderRadius: '8px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '0.625rem',
          position: 'relative'
        }}
      >
        <Typography className="views-count" variant="body1" style={{position: 'absolute', left:'5%', top:'2%', display:'flex', alignItems:'center'}}>
        <span class="material-symbols-outlined">
          visibility
        </span>&nbsp;{formatNumber(views)}
        </Typography>
        <Typography variant="body1">
          {title}
        </Typography>
        <Typography variant="body1" style={{fontSize:'0.75rem', opacity:'0.8'}}>
          {channel}
        </Typography>
      </div>
    );
}
  
export default function Videos() {
  const videos = useFetchVideos();
  
  return (
    <Grid container spacing={2}>
      {videos.map(bgUrl => (
          <Grid className='gridItem' key={bgUrl.videoId} item xs={6} md={2}>
              <Link to={`/videos/${bgUrl.videoId}`} style={{textDecoration:'none', color:'white'}}>
                  <VideoItem backgroundImage={bgUrl.urlThumbnail} title={bgUrl.title} channel={bgUrl.channel} views={bgUrl.views}/>
              </Link>
          </Grid>
      ))}
    </Grid>
  );
}