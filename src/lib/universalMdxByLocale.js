export function getMdxByLocale({ locale, files }) {
  const selected = files[locale] || files.en
  if (!selected)
    throw new Error(`No MDX component/meta found for locale: ${locale}`)

  return {
    Component: selected.Component,
    meta: selected.meta,
  }
}