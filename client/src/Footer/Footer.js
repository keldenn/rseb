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
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 RSEBL. All Rights Reserved.
            </span>
            <div class="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-custom-1 dark:hover:text-white ms-5">                      
            <svg style={{ fill: "#4267B2" }} className="w-7 h-7" xmlns="http://www.w3.org/2000/svg"  height="800px" width="800px" viewBox="0 0 50 50">
                <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
            </svg>
                <span className="sr-only">Facebook</span>
            </a>
            <a href="#" class="text-gray-500 hover:text-custom-1 dark:hover:text-white ms-5">                      
            <svg style={{ fill: "#FF0000" }} className="w-7 h-7" xmlns="http://www.w3.org/2000/svg"   height="800px" width="800px"  viewBox="0 0 50 50">
            <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
            </svg>
                <span class="sr-only">Youtube</span>
            </a>
            <a href="#" class="text-gray-500 hover:text-custom-1 dark:hover:text-white ms-5">
                <svg className="w-7 h-7"  xmlns="http://www.w3.org/2000/svg"  height="800px" width="800px" viewBox="0 0 50 50">
                <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                </svg>
                <span class="sr-only">Twitter</span>
            </a>

            </div>
        </div>
        </div>
    </footer>
  )
}
