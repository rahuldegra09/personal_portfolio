import React, { MutableRefObject, Suspense, useRef, Ref,useState ,} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
    Decal,
    Float,
    OrbitControls,
    Preload,
    useTexture,
} from "@react-three/drei";
interface BallCanvasProps {
    imgUrl: string;
}
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }: BallCanvasProps) => {
    const [decal] = useTexture([imgUrl]);

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={1.25} />
            <directionalLight position={[0, 0, 0.05]} />
            <mesh  castShadow receiveShadow scale={2.75} position={[0, 0, 0]} >
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color='#c8caff'
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2* Math.PI, 0, 6.25]}
                    scale={1}
                    map={decal}
                />
            </mesh>
        </Float>
    );
};

const BallCanvas = ({ icon }: { icon: string }) => {
    return (
        <Canvas
            frameloop='always'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} />
                <Ball imgUrl={icon} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default BallCanvas;