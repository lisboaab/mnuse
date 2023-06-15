import * as User from "../models/modelUsers.js"
import * as dialogue from "./dialogueView.js"

if(User.getUserLogged().currentLevel == 0){
    dialogue.generateDialogue(1)
}else{
    const messageBallon = document.getElementById("messageBallon")
    messageBallon.style.display = "none"
}

function addSvg(){
    const svgBrain = document.getElementById("svgBrain")

    let svg = `<svg
    id="brain"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1080 1080"
    >
    <defs>
    <style></style>
    </defs>
    <g>
    <path
        class="cls-1"
        d="M563.033,716c.658-.81,2.654-1.469,6.645-2.787a84.475,84.475,0,0,1,10.719-2.787c8.946-1.72,7.133-1.887,18.007-4.073,12.687-2.551,22.526-3.807,24.652-4.073,11.9-1.491,11.981-.779,26.581-2.358,6.075-.657,14.482-1.581,24.653-3.43,11.067-2.012,18.283-4.038,22.723-5.145,25.253-6.3,39.979-9.366,55.092-4.287,10.252,3.445,8.034,6.542,28.94,16.506,13.052,6.221,16.486,6.239,18.864,10.5,8.055,14.442-16.247,41.236-17.363,42.445C769.1,771.077,753.7,777,746.532,779.666c-13.76,5.118-12.007,1.207-47.376,7.717-21.825,4.018-30.848,7.045-44.588,4.287-3.14-.63-2.833-.821-17.793-4.5-16.4-4.035-18.347-4.194-21.222-6.646-7.247-6.179-3.241-13.052-10.718-20.15-6.987-6.631-11.77-3.857-21.438-9.433C567.262,741.634,558.724,721.3,563.033,716Z"
    />

    <path
        class="cls-5"
        d="M809.492,361.533c-19.779-6.868-43.565,6.482-55.45,13.148a22.506,22.506,0,0,0-3.43,2.286c-7.83,6.392-8.6,16.4-10.29,29.726-3.829,30.281-5.821,25.977-5.145,34.871,1.349,17.737,2.024,26.606,4,31.44.6,1.475,2.709,6.319.572,9.718a7.42,7.42,0,0,1-4,2.859c-7.784,2.787-12.841,19.576-14.863,25.152-7.319,20.183-19.286,15.926-30.3,40.015-2.436,5.329-9.723,21.272-3.43,28.583,2.16,2.51,3.9,1.658,13.72,5.145,10.985,3.9,11.457,5.911,21.15,9.146,6.641,2.217,11.594,3.87,18.293,4,12.531.246,17.245-5.105,22.294-1.715,1.5,1.006,1.795,1.955,5.717,14.291,5.33,16.766,5.609,17.611,6.288,19.436,3.529,9.488,4.435,9.377,4.573,12.576.253,5.85-2.629,9.619-9.146,19.436-9.031,13.6-13.537,20.465-13.148,23.438.823,6.282,9.314,10.857,26.3,20.008,9.817,5.29,15.923,7.247,22.294,8a57.478,57.478,0,0,0,12,0c8.067-.584,21.752-1.574,36.013-8.575,0,0,2.583-1.268,6.3-3.616a103.127,103.127,0,0,0,13.133-10.1c27.971-25.793,37.157-76.6,37.157-76.6,5.645-31.224,1.58-55.36-2.287-78.316-6.627-39.347-19.6-66.494-22.294-72.028-5.714-11.721-11.431-20.772-22.866-38.872C850.008,404.965,841.562,393.82,833.5,384.4,821.711,370.619,815.816,363.729,809.492,361.533Z"
    />
    <path
        class="cls-6"
        d="M516.376,733.094c.829-3.372,8.7-.856,27.868-9,7.691-3.269,13.827-6.821,16.935-4.287,2.418,1.972.216,5.354,2.787,11.147.519,1.171,1.266,2.512,9.432,10.29,6.4,6.1,9.65,9.168,11.79,10.075,2.656,1.126,5.226,1.591,9.861,4.073a35.729,35.729,0,0,1,4.288,2.573c4.6,3.3,5.766,6.361,10.718,12.433,4.407,5.4,5.832,5.864,5.574,6.431C613.444,781.616,513.406,745.176,516.376,733.094Z"
    />
    <path
        class="cls-6"
        d="M514.95,735.549c2.13,6.5,6.182,15.209,14.54,22.038,8.2,6.7,14.048,6.283,23.845,10.468,11.387,4.865,12.949,9.472,41.294,39.117,21.871,22.875,17.28,16.3,26.754,27,15.486,17.48,24.532,31.4,34.314,29.751,1.668-.282,1.19-.65,9.888-4.959,13.341-6.609,14.523-5.769,15.7-7.713,4.134-6.812-21.645-32.984-31.932-56.916"
    />
    </g>
    <g id="temporal-lobe">
    <path
        class="temporal-lobe-bg"
        d="M466.17,532.636c-5.457,1.339-8.853-.148-18.292-1.143h0c-9.76,0-16.945-.525-17.72-.572-8.73-.529-36.023,9.147-62.881,29.154-6.759,5.036-15.151,11.364-24.009,21.723-6.28,7.345-4.97,7.564-13.72,18.293-10.577,12.97-14.465,15.068-14.863,21.151-.292,4.473,1.666,5.556,6.86,18.293,0,0,2.2,5.389,6.288,17.721,6.393,19.272,5.029,24.887,8.575,34.87,5.7,16.063,10.96,26.521,17.789,31.878,31.628,24.809,73.708,26.751,111.8,21.873,10.993-1.408,31.04-12.592,31.04-12.592a149.664,149.664,0,0,0,14.863-4c5.108-1.691,7.09-2.691,14.863-5.717,0,0,6.759,4.4,17.479.523,32.573-11.793,105.393-24.169,105.393-24.169,19.634-2.838,38.283-4.644,53.491-6.5,18.572-2.267,25.873-4.314,30.9-3.668,6.183.794,15.887-3.972,21.968-7.345,5.583-3.1,8.3-8.352,13.72-18.864,6.625-12.84,10.181-19.729,9.146-28.583-.853-7.3-3.732-6.575-7.431-18.864-4.025-13.369-1.585-17.442-5.717-21.151-4.626-4.153-9.341-.534-24.58-1.143-11.276-.451-17.837-5.055-29.353-8.486S693,582.372,690.828,578.94c-5.969-9.417,3.725-26.226-2.413-30.923-1.626-1.244-3.924,1.72-6.161,1.769,0,0-10.643.23-29.155,0-2.781-.035-14.068,1.042-35.47-14.983-25.922-19.41-32.568-30.71-39.987-44.469-8.181-15.169-9.31-29.464-13.148-29.154-3.512.284-1.128,12.134-9.146,20.008-10.06,9.879-23.3.55-37.729,10.861-7.4,5.288-4.035,7.828-14.292,16.578-10.767,9.186-14.392,12.183-24.3,21.548C475.551,533.46,472.187,531.16,466.17,532.636Z"
    />
    <path
        class="cls-7"
        d="M464.3,625.107c2.916,1,7.116-3.395,11.345-7.343a38.181,38.181,0,0,0,8.291-11.231"
    />
    <path
        class="cls-7"
        d="M464.359,628.253a39.684,39.684,0,0,0,5.573,13.783,33.081,33.081,0,0,0,15.435,12.8"
    />
    <path
        class="cls-7"
        d="M464.359,637.724a35.837,35.837,0,0,0-21.008,7.289,35.345,35.345,0,0,0-10.719,13.72"
    />
    <path
        class="cls-7"
        d="M688.374,578.948a60.752,60.752,0,0,1-22.145,16.644,66.378,66.378,0,0,1-27.374,5.65"
    />
    <path
        class="cls-7"
        d="M651.288,635.541c-.1.3,11.1,5,18.895,3.724a63.2,63.2,0,0,0,6.7-1.565c1.016-.321,2.8-.865,5.007-1.749a75.411,75.411,0,0,0,10.982-5.555c10.007-6.059,25.079-6.848,25.3-6,.21.821-13.786,2.371-15.863,9.861-1.353,4.879,3.094,9.6,1.714,10.719-1.585,1.284-6.464-5.761-15-7.289-5.589-1-7.151,1.362-14.577,2.144C661.181,641.224,651.38,635.249,651.288,635.541Z"
    />
    <path
        class="cls-7"
        d="M512.806,560.308a26.371,26.371,0,0,1,14.087-5.713c5.294-.363,8.13,1.357,13.88,3.061,2.051.608,16.423,4.73,29,1.836,6.916-1.591,8.257-4.145,19.266-10.814A175.111,175.111,0,0,1,617.629,534.8"
    />
    <path
        class="cls-7"
        d="M551.178,561.584a43.876,43.876,0,0,1,6.217,9.048c4.619,8.954,4.985,17.289,5.359,28.5a155.208,155.208,0,0,1-1.072,23.976"
    />
    <path
        class="cls-7"
        d="M562.968,588.6a48.419,48.419,0,0,1,26.517,7.382A41.577,41.577,0,0,1,605.2,614.1"
    />
    <path
        class="cls-7"
        d="M330.164,677.7a85.694,85.694,0,0,0,10.464,7.718,95.432,95.432,0,0,0,28.122,11.718"
    />
    <path
        class="cls-7"
        d="M428.488,574.8a19.456,19.456,0,0,1-3.716,9.432,20.171,20.171,0,0,1-5.716,4.859s-4.357,2.752-13.72,12.576c-2.2,2.312-5.967,7.15-9.432,28.3-3.356,20.481-5.035,30.721-2.573,40.587,1.383,5.54,5.549,22.234,21.437,32.584a49.441,49.441,0,0,0,27.725,7.717"
    />
    <path
        class="cls-7"
        d="M359.89,636.542a84.615,84.615,0,0,1,18.716,3.781,85.815,85.815,0,0,1,11.8,4.806"
    />
    <path
        class="cls-7"
        d="M413.7,705.211a32.53,32.53,0,0,1-.581,8.572A30.774,30.774,0,0,1,409.052,724"
    />
    <path
        class="cls-7"
        d="M680.013,692.393a79.157,79.157,0,0,1-24.52-20.494c-3.432-4.381-8.5-11.874-15.465-11.729-1.314.028-2.4.321-5.5,1.714-14.234,6.39-17.89,12.132-25.788,12.683-1.157.081-4.055-.631-9.851-2.056-16.355-4.022-16.55-6.542-22.89-6.171-4.741.278-4.323,1.669-16.805,4.114a65.6,65.6,0,0,1-8.4,1.371c-9.455.477-12.492-3.38-19.413-3.428-5.262-.036-9.11,2.375-16.806,7.2-12.91,8.092-13.172,13.811-21.151,15.425-6.533,1.322-8.089-2.161-17.385-2.056a40.632,40.632,0,0,0-17.675,4.456"
    />
    <path
        class="cls-7"
        d="M529.527,632.445a119.843,119.843,0,0,0-1.715,33.751"
    />
    <path
        class="cls-7"
        d="M487.225,723.623a47.54,47.54,0,0,0,7.717-31.727"
    />
    <path
        class="cls-7"
        d="M549.534,674.461a78.127,78.127,0,0,0,25.725,30.583"
    />
    <path
        class="cls-7"
        d="M583.833,642.163a57.767,57.767,0,0,0-6.86,21.889"
    />
    <path
        class="cls-7"
        d="M470.6,533.089c-13.6,29.954-15.629,39.869-15.709,49.675-.143,17.537,1.237,37.29,10.909,40.6"
    />
    <path
        class="cls-7"
        d="M314.655,626.553c4.257,6.449,9.425,20.359,11.507,32.283,3.633,20.8,2.542,20.8,4.574,28.011,1.654,5.872,4.653,16.517,11.433,25.724,6.223,8.452,15.459,15.456,34.87,22.294a195.988,195.988,0,0,0,70.885,10.862c26.872-1.39,31.83-6.588,125.763-32.584,14.167-3.921,26.225-7.171,42.873-9.718,22.153-3.39,26.174-1.537,49.734-5.145,23-3.522,68.813-8.547,89.531-11.132"
    />
    </g>
    <g id="parietal-lobe">
    <path
        class="parietal-lobe-bg"
        d="M666.293,249.343c5.233-1.766,11.87,4.685,13.72,6.431,9.754,9.2,23.235,13.436,34.3,21.008,26.22,17.945,22.58,13.139,38.586,24.867,30.657,22.462,22.373,24.239,48.019,42.016,4.589,3.181,11.3,12,10.941,14.912-1.188,9.547-48.18-5.523-65.82,18.1-6.7,8.975-8.747,21.519-10.575,32.727a132.039,132.039,0,0,0-1.429,25.153c.727,21.574,6.34,23.453,3.858,35.585-1.477,7.223-5.987,15.105-15.005,30.869a262.392,262.392,0,0,1-17.579,27.011c-7.532,10.118-11.3,15.178-15.434,17.578-11.535,6.694-26.916,6.094-40.087,2.358-29.036-8.237-45.955-29.245-49.519-33.013a183.565,183.565,0,0,1-19.936-25.3c-10.541-17.163-8.981-25.7-14.124-25.175-4.848.5-6.3,7.221-15.388,14.385-9.134,7.2-16.13,4.984-27.486,12.2-7.517,4.775-6.393,4.384-15.673,13.384-10.471,10.154-25.93,22.273-28.343,19.621-2.893-3.182,16.637-20.552,18.339-41.772,1.083-13.5-8.748-15.189-11.862-35.514-1.329-8.68-.68-25.574,6.432-44.374,2.027-5.36,9.188-22.431,26.009-34.442,7.479-5.341,15.5-8.7,22.009-11.433,18.5-7.758,26.858-7.061,28.725-12.862,2.5-7.758-13.417-13.91-11.576-25.081.967-5.865,8.086-9.5,14.292-14.363,9.406-7.371,19.086-10.557,33.441-15.149,15.231-4.872,20.086-4.9,23.437-10.289,3.009-4.835,2.559-10.376,7.289-12.72,2.421-1.2,3.133-.042,8.575-.857,4.747-.711,9.659-1.447,12.719-5,2.142-2.489,1.51-4.192,4.573-7.431A12.521,12.521,0,0,1,666.293,249.343Z"
    />
    <path
        class="cls-8"
        d="M663.647,249.479a355.038,355.038,0,0,1,40.587,18.65c50.265,27.057,85.536,61.744,108.9,90.035"
    />
    <path
        class="cls-8"
        d="M712.168,278.4a39.918,39.918,0,0,1-54.449,12.862"
    />
    <path
        class="cls-8"
        d="M717.313,351.6A58.946,58.946,0,0,1,734.54,363.07c4.775,4.551,9.322,12.723,11.61,16.465"
    />
    <path
        class="cls-8"
        d="M468.632,535.263c13.062-4.55,26.344-17.1,31.979-21.912,12.3-10.5,11.888-16.755,22.723-22.294,12.6-6.44,18.738-.839,28.3-8.146,9.577-7.321,7.232-15.864,14.578-18.436,8.421-2.948,13.39,7.623,30.011,12,2.683.707,21.148,5.29,37.729-4.287,13.395-7.738,19.152-21.016,21.008-25.3a148.287,148.287,0,0,0,9-29.154c.729-2.856,1.336-8.131,5.145-13.291a27.441,27.441,0,0,1,9-7.717"
    />
    <path
        class="cls-8"
        d="M561.612,423.517c-1.284,4.176-4.243,15.853,1.122,28.1a37.075,37.075,0,0,0,6.167,9.633"
    />
    <path
        class="cls-8"
        d="M635.234,472.74a55.026,55.026,0,0,1,18.007,25.3"
    />
    <path
        class="cls-8"
        d="M553.965,394.163c11-7.573,19.966-9.063,26.153-9,12.848.123,18.285,6.971,29.154,3.859,4.381-1.255,8.351-4.552,16.292-11.147,8.345-6.931,12.479-10.443,15-15.864,4.062-8.715.906-13.633,6-18.864,2.538-2.6,5.585-3.487,11.576-5.145,11.343-3.139,16.124-1.8,22.723-3.43,5.43-1.341,12.864-4.884,20.579-15.006"
    />
    <path
        class="cls-8"
        d="M621.276,328.566c7.146,3,16.515,10.29,23.66,13.291"
    />
    <path
        class="cls-8"
        d="M606.271,389.994a34.386,34.386,0,0,0,6.859,33.013"
    />
    <path
        class="cls-8"
        d="M744.109,299.2a42.023,42.023,0,0,0-12,36.014"
    />
    <path
        class="cls-8"
        d="M567.772,466.494a132.013,132.013,0,0,0,32.473,53.389,126.049,126.049,0,0,0,58.331,32.9"
    />
    <path
        class="cls-8"
        d="M689.874,545.6c-2.825,1.567-14.059,7.567-21.082,8.014a35.781,35.781,0,0,1-13.077-1.608"
    />
    </g>
    <g id="unactive-lobe">
    <path
        class="cls-9"
        d="M609.054,758.89a111.825,111.825,0,0,0,64.314-58.181"
    />
    <path
        class="cls-9"
        d="M662.006,724.841a157.752,157.752,0,0,1,66.477,3.271A160.643,160.643,0,0,1,784.2,755.588"
    />
    <path
        class="cls-9"
        d="M662.149,727.362a80.283,80.283,0,0,0,16.5,20.8c11.107,9.965,22.214,14.118,36.657,19.36A196.192,196.192,0,0,0,749.9,776.6"
    />
    <path
        class="cls-9"
        d="M637.354,746.155a99.841,99.841,0,0,0,15.72,20.653A91.96,91.96,0,0,0,682.157,786.6"
    />
    <path
        class="cls-9"
        d="M651.931,791.387a548.97,548.97,0,0,0,60.387-5.221c47.125-6.7,58.341-14.518,62.162-17.405,6.981-5.274,22.731-19.367,29.009-50.473"
    />
    <path
        class="cls-9"
        d="M811.858,358.577a145.158,145.158,0,0,1-16.883,3.859c-11.111,1.856-15.133,1.216-25.084,3.43-8.551,1.9-13.1,2.915-17.366,6-6.463,4.682-8.485,11.4-10.612,21.866a253.755,253.755,0,0,0-5.307,46.732c.043,16.75.129,25.125,2.412,35.585,3.356,15.371,6.985,31.993,22.672,43.731A56.292,56.292,0,0,0,787.257,530.5a55.332,55.332,0,0,0,21.225-.858,48.452,48.452,0,0,0,20.26-10.718c8.008-7.288,9.346-14.171,11.577-13.72.692.141,2.243,1.143,1.93,20.58-.163,10.076-.259,16.052-1.447,24.866-1.487,11.032-2.231,16.548-5.307,23.152a56.914,56.914,0,0,1-12.059,16.721"
    />
    <path
        class="cls-9"
        d="M798.773,531.906a28.9,28.9,0,0,1-6.431,14.577,28.4,28.4,0,0,1-8.574,6.86"
    />
    <path
        class="cls-9"
        d="M736.821,473.264a146.067,146.067,0,0,1-21.836,48.25c-7.743,11.081-14.771,20.868-28.2,26.8"
    />
    <path
        class="cls-9"
        d="M690.732,547.65c-.6,4.527-1.369,10.779-2.144,18.282-1,9.662-.955,11.273,0,12.989,2.787,5.01,8.54,2.294,20.151,7.216,6.367,2.7,5.659,3.95,12.862,7.216a60.857,60.857,0,0,0,19.28,5.376c6.406.568,10.058-.473,25.737-4.414,5.2-1.308,13.97-3.5,25.3-6.254"
    />
    <path
        class="cls-9"
        d="M766.189,595.454c1.761,17.874,5.972,31.253,10.243,36.562a29.056,29.056,0,0,0,4.9,4.749,25.318,25.318,0,0,0,10.242,4.273c15.228,3.072,31.172-3.8,31.173-3.8,12.191-4.788,19.859-13.337,24.047-18.519"
    />
    <path
        class="cls-9"
        d="M781.838,636.828a145.12,145.12,0,0,1-8.724,22.384,152.425,152.425,0,0,1-16.357,26.277"
    />
    <path
        class="cls-9"
        d="M888.165,663.123a71.641,71.641,0,0,1-16.235-2.572c-4.736-1.338-5.7-2.176-8.418-2-4.978.32-6.138,3.406-13.829,7.432-3.432,1.8-7.218,3.777-12.026,4.287a25.891,25.891,0,0,1-14.731-3.144"
    />
    <path
        class="cls-9"
        d="M837.217,670.841a35.459,35.459,0,0,1-7.146,8.122,37.966,37.966,0,0,1-7.145,4.716"
    />
    <path
        class="cls-9"
        d="M881.234,610.96a44.1,44.1,0,0,0,14.64,17.942,47.634,47.634,0,0,0,12.013,6.211"
    />
    <path
        class="cls-9"
        d="M864.8,431.034c-3.742.424-8.787,1.115-14.7,2.287-11.17,2.211-13.388,3.746-14.55,4.716-3.8,3.167-2.5,5.448-6.279,12.147a43.833,43.833,0,0,1-14.55,15.149c-5.377,3.464-10.159,6.544-15.928,5.573-7.865-1.323-11.959-9.234-13.171-11.575-3.437-6.642-2.269-11.342-2.91-18.436-.569-6.295-2.645-15.384-9.8-26.3"
    />
    <path
        class="cls-9"
        d="M786.483,439.037c1.065-.175,11.535-2.085,16.578-12.148,4.749-9.476.807-18.444.285-19.578"
    />
    <path
        class="cls-9"
        d="M887.638,470.263a34,34,0,0,1-7.114,19.063c-6.748,8.321-15.782,10.311-15.415,15.474.273,3.824,5.307,3.837,9.249,10.989A23.2,23.2,0,0,1,877.2,527.9a25.948,25.948,0,0,1-4.269,12.335c-3.971,6.623-7.134,6.9-7.351,10.54-.289,4.829,4.978,9.352,9.248,11.438,6.287,3.07,10.621.959,16.837,1.794,5.822.782,13.754,4.209,22.292,16.371"
    />
    <path
        class="cls-9"
        d="M876.565,563.942a65.592,65.592,0,0,1-2.143,26.368"
    />
    <path
        class="cls-9"
        d="M651.931,791.387c-18.065,3.931-42.518-22.948-52.068-37.106-1.828-2.71-6.589-.141-11.05-2.754-2.416-1.415-3.583-2.861-6.979-6.612-7.336-8.1-7.449-7.5-9.306-9.917-2.517-3.279-6.076-9.293-6.979-19.283"
    />
    <path
        class="cls-9"
        d="M803.415,714.158c13.837,1.2,32.846-2.656,39.518-4.445,12.261-3.287,17.627-6.768,19.436-8,7.539-5.148,11.428-10.984,16.006-17.721,21.639-31.845,19.819-26.65,23.009-33.013,13.528-26.985,12.94-53.949,12.576-70.6-.171-7.884-.773-13.4-1.571-20.722-4.448-40.782-15.356-69.742-19.294-79.6a316.878,316.878,0,0,0-16.006-33.442c-6.993-12.874-28.707-48.96-63.956-88.447"
    />
    <path
        class="cls-9"
        d="M756.111,686.29A115.574,115.574,0,0,0,776.834,703.3a85.816,85.816,0,0,0,25.3,10.718"
    />
    </g>
    <g id="frontal-lobe">
    <path
        class="frontal-lobe-bg"
        d="M659.848,252.868c-1.748-4.58-6.639-8.78-34.66-13.4-16.155-2.662-24.592-2.394-29.651-3.463-13.971-2.953-19.557-2.892-36.585-4.859-27.664-3.2-48.246-2.053-74.886-.572-17.232.958-40.33-.264-70.027,5.43-14.121,2.708-37.651,5.8-63.581,15.073-35.69,12.761-59.112,29.484-68.184,35.233A366.02,366.02,0,0,0,237.4,320.323c-20.927,18.048-34.169,25.756-46.781,43.5,0,0-24.7,37.377-33.329,82.34-1.211,6.314,2.479,3.936-1.35,32.8-1.722,12.98-2.7,18.54-1.027,23.106,3.592,9.775,5.554,9.862,8.589,20.3,1.382,4.75,3.614,8.04,4.171,18.615.035.659,4.346,7.034,6.56,16.011,4.768,19.335,17.581,32,21.15,35.443,8.3,8,15.912,11.751,25.724,16.577,18.46,9.081,33.846,11.936,50.306,14.863,22.125,3.936,33.358,5.808,41.73,1.144,3.72-2.073,7.928-14.078,19.879-29.437,11.381-14.625,13.817-12.058,18.993-17.439,9.784-10.17,16.253-19.415,21.306-22.678,17.75-11.463,24.986-15.039,34.393-17.762,17.351-5.022,37.211-5.394,46.626-3.577,5.922,1.143,9.7,3.208,14.292,1.144,5.287-2.376,4.783-7.09,12.576-20.008,4.816-7.984,6.346-8.4,10.289-16.006,3.454-6.661,5.181-9.992,5.717-13.72,1.7-11.833-8.486-15.13-12.576-31.44-2.671-10.654-1.057-20.147.571-29.726a82.554,82.554,0,0,1,5.145-18.579c3.015-7.31,6.316-12.2,10.29-18.007,7.775-11.367,11.661-17.05,16.578-20.579,6.511-4.673,13.433-10.076,30.913-13.765,9.041-1.909,18.032-4.663,19.391-8.958,1.5-4.737-5.957-3.519-6.859-13.291-.49-5.31-3.581-12.785-2.522-15.34,6.337-15.277,29.754-27.086,49.089-28.387,6.372-.429,9.786.766,14.042-2.531,6.959-5.392,6.633-11.214,13.134-15.48,6.339-4.16,10.569-2.6,17.331-7.043C656.216,259.461,661.611,257.487,659.848,252.868Z"
    />
    <path
        class="cls-10"
        d="M314.655,626.553a177.557,177.557,0,0,1,39-54.268c12.536-11.8,33.457-31.5,66.473-37.685a113.1,113.1,0,0,1,44.019.6"
    />
    <path
        class="cls-10"
        d="M238.129,421.03a27.693,27.693,0,0,0,16.006,20.579"
    />
    <path
        class="cls-10"
        d="M245.489,439.18a83.923,83.923,0,0,0-15.614,9.294,82.906,82.906,0,0,0-17.756,18.288"
    />
    <path
        class="cls-10"
        d="M333.022,508.492a51.666,51.666,0,0,0,18.007,23.152c15.94,11.3,33.076,9.42,37.157,8.861"
    />
    <path
        class="cls-10"
        d="M400.763,467.619c.256,2.633.646,6.6,1.143,11.433,1.392,13.543,1.465,12.937,1.429,13.72-.518,11.459-10.293,13.764-13.719,26.3-1.031,3.769-1.783,9.545.285,17.435"
    />
    <path
        class="cls-10"
        d="M180.106,567.658c9.173,4.333,16.523,5,21.437,4.859,10.17-.3,13.7-4.2,22.866-2.572,5.3.943,8.933,3.106,15.72,7.145,8.234,4.9,10.817,8.084,16.007,11.719,9.445,6.615,18.624,8.49,27.439,10.29a95.559,95.559,0,0,0,41.444-.858"
    />
    <path
        class="cls-10"
        d="M226.981,552.509a23.4,23.4,0,0,0-2,8.934,24.164,24.164,0,0,0,.857,7.072"
    />
    <path
        class="cls-10"
        d="M230.126,609.96a37.548,37.548,0,0,1,7.481-10.01,34.69,34.69,0,0,1,17.1-8.854"
    />
    <path
        class="cls-10"
        d="M199.439,352.665c8.121-.054,22.608-.093,28.114-.519,6.844-.529,10.38-1.05,13.434-3.715,2.291-2,2.28-3.433,5.145-7.432a43.721,43.721,0,0,1,9.146-9.432c7.268-5.287,16.344-5.144,21.437-4.573"
    />
    <path
        class="cls-10"
        d="M582.261,234.673c3.71,2.438,7.632,5.931,7.718,10.24.119,5.961-7.172,9.894-6.574,11.172s8.452-1.019,36.3-13.965"
    />
    <path
        class="cls-10"
        d="M487.939,229.1a37.127,37.127,0,0,0-4.736,10.337,34.1,34.1,0,0,0,.861,20.675"
    />
    <path
        class="cls-10"
        d="M407.623,270.972c2.15-2.908,5.916-7.11,11.583-9.1,9.224-3.235,14.994,2.374,22.228-2.022,3.217-1.955,5.067-5.347,8.766-12.13a92.228,92.228,0,0,0,7.513-18.2"
    />
    <path
        class="cls-10"
        d="M550.249,262.683c-6.141,2.547-13.794,6.938-19.15,14.863-5.974,8.838-5.153,16.244-9.718,17.435-5.469,1.428-13.89-7.31-16.459-16.481-3.4-12.12,4.123-22.516,5.311-24.106"
    />
    <path
        class="cls-10"
        d="M480.508,292.981a103.522,103.522,0,0,1,15.284-2.2,112.846,112.846,0,0,1,12.441-.184"
    />
    <path
        class="cls-10"
        d="M350.458,253.394c-2.731,6.71-5.249,15.7-5.717,19.865-1,8.883.664,12.174-2.286,15.72-3.693,4.439-8.533,1.97-12.842,7.471-2.136,2.726-2.711,5.583-5.451,6.249-2.4.582-4-1.11-4.949-.277-1.334,1.177,1.307,5.06,2.376,10.566a25.533,25.533,0,0,1-.285,11.433c-2.087,6.771-8.663,7.049-17.722,13.72-2.095,1.543-18.982,13.98-17.721,27.439.542,5.779,4.513,12.628,5.145,13.72,3.19,5.5,5.366,6.426,5.717,10,.5,5.1-3.161,10.916-8.289,13.147-4.873,2.121-9.674.394-13.148-.857-1.736-.625-2.73-1.188-8.861-5.145-11.292-7.288-12.574-8.382-15.434-8.575-2.184-.146-3.409.358-11.147,3.716-10.271,4.457-15.406,6.685-15.721,6.86-16.879,9.35-18.346,24.231-27.725,23.723-.422-.022-.294-.046-10-3.715-4.836-1.828-16.518-7-19.148-7.98"
    />
    <path
        class="cls-10"
        d="M242.13,368.153a43.442,43.442,0,0,1,17.885-6.289,45.046,45.046,0,0,1,23.846,3.716"
    />
    <path
        class="cls-10"
        d="M298.223,385.588c4.78-2.991,12.135-6.52,20.861-6,8.067.479,12.3,4.116,20.862,7.432,6.521,2.524,16.434,5.2,30.234,4.859"
    />
    <path
        class="cls-10"
        d="M293.293,399.879a77.161,77.161,0,0,1-3.616,16.736A66.047,66.047,0,0,1,283,430.748"
    />
    <path
        class="cls-10"
        d="M196.684,425.317a101.049,101.049,0,0,0-13.741,24.046c-4.3,10.918-7.6,19.292-5.676,27.44.483,2.04,1.845,6.4,0,11.033-.753,1.892-1.478,2.419-2.987,5.375a42.884,42.884,0,0,0-3.286,8.77c-1.621,5.959-.612,7.113-1.792,16.69-.953,7.736-1.7,7.724-1.494,11.316.306,5.265,2.1,8.57,4.182,13.3a134.056,134.056,0,0,1,6.871,19.8"
    />
    <path
        class="cls-10"
        d="M344.956,287.264c14.963-4.5,29.273-.819,34.778,7.432a23.928,23.928,0,0,1,3.831,12.862c-.021,2.876-.8,5.386-2.357,10.289-3.533,11.121-5.862,12.657-4.687,15.99.787,2.231,2.165,2.492,9.992,8.306,3.106,2.307,6.078,4.779,9.136,7.145,16.116,12.466,17.24,23.409,26.526,24.3,4.388.419,8.525-2.2,16.8-7.431,5.9-3.729,10.719-6.779,11.2-11.433.341-3.3-1.843-4.141-5.305-10.862-2.607-5.059-6.4-12.42-5.011-20.007,1.074-5.869,4.018-5.162,5.305-11.147,1.824-8.484-3.608-12.151-2.063-19.722.594-2.911,2.375-7.164,8.253-11.719"
    />
    <path
        class="cls-10"
        d="M451.925,352.9a36.7,36.7,0,0,0,23.086-3.538,34.53,34.53,0,0,0,16.93-21.223"
    />
    <path
        class="cls-10"
        d="M421.76,376.156c3.01,6.58,8,20.19,4.569,35.728-.978,4.436-2.369,10.406-7.136,15.645-4.381,4.815-9.874,7.1-22.534,9.632-12.58,2.516-23.315,4.663-40.789,4.378-20.941-.341-23.869-3.723-31.091.292-7.954,4.422-12.637,13.1-19.111,25.1-4.868,9.021-5.008,12.075-9.984,18.1-3.209,3.884-7.508,7.021-15.973,13.135-11.737,8.478-17.727,12.748-23.675,14.3-7.425,1.94-13.38,1.158-19.967.292a81.066,81.066,0,0,1-28.809-9.633"
    />
    <path
        class="cls-10"
        d="M250.991,481.053A34.561,34.561,0,0,0,265.6,493.344a31.92,31.92,0,0,0,14.612,2.588"
    />
    <path
        class="cls-10"
        d="M259.637,513.566a39.712,39.712,0,0,0,2.68,13.259c5.064,12.944,15.565,19.111,19.06,21.094a45.965,45.965,0,0,0,26.207,5.726"
    />
    <path
        class="cls-10"
        d="M418.46,432.153a54.2,54.2,0,0,1,18.293,32.013"
    />
    <path
        class="cls-10"
        d="M662.649,252.036c-3.685,6.391-7.786,9.091-10.908,10.367-7.961,3.254-14.64-.678-18.763,3.888-1.04,1.152-.432,1.2-3.927,8.639-1.925,4.1-2.888,6.147-3.491,6.911-3.68,4.666-9.907,4.025-18.326,5.616-5.418,1.024-9.721,2.842-18.327,6.479-5.282,2.233-32.12,13.575-32.726,28.509-.434,10.718,13,14.491,11.345,22.03-2.111,9.635-24.584,5.929-45.816,18.574-24.975,14.875-32.564,42.732-34.035,47.948a90.867,90.867,0,0,0-.436,45.787c2.879,11.159,5.905,13.286,7.608,18.112a31.722,31.722,0,0,1,1.119,5.214c.371,3.081.106,8.843-12.1,31.113-5.146,9.386-4.581,7.418-6.716,11.433A23.176,23.176,0,0,1,474,527.515a21.825,21.825,0,0,0-2.143,2.429c-1.384,2.052-1,2.905-2.144,4.288A7.646,7.646,0,0,1,466,536.518c.011.025.983-.348,5-2"
    />
    <path
        class="cls-10"
        d="M663.647,249.479c-20.866-6.456-53.641-13.691-69.81-16.379a530.7,530.7,0,0,0-87.033-7c-26.549.022-64.8.293-113.187,12-9.609,2.326-57.8,14.342-102.039,39.444a366.172,366.172,0,0,0-43.088,28.94c-3.824,3.041-11.852,9.568-21.437,18.65-16.947,16.057-32.868,29.979-45.232,52.735,0,0-14.722,25.023-23.152,61.738-2.311,10.066-4.988,26.877-5.144,27.868a114.038,114.038,0,0,0-1.5,11.575c-.443,7.515-.936,18.113,4.93,27.868a32.738,32.738,0,0,0,3.43,4.716"
    />
    <path
        class="cls-10"
        d="M163.814,511.636c-.957,12.9-1.172,42.616,18.007,68.6,21.036,28.5,55.5,36.19,80.6,42.016,7.871,1.828,42.683,4.3,52.231,4.3"
    />
    <path
        class="cls-10"
        d="M323.3,325.851a44.624,44.624,0,0,1,8.805-1.43,45.315,45.315,0,0,1,14.347,1.43"
    />
    </g>
    </svg>`

    svgBrain.innerHTML = svg
}

addSvg()


document.getElementById("frontal-lobe").addEventListener("click", function(){
    frontalModal.style.display = "block"
    overlay.style.display = "block"
})

document.getElementById("temporal-lobe").addEventListener("click", function(){
    tempModal.style.display = "block"
    overlay.style.display = "block"
})

document.getElementById("parietal-lobe").addEventListener("click", function(){
    parietalModal.style.display = "block"
    overlay.style.display = "block"
})

if(User.getUserLogged().currentLevel == 2){
    const tempModalBtn = document.getElementById("tempModalBtn")
    tempModalBtn.innerHTML = "Play"
    tempModalBtn.className = "modal-btn level-btn--active"
    tempModalBtn.addEventListener("click", () => {window.location.href = 'terapeuta.html'})
}else if(User.getUserLogged().currentLevel == 3){
    const tempModalBtn = document.getElementById("tempModalBtn")
    tempModalBtn.innerHTML = "Play"
    tempModalBtn.className = "modal-btn level-btn--active"
    tempModalBtn.addEventListener("click", () => {window.location.href = 'terapeuta.html'})
    const parietalModalBtn = document.getElementById("parietalModalBtn")
    parietalModalBtn.innerHTML = "Play"
    parietalModalBtn.className = "modal-btn level-btn--active"
    parietalModalBtn.setAttribute('data-bs-toggle', 'modal');
    parietalModalBtn.setAttribute('data-bs-target', '#modalUnlockWords')
    // parietalModalBtn.addEventListener("click", () => {window.location.href = 'terapeuta.html'})
}

const btnclose = document.getElementsByClassName("btnClose")[0]
const btnclose1 = document.getElementsByClassName("btnClose")[1]
const btnclose2 = document.getElementsByClassName("btnClose")[2]

btnclose.addEventListener("click", function() {
  frontalModal.style.display = "none"
  overlay.style.display = "none"
})
btnclose1.addEventListener("click", function() {
    parietalModal.style.display = "none"
    overlay.style.display = "none"
})
btnclose2.addEventListener("click", function() {
    temporalModal.style.display = "none"
    overlay.style.display = "none"
})

const overlay = document.getElementsByClassName("overlay")[0]

const frontalModal = document.getElementById('frontalModal')
const parietalModal = document.getElementById('parietalModal')
const temporalModal = document.getElementById('tempModal')


window.addEventListener('click', function(e) {
    if (e.target == frontalModal) {
        frontalModal.style.display = 'none';
        overlay.style.display = "none"
    }else if (e.target == parietalModal) {
        parietalModal.style.display = 'none';
        overlay.style.display = "none"
    } else if (e.target == temporalModal) {
        temporalModal.style.display = 'none';
        overlay.style.display = "none"
    }
})

document.getElementById("frontModalBtn").addEventListener("click", () => {
    if(User.getUserLogged().currentLevel == 0){
        User.changeCurrentLevel(1)
    }
    User.changeLevelLoad(1)
    window.location.href = "level.html"
})

const tempModalBtn = document.getElementById("tempModalBtn")

if(tempModalBtn.className == "modal-btn level-btn--active"){
document.getElementById("tempModalBtn").addEventListener("click", () => {
    User.changeLevelLoad(2)
    window.location.href = "level.html"
})}

const parietalModalBtn = document.getElementById("parietalModalBtn")

if(parietalModalBtn.className == "modal-btn level-btn--active"){
document.getElementById("parietalModalBtn").addEventListener("click", () => {
    User.changeLevelLoad(3)
    // window.location.href = "level.html"
})}


document.getElementById("btnCloseModalTempLobe").addEventListener("click", function(){
    let modal = document.getElementById("tempModal");
    modal.style.display = 'none';
    overlay.style.display = "none";
})

document.getElementById("btnCloseModalparietalLobe").addEventListener("click", function(){
    let modal = document.getElementById("parietalModal");
    modal.style.display = 'none';
    overlay.style.display = "none";
})