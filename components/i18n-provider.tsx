"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { I18nextProvider } from "react-i18next"
import i18n from "@/i18n"
import { usePathname, useRouter } from "next/navigation"

interface I18nProviderProps {
  children: React.ReactNode
  lang: string
}

export default function I18nProvider({ children, lang }: I18nProviderProps) {
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Set the language on the client side
  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang)
    }
    setMounted(true)
  }, [lang])

  // Handle language change
  useEffect(() => {
    const handleLanguageChanged = (newLang: string) => {
      if (newLang !== lang) {
        // Update the URL to reflect the new language
        const segments = pathname.split("/")
        segments[1] = newLang
        const newPath = segments.join("/")
        router.push(newPath)
      }
    }

    i18n.on("languageChanged", handleLanguageChanged)

    return () => {
      i18n.off("languageChanged", handleLanguageChanged)
    }
  }, [lang, pathname, router])

  // Don't render anything until the language is set
  if (!mounted) return null

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
