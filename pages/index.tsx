import Head from 'next/head'
import styles from '../styles/Home.module.css'
import xw from "twin.macro";
import styled from "@emotion/styled";

const title: string = "My New Blog Support Typescript"
const Button = styled.button(xw`
  bg-indigo-600
  hover:bg-indigo-500
  focus[outline-none border-indigo-700 ring]
  active:bg-indigo-700
  transition duration-150 ease-in-out
  relative flex justify-center 
  px-4 py-2 text-sm
  font-medium leading-5 text-white 
  rounded-md w-64
`);


export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    {title}
                </h1>

                <Button>Emotion + Tailwind</Button>

            </main>


        </div>
    )
}
