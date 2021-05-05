import React from 'react'
import {
  Banner,
  Content,
  ContentBox,
  ContentBoxContent,
  ContentBoxTitle,
  Hero,
  HeroActionButton,
  HeroTitle,
  HomeContainer,
} from '../components/StyledComponents'

const Home = () => {
  return (
    <>
      <HomeContainer>
        <Banner>
          <Hero>
            <HeroTitle>Change your life...</HeroTitle>
            <HeroActionButton to='/apply'>Start here</HeroActionButton>
          </Hero>
        </Banner>

        <Content>
          <ContentBox>
            <ContentBoxTitle>Content</ContentBoxTitle>
            <hr />
            <ContentBoxContent>This is some kind of content</ContentBoxContent>
          </ContentBox>
          <ContentBox>
            <ContentBoxTitle>Content</ContentBoxTitle>
            <hr />
            <ContentBoxContent>This is some kind of content</ContentBoxContent>
          </ContentBox>{' '}
          <ContentBox>
            <ContentBoxTitle>Content</ContentBoxTitle>
            <hr />
            <ContentBoxContent>This is some kind of content</ContentBoxContent>
          </ContentBox>{' '}
          <ContentBox>
            <ContentBoxTitle>Content</ContentBoxTitle>
            <hr />
            <ContentBoxContent>This is some kind of content</ContentBoxContent>
          </ContentBox>
        </Content>
      </HomeContainer>
    </>
  )
}

export default Home
