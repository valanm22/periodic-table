import AtomPillar from './components/AtomPillar'
import { Canvas } from '@react-three/fiber'
import './App.css'

function App() {
  return (
    <div className="App">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <AtomPillar position={[-1.2, 0, 0]} />
      </Canvas>
    </div>
  );
}

export default App;
