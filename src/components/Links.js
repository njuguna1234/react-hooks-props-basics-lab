import React from 'react';

class Links extends React.Component {
  render() {
    const { github, linkedin } = this.props;
    return (
      <div>
        <h3>Links</h3>
        <a href={github}>{github}</a>
        <br />
        <a href={linkedin}>{linkedin}</a>
      </div>
    );
  }
}

export default Links;
