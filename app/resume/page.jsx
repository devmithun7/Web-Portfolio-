"use client";

import { FaPython, FaAws, FaDocker, FaDatabase, FaMicrosoft } from "react-icons/fa";
import { SiTableau, SiPowerbi, SiSnowflake, SiAlteryx, SiApacheairflow, SiApache, SiOpenai } from "react-icons/si";
import { FaPython, FaDatabase, FaAws, FaMicrosoft, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiTableau, SiPowerbi, SiSnowflake, SiAlteryx, SiApache, SiApacheairflow, SiOpenai, SiDbt, SiDatabricks, SiTerraform } from "react-icons/si";
import { FaFileExcel } from "react-icons/fa6";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// about data
const about = {
  title: "About me",
  description: "Data Engineer & Research Assistant leveraging SQL, Python, and machine learning for optimized data and efficient solutions.",
  info: [
    { fieldName: "Name", fieldValue: "Dev Mithunisvar" },
    { fieldName: "Phone", fieldValue: "(+01) 857 423 5347" },
    { fieldName: "Experience", fieldValue: "2 Years" },
    { fieldName: "Email", fieldValue: "devmithunisvar@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, French, Tamil" },
  ],
};

// experience data
const experience = {
  title: "My Experience",
  description: "Data Engineer with expertise in ETL pipeline development, data visualization, and machine learning for data-driven and optimization solutions.",
  items: [
    {
      company: " Boehringer Ingelheim",
      position: "Data Analyst Intern",
      duration: "Feb 2025 - Jun 2025",
      description: "I work on turning messy data into something teams can actually use. Most of my experience sits across SQL, Tableau, DBT, Python, and Snowflake, where I build dashboards, clean datasets, and create reporting layers that teams rely on every day. I’ve built Tableau dashboards that consolidate dozens of KPIs into one view, set up DBT models to standardize data sources, and written Python and SQL tests to catch issues before they hit production. I also build Power BI and Excel reconciliation reports when governance or access tracking is needed. My focus is always the same: make the data clear, trustworthy, and ready for whoever needs it.",
    }
    {
      company: "LTIMindtree",
      position: "Data Engineer",
      duration: "2021 - 2022",
      description: "I work on building reliable data pipelines that move and transform data at scale. Most of my work revolves around SQL, AWS, and PySpark, where I handle ingestion, cleaning, and modeling across different cloud sources. I focus on making pipelines fast, simple, and dependable by automating validation, optimizing transformations, and structuring data so teams can actually use it. Over time, I’ve built out analytics ready layers, automated workflows with Python, and supported teams with clean, consistent datasets that power reporting and product decisions.",
    },
    {
      company: "Anna University",
      position: "Research Assistant",
      duration: "Spring 2021",
      description: "Imported and validated data from multiple sources to design a report in Excel, utilizing VBA, VLOOKUP, Pivot Tables, Power Pivot, and DAX to enhance reporting accuracy and efficiency. Collaborated with team on building regression models to optimize energy consumption by predicting a city's power usage and deployed machine learning models to optimize energy usage, contributing to cost reductions and sharing insights at an international conference and published my work at ICCIS-2022.",
    },
  ],
};

// education data
const education = {
  title: "My Education",
  description: "Developed expertise in Data Analysis and Data Science through extensive studies.",
  items: [
    {
      degree: "Master of Science",
      program: "Information Systems",
      institution: "Northeastern University, Boston, MA",
      duration: "2023-Present",
    },
    {
      degree: "Postgraduate Program",
      program: "Data Science and Business Intelligence",
      institution: "University of Texas at Austin",
      duration: "2022-2023",
    },
    {
      degree: "Bachelor of Engineering",
      program: "Electrical Engineering",
      institution: "Anna University",
      duration: "2017 - 2021",
    },
  ],
};

// certifications data
const certifications = {
  title: "My Certifications",
  description: "Achieved certifications across data analysis, cloud computing, and business analytics to substantiate my technical skills.",
  items: [
    {
      degree: "Tableau Certified Data Analyst",
      specialization: "Business Intelligence and Analytics",
    },
    {
      degree: "AWS Certified Data Engineer Associate",
      specialization: "Cloud Infrastructure and Data Engineering",
    },
    {
      degree: "Snowflake SnowPro Core Certification",
      specialization: "Business Analytics",
    },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  description: "Skills ranging from data engineering and analytics to cloud infrastructure.",
  skillList: [
    { icon: <FaPython />, name: "Python" },
    { icon: <FaDatabase />, name: "SQL" },
    { icon: <SiSnowflake />, name: "Snowflake" },
    { icon: <SiDbt />, name: "DBT" },
    { icon: <FaFileExcel />, name: "Excel" },
    { icon: <SiApache />, name: "PySpark" },
    { icon: <SiDatabricks />, name: "Databricks" },
    { icon: <SiTerraform />, name: "Terraform" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <SiTableau />, name: "Tableau" },
    { icon: <SiPowerbi />, name: "Power BI" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <FaMicrosoft />, name: "Azure" },
    { icon: <SiApacheairflow />, name: "Airflow" },
    { icon: <SiAlteryx />, name: "Alteryx" },
    { icon: <SiOpenai />, name: "OpenAI" },
    { icon: <SiOpenai />, name: "LLM" }
  ],
};

// main component
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* Experience Section */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-auto py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-3"
                      >
                        <span className="text-accent leading-none mb-2">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <p className="text-white/60">{item.company}</p>
                        </div>
                        <p className="text-white/60 mt-2">{item.description}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education Section */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-auto py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        {/* Degree comes first in same color, larger size */}
                        <h3 className="text-xl font-bold text-white max-w-[260px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        {/* Program and Institution follow, slightly smaller */}
                        <p className="text-sm text-white/70 mt-2">{item.program}</p>
                        <p className="text-sm text-white/70">{item.institution}</p>
                        <span className="text-accent mt-2">{item.duration}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Certifications Section */}
            <TabsContent value="certifications" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{certifications.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{certifications.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {certifications.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-auto py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <p className="text-white/60 mt-2">{item.specialization}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills Section */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* About Section */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
