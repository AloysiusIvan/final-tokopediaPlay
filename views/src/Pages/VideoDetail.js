import { Typography, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import useFetchVideo from '../Hooks/useFetchVideo';
import Products from '../Components/Products';
import Comments from '../Components/Comments';

export default function VideoDetail(){
    const { id } = useParams();

    const video = useFetchVideo(id);

    return(
        <div>
            <Grid container>
                <Grid item xs={12} md={2} className='productsCol' style={{maxHeight: 561, overflow: 'auto'}}>
                    <Typography variant="body1">
                        <Products/>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                    <div className='iframe-container'>
                        <iframe className='iframe' src={video.urlEmbed} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </Grid>
                <Grid item xs={12} md={2} className='commentsCol' style={{maxHeight: 561, overflow: 'auto'}}>
                    <Comments/>
                </Grid>
            </Grid>
        </div>
    );
}