export interface ISEOItem {
  title: string
  description: string
  lang?: string
}

export const SEOIndexPage: ISEOItem = {
  description: "Dalton Woods, web designer & front-end developer.",
  title: "🖐️ Hello"
}

export const SEOAboutPage: ISEOItem = {
  description: "A little somethin' about Dalton.",
  title: "About"
}

export const SEOContactPage: ISEOItem = {
  description: "Let's work together.",
  title: "Contact"
}

export const SEOContactSuccessPage: ISEOItem = {
  description: "Thanks for reaching out.",
  title: "Success"
}

export const SEOWorkPage: ISEOItem = {
  description: "Select projects Dalton is hacking on.",
  title: "Work"
}
