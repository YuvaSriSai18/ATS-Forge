"use client";
import React, { useState } from "react";
import Create_Resume_Form from "../components/Create_Resume_Form";
import ResumePreview from "../components/ResumePreview";
import { ResumeData as ResumeDataType } from "../utils/types";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { PDFViewer } from "@react-pdf/renderer";

export default function Build_Preview_Resume() {
  const [resumeData, setResumeData] = useState<ResumeDataType>({
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

  const [preview, setPreview] = useState(false);

  return (
    <div className="relative min-h-screen">
      <Button
        onClick={() => setPreview(!preview)}
        className="right-0 fixed mr-4 mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md z-50"
      >
        {preview ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
      </Button>

      <div className="flex justify-center items-start p-5">
        {!preview ? (
          <div className="w-full lg:w-2/3">
            <Create_Resume_Form
              setFormData={setResumeData}
              formData={resumeData}
            />
          </div>
        ) : (
          <div className="w-full h-screen">
            <PDFViewer
              width="80%"
              height="100%"
              style={{ margin: "auto" }}
              showToolbar={true}
            >
              <ResumePreview data={resumeData} />
            </PDFViewer>
          </div>
        )}
      </div>
    </div>
  );
}
