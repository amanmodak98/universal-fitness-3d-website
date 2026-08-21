import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Dumbbell component
const Dumbbell = ({ position, rotation = [0, 0, 0], scale = 1, color = '#FFD700' }: any) => {
  const ref = useRef<THREE.Group>(null!)
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.003
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.05
    }
  })
  
  return (
    <group ref={ref} position={position} rotation={rotation} scale={scale}>
      {/* Bar */}
      <mesh>
        <cylinderGeometry args={[0.03, 0.03, 1.2, 8]} />
        <meshStandardMaterial color="#888" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Left weight */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.15, 16]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Right weight */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.15, 16]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  )
}

// Weight Plate component
const WeightPlate = ({ position, scale = 1 }: any) => {
  const ref = useRef<THREE.Mesh>(null!)
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z += 0.005
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.7 + position[0]) * 0.03
    }
  })
  
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <torusGeometry args={[0.3, 0.08, 16, 32]} />
      <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
    </mesh>
  )
}

// Kettlebell component
const Kettlebell = ({ position }: any) => {
  const ref = useRef<THREE.Group>(null!)
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6 + position[2]) * 0.04
    }
  })
  
  return (
    <group ref={ref} position={position}>
      <mesh>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.25, 0]}>
        <torusGeometry args={[0.1, 0.025, 8, 16]} />
        <meshStandardMaterial color="#555" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  )
}

// Barbell on rack
const BarbellRack = ({ position }: any) => {
  const ref = useRef<THREE.Group>(null!)
  
  return (
    <group ref={ref} position={position}>
      {/* Rack posts */}
      <mesh position={[-0.6, 0, 0]}>
        <boxGeometry args={[0.08, 2.5, 0.08]} />
        <meshStandardMaterial color="#444" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[0.6, 0, 0]}>
        <boxGeometry args={[0.08, 2.5, 0.08]} />
        <meshStandardMaterial color="#444" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Cross bar */}
      <mesh position={[0, -0.3, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.03, 1.5, 8]} />
        <meshStandardMaterial color="#888" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Weights on barbell */}
      <mesh position={[-0.55, -0.3, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.08, 16]} />
        <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.55, -0.3, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.08, 16]} />
        <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  )
}

// Bench
const Bench = ({ position }: any) => {
  return (
    <group position={position}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.4, 0.08, 1.2]} />
        <meshStandardMaterial color="#222" roughness={0.8} />
      </mesh>
      {/* Legs */}
      <mesh position={[0, -0.2, -0.5]}>
        <boxGeometry args={[0.3, 0.3, 0.05]} />
        <meshStandardMaterial color="#444" metalness={0.7} />
      </mesh>
      <mesh position={[0, -0.2, 0.5]}>
        <boxGeometry args={[0.3, 0.3, 0.05]} />
        <meshStandardMaterial color="#444" metalness={0.7} />
      </mesh>
    </group>
  )
}

// Treadmill
const Treadmill = ({ position }: any) => {
  return (
    <group position={position}>
      {/* Base */}
      <mesh position={[0, -0.3, 0]}>
        <boxGeometry args={[0.7, 0.1, 1.5]} />
        <meshStandardMaterial color="#222" roughness={0.8} />
      </mesh>
      {/* Belt */}
      <mesh position={[0, -0.24, 0]}>
        <boxGeometry args={[0.5, 0.02, 1.3]} />
        <meshStandardMaterial color="#333" roughness={0.9} />
      </mesh>
      {/* Console */}
      <mesh position={[0, 0.3, -0.7]}>
        <boxGeometry args={[0.5, 0.4, 0.05]} />
        <meshStandardMaterial color="#111" metalness={0.5} />
      </mesh>
      {/* Handles */}
      <mesh position={[-0.3, 0, -0.5]} rotation={[0.3, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.8, 8]} />
        <meshStandardMaterial color="#666" metalness={0.8} />
      </mesh>
      <mesh position={[0.3, 0, -0.5]} rotation={[0.3, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.8, 8]} />
        <meshStandardMaterial color="#666" metalness={0.8} />
      </mesh>
    </group>
  )
}

// Sports ball
const SportsBall = ({ position, color = '#fff' }: any) => {
  const ref = useRef<THREE.Mesh>(null!)
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0] * 2) * 0.08
      ref.current.rotation.x += 0.01
      ref.current.rotation.z += 0.005
    }
  })
  
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.12, 16, 16]} />
      <meshStandardMaterial color={color} roughness={0.6} />
    </mesh>
  )
}

// Floating particles
const Particles = () => {
  const count = 200
  const ref = useRef<THREE.Points>(null!)
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return pos
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02
      const posArray = ref.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < count; i++) {
        posArray[i * 3 + 1] += Math.sin(state.clock.elapsedTime * 0.3 + i) * 0.001
      }
      ref.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#FFD700" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

// Floor grid
const Floor = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[30, 30]} />
      <meshStandardMaterial color="#111" metalness={0.5} roughness={0.8} />
    </mesh>
  )
}

// Turf area
const TurfArea = ({ position }: any) => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={position}>
      <planeGeometry args={[3, 2]} />
      <meshStandardMaterial color="#1a5c1a" roughness={0.9} />
    </mesh>
  )
}

export default function HeroScene() {
  const groupRef = useRef<THREE.Group>(null!)
  const mouseRef = useRef({ x: 0, y: 0 })
  
  useFrame((state) => {
    if (groupRef.current) {
      // Subtle camera-like rotation based on mouse
      const targetX = mouseRef.current.y * 0.1
      const targetY = mouseRef.current.x * 0.1
      groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.02
      groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.02
      
      // Slow auto-rotation
      groupRef.current.rotation.y += 0.001
    }
  })

  // Track mouse
  if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    })
  }

  return (
    <group ref={groupRef}>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#FFD700" />
      <pointLight position={[-5, 3, -5]} intensity={0.5} color="#FFA500" />
      <pointLight position={[0, 5, 0]} intensity={0.8} color="#ffffff" />
      <spotLight position={[0, 8, 0]} intensity={1} angle={0.5} penumbra={1} color="#FFD700" />
      
      {/* Environment */}
      <Floor />
      <TurfArea position={[3, -1.99, 2]} />
      
      {/* Gym Equipment */}
      <Dumbbell position={[-2, 0, 0]} rotation={[0, 0, Math.PI / 2]} scale={0.8} />
      <Dumbbell position={[-1.5, 0.5, -1]} rotation={[0.3, 0.5, Math.PI / 2]} scale={0.6} color="#ccc" />
      <Dumbbell position={[1, -0.5, 1]} rotation={[0, 0.3, Math.PI / 2]} scale={0.7} />
      
      <WeightPlate position={[2, 0.5, -1.5]} scale={0.8} />
      <WeightPlate position={[-1, 1, 1.5]} scale={0.6} />
      <WeightPlate position={[0, -0.5, -2]} scale={1} />
      
      <Kettlebell position={[2.5, -1, 0.5]} />
      <Kettlebell position={[-2.5, -1, -0.5]} />
      
      <BarbellRack position={[0, -0.5, -3]} />
      <BarbellRack position={[-3, -0.5, -2]} />
      
      <Bench position={[1.5, -1.2, -2]} />
      
      <Treadmill position={[3, -0.8, -3]} />
      <Treadmill position={[4, -0.8, -3]} />
      
      {/* Sports balls */}
      <SportsBall position={[-1, 0.5, 2]} color="#fff" />
      <SportsBall position={[2, 1, 2]} color="#8B4513" />
      <SportsBall position={[3.5, -0.5, 1]} color="#FFD700" />
      
      {/* Particles */}
      <Particles />
      
      {/* Fog effect */}
      <fog attach="fog" args={['#0a0a0a', 5, 25]} />
    </group>
  )
}
