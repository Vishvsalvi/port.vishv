"use client"
// import { Spotlight } from "./components/ui/Spotlight";
import React from "react";
import Link from "next/link";
import { Card } from "./components/ui/card";
import { RevealCard } from "./components/ui/revealCard";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./components/ui/hero-highlight";


export default function Home() {

  const projects = [
    {
      title: "Karnix 3d Farm",
      demoLink: "https://k3df.pages.dev/",
      description: "Website made for a 3d printing business. This was my first freelance project.",
      image: "https://vishvsalvi-portfolio.pages.dev/Images/Project_1.png",
    }, 
    {
      title: "HR Classes",
      demoLink: "https://hrclasses.co.in/",
      description: "Website developed for coaching classes offering various courses for school students. It was a freelance gig.",
      image: "/Images/HR_img.png"
    },
    {
      title: "Flipkart Clone",
      demoLink: "https://flipkart-clone.pages.dev/",
      description: "Flipkart Clone developed using React and Tailwind CSS. It is a frontend project.",
      image: "https://vishvsalvi-portfolio.pages.dev/Images/Project_2.png",
    },
    {
      title: "Express Auth",
      demoLink: "https://github.com/Vishvsalvi/Refresh_Access_TOK",
      description: "A user authentication system developed using Express, JWT and MongoDB. It is a backend project.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmebSlGlyZAkzbF7RfCCBZjfva13s8sM1oFA&usqp=CAU",
    },
    
  ]

  const blogs = [
    {
      title: "Node.js: The Scalable and Lightweight Choice for Developers",
      visitBlog: "https://vishvsalvi.hashnode.dev/nodejs-the-scalable-and-lightweight-choice-for-developers",
      image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1670481579102/AuMD0XcfN.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      description: "Node.js is a JavaScript runtime built on Chrome's V8 ..."

    },
    {
      title:"Recoil: A New Approach to State Management in React",
      visitBlog: "https://vishvsalvi.hashnode.dev/recoil-a-new-approach-to-state-management-in-react",
      image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1713598112335/22f5d8ec-78de-47f1-88f9-2cfaff4fe2af.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      description: "Recoil, a state management library for React that ..."

    },
    {
      title: "Difference Between Access Token And Refresh Token",
      visitBlog: "https://vishvsalvi.hashnode.dev/difference-between-access-token-and-refresh-token",
      image: "https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/-XiKxvvFGgU/upload/135ad373efbd86ae791c9cd79d706566.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      description: "Access tokens and refresh tokens are used to auth ..."
    },
    {
      title: "Accelerate Your Dream Projects with These Lightning-Fast UI Libraries!",
      visitBlog: "https://vishvsalvi.hashnode.dev/accelerate-your-dream-projects-with-these-lightning-fast-ui-libraries",
      image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1712903122034/8961fe4a-c73a-4229-94a0-43e29a813cd5.webp?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      description: "There are numerous UI libraries that offer visually ..."

    },{
      title: "How to use Git to manage your project and upload it on GitHub?",
      visitBlog: "https://vishvsalvi.hashnode.dev/upload-your-project-on-github-using-git",
      image: "https://cdn.hashnode.com/res/hashnode/image/unsplash/wX2L8L-fGeA/upload/v1669279505282/Kh5ov1WSA.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      description: "Git is an open source software that helps to keep track ..."
    },
    {
      title: "Tailwind CSS: The utility-first approach to styling",
      visitBlog: "https://vishvsalvi.hashnode.dev/tailwind-css-the-utility-first-approach-to-styling",
      image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1671163632624/SQqq6BW98.jpg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      description: "Tailwind CSS is a utility-first CSS framework that helps ..."
    },
  ]

  const skills = [
    {
      name: "Next.js",
      prevIcon: <i className="devicon-nextjs-original-wordmark text-[10rem]"></i>,
      afterIcon:<i className="devicon-nextjs-original-wordmark colored text-[10rem]"></i>,
      bgcolor: "bg-white",
      colors: [128, 128, 128]
    },
    {
      name: "Node.js",
      prevIcon: <i className ="devicon-nodejs-plain-wordmark text-[10rem]"></i>,
      afterIcon:<i className ="devicon-nodejs-plain-wordmark colored text-[10rem]"></i>,
      bgcolor: "bg-black",
      colors:   [144, 238, 144]
    },
    {
      name: "MongoDB",
      prevIcon: <i className="devicon-mongodb-plain-wordmark text-[10rem]"></i>,
      afterIcon:<i className="devicon-mongodb-plain-wordmark colored text-[10rem]"></i>,
      bgcolor: "bg-black",
      colors: [1, 255, 0]
      ,
    },
    {
      name: "Tailwind CSS",
      prevIcon:  <i className ="devicon-tailwindcss-plain-wordmark  text-[10rem]"></i>,
      afterIcon: <i className ="devicon-tailwindcss-plain-wordmark colored text-[10rem]"></i>,
      bgcolor: "bg-black",
      colors: [135, 206, 250] 
      
    },
    
  ]

  return (
    <main>
      {/* <section className="bg-dot-thick-indigo-500 dark:bg-dot-thick-indigo-500  h-[45rem] item-center text-center w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased relative overflow-hidden"> */}

      <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Your Friendly Neighbourhood Full Stack Developer
      
        {" "}
        <Highlight className="text-black dark:text-white whitespace-nowrap">
          Vishv Salvi
        </Highlight>
      </motion.h1>
    </HeroHighlight>
      {/* </section> */}

     

      <section className="my-28   w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden" id="skills">
        

        <div className="container px-4 md:px-6">
        <div className="w-full text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-6xl bg-clip-text mb-2 text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pt-1" >
          Skills

          </div>

          <div className="justify-center grid sm:grid-cols-2 lg:grid-cols-4">
          {
            skills.map((skill) => {
              const { name, prevIcon, afterIcon, bgcolor, colors }: {
                name: string,
                prevIcon: any,
                afterIcon: any,
                bgcolor: string,
                colors: number[]
              }  = skill;
              return (
                <RevealCard key={name} title={afterIcon} icon={prevIcon} bgcolor={bgcolor} colors={colors} />
              )
            })
          }

          </div>
         



        </div>
      </section>


      <section className="my-28 w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden" id="projects">
        

        <div className="container px-2 md:px-6">
        <div className="w-full text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-6xl bg-clip-text mb-2 text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pt-1" >
          Projects
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center mt-8">
           {
              projects.map((project, index) => {
                const { title, demoLink, description, image } = project;
                return (
                  <Card key={index} title={title} demoLink={demoLink} image={image} description={description} btnName="View the project" />
                )
              })
           }
          </div>
   


        </div>
      </section>


      <section className="my-28  w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden" id="blogs">
        

        <div className="container px-4 md:px-6">
        <div className="w-full text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-6xl bg-clip-text mb-2 text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pt-1" >
          Blogs
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center mt-5">
           {
             blogs.map((blog, index) => {
              const { title, visitBlog, image, description } = blog;
              return (
                <Card key={index} title={title} demoLink={visitBlog} image={image} description={description} btnName="Read the blog" />
              )
             })
           }

          </div>
          <div className="flex flex-wrap justify-center" >
            <Link target="_blank" className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" href="https://vishvsalvi.hashnode.dev" >Visit the blog page</Link>
          </div>



        </div>
      </section>



      <footer className="px-5 h-16 flex items-center justify-between text-gray-400  bg-black">
        <div className="text-sm" >
        © 2024 Vishv Salvi
        </div>
        <div>
        <Link target="_blank" href="https://www.linkedin.com/in/vishvsalvi/" >
        <i className="devicon-linkedin-plain text-lg mx-2 hover:cursor-pointer ">
        </i>
        </Link>
        <Link target="_blank" href="https://www.github.com/vishvsalvi/" >
        <i className="devicon-github-original text-lg mx-2 hover:cursor-pointer "></i>
        </Link>
          
        <Link target="_blank" href="https://x.com/SalviVishv" >
        <i className="devicon-twitter-original text-lg mx-2 hover:cursor-pointer "></i>
        </Link>
          
        <Link target="_blank" href="https://vishvsalvi.hashnode.dev" >
        <span className="mx-3 font-semibold" >Blogs</span>
        </Link>
          
        </div>
      </footer>

    </main>


  );
}
