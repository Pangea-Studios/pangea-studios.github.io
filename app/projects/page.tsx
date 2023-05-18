import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
export default async function ProjectsPage() {

	return (
        <div className="relative pb-16">
            <Navigation />
            <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        Projects
                    </h2>
                    <p className="mt-4 text-zinc-400">
                        Most projects are still in development, or yet to reach
                        the production stage.
                    </p>
                </div>
                <div className="w-full h-px bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
                    <Card>
                        <Link
                            href={`https://pangea-studios.github.io/mathematicsjs`}>
                            <article className="relative h-full w-full p-4 md:p-8">
                                <h2
                                    id="featured-post"
                                    className="mt-4 text-3xl font-bold  text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                                    Mathematicsjs
                                </h2>
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    Mathematicsjs is the all in one maths
                                    solution for JavaScript. With 0 dependencies
                                    and built from the ground up, it has the
                                    highest performance.
                                </p>
                                <div className="absolute bottom-4 md:bottom-8">
                                    <p className="text-zinc-200 hover:text-zinc-50 hidden lg:block">
                                        Read more{' '}
                                        <span aria-hidden="true">&rarr;</span>
                                    </p>
                                </div>
                            </article>
                        </Link>
                    </Card>

                    <div className="flex flex-col w-full gap-8  mx-auto border-t border-gray-900/10  lg:mx-0  lg:border-t-0 ">
                        <Card>
                            <Link href={`https://pangea-studios.github.io`}>
                                <article className="p-4 md:p-8">
                                    <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                                        IndustryTD
                                    </h2>
                                    <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                        Currently in development.
                                    </p>
                                </article>
                            </Link>
                        </Card>
                        <Card>
                            <Link href={`https://pangea-studios.github.io`}>
                                <article className="p-4 md:p-8">
                                    <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                                        Soon
                                    </h2>
                                    <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                        Our Next Project
                                    </p>
                                </article>
                            </Link>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
