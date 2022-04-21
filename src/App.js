import AtomPillar from './components/AtomPillar'
import { Canvas } from '@react-three/fiber'
import './App.css'

function App() {
  return (
    <div className="App">
      <Canvas style={{ backgroundColor: 'black' }}>
        <ambientLight intensity={0.25} />
        <pointLight position={[10, 10, 10]} />
        <spotLight
          intensity={0.6}
          position={[30, 30, 50]}
          angle={0.2}
          penumbra={1}
          castShadow 
        />
        <AtomPillar position={[-1.2, 0, 0]} />
      </Canvas>
    </div>
  );
}

export default App;
