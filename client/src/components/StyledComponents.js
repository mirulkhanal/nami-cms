import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import BannerImg from '../assets/Banner.jpg'
import LoginBannerImg from '../assets/LoginBanner.png'
import ApplicationBannerImg from '../assets/ApplyBanner.jpg'
export const NavContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #30323d;
  color: white;
`
export const NavLinks = styled.div`
  /* list-style: none; */
  display: flex;
  align-items: center;
`
export const NavElement = styled(NavLink)`
  text-decoration: none;
  color: white;
  margin: 0 20px;
  padding: 0 20px;
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: white;
    color: black;
  }
`
export const NavLogo = styled.div`
  /* background-color: blue; */
  width: fit-content;
  font-size: 3em;
  font-family: 'Freckle Face', cursive;
  font-weight: 700;
`
export const NavActions = styled.div``
export const NavActionButton = styled(Link)`
  text-decoration: none;
  padding: 5px 30px;
  font-size: 1.2em;
  border-radius: 8px;
  cursor: pointer;
  color: black;
  background-color: white;
  font-weight: 700;
  outline: none;
  margin: 10px;
  border: none;
`
export const HomeContainer = styled.div`
  z-index: 1000;
  /* box-shadow: 1px 2px 20px 3px #000000; */
`
export const Banner = styled.div`
  background-image: url(${BannerImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 100px;
  width: 100%;
  height: 30vw;
`
export const Hero = styled.div`
  width: 40%;
  height: 30vw;
  background-color: #ff0054;
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 0 100px 100px 0;
  box-shadow: 5px 5px 15px 5px #000000;
`
export const Content = styled.div`
  /* box-shadow: 1px 2px 20px 3px #000000; */
  display: flex;
  /* border: 3px solid red; */
  justify-content: space-evenly;
  /* height: 100%; */
  width: 100%;
  position: absolute;
  bottom: 0;
  margin: auto;
`

export const HeroTitle = styled.h1`
  /* border: 3px solid red; */
  font-size: 3.5em;
`
export const HeroActionButton = styled(NavActionButton)``

export const ContentBox = styled.div`
  background-color: #767b94;

  margin: 10px;
  border: 3px solid black;
  border-radius: 12px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  width: 22vw;
  height: 11vw;
  & > hr {
    background-color: white;
    width: 100%;
    border: 4px solid white;
    /* border-radius: 12px; */
  }
`
export const ContentBoxTitle = styled.h2`
  /* border-radius: 8px; */
  width: 100%;
  text-align: center;
  background-color: #30323d;
  color: white;
`
export const ContentBoxContent = styled.p`
  margin: 20px;
`
export const ApplicationContainer = styled(HomeContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* height: 100%; */
`

export const ApplicationForm = styled.form`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 95%;
  background-color: #30323d;
  padding: 50px 0;
  border-radius: 8px;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.3em;
  font-weight: 500;
  color: white;
  box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  & input[type='text'] {
    outline: none;
    text-align: center;
    margin: 10px;
    width: 15vw;
    height: 30px;
  }
  & input[type='radio'] {
    margin: 15px;
    width: 4vw;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const MainFieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  padding: 20px;
  /* justify-content: flex-start; */
  align-items: flex-start;
`

export const SubFieldSet = styled(MainFieldSet)`
  flex-direction: column;
`
export const SubmitButton = styled.button`
  /* padding: 0 10px; */
  padding: 5px 10px;
  font-size: 1.2em;
  border-radius: 8px;
  cursor: pointer;
  color: black;
  background-color: white;
  outline: none;
  margin: 10px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    font-size: 1em;
  }
`
export const Legend = styled.legend`
  /* margin: 0 10px; */
  padding: 0 10px;
`

export const ApplicationBanner = styled(Banner)`
  background-image: url(${ApplicationBannerImg});
`
export const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  & > select {
    width: 70%;
  }
`
export const LoginContainer = styled(ApplicationContainer)``
export const LoginBanner = styled(ApplicationBanner)`
  background-image: url(${LoginBannerImg});
  background-size: 50vw;
`
export const LoginForm = styled(ApplicationForm)`
  flex-direction: column;
  height: 40vh;
  /* padding: 0; */
  overflow: hidden;
`
export const LoginInputContainer = styled(InputContainer)``
