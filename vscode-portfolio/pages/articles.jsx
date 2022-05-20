import ArticleCard from '../components/ArticleCard';
import styles from '../styles/ArticlesPage.module.css';

const ArticlesPage = ({ articles }) => {
  return (
    <>
      
      <h3>{"{"}</h3>
      <br/>
      <h3 style={{marginLeft : "2.5em"}}>{"{"}</h3>
        <p style={{marginLeft : "5em"}}>"title" : "Articles",</p>
        <p style={{marginLeft : "5em"}}>"body" : null</p>
        <p style={{marginLeft : "5em"}}>"conclusion" : "I need to write sth."</p>
      <h3 style={{marginLeft : "2.5em"}}>{"},"}</h3>
      <br/>
      <br/>
      <h3 style={{marginLeft : "2.5em"}}>{"{"}</h3>
        <p style={{marginLeft : "5em"}}>"title" : "Essays",</p>
        <p style={{marginLeft : "5em"}}>"body" : null,</p>
        <p style={{marginLeft : "5em"}}>"conclusion" : "Nepal is a beautiful country."</p>
      <h3 style={{marginLeft : "2.5em"}}>{"}"}</h3>
      <br/>
      <br/>
      <h3>{"}"}</h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Articles' },
  };
}

export default ArticlesPage;
