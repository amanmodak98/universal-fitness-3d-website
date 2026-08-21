import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense } from 'react'
import { motion, useInView } from 'framer-motion'
import * as THREE from 'three'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Large gym scene with equipment
const GymEquipment = () => {
  const groupRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#FFD700" />
      <pointLight position={[-5, 3, -5]} intensity={0.5} color="#FFA500" />
      <spotLight position={[0, 8, 0]} intensity={1} angle={0.4} penumbra={1} color="#fff" />
      
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#111" metalness={0.3} roughness={0.8} />
      </mesh>
      
      {/* Ceiling beams */}
      {[-3, 0, 3].map((x, i) => (
        <mesh key={i} position={[x, 4, 0]}>
          <boxGeometry args={[0.2, 0.3, 12]} />
          <meshStandardMaterial color="#333" metalness={0.5} />
        </mesh>
      ))}
      
      {/* Squat Rack */}
      <group position={[-2, -0.5, 0]}>
        <mesh position={[-0.5, 0, -0.4]}>
          <boxGeometry args={[0.1, 3, 0.1]} />
          <meshStandardMaterial color="#555" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0.5, 0, -0.4]}>
          <boxGeometry args={[0.1, 3, 0.1]} />
          <meshStandardMaterial color="#555" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, 1.2, -0.4]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.03, 0.03, 1.2, 8]} />
          <meshStandardMaterial color="#aaa" metalness={0.9} />
        </mesh>
        <mesh position={[-0.5, 1.2, -0.4]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 0.08, 16]} />
          <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0.5, 1.2, -0.4]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 0.08, 16]} />
          <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
      
      {/* Bench Press */}
      <group position={[2, -1.5, -1]}>
        <mesh>
          <boxGeometry args={[0.5, 0.08, 1.5]} />
          <meshStandardMaterial color="#222" />
        </mesh>
        <mesh position={[0, -0.5, -0.5]}>
          <boxGeometry args={[0.08, 1, 0.08]} />
          <meshStandardMaterial color="#555" metalness={0.8} />
        </mesh>
        <mesh position={[0, -0.5, 0.5]}>
          <boxGeometry args={[0.08, 1, 0.08]} />
          <meshStandardMaterial color="#555" metalness={0.8} />
        </mesh>
      </group>
      
      {/* Cable Machine */}
      <group position={[0, -0.5, -3]}>
        <mesh>
          <boxGeometry args={[2, 3, 0.3]} />
          <meshStandardMaterial color="#222" metalness={0.5} />
        </mesh>
        <mesh position={[-0.7, 0.5, 0.2]}>
          <cylinderGeometry args={[0.02, 0.02, 2, 8]} />
          <meshStandardMaterial color="#aaa" metalness={0.9} />
        </mesh>
        <mesh position={[0.7, 0.5, 0.2]}>
          <cylinderGeometry args={[0.02, 0.02, 2, 8]} />
          <meshStandardMaterial color="#aaa" metalness={0.9} />
        </mesh>
      </group>
      
      {/* Dumbbell rack */}
      <group position={[3, -1, 1]}>
        {[0, 0.3, 0.6].map((y, i) => (
          <mesh key={i} position={[0, y, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.04, 0.04, 0.6, 8]} />
            <meshStandardMaterial color="#888" metalness={0.8} />
          </mesh>
        ))}
        <mesh position={[0, -0.15, 0]}>
          <boxGeometry args={[0.3, 0.8, 0.2]} />
          <meshStandardMaterial color="#333" metalness={0.5} />
        </mesh>
      </group>
      
      {/* Particles */}
      <Points />
    </group>
  )
}

const Points = () => {
  const count = 100
  const ref = useRef<THREE.Points>(null!)
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return pos
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02
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
      <pointsMaterial size={0.02} color="#FFD700" transparent opacity={0.4} sizeAttenuation />
    </points>
  )
}

const GymExperience3D = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  useEffect(() => {
    if (sectionRef.current) {
      const labels = sectionRef.current.querySelectorAll('.equipment-label')
      labels.forEach((label, i) => {
        gsap.fromTo(label, 
          { opacity: 0, x: i % 2 === 0 ? -30 : 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: label,
              start: 'top 80%',
              end: 'top 50%',
              toggleActions: 'play none none reverse',
            }
          }
        )
      })
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 md:py-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="text-[#FFD700] tracking-[0.3em] text-sm mb-4">EXPERIENCE</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black" style={{ fontFamily: 'Oswald, sans-serif' }}>
            ENTER THE <span className="gradient-text">FITNESS ZONE</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* 3D Scene */}
          <motion.div
            className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-white/10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Canvas
              camera={{ position: [0, 1, 6], fov: 50 }}
              dpr={[1, 1.5]}
              gl={{ antialias: true }}
            >
              <Suspense fallback={null}>
                <GymEquipment />
              </Suspense>
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </motion.div>

          {/* Labels */}
          <div className="space-y-8">
            {[
              { title: 'STRENGTH', desc: 'Heavy-duty equipment for maximum power development', icon: '💪' },
              { title: 'CARDIO', desc: 'State-of-the-art cardio machines for peak endurance', icon: '❤️' },
              { title: 'FUNCTIONAL TRAINING', desc: 'Open space for dynamic movements and agility', icon: '⚡' },
              { title: 'WEIGHT TRAINING', desc: 'Complete range of free weights and machines', icon: '🏋️' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="equipment-label glassmorphism rounded-xl p-6 flex items-start space-x-4 cursor-default"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.2 }}
                whileHover={{ x: 10, borderColor: 'rgba(255, 215, 0, 0.3)' }}
              >
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-[#FFD700]" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GymExperience3D
