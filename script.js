// ============================================================
// LAB 04 - JAVASCRIPT CONTROL STRUCTURES
// Array of Objects + If/Else + For Loop + While Loop
// ============================================================

// ------------------------------------------------------------
// PROJECT DATA
// ------------------------------------------------------------

const lab04Projects = [
    {
        id: 1,
        name: "Portfolio Website",
        category: "Web Development",
        status: "Completed",
        priority: "High",
        progress: 100,
        students: 4
    },
    {
        id: 2,
        name: "E-Commerce Website",
        category: "Web Development",
        status: "In Progress",
        priority: "High",
        progress: 70,
        students: 5
    },
    {
        id: 3,
        name: "Mobile App",
        category: "App Development",
        status: "In Progress",
        priority: "Medium",
        progress: 50,
        students: 3
    },
    {
        id: 4,
        name: "Database Management",
        category: "Database",
        status: "Completed",
        priority: "Medium",
        progress: 100,
        students: 2
    },
    {
        id: 5,
        name: "AI Chatbot",
        category: "Artificial Intelligence",
        status: "Pending",
        priority: "Low",
        progress: 20,
        students: 4
    },
    {
        id: 6,
        name: "Student Management System",
        category: "Web Development",
        status: "In Progress",
        priority: "High",
        progress: 80,
        students: 6
    }
];


// ============================================================
// DOM ELEMENTS
// ============================================================

const forLoopOutput = document.getElementById("forLoopOutput");
const whileLoopOutput = document.getElementById("whileLoopOutput");
const conditionOutput = document.getElementById("conditionOutput");
const combinedOutput = document.getElementById("combinedOutput");


// ============================================================
// STEP 1 - IF ELSE CONDITIONS
// At least 5 conditional logics
// ============================================================

function checkProjectStatus(project) {

    // Condition 1 - Progress
    if (project.progress === 100) {
        return "Project Completed";
    }

    // Condition 2 - High progress
    else if (project.progress >= 75) {
        return "Almost Completed";
    }

    // Condition 3 - Medium progress
    else if (project.progress >= 50) {
        return "Halfway Completed";
    }

    // Condition 4 - Low progress
    else if (project.progress >= 25) {
        return "Work In Progress";
    }

    // Condition 5 - Very low progress
    else {
        return "Project Just Started";
    }
}


// ------------------------------------------------------------
// Display IF/ELSE Results
// ------------------------------------------------------------

function displayConditions() {

    if (!conditionOutput) return;

    conditionOutput.innerHTML = "";

    lab04Projects.forEach(function (project) {

        let message = checkProjectStatus(project);

        let color;

        // More if/else conditions for output
        if (project.progress === 100) {
            color = "green";
        }
        else if (project.progress >= 75) {
            color = "blue";
        }
        else if (project.progress >= 50) {
            color = "orange";
        }
        else if (project.progress >= 25) {
            color = "purple";
        }
        else {
            color = "red";
        }

        conditionOutput.innerHTML += `
            <div class="lab-card">
                <h3>${project.name}</h3>
                <p><strong>Progress:</strong> ${project.progress}%</p>
                <p>
                    <strong>Condition Result:</strong>
                    <span style="color:${color}">
                        ${message}
                    </span>
                </p>
            </div>
        `;
    });
}


// ============================================================
// STEP 2 - FOR LOOP
// Display every project using a FOR loop
// ============================================================

function displayWithForLoop() {

    if (!forLoopOutput) return;

    forLoopOutput.innerHTML = "";

    // FOR LOOP
    for (let i = 0; i < lab04Projects.length; i++) {

        const project = lab04Projects[i];

        forLoopOutput.innerHTML += `
            <div class="lab-card">
                <h3>${project.name}</h3>

                <p>
                    <strong>Category:</strong>
                    ${project.category}
                </p>

                <p>
                    <strong>Status:</strong>
                    ${project.status}
                </p>

                <p>
                    <strong>Priority:</strong>
                    ${project.priority}
                </p>

                <p>
                    <strong>Progress:</strong>
                    ${project.progress}%
                </p>

                <p>
                    <strong>Students:</strong>
                    ${project.students}
                </p>
            </div>
        `;
    }
}


// ============================================================
// STEP 3 - WHILE LOOP
// Process project records using WHILE loop
// ============================================================

function displayWithWhileLoop() {

    if (!whileLoopOutput) return;

    whileLoopOutput.innerHTML = "";

    let i = 0;

    // WHILE LOOP
    while (i < lab04Projects.length) {

        const project = lab04Projects[i];

        whileLoopOutput.innerHTML += `
            <div class="lab-card">
                <h3>${project.name}</h3>
                <p>Category: ${project.category}</p>
                <p>Status: ${project.status}</p>
                <p>Progress: ${project.progress}%</p>
            </div>
        `;

        i++;
    }
}


// ============================================================
// STEP 4 - COMBINE LOOP + CONDITIONS
// Categorize projects according to progress
// ============================================================

function displayCombinedResults() {

    if (!combinedOutput) return;

    combinedOutput.innerHTML = "";

    let completedProjects = [];
    let activeProjects = [];
    let pendingProjects = [];

    // LOOP
    for (let i = 0; i < lab04Projects.length; i++) {

        const project = lab04Projects[i];

        // CONDITION 1
        if (project.progress === 100) {

            completedProjects.push(project);

        }

        // CONDITION 2
        else if (project.progress > 0) {

            activeProjects.push(project);

        }

        // CONDITION 3
        else {

            pendingProjects.push(project);
        }
    }


    // --------------------------------------------------------
    // Completed Projects
    // --------------------------------------------------------

    combinedOutput.innerHTML += `
        <div class="category-box">
            <h2>✅ Completed Projects</h2>
    `;

    for (let i = 0; i < completedProjects.length; i++) {

        combinedOutput.innerHTML += `
            <p>
                ${completedProjects[i].name}
                - ${completedProjects[i].progress}%
            </p>
        `;
    }

    combinedOutput.innerHTML += `</div>`;


    // --------------------------------------------------------
    // Active Projects
    // --------------------------------------------------------

    combinedOutput.innerHTML += `
        <div class="category-box">
            <h2>🔄 Active Projects</h2>
    `;

    for (let i = 0; i < activeProjects.length; i++) {

        combinedOutput.innerHTML += `
            <p>
                ${activeProjects[i].name}
                - ${activeProjects[i].progress}%
            </p>
        `;
    }

    combinedOutput.innerHTML += `</div>`;


    // --------------------------------------------------------
    // Pending Projects
    // --------------------------------------------------------

    combinedOutput.innerHTML += `
        <div class="category-box">
            <h2>⏳ Pending Projects</h2>
    `;

    for (let i = 0; i < pendingProjects.length; i++) {

        combinedOutput.innerHTML += `
            <p>
                ${pendingProjects[i].name}
                - ${pendingProjects[i].progress}%
            </p>
        `;
    }

    combinedOutput.innerHTML += `</div>`;
}


// ============================================================
// ADDITIONAL CONDITIONS
// Useful for demonstrating 5+ IF/ELSE requirements
// ============================================================

function getPriorityMessage(project) {

    if (project.priority === "High") {

        return "⚠️ High Priority";

    }
    else if (project.priority === "Medium") {

        return "🟡 Medium Priority";

    }
    else if (project.priority === "Low") {

        return "🟢 Low Priority";

    }
    else {

        return "No Priority Assigned";
    }
}


// ============================================================
// PROJECT SUMMARY
// Uses WHILE LOOP + CONDITIONS
// ============================================================

function generateProjectSummary() {

    let completed = 0;
    let inProgress = 0;
    let pending = 0;

    let i = 0;

    while (i < lab04Projects.length) {

        if (lab04Projects[i].status === "Completed") {

            completed++;

        }
        else if (lab04Projects[i].status === "In Progress") {

            inProgress++;

        }
        else {

            pending++;
        }

        i++;
    }

    console.log("===== PROJECT SUMMARY =====");
    console.log("Total Projects:", lab04Projects.length);
    console.log("Completed:", completed);
    console.log("In Progress:", inProgress);
    console.log("Pending:", pending);
}


// ============================================================
// RUN ALL LAB FUNCTIONS
// ============================================================

displayConditions();
displayWithForLoop();
displayWithWhileLoop();
displayCombinedResults();
generateProjectSummary();


// ============================================================
// CONSOLE OUTPUT
// ============================================================

console.log("===== LAB 04 =====");
console.log("Total Projects:", lab04Projects.length);

for (let i = 0; i < lab04Projects.length; i++) {

    console.log(
        lab04Projects[i].name,
        "=>",
        getPriorityMessage(lab04Projects[i])
    );
}