import { experience } from "../data/experience";
import { FaHtml5, FaCss3Alt, FaDrupal } from "react-icons/fa";
import {
  SiReact,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiFigma,
  SiJavascript,
  SiGitlab,
  SiAdobe,
  SiJest,
  SiStyledcomponents,
  SiJquery,
  SiGooglemaps,
  SiJira,
  SiGit,
  SiFlutter,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiDart,
  SiBootstrap,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { RTLIcon } from "../../../public/icons/RTLIcon";
import { PlaywrightIcon } from "../../../public/icons/PlaywrightIcon";
import { JQueryUIIcon } from "../../../public/icons/JQueryUIIcon";
import { ParseIcon } from "../../../public/icons/ParseIcon";

export default function Experience() {
  const iconMap: Record<string, JSX.Element> = {
    Javascript: <SiJavascript />,
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
    React: <SiReact />,
    NextJS: <RiNextjsFill />,
    TypeScript: <SiTypescript />,
    MongoDB: <SiMongodb />,
    Express: <SiExpress />,
    Gitlab: <SiGitlab />,
    Figma: <SiFigma />,
    Drupal: <FaDrupal />,
    ReactAria: <SiAdobe />,
    Jest: <SiJest />,
    StyledComponents: <SiStyledcomponents />,
    JQuery: <SiJquery />,
    GoogleMaps: <SiGooglemaps />,
    Jira: <SiJira />,
    RTL: <RTLIcon />,
    Playwright: <PlaywrightIcon />,
    JQueryUI: <JQueryUIIcon />,
    Parse: <ParseIcon />,
    Flutter: <SiFlutter />,
    Git: <SiGit />,
    Photoshop: <SiAdobephotoshop />,
    Illustrator: <SiAdobeillustrator />,
    Dart: <SiDart />,
    Bootstrap: <SiBootstrap />,
  };

  return (
    <section id="experience" className="py-16 px-6 md:px-16">
      <h2 className="text-3xl font-bold mb-12 border-b border-gray-700 pb-2 w-fit">
        Experience
      </h2>

      <div className="space-y-12">
        {experience.map((job, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold text-teal-400">
              {job.role} @ {job.company}
            </h3>
            <p className="text-sm text-gray-400">{job.period}</p>

            <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
              {job.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-3 text-2xl text-gray-400">
              {job.stack.map((tech, i) => (
                <span key={i} title={tech}>
                  {iconMap[tech] || (
                    <span className="text-sm text-gray-500">{tech}</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
