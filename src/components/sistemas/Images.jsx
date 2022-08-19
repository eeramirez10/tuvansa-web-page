import React, { useEffect } from 'react'
import { useObserver } from 'hooks/useObserver'

import placeholder from './placeholder.jpg'

export const Images = () => {

    const images = [
        'https://placekitten.com/g/200/300',
        'https://placekitten.com/g/700/700',
        'https://placekitten.com/g/800/800'
    ]

    const [observer, setElements, entries] = useObserver({ threshold: 0.1, root: null });

    useEffect(() => {
        entries.forEach(entry => {
            console.log(entry.isIntersecting)
            if (entry.isIntersecting) {
                const lazyImage = entry.target;
                lazyImage.src = lazyImage.dataset.src;
                lazyImage.classList.remove("lazy");
                observer.unobserve(lazyImage);
            }
        });
    }, [entries, observer]);

    useEffect(() => {
        const images = document.querySelectorAll(".lazy");
        setElements(images);
    }, [setElements]);

    return (
        <div style={{ textAling: 'center' }}>
            <header style={{
                backgroundColor: '#282c34',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                
                color: 'white'
            }} >
                <h1>UseObserve hook ejemplo</h1>

                {
                    images.map(source => (
                        <div>
                            <img key={source} style={{ marginTop:'50px'}} className="lazy" data-src={source}  alt="name" />
                            <h1> gatito</h1>

                        </div>
                    ))
                }
            </header>
        </div >
    )
}
