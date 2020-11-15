import React from 'react'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Home = () => {
  return (
    <Container className='mainContainer'>
      <Row>
        <Col lg='7'>
          <p>
            Singletrack Ventures is a private family invetment fund based in
            Utah. We invest in growing business both directly and indirectly
            through select venture and private equity funds.
          </p>
          <p>Our current direct investments include: </p>
          <p className='portCoBlock'>
            <a href='http://www.fitkitsystems.com'>
              <Image src='/bloglogo.png' className='portCoLogo' />
            </a>
          </p>

          <p>
            <a href='http://www.bikefitr.com'>
              <Image src='/bikefitter.jpg' className='portCoLogo' />
            </a>
          </p>
          <Image src='/canopy.png' className='portCoLogo' />
          <span className='portCoLogo'>Canopy Foods</span>
          <p>
            Our indirect investments include a wide variety of technology,
            manufacturing and consumer goods businesses. Although we primarily
            invest in the Intermountain West, we have investments throughout the
            United States.{' '}
          </p>
        </Col>
        <Col lg='1' className='centerColumn'></Col>
        <Col>
          <p>
            <strong>Investment Focus:</strong>
          </p>
          <p>
            While we primarily invest indirectly through professional managers,
            we consider direct investments in businesses that can benefit from
            our capital resources and expertise. Businesses specializing in
            cycling, outdoor recreation, fitness, nutrition, conservation and
            sustainability are of particular interest to us.
          </p>
          <p>
            Companies must have a track record of revenue and EBITDA, with a
            strong competitive position and a potential for future growth. We
            typcially do not invest in startups.
          </p>
          <Image src='/emadd.gif' />
        </Col>
      </Row>
    </Container>
  )
}

export default Home
