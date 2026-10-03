import { writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { argv } from 'node:process'
import { AlignmentType, Document, HeadingLevel, Packer, Paragraph, TextRun } from 'docx'

const text = (value, options = {}) => new TextRun({ text: value, font: 'Calibri', size: 21, color: '222222', ...options })
const paragraph = (value, options = {}) => new Paragraph({ spacing: { after: 65 }, children: [text(value)], ...options })
const heading = (value) => new Paragraph({
  heading: HeadingLevel.HEADING_1,
  spacing: { before: 190, after: 75 },
  border: { bottom: { style: 'single', size: 6, color: '1F4E78', space: 4 } },
  children: [text(value.toUpperCase(), { bold: true, size: 22, color: '1F4E78' })],
})
const bullet = (value) => paragraph(`•  ${value}`)
const role = (title, company, location, dates, achievements) => [
  paragraph(`${title}  |  ${company}  |  ${location}  |  ${dates}`, { spacing: { before: 110, after: 55 } }),
  ...achievements.map(bullet),
]

const sections = [
  heading('Professional Summary'),
  paragraph('Software Engineer with 5 years of experience designing, building, and shipping scalable web applications and backend services. Skilled in full-stack development, API design, and cloud deployment, with a track record of improving system performance and delivering features that drive measurable business impact.'),
  heading('Technical Skills'),
  paragraph('Languages:  JavaScript, TypeScript, Python, Java, SQL'),
  paragraph('Frontend:  React, Next.js, Redux, HTML5, CSS3, Tailwind CSS'),
  paragraph('Backend:  Node.js, Express, Django, REST APIs, GraphQL'),
  paragraph('Databases:  PostgreSQL, MySQL, MongoDB, Redis'),
  paragraph('Cloud & DevOps:  AWS, Docker, Kubernetes, CI/CD'),
  paragraph('Tools & Practices:  Git, Jira, Agile/Scrum, unit testing, system design'),
  heading('Professional Experience'),
  ...role('Software Engineer II', 'TechNova Solutions', 'Austin, TX', 'Jun 2023 – Present', [
    'Led development of a microservices order system handling 50K+ daily transactions, improving processing speed by 35%.',
    'Designed REST APIs for 3 internal teams, reducing cross-team integration time by 40%.',
    'Migrated legacy services to AWS and Kubernetes, cutting deployment time from hours to minutes.',
    'Mentored 2 junior engineers and raised test coverage from 58% to 87%.',
  ]),
  ...role('Software Engineer', 'BrightPath Digital', 'Austin, TX', 'Aug 2021 – May 2023', [
    'Built and maintained customer-facing React applications used by 200K+ monthly active users.',
    'Developed Node.js services with PostgreSQL and automated CI/CD pipelines with GitHub Actions.',
    'Collaborated with product and design teams to deliver 15+ feature releases on schedule.',
  ]),
  ...role('Junior Software Developer', 'Clearline Systems', 'Remote', 'Jul 2020 – Jul 2021', [
    'Built UI components and fixed bugs across a Django and React platform, improving page load times by 20%.',
    'Wrote unit and integration tests, reducing production incidents reported by QA by 30%.',
  ]),
  heading('Education'),
  paragraph('Bachelor of Science in Computer Science'),
  paragraph('University Name  •  Graduated May 2020'),
  heading('Certifications'),
  bullet('AWS Certified Solutions Architect – Associate'),
  bullet('Meta Certified Front-End Developer'),
]

const resume = new Document({
  sections: [{
    properties: { page: { margin: { top: 700, right: 850, bottom: 700, left: 850 } } },
    children: [
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 50 }, children: [text('[YOUR NAME]', { bold: true, size: 40 })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 70 }, children: [text('SOFTWARE ENGINEER', { bold: true, size: 24, color: '1F4E78' })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 150 }, children: [text('your.email@example.com  •  +1 (555) 123-4567  •  City, State  •  linkedin.com/in/yourname  •  github.com/yourname', { size: 18, color: '595959' })] }),
      ...sections,
    ],
  }],
})

const outputPath = resolve(argv[2] ?? 'resume.docx')
await writeFile(outputPath, await Packer.toBuffer(resume))
console.log(`Resume written to ${outputPath}`)