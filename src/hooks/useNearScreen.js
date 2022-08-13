import { createRef, useEffect, useRef, useState } from "react"


export const useNearScreen = ({ distance = '0px 0px 0px 0px' } = {}) => {

    const [isNear, setIsNear] = useState(false);
    const fromRef = createRef();



    useEffect(() => {

       

        const onChange = (entries, observer) => {

            const { isIntersecting } = entries[0]

            if (isIntersecting) {
                setIsNear(true)
                observer.disconnect()

            }


        }

  

        const observer = new IntersectionObserver(onChange, { rootMargin: distance });

        if( fromRef.current){
            observer.observe(fromRef.current);
        }

        


        return () => observer.disconnect()






    })

    return {
        isNear, fromRef
    }

}