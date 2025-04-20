"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useTranslation } from "react-i18next"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function BlogPostPage() {
  const { t } = useTranslation("common")
  const { lang, slug } = useParams<{ lang: string; slug: string }>()
  const router = useRouter()
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Find the post with the matching slug
    const posts = t("blog.posts", { returnObjects: true }) as any[]
    const foundPost = Array.isArray(posts) ? posts.find((p) => p.slug === slug) : null

    if (foundPost) {
      setPost(foundPost)
    }

    setLoading(false)
  }, [t, slug])

  // Handle case where post doesn't exist
  if (!loading && !post) {
    return (
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{t("blog.postNotFound")}</h1>
        <Link href={`/${lang}/blog`} className="inline-flex items-center text-primary hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t("blog.backToBlog")}
        </Link>
      </div>
    )
  }

  if (loading || !post) {
    return <div>Loading...</div>
  }

  return (
    <div className="space-y-8">
      <Link href={`/${lang}/blog`} className="inline-flex items-center text-primary hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        {t("blog.backToBlog")}
      </Link>

      <article className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
        <div className="text-muted-foreground">{post.date}</div>

        <div className="mt-8" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  )
}
