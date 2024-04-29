import React from 'react';
import Links from './Links';

class About extends React.Component {
  render() {
    const { bio, github, linkedin } = this.props;
    return (
      <div>
        <h2>About Me</h2>
        {bio && bio.trim() !== '' && <p>{bio}</p>}
        <Links github={github} linkedin={linkedin} />
      </div>
    );
  }
}

export default About;
