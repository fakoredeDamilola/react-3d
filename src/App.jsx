import logo from './logo.svg';
import './App.css';
// import { GlobalStyles } from './components/styles/GlobalStyles';
import {Canvas} from "@react-three/fiber";
import { Suspense } from 'react';
import { Box } from '@react-three/drei';
import styled from 'styled-components';
import Earth from './components/earth';

const CanvasContainer = styled.div`
  width:100%;
  height:100%;
`

function App() {
  return(
    <>
         {/* <GlobalStyles /> */}
     <CanvasContainer>
        <Canvas>
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
        </Canvas>
     </CanvasContainer>
    </>
  )
}

export default App;
