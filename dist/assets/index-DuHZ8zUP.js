(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();function l(e){window.scrollTo({top:0,left:0,behavior:"smooth"}),document.title=`${e}`}const u=()=>({html:`
             <nav class="bg-white shadow px-6 py-4 flex items-center justify-between sticky top-0 z-10">
                <div class="text-2xl font-bold text-blue-700 flex items-center gap-2">
                <i class="fas fa-tasks"></i>
                TaskManager
                </div>
                <div class="space-x-6 text-base">
                <a
                    href="/"
                    data-nav
                    class="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    >Home</a
                >
                <a
                    href="/task"
                    data-nav
                    class="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    >Tasks</a
                >
                </div>
            </nav>
        `}),f=()=>{l("Home");const{html:e}=u();function t(){}return{html:`
        <div class="min-h-screen">
            ${e}
            <div class="max-w-4xl mx-auto mt-6 px-4 fade-in">
                <section class="text-center fade-in">
                    <h1 class="text-3xl font-bold mb-4 text-blue-700">
                        Welcome to TaskManager
                    </h1>
                    <p class="text-gray-600 text-lg">Your sleek productivity companion.</p>
                    <i
                        class="fas fa-check-circle text-green-500 text-5xl mt-4 animate-bounce"
                    ></i>
                </section>
            </div>
        </div>
    `,pageEvents:t}};function m(e){const t=JSON.parse(localStorage.getItem("tasks"))||[];e.addEventListener("submit",a=>{a.preventDefault();let s=document.getElementById("task-title").value.trim();s&&(t.push({id:crypto.randomUUID(),taskName:s,completed:!1}),localStorage.setItem("tasks",JSON.stringify(t)),i("task"))})}function p(e){const t=JSON.parse(localStorage.getItem("tasks"))||[];e.addEventListener("click",()=>{const a=e.getAttribute("data-task");t.forEach(o=>{if(a===o.id){let s=t.filter(n=>n.id!==a);localStorage.setItem("tasks",JSON.stringify(s)),i("task")}})})}function g(e){const t=JSON.parse(localStorage.getItem("tasks"))||[];e.addEventListener("click",()=>{const a=e.getAttribute("data-task");t.forEach(async o=>{a===o.id&&await i("taskDetail",a)})})}function x(e,t){e.addEventListener("click",()=>{const a=e.getAttribute("data-task");t.forEach(async o=>{if(a===o.id){let s={id:o.id,taskName:o.taskName,completed:!0},n=t.filter(r=>r.id!==a);n.push(s),localStorage.setItem("tasks",JSON.stringify(n)),i("task")}})})}function b(){const e=JSON.parse(localStorage.getItem("tasks"));let t="";return e&&e.length!==0?e.forEach(a=>{t+=`
            <div class="bg-white p-4 rounded-md shadow-md flex justify-between items-start transition transform hover:scale-[1.01] fade-in" data-task="${a.id}">
                <div>
                <h3 class="text-lg font-semibold task-title text-gray-800">
                ${a.taskName}
                </h3>
                <p class="text-sm text-gray-600 mt-1 task-desc">Description here...</p>
                ${a.completed?`<span class="text-xs mt-2 inline-block px-2 py-1 rounded bg-green-200 text-green-800 status-badge"
                >Completed</span>`:`<span class="text-xs mt-2 inline-block px-2 py-1 rounded bg-yellow-200 text-yellow-800 status-badge"
                >Pending</span>`}
            </div>
            <div class="space-x-2 flex-shrink-0">
                <button class="edit-btn text-blue-500 hover:text-blue-700 transition" data-task="${a.id}">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="delete-btn text-red-500 hover:text-red-700 transition" data-task="${a.id}">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
            </div>
            `}):t='<div class="text-center">No Task!</div>',t}const h=()=>{l("Task");const{html:e}=u();function t(){const a=document.getElementById("task-form"),o=document.querySelectorAll(".delete-btn"),s=document.querySelectorAll(".edit-btn");a&&m(a),o&&o.forEach(n=>{p(n)}),s&&s.forEach(n=>{g(n)})}return{html:`
        <div class="min-h-screen mb-6">
            ${e}
            <div class="max-w-4xl mx-auto mt-6 px-4 fade-in">
                <h2 class="text-2xl font-semibold mb-4 text-blue-700">Your Tasks</h2>
                <form id="task-form" class="mb-6 flex gap-3 flex-wrap items-center">
                    <input
                    type="text"
                    id="task-title"
                    placeholder="Task title"
                    class="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400"
                    minlength="3"
                    maxlength="100"
                    required
                    />
                    <button
                    type="submit"
                    class="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
                    >
                    Add <i class="fas fa-plus ml-1"></i>
                    </button>
                </form>

                <div class="mb-4 flex justify-between items-center flex-wrap gap-2">
                    <div class="space-x-2">
                    <button
                        class="filter-btn px-3 py-1 rounded-full bg-gray-300 text-black hover:bg-gray-400 transition">
                        All
                    </button>
                    <button
                        class="filter-btn px-3 py-1 rounded-full bg-yellow-300 hover:bg-yellow-400 text-yellow-800">
                        Pending
                    </button>
                    <button
                        class="filter-btn px-3 py-1 rounded-full bg-green-300 hover:bg-green-400 text-green-700" id="test"
                    >
                        Completed
                    </button>
                    </div>
                    <input
                    id="task-search"
                    type="text"
                    placeholder="Search..."
                    class="border px-3 py-2 rounded-md shadow-sm"
                    />
                </div>

                <div id="task-list" class="grid gap-4 px-3 py-5 rounded-xl border border-solid border-white">
                    ${b()}
                </div>
            </div>
        </div>
    `,pageEvents:t}},v=e=>{l("Task Detail");let t;const a=JSON.parse(localStorage.getItem("tasks"))||[];a&&a.forEach(s=>{s.id===e&&(t=s)});function o(){const s=document.getElementById("update-btn");s&&x(s,a)}return{html:`
        <div class="min-h-screen">
            <div class="max-w-4xl mx-auto mt-6 px-4 fade-in">
            <a href="/task" data-nav class="text-blue-600 mb-4 inline-block hover:underline">&larr; Back to Tasks</a>
            <h2 class="text-2xl font-bold mb-2 text-blue-800 task-title">
                ${t.taskName}
            </h2>
            <p class="task-desc text-gray-700 mb-3">Detailed description...</p>
            ${t.completed?`<span class="text-xs mt-2 inline-block px-2 py-1 rounded bg-green-200 text-green-800 status-badge"
                >Completed</span>`:`<span class="text-xs mt-2 inline-block px-2 py-1 rounded bg-yellow-200 text-yellow-800 status-badge"
                >Pending</span>`}
                ${t.completed?"":`
                <button id="update-btn" class="bg-blue-600 text-white px-5 py-1 rounded-md hover:bg-blue-700 transition" data-task="${t.id}">
                        Completed <i class="fas fa-check-circle ml-1"></i>
                </button>
                `}
        </div>
    `,pageEvents:o}},k=()=>(l("PAGE NOT FOUND"),{html:`
            <div class="max-w-4xl mx-auto mt-6 px-4 fade-in min-h-screen">
                <section class="text-center">
                    <h1 class="text-3xl font-bold text-red-600 mb-2">404</h1>
                    <p class="text-gray-600 text-lg">Page not found</p>
                    <a href="/" data-nav class="text-blue-600 hover:underline">Return home</a>
                </section>
            </div>
        `});function y(e){document.querySelectorAll("[data-nav]").forEach(t=>{const a=t.getAttribute("href"),{page:o}=d(a);o===e?t.classList.add("active"):t.classList.remove("active")})}const c={home:f,task:h,taskDetail:v,notfound:k};function d(e){const t=e.replace(/^\/+/,"").split(/[?#]/)[0],a=t.split("/");return t===""||t==="home"?{page:"home"}:a[0]==="taskDetail"&&a[1]?{page:"taskDetail",args:[a[1]]}:c[t]?{page:t}:{page:"notfound"}}function w(e,...t){return e==="home"?"/":e==="task"?"/task":e==="taskDetail"&&t[0]?`/taskDetail/${t}`:e==="notfound"?"/notfound":"/"}async function i(e,...t){try{const a=c[e],o=w(e,...t);window.location.pathname!==o&&window.history.pushState({page:e,args:t},"",o);const{html:s,pageEvents:n}=await a(...t);window.app.innerHTML=s,y(e),n==null||n()}catch(a){console.log(a)}}window.addEventListener("popstate",async e=>{const{page:t,args:a}=e.state||d(window.location.pathname);t&&c[t]?await i(t,...a||[]):t!==null&&(console.log("error finding page"),i("notfound"))});window.addEventListener("DOMContentLoaded",async()=>{const{page:e,args:t}=d(window.location.pathname);e&&c[e]?await i(e,...t||[]):e!==null&&console.log("error finding page")});const N=document.getElementById("app");window.app=N;document.addEventListener("click",async e=>{if(e.target.matches("[data-nav]")){e.preventDefault();const t=e.target.getAttribute("href"),{page:a}=d(t);await i(a)}});
