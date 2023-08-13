import './App.css';
import Videos from './Pages/Videos';
import VideoDetail from './Pages/VideoDetail';
import { Typography, createTheme, ThemeProvider } from '@mui/material';
import { Routes, Route, Link } from 'react-router-dom';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
    h1: {
      fontSize: '1.25rem',
      fontWeight: 700
    },
    body1:{fontWeight: 400, fontSize: '0.875rem'}
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
        <div>
          <Typography variant="h1">
            <span className='homeButton'>
              <Link to='/' style={{textDecoration:'none', color:'white'}}>Tokopedia Play</Link>
            </span>
          </Typography>
        </div>
        <div style={{marginTop:'2.188rem'}}>
          <Routes>
            <Route path='/' element={<Videos/>}/>
            <Route path='/videos/:id' element={<VideoDetail/>}/>
          </Routes>
        </div>
    </ThemeProvider>
  );
}

export default App;
