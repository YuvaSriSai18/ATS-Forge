import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import { ResumeData } from "../utils/types";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 14,
    fontFamily: "Helvetica",
    fontSize: 11,
  },
  section: {
    // marginBottom: 10,
    paddingBottom: 1,
    // borderBottom: "1 solid #000",
    marginTop: 1,
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#000",
  },
  subheader: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 3,
  },
  text: {
    fontSize: 11,
    marginBottom: 3,
  },
  bold: {
    fontWeight: "bold",
  },
  link: {
    color: "#0000EE",
    textDecoration: "underline",
  },
  contactRow: {
    flexDirection: "row",
    justifyContent: "center",
    // marginBottom: 3,
    // flexWrap: "wrap",
    fontSize: "10px",
  },
  contactItem: {
    marginHorizontal: 5,
  },
  nameHeader: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333333",
    borderBottom: "1 solid #000",
    paddingBottom: 2,
  },
  entryContainer: {
    marginBottom: 4,
  },
  bulletPoint: {
    marginLeft: 10,
    marginBottom: 4,
    textAlign: "justify",
  },
});
const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short", // or "long" for full month name
  });
const getUsername = (link: string) => {
  const arr = link.split("/").filter(Boolean);
  const username = arr[arr.length - 1];
  // console.log(username);
  return username;
};
const ResumePreview = ({ data }: { data: ResumeData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header with Name and Contact */}
      <View style={styles.section}>
        <Text style={styles.nameHeader}>{data.name}</Text>

        <View style={styles.contactRow}>
          {data.email && (
            <Text style={styles.contactItem}>
              <Link src={`mailto:${data.email}`}>{data.email}</Link>
            </Text>
          )}
          {data.mobile && (
            <Text style={styles.contactItem}>
              <Link src={`tel:${data.mobile}`}>{data.mobile}</Link>
            </Text>
          )}
          {data.location && (
            <Text style={styles.contactItem}>{data.location}</Text>
          )}
          {data.linkedin && (
            <Text style={styles.contactItem}>
              <Link src={data.linkedin}>{`linkedin.com/in/${getUsername(data.linkedin)}`}</Link>
            </Text>
          )}
          {data.github && (
            <Text style={styles.contactItem}>
              <Link src={data.github}>{`github.com/${getUsername(data.github)}`}</Link>
            </Text>
          )}
          {data.portfolio && (
            <Text style={styles.contactItem}>
              <Link src={data.portfolio}>Portfolio</Link>
            </Text>
          )}
        </View>
      </View>

      {/* Summary */}
      {data.summary && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text>{data.summary}</Text>
        </View>
      )}
      {/* Work Experience */}
      {data.workExperience.length > 0 && data.workExperience[0].companyName && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Work Experience</Text>

          {data.workExperience.map((job, i) => (
            <View key={i} style={styles.entryContainer}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.bold}>
                  {job.jobTitle} - {job.companyName}
                </Text>
                <Text>
                  {formatDate(job.startDate)} -{" "}
                  {job.endDate ? formatDate(job.endDate) : "Present"}
                </Text>
              </View>

              {job.responsibilities
                .split(".")
                .filter((point) => point.trim())
                .map((point, j) => (
                  <Text key={j} style={styles.bulletPoint}>
                    • {point.trim()}
                  </Text>
                ))}
            </View>
          ))}
        </View>
      )}

      {/* Skills */}
      {(data.skills.technical.length > 0 ||
        data.skills.softSkills.length > 0) && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>

          {data.skills.technical.length > 0 && (
            <View style={styles.entryContainer}>
              <Text>
                <Text style={styles.bold}>Technical: </Text>
                {data.skills.technical.join(", ")}
              </Text>
            </View>
          )}

          {data.skills.softSkills.length > 0 && (
            <View style={styles.entryContainer}>
              <Text>
                <Text style={styles.bold}>Soft Skills: </Text>
                {data.skills.softSkills.join(", ")}
              </Text>
            </View>
          )}
        </View>
      )}

      {/* Education */}
      {data.education.length > 0 && data.education[0].institution && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>

          {data.education.map((edu, i) => (
            <View key={i} style={styles.entryContainer}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.bold}>
                  {edu.degreeName} - {edu.institution}
                </Text>
                <Text>
                  {formatDate(edu.startYear)} -{" "}
                  {formatDate(edu.endYear) || "Present"}
                </Text>
              </View>
              {edu.cgpa && (
                <Text style={{ marginLeft: "10px" }}>CGPA: {edu.cgpa}</Text>
              )}
            </View>
          ))}
        </View>
      )}

      {/* Projects */}
      {data.projects.length > 0 && data.projects[0].title && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>

          {data.projects.map((project, i) => (
            <View key={i} style={styles.entryContainer}>
              <Text style={styles.bold}>
                {project.title} |{" "}
                {project.techStack.length > 0 && (
                  <Text style={{ fontWeight: "normal" }}>
                    {project.techStack.join(", ")}
                  </Text>
                )}
                {project.demoLink && (
                  <Text>
                    {" "}
                    |{" "}
                    <Link
                      src={project.demoLink}
                      style={{ color: "#000", fontWeight: "normal" }}
                    >
                      Project Link
                    </Link>
                  </Text>
                )}
              </Text>
              <Text>
                {project.description
                  .split(".")
                  .filter((point) => point.trim())
                  .map((point, j) => (
                    <Text key={j} style={styles.bulletPoint}>
                      • {point.trim() + "\n"}
                    </Text>
                  ))}
              </Text>
            </View>
          ))}
        </View>
      )}

      {/* Certifications */}
      {data.certifications.length > 0 && data.certifications[0].name && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Certifications</Text>

          {data.certifications.map((cert, i) => (
            <View key={i} style={styles.entryContainer}>
              <Text>
                <Link src={cert.link} style={{ color: "#000" }}>
                  {cert.name}
                </Link>
              </Text>
            </View>
          ))}
        </View>
      )}

      {/* Achievements */}
      {data.achievements.length > 0 && data.achievements[0].title && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Achievements</Text>

          {data.achievements.map((achievement, i) => (
            <View key={i} style={styles.entryContainer}>
              <Text style={styles.bold}>
                {achievement.title} :{" "}
                <Text style={{ fontWeight: "normal" }}>
                  {achievement.description}
                </Text>
              </Text>
            </View>
          ))}
        </View>
      )}

      {/* Positions of Responsibility */}
      {data.positionOfResponsibility.length > 0 &&
        data.positionOfResponsibility[0].position && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Positions of Responsibility</Text>

            {data.positionOfResponsibility.map((position, i) => (
              <View key={i} style={styles.entryContainer}>
                <Text style={styles.bold}>
                  {position.position} at {position.organization}
                </Text>
                {/* <Text>{position.duration}</Text> */}
                <Text>
                  {position.contributions
                    .split(".")
                    .filter((point) => point.trim())
                    .map((point, i) => (
                      <Text key={i} style={styles.bulletPoint}>
                        • {point.trim() + "\n"}
                      </Text>
                    ))}
                </Text>
              </View>
            ))}
          </View>
        )}

      {/* Publications */}
      {data.publications.length > 0 && data.publications[0].title && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Publications</Text>

          {data.publications.map((publication, i) => (
            <View key={i} style={styles.entryContainer}>
              <Text style={styles.bold}>{publication.title}</Text>
              <Text>
                {publication.conference}
                {publication.date ? ` - ${publication.date}` : ""}
              </Text>
              <Text>{publication.authors}</Text>
              {publication.link && (
                <Text style={styles.link}>{publication.link}</Text>
              )}
            </View>
          ))}
        </View>
      )}
    </Page>
  </Document>
);

export default ResumePreview;
