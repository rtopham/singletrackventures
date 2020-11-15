import React from 'react'
import Container from 'react-bootstrap/Container'

const SocialLinks = () => {
  return (
    <div className='socialLinks'>
      <Container>
        <a href='http://www.facebook.com/fitkitsystems'>
          <i className='fab fa-facebook-f fa-2x socialLink' />
        </a>
        <a href='http://www.facebook.com/mybikefitr'>
          <i className='fab fa-facebook-f fa-2x socialLink' />
        </a>
        <a href='https://www.youtube.com/channel/UCli6LlEc1hjYEdTvzKjCz3Q?'>
          <i className='fab fa-youtube fa-2x socialLink' />
        </a>
        <a href='http://instagram.com/bikefitr'>
          <i className='fab fa-instagram fa-2x socialLink' />
        </a>
      </Container>
    </div>
  )
}

export default SocialLinks
