import Layout from '../Components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'
import Head from 'next/head'
import { useRouter } from "next/router"
import React,{useState, useEffect} from 'react'

export default function Post({ postData }) {

  const router = useRouter();
    
  const [index, setIndex] = useState(0)

  const contentHtml = postData.contentHtmlData.split("</p>")
  
  function handleArrow(dir) {
    if(dir === "l"){
      if(index != 0){
      setIndex((index - 1) % (contentHtml.length-1));
      }
    }
    if(dir === "r"){
      setIndex((index + 1) % (contentHtml.length-1));
    }
  }

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <Layout>
      <Head>
        <title>{postData.id}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingLg}>{postData.title}</h1>
        <div>
          <p>Click on previous/next to read</p>
          <p className={utilStyles.textBox} dangerouslySetInnerHTML={{ __html: contentHtml[index] }} />
          <br/> 
          <br/>
          <button className={utilStyles.previous} onClick={() => handleArrow("l")}>Previous</button> <> </>
          <button className={utilStyles.next} onClick={() => handleArrow("r")}>Next</button>
        </div>
      </article>
    </Layout>
  )
}
  
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}