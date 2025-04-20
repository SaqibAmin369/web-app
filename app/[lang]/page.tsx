"use client"

import { useTranslation } from "react-i18next"

export default function Home() {
  const { t } = useTranslation("common")

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">{t("home.title")}</h2>
        <p className="text-muted-foreground">{t("home.description")}</p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-semibold">{t("home.features.title")}</h3>
        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <li key={i} className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">{t(`home.features.items.${i}.title`)}</h4>
              <p className="text-sm text-muted-foreground">{t(`home.features.items.${i}.description`)}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
