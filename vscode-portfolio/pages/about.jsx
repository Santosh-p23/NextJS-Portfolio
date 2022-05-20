const AboutPage = () => {
  return (
    <>
      <h3>Hello there. I am a Computer Engineering student from Nepal.</h3>
      <br/>
      <hr />
      <br/>
      <h3>Interests: Web Development, Game Development, Blockchain, Machine Learning</h3>
      <br />
      <hr/>
      <br />
      <h3>Programming Languages: Python, Javascript, C, C++, C#, Solidity</h3>
      <br />
      <hr />
      <br/>
      <h3>Tech Stack = [ Django, React, Unity, TensorFlow ].append(a long list of frameworks) </h3>       
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
