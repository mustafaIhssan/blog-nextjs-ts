import {
	GetStaticPaths,
	GetStaticPropsContext,
	InferGetStaticPropsType,
} from 'next'
import Head from 'next/head'
import { PostType } from 'pages'

export default function BlogPost({
	post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div>
			<Head>
				<title>{post.title}</title>
			</Head>
			<h1>{post.title}</h1>
			<h1>{post.body}</h1>
		</div>
	)
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
	const { params } = context

	const emptyPost = {
		title: 'Post Not Found',
		body: '',
		id: 0,
		userID: 0,
	}

	if (!params?.id) {
		return {
			props: {
				post: emptyPost,
			},
		}
	}

	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.id}`
	)
	const post: PostType = await res.json()

	return {
		props: {
			post,
		},
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts')
	const posts: PostType[] = await res.json()

	const paths = posts.map((post) => ({
		params: {
			id: post.id.toString(),
		},
	}))

	return {
		paths,
		fallback: false,
	}
}
