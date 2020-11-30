import strings from "../strings/all-strings"

export default function useStrings(language="en") {
    return strings[language] ? strings[language] : strings["en"];
}