import './App.css';
import Card from './components/Card';

function App() {
  const img =
    'https://wallbox.ru/resize/800x480/wallpapers/main/201442/31a75310d955b1e.jpg';

  return (
    <>
      <div className='container'>
        <Card img={img}>
          <h5 className='card-title'>Card title</h5>

          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </Card>

        <Card>
          <h5 className='card-title'>Special title treatment</h5>

          <p className='card-text'>
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </Card>
      </div>
    </>
  );
}

export default App;

// <div class='card-body'>
//   <h5 class='card-title'>Special title treatment</h5>
//   <p class='card-text'>
//     With supporting text below as a natural lead-in to additional content.
//   </p>
//   <a href='#0' class='btn btn-primary'>
//     Go somewhere
//   </a>
// </div>;
