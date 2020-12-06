import { graphql, useStaticQuery } from "gatsby"

export default function useSiteMetadata() {
    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
            title
            description
            language
            site_url
            default_preview_image
            articles_per_page
            author {
              bio
              url
              links {
                twitter
                linkedin 
                mail 
                github
                instagram
              }
            }
            links {
              title
              href
            }
        }
      }
    }`);

    return data.site.siteMetadata;
}