import React from 'react';
import './App.css';
import Header from './src_components/Header';
import SoundList from './src_components/SoundList';

function App() {
  const dogSounds = [
    { id: 'bark1', name: 'Energetic Bark', audio: '/sounds/bark_energetic.mp3', breed: 'Labrador' },
    { id: 'whine1', name: 'Soft Whine', audio: '/sounds/whine_soft.mp3', breed: 'Poodle' },
    { id: 'howl1', name: 'Melancholy Howl', audio: '/sounds/howl_melancholy.mp3', breed: 'Husky' },
    { id: 'growl1', name: 'Warning Growl', audio: '/sounds/growl_warning.mp3', breed: 'German Shepherd' },
    { id: 'pant1', name: 'Happy Panting', audio: '/sounds/pant_happy.mp3', breed: 'Golden Retriever' },
    { id: 'snore1', name: 'Peaceful Snore', audio: '/sounds/snore_peaceful.mp3', breed: 'Bulldog' },
  ];

  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <h2>Explore Dog Sounds</h2>
        <SoundList sounds={dogSounds} />
      </main>
      <footer className="App-footer">
        <p>&copy; 2025 DogSounds App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
