'use client';

import Image from 'next/image';
import { PlaceholdersAndVanishInput } from './utils/components/ui/placeholders-and-vanish-input';

import React from 'react';
import { useState } from 'react';
import { toast } from 'sonner';
import {
  CardBody,
  CardContainer,
  CardItem,
} from './utils/components/ui/3d-card';

import { TypewriterEffectSmooth } from './utils/components/ui/typewriter-effect';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { GlareCard } from './utils/components/ui/glare-card';
import { Tabs } from './utils/components/ui/tabs';
import { BackgroundGradient } from './utils/components/ui/background-gradient';

import { CanvasRevealEffect } from './utils/components/ui/canvas-reveal-effect';
import { Button } from './utils/components/ui/button';
import { HeroHighlight } from './utils/components/ui/hero-highlight';
import { cn } from './utils/cn';

export default function Home() {
  const words = [
    {
      text: 'Analyse',
      className: 'text-pink-300 dark:text-pink-300',
    },
    {
      text: 'tes',
    },
    {
      text: 'textes',
    },
    {
      text: 'avec',
    },
    {
      text: 'Sentiment',
      className: 'text-blue-500 dark:text-blue-500',
    },
    {
      text: 'Analysis.',
      className: 'text-violet-500 dark:text-violet-500',
    },
  ];
  const [isCardOpen, setIsCardOpen] = useState(false);
  const handleButtonClick = () => {
    setIsCardOpen(true);
  };
  const [activeTab, setActiveTab] = useState('home');
  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };
  const placeholders = [
    'on utilise les modèles :',
    'modele 3',
    'modele 2',
    'modele 1',
    'on utilise les modèles :',
  ];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitted');
  };
  function HomeIcon(
    props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
  ) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    );
  }

  function InfoIcon(
    props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
  ) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    );
  }

  function MenuIcon(
    props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
  ) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    );
  }

  function MonitorDotIcon(
    props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
  ) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="19" cy="6" r="3" />
        <path d="M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9" />
        <path d="M12 17v4" />
        <path d="M8 21h8" />
      </svg>
    );
  }

  function ShareIcon(
    props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
  ) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        <polyline points="16 6 12 2 8 6" />
        <line x1="12" x2="12" y1="2" y2="15" />
      </svg>
    );
  }

  function TypeIcon(
    props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
  ) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="4 7 4 4 20 4 20 7" />
        <line x1="9" x2="15" y1="20" y2="20" />
        <line x1="12" x2="12" y1="4" y2="20" />
      </svg>
    );
  }

  return (
    <main className="flex items-center justify-center  h-full w-full ">
      <div className="relative items-center justify-center absolute">
        <div
          className="justify-center items-center flex rounded-full absolute bg-zinc-800 p-1 z-10 mt-4 left-5
       "
        >
          <div className=" flex  space-x-1 border-r max-w-max border-zinc-600  ">
            <Button
              variant="ghost"
              size="icon"
              className={`text-zinc-100 rounded-full hover:bg-gray-600 hover:text-zinc-100 ${
                activeTab === 'home' ? 'bg-gray-600 text-zinc-100' : ''
              }`}
              onClick={() => handleTabClick('home')}
            >
              <HomeIcon className="h-6 w-6 stroke-1" />
              <span className="sr-only">Home</span>
            </Button>
            <div className="flex">
              <Button
                variant="ghost"
                size="icon"
                className={`text-zinc-100  rounded-full hover:bg-gray-600 hover:text-zinc-100 ${
                  activeTab === 'analytics' ? 'bg-gray-600 text-zinc-100' : ''
                }`}
                onClick={() => handleTabClick('analytics')}
              >
                <InfoIcon className="h-6 w-6 stroke-1" />
                <span className="sr-only">Analytics</span>
                <span className=" top-2 right-2 flex h-2 w-2 rounded-full bg-blue-500" />
              </Button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className={`text-zinc-100 rounded-full hover:bg-gray-600 hover:text-zinc-100 ${
                activeTab === 'model' ? 'bg-gray-600 text-zinc-100' : ''
              }`}
              onClick={() => handleTabClick('model')}
            >
              <TypeIcon className="h-6 w-6 stroke-1" />
              <span className="sr-only">Model</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`text-zinc-100 rounded-full hover:bg-gray-600 hover:text-zinc-100 ${
                activeTab === 'metrics' ? 'bg-gray-600 text-zinc-100' : ''
              }`}
              onClick={() => handleTabClick('metrics')}
            >
              <MonitorDotIcon className="h-6 w-6 stroke-1" />
              <span className="sr-only">Metrics</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`text-zinc-100 rounded-full hover:bg-gray-600 hover:text-zinc-100 ${
                activeTab === 'documentation' ? 'bg-gray-600 text-zinc-100' : ''
              }`}
              onClick={() => handleTabClick('documentation')}
            >
              <InfoIcon className="h-6 w-6 stroke-1" />
              <span className="sr-only">Documentation</span>
            </Button>
          </div>
          <div className="flex space-x-2 pl-1">
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-100 rounded-full hover:bg-gray-600 hover:text-zinc-100"
            >
              <ShareIcon className="h-6 w-6 stroke-1" />
              <span className="sr-only">Open share UI</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-100 rounded-full hover:bg-gray-600 hover:text-zinc-100"
            >
              <MenuIcon className="h-6 w-6 stroke-1" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </div>
      {activeTab === 'home' && (
        <div className="h-full w-full flex">
          <div className="h-full flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-black w-full gap-4 mx-auto absolute ">
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 2 }}
                exit={{ opacity: 0 }}
                className="h-full w-full absolute inset-0"
              >
                <CanvasRevealEffect
                  animationSpeed={5}
                  containerClassName="bg-transparent"
                  colors={[
                    [554, 20, 246],
                    [139, 92, 246],
                  ]}
                  opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 2]}
                  dotSize={10}
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 [mask-image:radial-gradient(black,transparent)] bg-black/80 dark:bg-black/90 duration-200" />
            {!isCardOpen && (
              <CardContainer className="items-center justify-center">
                <TypewriterEffectSmooth
                  words={words}
                  className="absolute bottom-10 py-10 my-7"
                />
                <CardItem
                  translateZ={50}
                  as="button"
                  className="inline-flex py-4 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-10 font-medium text-slate-400 transition-colors  z-10"
                  onClick={handleButtonClick}
                >
                  Sentiment Analysis
                  <MouseIcon className="ml-2 h-5 w-5" />
                </CardItem>
              </CardContainer>
            )}
            {isCardOpen && (
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-10 border  ">
                  <CardItem
                    translateZ={10}
                    as="button"
                    className="
                inline-flex
                 rounded-xl bg-black  text-white text-xs font-bold absolute items-right"
                    onClick={() => setIsCardOpen(false)}
                  >
                    X
                  </CardItem>

                  <CardItem
                    translateZ="20"
                    className="block px-9 mx-4 text-xl  font-bold text-neutral-600 text-white items-right"
                  >
                    Sentiment Analysis
                  </CardItem>

                  <CardItem
                    as="p"
                    translateZ="10"
                    className="text-neutral-500 text-sm max-w-sm  dark:text-neutral-300 px-9 mx-4 my-8"
                  >
                    Ecrit un texte et on va te dire si il est positif !
                  </CardItem>
                  <CardItem
                    as="PlaceholdersAndVanishInput"
                    translateZ="50"
                    className="w-full  pt-20 inline "
                    onChange={handleChange}
                    onSubmit={onSubmit}
                  >
                    <PlaceholdersAndVanishInput
                      placeholders={placeholders}
                      onChange={handleChange}
                      onSubmit={onSubmit}
                      // onClick={() =>
                      //   toast('Analyse termine', {
                      //     description:
                      //       'Vous pouvez voir vos résultats dans l onglet resultat',
                      //     action: {
                      //       label: 'X',
                      //       onClick: () => console.log('Undo'),
                      //     },
                      //   })
                      // }
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            )}
          </div>
        </div>
      )}
      {activeTab === 'analytics' && (
        <div className="h-full w-full flex">
        <div className="h-full flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-black w-full gap-4 mx-auto absolute ">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 2 }}
              exit={{ opacity: 0 }}
              className="h-full w-full absolute inset-0"
            >
              <CanvasRevealEffect
                animationSpeed={5}
                containerClassName="bg-transparent"
                colors={[
                  [554, 20, 246],
                  [139, 92, 246],
                ]}
                opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 2]}
                dotSize={10}
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 [mask-image:radial-gradient(black,transparent)] bg-black/80 dark:bg-black/90 duration-200" />
          
          <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
        <p className="font-bold text-white text-lg">model name</p>
        <p className="font-normal text-base text-neutral-200 mt-4">
          metrics
        </p>
      </GlareCard>
      <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
        <p className="font-bold text-white text-lg">model name</p>
        <p className="font-normal text-base text-neutral-200 mt-4">
          metrics
        </p>
      </GlareCard>
      <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
        <p className="font-bold text-white text-lg">model name</p>
        <p className="font-normal text-base text-neutral-200 mt-4">
          metrics
        </p>
      </GlareCard>
          
          </div>
      </div>
      )}
      {activeTab === 'model' && (
        <div className="h-full w-full flex">
          <div className="h-full flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-black w-full gap-4 mx-auto absolute ">
            <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
              <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
              <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                Backgrounds
              </p>
            </div>
            <div className="absolute inset-0 [mask-image:radial-gradient(black,transparent)] bg-black/80 dark:bg-black/90 duration-200" />
          </div>
        </div>
      )}
      {activeTab === 'metrics' && (
        <div className="h-full w-full flex">
          <div className="h-full flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-black w-full gap-4 mx-auto absolute ">
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 2 }}
                exit={{ opacity: 0 }}
                className="h-full w-full absolute inset-0"
              >
                <CanvasRevealEffect
                  animationSpeed={5}
                  containerClassName="bg-sky-600"
                  colors={[
                    [125, 211, 252],
                    [125, 211, 252],
                  ]}
                  opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 2]}
                  dotSize={10}
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 [mask-image:radial-gradient(black,transparent)] bg-black/80 dark:bg-black/90 duration-200" />
          </div>
        </div>
      )}
      {activeTab === 'documentation' && (
        <div className="h-full w-full flex">
          <div className="h-full flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-black w-full gap-4 mx-auto absolute ">
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 2 }}
                exit={{ opacity: 0 }}
                className="h-full w-full absolute inset-0"
              >
                <CanvasRevealEffect
                  animationSpeed={5}
                  containerClassName="bg-transparent"
                  colors={[
                    [236, 72, 153],
                    [232, 121, 249],
                  ]}
                  opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 2]}
                  dotSize={10}
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 [mask-image:radial-gradient(wihte,transparent)] bg-black/80 dark:bg-black/90 duration-200" />
          </div>
        </div>
      )}
    </main>
  );

  function MouseIcon(
    props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
  ) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="7" />
        <path d="M12 6v4" />
      </svg>
    );
  }
}
