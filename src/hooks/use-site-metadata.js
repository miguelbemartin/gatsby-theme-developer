import { graphql, useStaticQuery } from "gatsby"

export default function useSiteMetadata() {
    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
            title
            subtitle
            description
            language
            siteUrl
            defaultPreviewImage
            articlesPerPage
            author {
              name
              bio
              avatar
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
