import React from 'react'

export default function Footer() {
  return (
    <footer class="bg-white dark:bg-gray-900">
        <div class="mx-auto w-full max-w-screen-xl p-4">
            <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0 w-1/4">
                <a href="https://flowbite.com/" class="flex items-center">
                <svg
                    width={40}
                    // height={104}
                    viewBox="0 0 152 104"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    {" "}
                    <path
                        d="M65.5668 68.7814L49.0278 53.4644C48.0738 52.5814 48.0738 51.1494 49.0278 50.2664L95.1868 7.51839C96.1398 6.63539 97.6858 6.63539 98.6388 7.51839L144.798 50.2664C145.752 51.1494 145.752 52.5814 144.798 53.4644L98.6388 96.2124C97.6858 97.0954 96.1398 97.0954 95.1868 96.2124L83.9388 85.7964"
                        stroke="#205A8A"
                        strokeWidth="12.469"
                        strokeMiterlimit={10}
                    />{" "}
                    <mask
                        id="mask0_2230_2452"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={1}
                        width={110}
                        height={103}
                    >
                        {" "}
                        <path d="M0 103.489H109.67V0.999969H0V103.489Z" fill="white" />{" "}
                    </mask>{" "}
                    <g mask="url(#mask0_2230_2452)">
                        {" "}
                        <path
                        d="M86.181 35.3284L102.72 50.6454C103.674 51.5284 103.674 52.9604 102.72 53.8434L56.561 96.5914C55.608 97.4744 54.062 97.4744 53.109 96.5914L6.95 53.8434C5.996 52.9604 5.996 51.5284 6.95 50.6454L53.109 7.89742C54.062 7.01442 55.608 7.01442 56.561 7.89742L67.809 18.3134"
                        stroke="#382E7A"
                        strokeWidth="12.469"
                        strokeMiterlimit={10}
                        />{" "}
                    </g>{" "}
                </svg>
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ms-3">RSEB</span>
                </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 w-3/4 sm:3">
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                    <ul class="text-gray-500 dark:text-gray-400 font-medium">
                        <li >
                            <a href="https://flowbite.com/" class="hover:underline">Debt</a>
                        </li>
                        <li>
                            <a href="https://tailwindcss.com/" class="hover:underline">Finances</a>
                        </li>
                        <li>
                            <a href="https://tailwindcss.com/" class="hover:underline">Equity</a>
                        </li>
                        <li>
                            <a href="https://tailwindcss.com/" class="hover:underline">Indices</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Downloads</h2>
                    <ul class="text-gray-500 dark:text-gray-400 font-medium">
                        <li >
                            <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Forms</a>
                        </li>
                        <li>
                            <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Regulations</a>
                        </li>
                        <li>
                            <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Reports</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Media</h2>
                    <ul class="text-gray-500 dark:text-gray-400 font-medium">
                        <li >
                            <a href="#" class="hover:underline">Press Release</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Newsletter</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
                    <ul class="text-gray-500 dark:text-gray-400 font-medium">
                        <li >
                            <a href="#" class="hover:underline">Profile</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Organogram</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Staff login</a>
                        </li>
                    </ul>
                 </div>
            </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">RSEBL</a>. All Rights Reserved.
            </span>
            <div class="flex mt-4 sm:justify-center sm:mt-0">
                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                    <span class="sr-only">Facebook</span>
                </a>
                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">                      
                        <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            fill="currentColor"
                            height="800px"
                            width="800px"
                            version="1.1"
                            id="Layer_1"
                            viewBox="0 0 461.001 461.001"
                            xmlSpace="preserve"
                        >
                    <g>
                        <path
                        style={{ fill: "#F61C0D" }}
                        d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728   c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137   C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607   c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"
                        />
                    </g>
                    </svg>
                    <span class="sr-only">Youtube</span>
                </a>
                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                        <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                    </svg>
                    <span class="sr-only">Twitter</span>
                </a>

            </div>
        </div>
        </div>
    </footer>
  )
}
