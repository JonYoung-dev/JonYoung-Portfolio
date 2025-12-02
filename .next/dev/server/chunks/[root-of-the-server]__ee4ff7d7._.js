module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/api/projects/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// GET /api/projects
__turbopack_context__.s([
    "GET",
    ()=>GET
]);
async function GET() {
    const projects = [
        {
            title: "Automated Workflow Optimizer",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod, arcu ac dignissim fermentum, risus odio aliquet felis, et dapibus nisi lorem sit amet dolor.",
            img: "https://cataas.com/cat/says/Automated%20Workflow%20Optimizer?width=250&height=250",
            link: "https://cataas.com/cat",
            keywords: [
                "automation",
                "workflows",
                "optimization",
                "task-runner",
                "orchestration"
            ]
        },
        {
            title: "Real-Time Analytics Dashboard",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            img: "https://cataas.com/cat/says/Real-Time%20Analytics%20Dashboard?width=250&height=250",
            link: "https://cataas.com/cat",
            keywords: [
                "analytics",
                "dashboard",
                "metrics",
                "real-time",
                "data-visualization"
            ]
        },
        {
            title: "Predictive Maintenance Engine",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
            img: "https://cataas.com/cat/says/Predictive%20Maintenance%20Engine?width=250&height=250",
            link: "https://cataas.com/cat",
            keywords: [
                "machine-learning",
                "prediction",
                "maintenance",
                "ai-models",
                "failure-detection"
            ]
        },
        {
            title: "Secure File Distribution Service",
            description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit.",
            img: "https://cataas.com/cat/says/Secure%20File%20Distribution%20Service?width=250&height=250",
            link: "https://cataas.com/cat",
            keywords: [
                "security",
                "file-sharing",
                "encryption",
                "distribution",
                "cloud-storage"
            ]
        },
        {
            title: "Intelligent Form Processor",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus.",
            img: "https://cataas.com/cat/says/Intelligent%20Form%20Processor?width=250&height=250",
            link: "https://cataas.com/cat",
            keywords: [
                "forms",
                "parsing",
                "automation",
                "nlp",
                "input-validation"
            ]
        },
        {
            title: "Adaptive UI Theme Generator",
            description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.",
            img: "https://cataas.com/cat/says/Adaptive%20UI%20Theme%20Generator?width=250&height=250",
            link: "https://cataas.com/cat",
            keywords: [
                "ui",
                "themes",
                "design",
                "adaptive-layouts",
                "style-system"
            ]
        }
    ];
    return Response.json({
        projects
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ee4ff7d7._.js.map