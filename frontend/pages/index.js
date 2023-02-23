import styles from "../styles/test.module.css"

function HomePage({test}) {
  return <div className={styles.main} dangerouslySetInnerHTML={{ __html: test }}/>
}

export async function getStaticProps(context) {
  const data = await fetch("http://localhost:4000/")

  const test = await data.text()
  
  return {
    props: {test}, // will be passed to the page component as props
  }
}


export default HomePage
