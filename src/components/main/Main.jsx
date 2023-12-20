import React from 'react'
import { Canvas } from '@react-three/fiber'

import './Main.css'
import Model from '../../assets/model/main/Scene'
import { OrbitControls } from '@react-three/drei'
import HomeLogo from '../../assets/model/homeLogo/HomeLogo'

export default function Main() {
    return (
        <main className='three-page'>
            {/* <Canvas className='three-text' camera={{ position: [0, 5, 7] }}>
                <Model />
                <OrbitControls enableZoom={false} enableRotate={true} />
                <ambientLight intensity={50} />
                <directionalLight position={[5, 3, 4]} />
            </Canvas> */}
            <HomeLogo />
        </main>
    )
}
