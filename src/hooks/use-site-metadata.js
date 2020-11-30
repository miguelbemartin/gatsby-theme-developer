import { graphql, useStaticQuery } from "gatsby"

export default function useSiteMetadata() {
    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
            title
            description
            language
            articles_per_page
            author {
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