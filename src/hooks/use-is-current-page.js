const isAbsolutePath = path => !path?.startsWith(`/`);

const addSlashToEnd = (string) => {
    if(string.slice(-1) !== "/")
        return string + "/";
    return string;
}

export default function useIsCurrentPage(path, gatsbyLocation){
    if(!gatsbyLocation)
        return false;

    if(isAbsolutePath(path))
    {
        let url = new URL(path);
        path = url.pathname;
    }

    return addSlashToEnd(gatsbyLocation.pathname) === addSlashToEnd(path);
}