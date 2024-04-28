import React from 'react'
import './footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Tooltip from '@mui/material/Tooltip';

const Footer = () => {
  return (
    <footer className="footer">
      <div className='icons'>
        <Tooltip title="github.com/neethafrancis">
          <a href="https://github.com/neethafrancis/"><GitHubIcon /></a>
        </Tooltip>
        <Tooltip title="linkedin.com/in/neetha-francis-584673206">
          <a href="https://www.linkedin.com/in/neetha-francis-584673206/"><LinkedInIcon /></a>
        </Tooltip>
        <Tooltip title="neethafrancis26@gmail.com">
          <EmailIcon />
        </Tooltip>
      </div>
      <div className='text-footer'>
        Copyright &#169; 2024 Neetha Francis. All rights received.
      </div>
    </footer>
  )
}

export default Footer