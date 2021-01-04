import moment from "moment";

export default function useFormattedDate(date, format="DD/MM/YYYY") {
    const dateFormatted = moment(date).format(format);
    return dateFormatted;
}