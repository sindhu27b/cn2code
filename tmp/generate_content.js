import fs from 'fs';
import path from 'path';

const coursesFilePath = 'c:/Users/sindh/Downloads/course-builder/src/data/courses.js';
const contentDirPath = 'c:/Users/sindh/Downloads/course-builder/src/data/content';

// 1. Parse syllabus from courses.js
const coursesContent = fs.readFileSync(coursesFilePath, 'utf8');
const javaDataMatch = coursesContent.match(/const javaDataText = `([\s\S]+?)`;/);
if (!javaDataMatch) {
  process.exit(1);
}

const javaDataText = javaDataMatch[1];
const sections = javaDataText.split(/MODULE \d+: /);
const modules = [];
let moduleCounter = 1;

sections.forEach((section, index) => {
  if (index === 0) return;
  const lines = section.split('\n');
  const fullTitle = lines[0].trim();
  const topics = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    if (line.startsWith('Learning Objectives:') || line.startsWith('Series:') || line.startsWith('Video Series:')) continue;
    topics.push(line);
  }
  modules.push({ id: moduleCounter++, title: fullTitle, topics });
});

// 2. Generate Index with Lazy Loading (Dynamic Imports)
const registryEntries = [];

modules.forEach(mod => {
  mod.topics.forEach((topic, tIndex) => {
    const topicNum = tIndex + 1;
    const topicId = `java-m${mod.id}-t${topicNum}`;
    registryEntries.push(`  '${topicId}': () => import('./${topicId}.js'),`);
  });
});

// 3. Write index.js
const indexFileContent = `// Central registry for all course content (LAZY LOADING VERSION)
// This file is auto-generated to map topic IDs to dynamic import functions

const topicContent = {
${registryEntries.join('\n')}
};

export default topicContent;
`;

fs.writeFileSync(path.join(contentDirPath, 'index.js'), indexFileContent);

console.log(`Lazy Registry generated for ${registryEntries.length} topics.`);
