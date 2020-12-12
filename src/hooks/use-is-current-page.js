const isAbsolutePath = path => !path?.startsWith(`/`);

export default function useIsCurrentPage(path){
    if(isAbsolutePath(path))
    {
        let url = new URL(path);
        path = url.pathname;
    }
    return window.location.pathname === path;
}