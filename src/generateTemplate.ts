// // import fs from "fs-extra";
// // import path from "path";

// // const QUESTIONS: any = {
// //   LANGUAGE: {
// //     JAVASCRIPT: "JavaScript",
// //     TYPESCRIPT: "TypeScript",
// //     GO: "Go",
// //     PYTHON: "Python",
// //   },
// //   FRAMEWORK: {
// //     EXPRESS: "Express",
// //     NEST: "Nest",
// //     FLASK: "Flask",
// //     GIN: "Gin",
// //     FASTAPI: "FastAPI",
// //     FIBER: "Fiber",
// //   },
// //   DATABASE: {
// //     POSTGRESQL: "PostgreSQL",
// //     MONGODB: "MongoDB",
// //     MYSQL: "MySQL",
// //   },
// //   AUTH_TYPE: {
// //     JWT: "JWT",
// //     SESSION: "Session",
// //     OAUTH: "OAuth",
// //   },
// // };

// // // Base directory
// // const BASE_DIR = path.join(__dirname, "templates"); // Use __dirname directly

// // // Helper to generate template files if not present
// // async function generateFiles(
// //   dir: string,
// //   language: string,
// //   framework: string,
// //   database: string,
// //   authType: string
// // ) {
// //   const readmeContent = `# ${language} with ${framework} using ${database} and ${authType}\n\nThis is an auto-generated template.`;
// //   const controllerContent = `// Controller for ${framework} with ${database} and ${authType}`;
// //   const modelContent = `// Model for ${database} with ${authType}`;

// //   try {
// //     await fs.writeFile(path.join(dir, "README.md"), readmeContent);
// //     await fs.writeFile(path.join(dir, "controller.js"), controllerContent);
// //     await fs.writeFile(path.join(dir, "model.js"), modelContent);
// //     console.log(`Created files in ${dir}`);
// //   } catch (error) {
// //     console.error(`Error creating files in ${dir}:`, error);
// //   }
// // }

// // async function createTemplateStructure() {
// //   for (const langKey in QUESTIONS.LANGUAGE) {
// //     const language = QUESTIONS.LANGUAGE[langKey];
// //     for (const frameKey in QUESTIONS.FRAMEWORK) {
// //       const framework = QUESTIONS.FRAMEWORK[frameKey];
// //       for (const dbKey in QUESTIONS.DATABASE) {
// //         const database = QUESTIONS.DATABASE[dbKey];
// //         for (const authKey in QUESTIONS.AUTH_TYPE) {
// //           const authType = QUESTIONS.AUTH_TYPE[authKey];

// //           const dir = path.join(
// //             BASE_DIR,
// //             language,
// //             framework,
// //             database,
// //             authType
// //           );

// //           if (!(await fs.pathExists(dir))) {
// //             await fs.ensureDir(dir);
// //             console.log(`Created folder: ${dir}`);
// //           }

// //           await generateFiles(dir, language, framework, database, authType);
// //         }
// //       }
// //     }
// //   }
// // }

// // createTemplateStructure()
// //   .then(() => console.log("Template structure created successfully."))
// //   .catch((error) => console.error("Error creating template structure:", error));



// import fs from "fs-extra";
// import path from "path";

// // Define the questions structure
// const QUESTIONS: any = {
//   LANGUAGE: {
//     JAVASCRIPT: "JavaScript",
//     TYPESCRIPT: "TypeScript",
//     GO: "Go",
//     PYTHON: "Python",
//   },
//   FRAMEWORK: {
//     JAVASCRIPT: ["Express", "Nest"],
//     TYPESCRIPT: ["Nest", "Express"],
//     GO: ["Gin", "Fiber"],
//     PYTHON: ["Flask", "FastAPI"],
//   },
//   DATABASE: {
//     POSTGRESQL: "PostgreSQL",
//     MONGODB: "MongoDB",
//     MYSQL: "MySQL",
//   },
//   AUTH_TYPE: {
//     JWT: "JWT",
//     SESSION: "Session",
//     OAUTH: "OAuth",
//   },
// };

// // Base directory
// const BASE_DIR = path.join(__dirname, "templates");

// // Helper to generate template files if not present
// async function generateFiles(
//   dir: string,
//   language: string,
//   framework: string,
//   database: string,
//   authType: string
// ) {
//   const readmeContent = `# ${language} with ${framework} using ${database} and ${authType}\n\nThis is an auto-generated template.`;
//   const controllerContent = `// Controller for ${framework} with ${database} and ${authType}`;
//   const modelContent = `// Model for ${database} with ${authType}`;

//   try {
//     await fs.writeFile(path.join(dir, "README.md"), readmeContent);
//     await fs.writeFile(path.join(dir, "controller.js"), controllerContent);
//     await fs.writeFile(path.join(dir, "model.js"), modelContent);
//     console.log(`Created files in ${dir}`);
//   } catch (error) {
//     console.error(`Error creating files in ${dir}:`, error);
//   }
// }

// async function createTemplateStructure() {
//   for (const langKey in QUESTIONS.LANGUAGE) {
//     const language = QUESTIONS.LANGUAGE[langKey];

//     // Get the relevant frameworks for the current language
//     const frameworks = QUESTIONS.FRAMEWORK[langKey] || [];

//     for (const framework of frameworks) {
//       for (const dbKey in QUESTIONS.DATABASE) {
//         const database = QUESTIONS.DATABASE[dbKey];

//         for (const authKey in QUESTIONS.AUTH_TYPE) {
//           const authType = QUESTIONS.AUTH_TYPE[authKey];

//           const dir = path.join(
//             BASE_DIR,
//             language,
//             framework,
//             database,
//             authType
//           );

//           // Create the directory if it doesn't exist
//           if (!(await fs.pathExists(dir))) {
//             await fs.ensureDir(dir);
//             console.log(`Created folder: ${dir}`);
//           }

//           // Generate files
//           await generateFiles(dir, language, framework, database, authType);
//         }
//       }
//     }
//   }
// }

// // Execute the function
// createTemplateStructure()
//   .then(() => console.log("Template structure created successfully."))
//   .catch((error) => console.error("Error creating template structure:", error));


import fs from "fs-extra";
import path from "path";

// Define the questions structure
const QUESTIONS: any = {
  LANGUAGE: {
    JAVASCRIPT: "JavaScript",
    TYPESCRIPT: "TypeScript",
    GO: "Go",
    PYTHON: "Python",
  },
  FRAMEWORK: {
    JAVASCRIPT: ["Express", "Nest"],
    TYPESCRIPT: ["Nest", "Express"],
    GO: ["Gin", "Fiber"],
    PYTHON: ["Flask", "FastAPI"],
  },
  DATABASE: {
    POSTGRESQL: "PostgreSQL",
    MONGODB: "MongoDB",
    MYSQL: "MySQL",
  },
  AUTH_TYPE: {
    JWT: "JWT",
    SESSION: "Session",
    OAUTH: "OAuth",
  },
};

// Base directory
const BASE_DIR = path.join(__dirname, "templates");

// Helper to generate template files if not present
async function generateFiles(
  dir: string,
  language: string,
  framework: string,
  database: string,
  authType: string
) {
  const readmeContent = `# ${language} with ${framework} using ${database} and ${authType}\n\nThis is an auto-generated template.`;
  const controllerContent = `// Controller for ${framework} with ${database} and ${authType}`;
  const modelContent = `// Model for ${database} with ${authType}`;

  try {
    await fs.writeFile(path.join(dir, "README.md"), readmeContent);
    await fs.writeFile(path.join(dir, "controller.js"), controllerContent);
    await fs.writeFile(path.join(dir, "model.js"), modelContent);
    console.log(`Created files in ${dir}`);
  } catch (error) {
    console.error(`Error creating files in ${dir}:`, error);
  }
}

async function createTemplateStructure() {
  for (const langKey in QUESTIONS.LANGUAGE) {
    const language = QUESTIONS.LANGUAGE[langKey];

    // Get the relevant frameworks for the current language
    const frameworks = QUESTIONS.FRAMEWORK[langKey] || [];

    for (const framework of frameworks) {
      for (const dbKey in QUESTIONS.DATABASE) {
        const database = QUESTIONS.DATABASE[dbKey];

        for (const authKey in QUESTIONS.AUTH_TYPE) {
          const authType = QUESTIONS.AUTH_TYPE[authKey];

          const dir = path.join(
            BASE_DIR,
            language,
            framework,
            database,
            authType
          );

          // Check if the directory already exists
          if (await fs.pathExists(dir)) {
            console.log(`Directory already exists: ${dir}`);
            continue; // Skip to the next iteration if it exists
          }

          // Create the directory since it doesn't exist
          await fs.ensureDir(dir);
          console.log(`Created folder: ${dir}`);

          // Generate files
          await generateFiles(dir, language, framework, database, authType);
        }
      }
    }
  }
}

// Execute the function
createTemplateStructure()
  .then(() => console.log("Template structure created successfully."))
  .catch((error) => console.error("Error creating template structure:", error));
