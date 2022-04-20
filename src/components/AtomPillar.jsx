import { useRef } from 'react'

function AtomPillar(props) {
  const mesh = useRef()

  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"black"} />
    </mesh>
  )
}

export default AtomPillar
