"use client"

import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { useTranslation } from "react-i18next"

interface LanguageSwitcherProps {
  currentLang: string
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()
  const { i18n } = useTranslation()

  const switchLanguage = (locale: string) => {
    // If the current language is already selected, do nothing
    if (currentLang === locale) return

    // Change the language in i18next
    i18n.changeLanguage(locale)

    // Get the path without the language prefix
    const newPathname = pathname.replace(`/${currentLang}`, `/${locale}`)

    // Navigate to the new path
    router.push(newPathname)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="h-4 w-4" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => switchLanguage("zh")}>中文 {currentLang === "zh" && "✓"}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage("en")}>English {currentLang === "en" && "✓"}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
