import './Body.css';
import Card from './Card'


function Body() {
    return (
        <section className='cuerpo'>
            
    <main className='container videoInicio'>
    <div height='75vh' min-height='25rem' width='100%'>
    <video playsinline='playsinline' autoplay='autoplay' muted='muted' loop='loop'>
    <source src='../assets/pexels-cottonbro-10609736.mp4' type='video/mp4' />
    </video>
    </div>
    </main>
    <section/>
    <Card />
    );
    }

export default Body;