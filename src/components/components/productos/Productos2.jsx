import React, { useEffect } from 'react'
import { filters, projects } from './productosItems';
import { NavLink } from 'react-router-dom';
import { useObserver } from 'hooks/useObserver';

import { Producto } from './Producto';

export const Productos2 = () => {

    const [observer, setElements, entries] = useObserver({ threshold: 0.25, root: null });



    useEffect(() => {

        console.log('primer use')

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
        console.log('segundo use')
        const images = document.querySelectorAll(".lazy");
        setElements(images);

    }, [setElements]);

    const handleFilterProducts = (item) => {

        let filterName;

        resetProducts();

        const filterProjects = projects.filter(projects => projects.filter !== item.filter);


        filterProjects.forEach(project => {

            if (filterName !== project.filter) {

                const refProject = document.querySelectorAll(`.${project.filter}`);

                refProject.forEach(ref => ref.style.display = 'none');

                filterName = project.filter;

            }



        })

    }

    const resetProducts = () => {

        let filterName;


        projects.forEach(project => {

            if (filterName !== project.filter) {

                filterName = project.filter;

                const refProject = document.querySelectorAll(`.${project.filter}`);

                refProject.forEach(ref => ref.style.display = 'block');

            }


        })

    }





    return (
        <div className="section-full p-t80 p-b50 mobile-page-padding">
            <div className="container">
                {/* TITLE START */}
                <div className="section-head">
                    <div className="mt-separator-outer separator-center">
                        <div className="mt-separator">
                            <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Nuestros</span> Productos</h2>
                        </div>
                    </div>
                </div>
                {/* TITLE END */}
                {/* PAGINATION START */}

                <div className="filter-wrap p-b30 text-center">
                    <ul className="filter-navigation inline-navigation masonry-filter link-style  text-uppercase">
                        <li onClick={() => resetProducts()}><NavLink to={"#"} data-hover="All">All</NavLink></li>
                        {filters.map((item, index) => (
                            <li onClick={() => handleFilterProducts(item)}
                                key={index}
                            >

                                <NavLink to={"#"} data-hover={item.label}>{item.label}</NavLink>

                            </li>
                        ))}
                    </ul>
                </div>

                <div  >
                    {
                        projects.map((item, index) => <Producto key={index} item={item} />)
                    }
                </div>
            </div>
        </div>
    )
}
