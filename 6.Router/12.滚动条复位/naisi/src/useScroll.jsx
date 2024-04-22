import { useEffect } from 'react';
import resetScroll from './resetScroll.js';


export default function useScroll(pathname) {
    useEffect(() => {
        clearInterval(window.tirem);
        const html = document.documentElement;
        const juli = html.scrollTop
        window.tirem = resetScroll({
            currentValue: juli,
            targetValue: 0,
            mode: 'elasticIn',
            callback(value) {
                html.scrollTop = juli - Math.abs(value);
            }
        });
    }, [pathname]);
}