const isAbsolutePath = path => !path?.startsWith(`/`);
const _window = typeof window !== 'undefined' && window;

export default function useIsCurrentPage(path){
    if(!_window)
        return false;

    if(isAbsolutePath(path))
    {
        let url = new URL(path);
        path = url.pathname;
    }
    return _window?.location?.pathname === path;
}