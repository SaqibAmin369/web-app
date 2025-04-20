"use client"

import { useTranslation } from "react-i18next"

export default function AboutPage() {
  const { t } = useTranslation("common")

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{t("about.title")}</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground">{t("about.introduction")}</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">{t("about.mission.title")}</h2>
          <p>{t("about.mission.description")}</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">{t("about.team.title")}</h2>
          <p>{t("about.team.description")}</p>

          <div className="grid gap-6 mt-8 md:grid-cols-3">
            {[0, 1, 2].map((index) => (
              <div key={index} className="p-4 border rounded-lg">
                <h3 className="text-xl font-medium">{t(`about.team.members.${index}.name`)}</h3>
                <p className="text-sm text-muted-foreground">{t(`about.team.members.${index}.role`)}</p>
                <p className="mt-2">{t(`about.team.members.${index}.bio`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
