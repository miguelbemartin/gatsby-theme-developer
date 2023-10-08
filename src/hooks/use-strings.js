import strings from "../strings/all-strings"
import useSiteMetadata from "./use-site-metadata";

export default function useStrings() {
  const {language} = useSiteMetadata();
  return strings[language] ? strings[language] : strings["en"];
}
