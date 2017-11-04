import React from 'react'
import Link from 'gatsby-link'
import Welcome from '../components/Welcome.jsx';
import AboutUs from '../components/AboutUs.jsx';
import Services from '../components/Services.jsx';
import ClientProjects from '../components/ClientProjects.jsx';
import Testimonials from '../components/Testimonials.jsx';
import EmailUs from '../components/EmailUs.jsx';

const IndexPage = () => (
  <div>
    <Welcome />
    <AboutUs />
    <Services />
    <ClientProjects />
    <Testimonials />
    <EmailUs />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
