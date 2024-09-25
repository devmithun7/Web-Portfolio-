"use client";

import { motion } from "framer-motion";
import React from "react";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "Data Engineering",
    title: "AI Health-Care System",
    description:
      "A user-friendly, voice-activated healthcare application providing personalized medication suggestions and real-time diagnostic support based on user's symptoms and medical history.",
    stack: [{ name: "Python" }, { name: "Snowflake" }, { name: "Airflow" }, { name: "Streamlit" }, { name: "LLM" }, { name: "AWS" },{ name: "Beautiful soup" }],
    image: "/assets/work/photo22.png",
    live: "https://www.youtube.com/watch?v=_N4aIHl-ldM",
    github: "https://github.com/devmithun7/AI-healthcare-System",
  },
  {
    num: "02",
    category: "BI",
    title: "BI Implementation for Food Inspection Analysis",
    description:
      "Implemented an ETL pipeline and star schema to integrate and analyze Dallas and Chicago food inspection data, enabling accurate processing and insightful visualizations for improved food safety.",
    stack: [{ name: "Python" }, { name: "Snowflake" }, { name: "Azure Data Factory" }, { name: "Tableau" }, { name: "SQL" }],
    image: "/assets/work/photo31.png",
    live: "https://public.tableau.com/app/profile/dev.mithunisvar/viz/IowaLiquorSales_17237708067000/Dashboard1",
    github: "https://github.com/devmithun7/BI-Implementation-for-Food-Inspection-Analysis",
  },
  {
    num: "03",
    category: "Machine Learning",
    title: "USA Accident Severity Prediction",
    description:
      "A ML project that classifies 7 million records into four severity levels, utilizing feature engineering, hyperparameter tuning, evaluation metrics, and dashboards to support data-driven safety and prevention strategies.",
    stack: [{ name: "Machine Learning" }, { name: "Python" }, { name: "NLP" }, { name: "Tableau" }],
    image: "/assets/work/mlsci.png",
    live: "https://public.tableau.com/app/profile/dev.mithunisvar/viz/USARoadAccidents2017to2023/Dashboard2",
    github: "https://github.com/arnavvaryani/us-accident-prediction",
  },
  {
    num: "04",
    category: "Data Science",
    title: "Power Consumption prediction",
    description:
      "A regression project forecasting Tetouan city's power consumption using tree-based models like Decision Tree, Random Forest, AdaBoost, and XGBoost, featuring feature importance analysis and performance evaluation with MAE, RMSE, MSE, and R-squared metrics.",
    stack: [{ name: "Python" }, { name: "Pandas" }, { name: "Scikit-Learn" }, { name: "Machine Learning" }],
    image: "/assets/work/ml.png",
    live: "https://link.springer.com/chapter/10.1007/978-981-99-1373-2_15",
    github: "https://github.com/dhruvraj-singh-rawat/power-consumption-prediction",
  },
  {
    num: "05",
    category: "Data Engineering",
    title: "E-commerce Advanced Analytics Infrastructure",
    description:
      "SoftCart’s hybrid platform combines on-premises and cloud databases with MySQL, MongoDB, Hadoop, Spark, Airflow, and Cognos Analytics to manage and analyze ecommerce data for business intelligence.",
    stack: [{ name: "Python" }, { name: "Spark" }, { name: "Airflow" }, { name: "AWS" },  { name: "Hadoop" }, { name: "SQL" }],
    image: "/assets/work/ibm-dataengineer.png",
    live: "https://github.com/devmithun7/Empowering-E-commerce-Advanced-Analytics-Infrastructure",
    github: "https://github.com/devmithun7/Empowering-E-commerce-Advanced-Analytics-Infrastructure",
  },
  {
    num: "06",
    category: "Data Science",
    title: "NLP for Melatonin Side Effects",
    description:
      "Designed and implemented an NLP-driven workflow to preprocess and analyze product reviews, perform sentiment and text mining, and utilize machine learning models to predict optimal dosage selections for different age categories.",
    stack: [{ name: "Natural Language Processing" }, { name: "Python" }, { name: "Sentiment Analysis" }],
    image: "/assets/work/nlp.png",
    live: "https://github.com/devmithun7/NLP-to-Understand-Side-effects-of-melatonin",
    github: "https://github.com/devmithun7/NLP-to-Understand-Side-effects-of-melatonin",
  },
];

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        {/* Grid layout for project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              {/* Project image */}
              <div className="w-full h-[165px] mb-4 relative">
                <Image
                  src={project.image}
                  fill
                  className="object-cover rounded-lg"
                  alt={project.title}
                />
              </div>
              {/* Project info */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {project.num}. {project.title}
                </h2>
                <p className="text-white/70 mb-4">{project.description}</p>
                {/* Stack */}
                <ul className="flex flex-wrap gap-2 text-accent">
                  {project.stack.map((item, index) => (
                    <li key={index} className="whitespace-nowrap">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Buttons */}
              <div className="flex gap-4 mt-4">
                {/* Live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[40px] h-[40px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[40px] h-[40px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Work;


