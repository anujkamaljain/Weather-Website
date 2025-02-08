import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


const InfoBox = ({ info }) => {

 const HOT_URL = "https://plus.unsplash.com/premium_photo-1720760950804-729e3043a1ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
 const COLD_URL = "https://plus.unsplash.com/premium_photo-1668792545129-72d876248c1b?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
 const RAIN_URL = "https://images.unsplash.com/photo-1562155955-1cb2d73488d7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
 const INIT_URL = "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJmcm9udGlmeS1maW5kZXIifSwicGF0aCI6ImloaC1oZWFsdGhjYXJlLWJlcmhhZFwvYWNjb3VudHNcL2MzXC80MDAwNjI0XC9wcm9qZWN0c1wvMjA5XC9hc3NldHNcLzIwXC8zODEwMFwvOWQyMzBiNjE5MDZlZjdmMzFiYTY5NDE3YjY5ZmVmODAtMTY1ODMwMTAzMC5qcGcifQ:ihh-healthcare-berhad:hfyAKfkN0RWZDGy9EulsZ31Qx6CPCnYpXzpI_ZaHDG0?format=webp";

 return (
    <div className="InfoBox">
      <div className='card-container'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 20 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='text-box'>
          <p style={{margin:"3px"}}>{info.city}</p> {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 20 ? <WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature : {info.temp}&deg;C</p>
          <p>Minimum Temperature : {info.tempMin}&deg;C</p>
          <p>Maximum Temperature : {info.tempMax}&deg;C</p>
          <p>Humidity : {info.humidity}</p>
          <p>The weather can be described as <b><i>{info.weather}</i></b> and feels lik {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      </Card>
      </div>
    </div>
 )
}

export default InfoBox;