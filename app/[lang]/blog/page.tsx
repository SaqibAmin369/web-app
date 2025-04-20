"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"
import { useParams } from "next/navigation"

export default function BlogPage() {
  const { t } = useTranslation("common")
  const { lang } = useParams<{ lang: string }>()

  // Get the number of blog posts
  const postCount = t("blog.posts", { returnObjects: true }) as any[]

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{t("blog.title")}</h1>
        <p className="text-lg text-muted-foreground">{t("blog.description")}</p>
      </section>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: postCount.length }).map((_, index) => {
          const post = t(`blog.posts.${index}`, { returnObjects: true }) as any

          return (
            <article key={post.slug} className="border rounded-lg overflow-hidden">
              <div className="h-48 bg-muted relative">
                {/* Placeholder for blog post image */}
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  {post.title.substring(0, 1)}
                </div>
              </div>
              <div className="p-4 space-y-2">
                <div className="text-sm text-muted-foreground">{post.date}</div>
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
                <Link
                  href={`/${lang}/blog/${post.slug}`}
                  className="inline-block mt-2 text-sm font-medium text-primary hover:underline"
                >
                  {t("blog.readMore")}
                </Link>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
