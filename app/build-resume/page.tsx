"use client";
import React, { useState } from "react";
import Create_Resume_Form from "../components/Create_Resume_Form";
import ResumePreview from "../components/ResumePreview";
import { ResumeData } from "../utils/types";
import { Button } from "@/components/ui/button";

import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
export default function Build_Preview_Resume() {
  const [ResumeData, setResumeData] = useState<ResumeData>({
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

  const [Preview, setPreview] = useState(false);
  return (
    <div>
      <Button onClick={() => setPreview(!Preview)} className="text-black hover:text-white float-right" >{Preview ? <Eye className="text-black dark:text-white"/> : <EyeOff/>}</Button>
      <div className="flex justify-between p-5">
        {!Preview && (
          <div className="w-1/2 m-auto">
            <Create_Resume_Form
              setFormData={setResumeData}
              formData={ResumeData}
            />
          </div>
        )}
        {Preview && (
          <div className="m-auto">
            <ResumePreview data={ResumeData} />
          </div>
        )}
      </div>
    </div>
  );
}
