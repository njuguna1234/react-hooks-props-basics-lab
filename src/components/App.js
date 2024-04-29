import React from 'react';
import Home from './Home';
import About from './About';

class App extends React.Component {
  render(props) {
    const user = {
      name: 'John Doe',
      age: 30,
      email: 'john@example.com',
      bio: 'Software Engineer'
    };
    
    const githubLink = 'https://github.com/johndoe';
    const linkedinLink = 'https://www.linkedin.com/in/johndoe';

    return (
      <div>
        <Home user={user} />
        <About bio={user.bio} github={githubLink} linkedin={linkedinLink} />
      </div>
    );
  }
}

export default App;
