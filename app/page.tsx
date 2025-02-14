import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        mahutt's Portfolio
      </h1>
      <p className="mb-4">
        {`My name is Thomas and I love to code. I've been watching Severance
        lately and man that show is good. Yes, this is a Vercel portfolio/blog
        template. No, I'm not ashamed.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
