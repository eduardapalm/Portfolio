import styled from 'styled-components'

export const Container = styled.body`
  position: absolute;
  background: linear-gradient(180deg, #FEC7D7 0%, rgba(214, 21, 77, 0.515625) 62.83%, rgba(254, 199, 215, 0.75) 100%);
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
  @import url('https://fonts.googleapis.com/css2?family=Spartan:wght@400;500;700;900&display=swap');
  font-family: 'Spartan', sans-serif;
`
export const Header = styled.header`
  max-width: 100vw;
  height: 6.75rem;
  margin: 0 4.375rem 0 4.375rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #0E172C;
  font-weight: 500;
`

export const Ul = styled.ul` 
  display: flex;
  padding: 0;
  list-style: none;
  justify-content: space-between;
`

export const Li = styled.li` 
  display: inline-block;
`

export const A = styled.a`
  text-align: center;
  padding: 0 0 0 2rem;
  color: #0E172C;
  text-decoration: none;
  font-weight: 400;
`

export const HomeMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 5.5313rem;
`

export const HomeSection = styled.section`
  display: flex;
  flex-direction: column; 
  justify-content: center;
`

export const HomeH1 = styled.h1`
  font-weight: 900;
  font-size: 15rem;
  line-height: 0;

  color: #0E172C;
  text-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
`

export const HomeP = styled.p`
  margin: -5.375rem 0 0 1.5rem;
  font-weight: 500;
  color: #0E172C;
  font-size: 2.5rem;
`

export const HomeFooter =  styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem 0 3rem 0;
  color: #fffffe
`

export const PresentationContainer = styled.div`
  background: #fffffe;
  padding-bottom: 4.375rem;
  width: 100vw;
`

export const PresentationHeader = styled.header`
  display: flex;
  justify-content: center;
  padding: 3.125rem 0 4rem 0;
`

export const PresentationH1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #0E172C;
`

export const PresentationMain = styled.main`
  display: flex;
  justify-content: space-between;
`

export const PicSection = styled.section`
  margin:1.25rem 0 0 17.5rem;
`

export const PresentationAside = styled.aside`
  max-width: 28.25rem;
  margin-right: 12.5rem;
`
export const PresentationH2 = styled.h2`
  font-size: 1.9rem;
  color: #E66565;
`

export const PresentationP = styled.p`
  text-align: justify;
`