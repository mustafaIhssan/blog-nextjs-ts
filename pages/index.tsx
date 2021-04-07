import styled from '@emotion/styled'
import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
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
  min-h-screen w-screen
  p-0 px-2
`)

const Main = styled.main(xw`
  flex flex-col justify-center items-center 
  p-20 px-0 
`)

const Title = styled.h1(xw`
  m-0 leading-normal text-6xl
`)

const List = styled.ul(xw`list-decimal`)

const ListItem = styled.li(xw`
  p-2 m-0 my-3
  capitalize cursor-pointer 
  text-gray-600
  hover:bg-gray-200
`)

const PostTile = styled.h2(xw`
  m-0 text-2xl
`)

export default function Home({
	posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<Container>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Main>
				<Title>{title}</Title>

				<Button>Emotion + Tailwind +</Button>

				<List>
					{posts.map((post) => (
						<Link key={post.id} href="/posts/[id]" as={`/posts/${post.id}`}>
							<ListItem>
								<PostTile>{post.title}</PostTile>
							</ListItem>
						</Link>
					))}
				</List>
			</Main>
		</Container>
	)
}

export type PostType = {
	userId: number
	id: number
	title: string
	body: string
}

export const getStaticProps = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts')
	const posts: PostType[] = await res.json()

	return {
		props: {
			posts,
		},
	}
}
