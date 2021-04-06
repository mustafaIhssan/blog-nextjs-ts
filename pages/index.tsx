import styled from '@emotion/styled'
import Head from 'next/head'
import xw from 'twin.macro'

const title = 'My New Blog Support Typescript'

const Button = styled.button(xw`
  bg-indigo-600
  hover:bg-indigo-500
  focus[outline-none border-indigo-700 ring]
  active:bg-indigo-700
  transition duration-150 ease-in-out
  relative flex justify-center 
  px-4 py-2 text-sm
  font-medium leading-5 text-white 
  rounded-md w-64 mt-5
`)

const Container = styled.div(xw`
  flex flex-col justify-center items-center
  h-screen w-screen
  p-0 px-2
`)

const Main = styled.main(xw`
  flex flex-col justify-center items-center 
  p-20 px-0 
`)

const Title = styled.h1(xw`
  m-0 leading-normal text-6xl
`)

export default function Home() {
	return (
		<Container>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Main>
				<Title>{title}</Title>

				<Button>Emotion + Tailwind +</Button>
			</Main>
		</Container>
	)
}
