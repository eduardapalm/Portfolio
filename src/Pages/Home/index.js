import React, { useState } from 'react'
import Lottie from 'react-lottie';
import animationData from './Animations/dev-animation.json'
import animationData2 from './Animations/arrows-animation.json'
import * as S from './styled'
import MyPic from './Assets/my-pic.svg'

export default function Home() {
  const [animationState, setAnimationState] = useState({
    isStopped: false, isPaused: false
  })

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  
  const defaultOptions2 = {
    loop: true,
    autoplay: true, 
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
<>
    <S.Container>
      <S.Header>
          <p>Eduarda Almeida</p>

          <S.Ul>
            <S.Li><S.A href="#home">Presentation</S.A></S.Li>
            <S.Li><S.A href="#home">Projects</S.A></S.Li>
            <S.Li><S.A href="#home">Certificates</S.A></S.Li>
            <S.Li><S.A href="#home">Contact</S.A></S.Li>
          </S.Ul>

      </S.Header>
      <S.HomeMain>
        <S.HomeSection>
          <header>
            <S.HomeH1>Hello</S.HomeH1>
          </header>
          <S.HomeP>Welcome to my portfolio</S.HomeP>
        </S.HomeSection>
        <aside>
            <Lottie options={defaultOptions}
                  height={400}
                  width={400}
                  isStopped={setAnimationState.isStopped}
                  isPaused={setAnimationState.isPaused}/>
        </aside>
      </S.HomeMain>
      <S.HomeFooter>
        <p>Scroll down  to learn about me</p>
        <div>
          <Lottie options={defaultOptions2}
                    height={40}
                    width={25}
                    isStopped={setAnimationState.isStopped}
                    isPaused={setAnimationState.isPaused}/>
        </div>
      </S.HomeFooter>
      <S.PresentationContainer>
        <S.PresentationHeader>
          <S.PresentationH1>Presentation</S.PresentationH1>
        </S.PresentationHeader>
        <S.PresentationMain>
          <S.PicSection>
            <img src={MyPic}/>
          </S.PicSection>
          <S.PresentationAside>
            <S.PresentationH2>Who Am I?</S.PresentationH2>
            <S.PresentationP>Hi, my name is Maria Eduarda Peçanha de Almeida, but I'm used to present myself as Eduarda Almeida. I'm a 21-year-old black woman from Rio de Janeiro. My biggest passions are my family, music, and in the last few months, coding.
  I'm starting my second semester in Computer Science at Unicarioca, where I'll be learning more about logic, Software Engineering, and programming principles with C.
  Furthermore, I've been studying full-stack web development since 2021 February, focusing on getting a strong knowledge base. Now, I'm starting to learn React and Java to expand my skills and apply my knowledge to some new projects.</S.PresentationP>
          </S.PresentationAside>
        </S.PresentationMain>
      </S.PresentationContainer>
    </S.Container>
</>
  )
}