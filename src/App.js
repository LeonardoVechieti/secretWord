import './App.css';
import StartScreen from './components/StartScreen/StartScreen';
import GameScreen from './components/GameScreen/GameScreen';
import EndScreen from './components/EndScreen/EndScreen';
import {useCallback, useEfects, useState} from 'react';
import { wordList } from './data/words.js';

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'},
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordList);
  const [pikedWord, setPikedWord] = useState('');
  const [pikedCategory, setPikedCategory] = useState('');
  const [letters, setLetters] = useState([]);

  const pickWordAndCategory = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    const word =  words[category][Math.floor(Math.random() * words[category].length)];
    return {word, category};
  
  };



  const startGame = () => {
    const {word, category} = pickWordAndCategory();
    console.log(word, category);
    let wordLetters = word.split('');
    wordLetters = wordLetters.map(l => l.toLowerCase());
    setPikedWord(word);
    setPikedCategory(category);
    setLetters(wordLetters);
    console.log(wordLetters);
    setGameStage(stages[1].name);
  };

  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };
  const restartGame = () => {
    setGameStage(stages[0].name);
  };
  return (
    <div className='App'>
        {gameStage === 'start' && <StartScreen startGame={startGame}/>}
        {gameStage === 'game' && <GameScreen verifyLetter={verifyLetter}/>}
        {gameStage === 'end' && <EndScreen restartGame={restartGame}/>}
    </div>
  );
}

export default App;
