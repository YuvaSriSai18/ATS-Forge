"use client";
import React from "react";
import { ResumeData } from "../utils/types";

interface Props {
  data: ResumeData;
}
import styles from '../ui/ResumePreview.module.css'
const ResumePreview: React.FC<Props> = ({ data }) => {
  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short", // or "long" for full month name
    });

  return (
    <div className={`${styles.fontFamily} max-w-4xl mx-auto p-6 border dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg shadow-lg`}>
      {/* Header */}
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">{data.name}</h1>
        <p className="text-sm space-x-2 flex flex-wrap justify-center gap-2">
          {data.email && <a href={`mailto:${data.email}`}>{data.email}</a>} |
          {data.mobile && <a href={`tel:${data.mobile}`}>{data.mobile}</a>} |
          {data.location && <span>{data.location}</span>} |
          {data.linkedin && (
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              LinkedIn
            </a>
          )}{" "}
          |
          {data.github && (
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              GitHub
            </a>
          )}{" "}
          |
          {data.portfolio && (
            <a
              href={data.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Portfolio
            </a>
          )}
        </p>
      </div>

      {/* Summary */}
      {data.summary && (
        <div className="mb-1">
          <h2 className="text-xl font-bold border-b border-gray-300 dark:border-gray-700 mb-1">
            Summary
          </h2>
          <p className="text-justify leading-snug font-normal">{data.summary}</p>
        </div>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <div className="mb-1">
          <h2 className="text-xl font-bold border-b border-gray-300 dark:border-gray-700 mb-1">
            Work Experience
          </h2>
          {data.workExperience.map((exp, idx) => (
            <div key={idx} className="mb-2">
              <p className="font-bold">
                {exp.jobTitle} - {exp.companyName}

                <span className="float-right text-sm">{formatDate(exp.startDate)} - {formatDate(exp.endDate)}</span>
              </p>
              <ul className="list-disc list-inside leading-snug font-serif">
                {exp.responsibilities
                  .split(".")
                  .map(
                    (item, i) => item.trim() && <li key={i}>{item.trim()}</li>
                  )}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {(data.skills.technical.length > 0 ||
        data.skills.softSkills.length > 0) && (
        <div className="mb-1">
          <h2 className="text-xl font-bold border-b border-gray-300 dark:border-gray-700 mb-1">
            Skills
          </h2>
          {data.skills.technical.length > 0 && (
            <p>
              <span className="font-semibold">Technical:</span>{" "}
              {data.skills.technical.join(", ")}
            </p>
          )}
          {data.skills.softSkills.length > 0 && (
            <p>
              <span className="font-semibold">Soft Skills:</span>{" "}
              {data.skills.softSkills.join(", ")}
            </p>
          )}
        </div>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <div className="mb-1">
          <h2 className="text-xl font-bold border-b border-gray-300 dark:border-gray-700 mb-1">
            Projects
          </h2>
          {data.projects.map((project, idx) => (
            <div key={idx} className="mb-1">
              <p className="font-bold">
                {project.title}
                <span className="font-normal text-sm ml-2">
                  | {project.techStack.join(", ")}
                  {project.demoLink && (
                    <>
                      {" "}
                      |
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-1 underline"
                      >
                        Project Link
                      </a>
                    </>
                  )}
                </span>
              </p>
              <ul className="list-disc list-inside leading-snug font-serif">
                {project.description
                  .split(".")
                  .map((item, i) =>
                    item.trim() ? <li key={i} className="text-justify">{item.trim()}</li> : null
                  )}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="mb-1">
          <h2 className="text-xl font-bold border-b border-gray-300 dark:border-gray-700 mb-1">
            Education
          </h2>
          {data.education.map((edu, idx) => (
            <div key={idx} className="mb-2">
              <p className="font-semibold">
                {edu.degreeName} - {edu.institution}, {edu.location}

                <span className="float-right font-normal text-sm"> {formatDate(edu.startYear)} - {formatDate(edu.endYear)} </span>
              </p>
              <p className="text-sm">
               <li>CGPA: {edu.cgpa}</li>
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Certifications */}
      {data.certifications.length > 0 && (
        <div className="mb-1">
          <h2 className="text-xl font-bold border-b border-gray-300 dark:border-gray-700 mb-1">
            Certifications
          </h2>
          {data.certifications.map((cert, idx) => (
            <li key={idx}>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {cert.name}
              </a>
            </li>
          ))}
        </div>
      )}

      {/* Achievements */}
      {data.achievements.length > 0 && (
        <div className="mb-1">
          <h2 className="text-xl font-bold border-b border-gray-300 dark:border-gray-700 mb-1">
            Achievements
          </h2>
          {data.achievements.map((ach, idx) => (
            <div key={idx} className="mt-1">
              <p className="font-semibold">
                {ach.title} :{" "}
                <span className="font-normal">{ach.description}</span>
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Positions of Responsibility */}
      {data.positionOfResponsibility.length > 0 && (
        <div className="mb-1">
          <h2 className="text-xl font-bold border-b border-gray-300 dark:border-gray-700 mb-1">
            Positions of Responsibility
          </h2>
          {data.positionOfResponsibility.map((pos, idx) => (
            <div key={idx} className="mb-2">
              <div className="flex justify-between">
                <p className="font-bold">
                  {pos.position} - {pos.organization}
                </p>
                <p className="text-sm">
                  {formatDate(pos.startDate)} - {formatDate(pos.endDate)}
                </p>
              </div>
              <ul className="list-disc list-inside leading-snug font-normal">
                {pos.contributions
                  .split(".")
                  .map(
                    (item, i) => item.trim() && <li key={i}>{item.trim()}</li>
                  )}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Publications */}
      {data.publications.length > 0 && (
        <div className="mb-1">
          <h2 className="text-xl font-bold border-b border-gray-300 dark:border-gray-700 mb-1">
            Publications
          </h2>
          {data.publications.map((pub, idx) => (
            <div key={idx} className="mb-2">
              <p className="font-semibold">{pub.title}</p>
              <p>{pub.authors}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {pub.conference} | {pub.date}
              </p>
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                View
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResumePreview;
