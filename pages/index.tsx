import Card from "@/components/home/card";
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { Github, LoadingDots, Twitter } from "@/components/shared/icons";
import { useState } from "react";
import LinkIcon from "@/components/shared/icons/link";

export default function Home() {
  const [url, setUrl] = useState("");
  const [showGeneratedCards, setShowGeneratedCards] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateCards = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setShowGeneratedCards(true);
    setLoading(false);
  };

  return (
    <Layout>
      <div>
        <motion.div
          className="flex w-full flex-col items-center justify-center px-5 xl:px-0"
          initial="hidden"
          whileInView="show"
          animate="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.div
            className="flex justify-between space-x-5"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <a
              href="https://twitter.com/Tisoga"
              target="_blank"
              rel="noreferrer"
              className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
            >
              <Twitter className="h-5 w-5 text-[#1d9bf0]" />
              <p className="text-sm font-semibold text-[#1d9bf0]">
                Introducing Read Pilot
              </p>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-black bg-white px-7 py-2 text-black transition-colors hover:bg-black hover:text-white"
            >
              <Github className="h-5 w-5" />
              <p className="text-sm font-semibold">Star on GitHub</p>
            </a>
          </motion.div>

          <motion.h1
            className="mt-6 w-[1024px] bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <Balancer>
              Read Online Articles With
              <br />
              <span className="bg-co bg-gradient-to-r from-blue-500 via-green-600 to-indigo-500 bg-clip-text text-transparent">
                Intelligence
              </span>
            </Balancer>
          </motion.h1>
          <motion.p
            className="mt-6 text-center text-gray-500 md:text-2xl"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <Balancer>
              Read Pilot analyzes online articles and generate Q&A cards for
              you.
            </Balancer>
          </motion.p>

          <motion.div className="mt-10" variants={FADE_DOWN_ANIMATION_VARIANTS}>
            <div className="relative flex w-[35rem] items-center justify-center">
              <LinkIcon className="insert-y-1 w absolute left-0 my-3 ml-3 w-7 text-gray-500" />
              <input
                type="url"
                placeholder="Input your link"
                required
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="block w-full rounded-2xl border border-gray-200 bg-white p-2 pl-12 text-lg text-gray-600 shadow-md focus:border-black focus:outline-none focus:ring-0"
              />
            </div>
          </motion.div>

          <motion.div className="mt-8" variants={FADE_DOWN_ANIMATION_VARIANTS}>
            {!loading && (
              <button
                className="rounded-full border border-black bg-black p-1.5 px-4 text-lg text-white transition-all hover:bg-white hover:text-black sm:text-sm md:text-xl"
                onClick={(e) => generateCards(e)}
              >
                Start Analyzing →
              </button>
            )}
            {loading && (
              <button
                className="rounded-full border border-black bg-black p-1.5 px-4 text-lg text-white transition-all hover:bg-white hover:text-black sm:text-sm md:text-xl"
                disabled
              >
                <span>Analyzing </span>
                <LoadingDots color="white" />
              </button>
            )}
          </motion.div>
        </motion.div>

        {showGeneratedCards && (
          <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
            {features.map(({ title, description }) => (
              <Card key={title} title={title} description={description} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

const features = [
  {
    title: "What does it mean for a product to be horizontal?",
    description:
      "A horizontal product is one that can be used by people from all walks of life and not just those in a specific profession or field. ",
  },
  {
    title:
      "What advantages does a vertical product have over a horizontal product?",
    description:
      "Vertical products have an easier time finding customers because they can target a specific profession or field and know where to advertise and which conventions to attend. Additionally, vertical products have higher margins because their users are professionals who will be willing to pay for a solution to their problems.",
  },
  {
    title: "What did the author learn from visiting Excel customers?",
    description:
      "The author learned that most people were using Excel not for calculations but for creating tables. This helped him understand why Lotus Improv, which was designed for calculations, had failed. He realized that the great horizontal killer applications are actually just fancy data structures.",
  },
];
