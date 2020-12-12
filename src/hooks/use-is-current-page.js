const isAbsolutePath = path => !path?.startsWith(`/`);

export default function useIsCurrentPage(path, gatsbyLocation){
    if(!gatsbyLocation)
        return false;

    if(isAbsolutePath(path))
    {
        let url = new URL(path);
        path = url.pathname;
    }
    return gatsbyLocation.pathname === path;
}