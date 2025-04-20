import "server-only"

interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

interface Dictionary {
  home: {
    title: string
    description: string
    features: {
      title: string
      items: Array<{
        title: string
        description: string
      }>
    }
  }
  nav: {
    language: string
    theme: string
    home: string
    about: string
    blog: string
  }
  about: {
    title: string
    introduction: string
    mission: {
      title: string
      description: string
    }
    team: {
      title: string
      description: string
      members: Array<{
        name: string
        role: string
        bio: string
      }>
    }
  }
  blog: {
    title: string
    description: string
    readMore: string
    backToBlog: string
    postNotFound: string
    posts: BlogPost[]
  }
}

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  zh: () => import("./dictionaries/zh.json").then((module) => module.default),
}

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  // If the locale is not supported, fallback to 'zh'
  if (!dictionaries[locale]) locale = "zh"
  return dictionaries[locale]()
}
