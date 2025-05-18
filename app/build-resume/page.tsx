"use client";
import React, { useState } from "react";
import { ResumeData } from "../utils/types";
import { Input } from "@/components/ui/input";
import { Card, CardTitle, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Build_Resume() {
  const [formData, setFormData] = useState<ResumeData>({
    name: "",
    email: "",
    mobile: "",
    linkedin: "",
    github: "",
    portfolio: "",
    location: "",
    summary: "",
    skills: {
      technical: [],
      softSkills: [],
    },
    education: [
      {
        degreeName: "",
        institution: "",
        location: "",
        startYear: "",
        endYear: "",
        cgpa: 0,
      },
    ],
    workExperience: [],
    projects: [],
    certifications: [],
    achievements: [],
    positionOfResponsibility: [],
    publications: [],
  });

  // Generic function to handle input changes for dynamic arrays
  const handleDynamicChange = (
    section: keyof ResumeData,
    index: number,
    field: string,
    value: any
  ) => {
    setFormData((prev) => {
      const updatedSection = [...(prev[section] as any)];
      updatedSection[index][field] = value;
      return { ...prev, [section]: updatedSection };
    });
  };

  // Add item to a section
  const handleAdd = (section: keyof ResumeData, emptyItem: any) => {
    setFormData((prev) => ({
      ...prev,
      [section]: [...(prev[section] as any), emptyItem],
    }));
  };

  // Remove item from a section
  const handleRemove = (section: keyof ResumeData, index: number) => {
    setFormData((prev) => {
      const updatedSection = [...(prev[section] as any)];
      updatedSection.splice(index, 1);
      return { ...prev, [section]: updatedSection };
    });
  };

  return (
    <div className="w-full md:w-1/2 m-4 md:m-auto md:mt-4 pb-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-center font-bold">
            Resume Builder
          </CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-3">
          <h3 className="font-semibold text-xl">Personal Information</h3>
          <Input
            type="text"
            placeholder="Full Name"
            className="font-semibold border-gray-400"
            value={formData.name}
            required
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <Input
            type="email"
            placeholder="E-Mail"
            className="font-semibold border-gray-400"
            value={formData.email}
            required
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <Input
            type="tel"
            placeholder="Mobile"
            className="font-semibold border-gray-400"
            value={formData.mobile}
            required
            onChange={(e) =>
              setFormData({ ...formData, mobile: e.target.value })
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Input
              type="url"
              placeholder="Linked In"
              className="font-medium border-gray-400"
              value={formData.linkedin}
              required
              onChange={(e) =>
                setFormData({ ...formData, linkedin: e.target.value })
              }
            />
            <Input
              type="url"
              placeholder="Github"
              className="font-semibold border-gray-400"
              value={formData.github}
              required
              onChange={(e) =>
                setFormData({ ...formData, github: e.target.value })
              }
            />
            <Input
              type="url"
              placeholder="Portfolio"
              className="font-semibold border-gray-400"
              value={formData.portfolio}
              onChange={(e) =>
                setFormData({ ...formData, portfolio: e.target.value })
              }
            />
            <Input
              type="text"
              placeholder="Location"
              className="font-semibold border-gray-400"
              value={formData.location}
              required
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
            />
          </div>
          <Textarea
            className="font-semibold border-gray-400"
            placeholder="Summary About You"
            value={formData.summary}
            required
            onChange={(e) =>
              setFormData({ ...formData, summary: e.target.value })
            }
          />

          <h3 className="font-semibold text-xl">Skills</h3>
          <Textarea
            className="font-semibold border-gray-400"
            placeholder="Technical Skills (Separated by Commas)"
            value={formData.skills.technical.join(", ")}
            onChange={(e) =>
              setFormData({
                ...formData,
                skills: {
                  ...formData.skills,
                  technical: e.target.value
                    .split(",")
                    .map((skill) => skill.trim()),
                },
              })
            }
          />
          <Textarea
            className="font-semibold border-gray-400"
            placeholder="Soft Skills (Separated by Commas)"
            value={formData.skills.softSkills.join(", ")}
            onChange={(e) =>
              setFormData({
                ...formData,
                skills: {
                  ...formData.skills,
                  softSkills: e.target.value
                    .split(",")
                    .map((skill) => skill.trim()),
                },
              })
            }
          />

          <h3 className="font-semibold text-xl">Education</h3>
          {formData.education.map((edu, index) => (
            <Card key={index} className="p-4 grid gap-2">
              <Input
                value={edu.degreeName}
                placeholder="Degree"
                onChange={(e) =>
                  handleDynamicChange(
                    "education",
                    index,
                    "degreeName",
                    e.target.value
                  )
                }
              />
              <Input
                value={edu.institution}
                placeholder="Institution"
                onChange={(e) =>
                  handleDynamicChange(
                    "education",
                    index,
                    "institution",
                    e.target.value
                  )
                }
              />
              <Input
                value={edu.location}
                placeholder="Location"
                onChange={(e) =>
                  handleDynamicChange(
                    "education",
                    index,
                    "location",
                    e.target.value
                  )
                }
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <Input
                  type="month"
                  value={edu.startYear}
                  onChange={(e) =>
                    handleDynamicChange(
                      "education",
                      index,
                      "startYear",
                      e.target.value
                    )
                  }
                />
                <Input
                  type="month"
                  value={edu.endYear}
                  onChange={(e) =>
                    handleDynamicChange(
                      "education",
                      index,
                      "endYear",
                      e.target.value
                    )
                  }
                />
                <Input
                  type="number"
                  step="0.01"
                  value={edu.cgpa}
                  onChange={(e) =>
                    handleDynamicChange(
                      "education",
                      index,
                      "cgpa",
                      parseFloat(e.target.value)
                    )
                  }
                />
              </div>
              <Button
                variant="destructive"
                onClick={() => handleRemove("education", index)}
                className="bg-red-600"
              >
                Remove
              </Button>
            </Card>
          ))}
          <Button
            onClick={() =>
              handleAdd("education", {
                degreeName: "",
                institution: "",
                location: "",
                startYear: "",
                endYear: "",
                cgpa: 0,
              })
            }
            className="w-3/4 m-auto"
          >
            + Add Education
          </Button>

          <h3 className="font-semibold text-xl">Work Experience</h3>
          {formData.workExperience.map((work, index) => (
            <Card key={index} className="p-4 grid gap-2">
              <Input
                value={work.jobTitle}
                placeholder="Job Title"
                onChange={(e) =>
                  handleDynamicChange(
                    "workExperience",
                    index,
                    "title",
                    e.target.value
                  )
                }
              />
              <Input
                value={work.companyName}
                placeholder="Company"
                onChange={(e) =>
                  handleDynamicChange(
                    "workExperience",
                    index,
                    "company",
                    e.target.value
                  )
                }
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Input
                  type="month"
                  value={work.startDate}
                  onChange={(e) =>
                    handleDynamicChange(
                      "workExperience",
                      index,
                      "startDate",
                      e.target.value
                    )
                  }
                />
                <Input
                  type="month"
                  value={work.endDate}
                  onChange={(e) =>
                    handleDynamicChange(
                      "workExperience",
                      index,
                      "endDate",
                      e.target.value
                    )
                  }
                />
              </div>
              <Textarea
                value={work.responsibilities}
                placeholder="Responsibilities"
                onChange={(e) =>
                  handleDynamicChange(
                    "workExperience",
                    index,
                    "responsibilities",
                    e.target.value
                  )
                }
              />
              <Button
                variant="destructive"
                onClick={() => handleRemove("workExperience", index)}
                className="bg-red-600"
              >
                Remove
              </Button>
            </Card>
          ))}
          <Button
            onClick={() =>
              handleAdd("workExperience", {
                title: "",
                company: "",
                startDate: "",
                endDate: "",
                responsibilities: "",
              })
            }
            className="w-3/4 m-auto"
          >
            + Add Work Experience
          </Button>

          <h3 className="font-semibold text-xl">Projects</h3>
          {formData.projects.map((proj, index) => (
            <Card key={index} className="p-4 grid gap-2">
              <Input
                value={proj.title}
                placeholder="Project Title"
                onChange={(e) =>
                  handleDynamicChange(
                    "projects",
                    index,
                    "title",
                    e.target.value
                  )
                }
              />
              <Textarea
                value={proj.description}
                placeholder="Description"
                onChange={(e) =>
                  handleDynamicChange(
                    "projects",
                    index,
                    "description",
                    e.target.value
                  )
                }
              />
              <Textarea
                value={proj.techStack?.join(", ")}
                placeholder="Tech Stack (comma separated)"
                onChange={(e) =>
                  handleDynamicChange(
                    "projects",
                    index,
                    "techStack",
                    e.target.value.split(",").map((item) => item.trim())
                  )
                }
              />
              <Input
                value={proj.demoLink}
                placeholder="Demo Link"
                onChange={(e) =>
                  handleDynamicChange(
                    "projects",
                    index,
                    "demoLink",
                    e.target.value
                  )
                }
              />
              <Button
                variant="destructive"
                onClick={() => handleRemove("projects", index)}
                className="bg-red-600"
              >
                Remove
              </Button>
            </Card>
          ))}
          <Button
            onClick={() =>
              handleAdd("projects", {
                title: "",
                description: "",
                techStack: [],
                role: "",
                demoLink: "",
              })
            }
            className="w-3/4 m-auto"
          >
            + Add Project
          </Button>

          <h3 className="font-semibold text-xl">Achievements</h3>
          {formData.achievements.map((ach, index) => (
            <Card key={index} className="p-4 grid gap-2">
              <Input
                value={ach.title}
                placeholder="Title"
                onChange={(e) =>
                  handleDynamicChange(
                    "achievements",
                    index,
                    "title",
                    e.target.value
                  )
                }
              />
              <Textarea
                value={ach.description}
                placeholder="Description"
                onChange={(e) =>
                  handleDynamicChange(
                    "achievements",
                    index,
                    "description",
                    e.target.value
                  )
                }
              />
              <Button
                variant="destructive"
                onClick={() => handleRemove("achievements", index)}
                className="bg-red-600"
              >
                Remove
              </Button>
            </Card>
          ))}
          <Button
            onClick={() =>
              handleAdd("achievements", { title: "", description: "" })
            }
            className="w-3/4 m-auto"
          >
            + Add Achievement
          </Button>

          <h3 className="font-semibold text-xl">Position of Responsibility</h3>
          {formData.positionOfResponsibility.map((pos, index) => (
            <Card key={index} className="p-4 grid gap-2">
              <Input
                value={pos.position}
                placeholder="Position"
                onChange={(e) =>
                  handleDynamicChange(
                    "positionOfResponsibility",
                    index,
                    "position",
                    e.target.value
                  )
                }
              />
              <Input
                value={pos.organization}
                placeholder="Organization"
                onChange={(e) =>
                  handleDynamicChange(
                    "positionOfResponsibility",
                    index,
                    "organization",
                    e.target.value
                  )
                }
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Input
                  type="month"
                  value={pos.startDate}
                  onChange={(e) =>
                    handleDynamicChange(
                      "positionOfResponsibility",
                      index,
                      "startDate",
                      e.target.value
                    )
                  }
                />
                <Input
                  type="month"
                  value={pos.endDate}
                  onChange={(e) =>
                    handleDynamicChange(
                      "positionOfResponsibility",
                      index,
                      "endDate",
                      e.target.value
                    )
                  }
                />
              </div>
              <Textarea
                value={pos.contributions}
                placeholder="Contributions"
                onChange={(e) =>
                  handleDynamicChange(
                    "positionOfResponsibility",
                    index,
                    "contributions",
                    e.target.value
                  )
                }
              />
              <Button
                variant="destructive"
                onClick={() => handleRemove("positionOfResponsibility", index)}
                className="bg-red-600"
              >
                Remove
              </Button>
            </Card>
          ))}
          <Button
            onClick={() =>
              handleAdd("positionOfResponsibility", {
                position: "",
                organization: "",
                startDate: "",
                endDate: "",
                contributions: "",
              })
            }
            className="w-3/4 m-auto"
          >
            + Add Position
          </Button>

          <h3 className="font-semibold text-xl">Publications</h3>
          {formData.publications.map((pub, index) => (
            <Card key={index} className="p-4 grid gap-2">
              <Input
                value={pub.title}
                placeholder="Title"
                onChange={(e) =>
                  handleDynamicChange(
                    "publications",
                    index,
                    "title",
                    e.target.value
                  )
                }
              />
              <Input
                value={pub.conference}
                placeholder="Conference"
                onChange={(e) =>
                  handleDynamicChange(
                    "publications",
                    index,
                    "conference",
                    e.target.value
                  )
                }
              />
              <Input
                value={pub.authors}
                placeholder="Authors (comma separated)"
                onChange={(e) =>
                  handleDynamicChange(
                    "publications",
                    index,
                    "authors",
                    e.target.value
                  )
                }
              />
              <Input
                type="month"
                value={pub.date}
                onChange={(e) =>
                  handleDynamicChange(
                    "publications",
                    index,
                    "date",
                    e.target.value
                  )
                }
              />
              <Input
                type="url"
                value={pub.link}
                placeholder="Link"
                onChange={(e) =>
                  handleDynamicChange(
                    "publications",
                    index,
                    "link",
                    e.target.value
                  )
                }
              />
              <Button
                variant="destructive"
                onClick={() => handleRemove("publications", index)}
                className="bg-red-600"
              >
                Remove
              </Button>
            </Card>
          ))}
          <Button
            onClick={() =>
              handleAdd("publications", {
                title: "",
                conference: "",
                authors: "",
                date: "",
                link: "",
              })
            }
            className="w-3/4 m-auto"
          >
            + Add Publication
          </Button>

          <Button className="mt-4 bg-blue-700 hover:bg-blue-600">Finish</Button>
        </CardContent>
      </Card>
    </div>
  );
}
