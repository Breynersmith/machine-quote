import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


const QuoteMachine = ({ changeBackgroundColor }) => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('linear-gradient(to right, #ff8a00, #da1b60)'); // Estado para el fondo degradado 

  const getNewQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      if (!response.ok) {
        throw new Error('Failed to fetch quote');
      }
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
      // Cambiar el fondo degradado al obtener una nueva cotización
      setBackgroundColor(generateRandomGradient());
      // Llamar a la función proporcionada para cambiar el color de fondo en el componente padre
      changeBackgroundColor(backgroundColor);
    } catch (error) {
      console.error('Error fetching quote:', error.message);
    }
  };

  useEffect(() => {
    getNewQuote();
  }, []); // Run once on component mount

  const tweetQuote = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${quote}" - ${author}`
    )}`;
    window.open(tweetUrl, '_blank');
  };

  // Función para generar un fondo degradado aleatorio
  const generateRandomGradient = () => {
    const angle = Math.random() * 360;
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
  };

  // Función para generar un color hexadecimal aleatorio
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div
      id="quote-box"
      className="quote card container text-center" // Aplicar el fondo degradado dinámicamente
    >
      <div className='card-body '>
        <div id="text">{quote}</div>
        <div className='fw-bold' id="author"> {author}</div>
        <div>
          <button
            id="new-quote"
            onClick={getNewQuote}
            style={{ backgroundColor: '#4CAF50', color: 'white' }} // Estilo para el botón
          >
            New Quote
          </button>
          <a className='buttonTweet' id="tweet-quote" href="#" onClick={tweetQuote}>
            Tweet Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuoteMachine;
QuoteMachine.propTypes = {
  changeBackgroundColor: PropTypes.func.isRequired,
};
