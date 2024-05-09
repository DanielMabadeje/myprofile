<template>
    <div class="container m-auto">
        <div class="heading md:py-9">
            <!-- <h2>My Works</h2> -->
            <h4 class="text-2xl text-gray-500 font-bold dark:text-white">My Portfolio At A Glance</h4>
        </div>
        <div class="md:flex">
            <div class="menu md:w-4/12 p-3">
                <p class="pb-9">I'm A Full stack developer who can design and develop an end-to-end application
                    independently and also collaboratively by handling all the work of coding, databases, servers and
                    platforms
                    I love to be part of a team that builds products to change the world positively</p>
                <ul class="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
                    <li v-for="(category, index) in categories" @click="filter(category.id)"
                        :class="{ selected: selectedCat === category }" class="w-full py-1">{{ category.name }}</li>

                    <li @click="filter('all')" :class="{ selected: selectedCat === 'all' }" class="py-1">All Works</li>

                </ul>
            </div>


            <div class="md:8/12">
                <div class="grid grid-cols-2 md:grid-cols-2 gap-4">
                    <div v-for="preview in filteredPreviews" :key="preview"
                        :class="'preview ' + preview.cat"
                        class="max-w-sm bg-white  border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
                        <a :href="preview.link">
                            <img class="rounded-t-lg" :src="preview.img_link" alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {{ preview.heading }}
                                </h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{preview.shortDesc}}</p>
                            <a href="#"
                                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-dark  rounded-lg hover:bg-gray-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                {{preview.actionBtn}}
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>

                    </div>
                    

                </div>
            </div>

        </div>
    </div>


</template>

<style scoped>
/* .preview {
    height: 100px;
    width: 1%;
    opacity: 0;
    animation: appear .5s ease-in-out forwards;
}

.cat1 {
    background: gold;
}

.cat2 {
    background: #333;
}

.cat3 {
    background: #ddd;
} */


button {
    cursor: pointer;
    margin: 5px 5px;
    border: 0;
    padding: 5px 10px;
    background: #ddd;
    border: 1px solid #ddd;
    transition: .3s ease-in-out;
    transition-property: background, border, color;

    &.selected {
        background: #fff;
        color: #333;
        border: 1px solid #333;
    }

    &:focus {
        outline: none;
    }

    &:hover {
        color: #fff;
        background: #333;
        border: 1px solid #333;
    }
}

@keyframes appear {
    to {
        width: 100%;
        opacity: 1;
    }
}
</style>

<script>
export default {

    mounted() {
        this.previews = this.randomizeArray(this.previews);
    },
    data() {
        return {
            categories: [
                {
                    id:             'cat1',
                    name:          'Freelance',
                },
                {
                    id:             'cat2',
                    name:          'Work With Teams',
                },
                {
                    id:             'cat3',
                    name:          'Personal Projects',
                },
            ],
            previews: [
                {
                    cat:        'cat2',
                    link:       'https://lightningworkgroup.com/',
                    img_link:   'https://media.licdn.com/dms/image/C4E05AQHAJIVWG2UvsA/videocover-low/0/1670403382604?e=2147483647&v=beta&t=7A03myHfZaQGFXmtFY9oqupn0RbY51P-P_8fNeeZI74',
                    heading:    'Lightning WorkGroup',
                    shortDesc:  'Lightning Workgroup is passionate about finding creative technical solutions to complex business problems.',
                    actionBtn:  'See Details'
                },
                {
                    cat:        'cat2',
                    link:       'https://thecareerbuddy.com/',
                    img_link:   'https://c76c7bbc41.mjedge.net/wp-content/uploads/tc/2023/03/Logo-21@4x-100-1024x709.jpg',
                    heading:    'CareerBuddy HQ',
                    shortDesc:  'CareerBuddy helps you hire & manage highly skilled talents across Africa for 80% less.',
                    actionBtn:  'See Details'
                },

                {
                    cat:        'cat2',
                    link:       'https://gbefunwa.com/',
                    img_link:   'https://media.licdn.com/dms/image/C4D1BAQGyL6f7iVZzZQ/company-background_10000/0/1632165354685/gbefunwa_cover?e=2147483647&v=beta&t=4vkKhBUbler-FKKNa4AtkPFnckIJoiDAer3Z6T7-88c',
                    heading:    'Gbefunwa',
                    shortDesc:  'Gbefunwa is a managed WordPress hosting company.',
                    actionBtn:  'See Details'
                },

                {
                    cat:        'cat2',
                    link:       'https://xiela.online/',
                    img_link:   'https://miro.medium.com/v2/resize:fit:1400/1*z7smcoXEOrrwFLx15RujVQ.png',
                    heading:    'Xiela',
                    shortDesc:  'Xiela is a management tool for smart schools',
                    actionBtn:  'See Details'
                },

                {
                    cat:        'cat2',
                    link:       '#',
                    img_link:   'https://cdn1.vc4a.com/media/2022/09/Middey-Logo-RGB-JPGFILES_Horizontal-Logo-Gold-Background-1024x512.jpg',
                    heading:    'Middey Technologies',
                    shortDesc:  'Middey is a Modern Era Payments, Payroll & Accounting Platform',
                    actionBtn:  'See Details'
                },

                {
                    cat:        'cat2',
                    link:       'https://travellab.ng/',
                    img_link:   'https://saspecialist.southafrica.net/cache/ce_img_cache/local/ac929c3064c92948/2317A4DC-8782-4DA9-AF87-F5F17C263972_566_197_s.png',
                    heading:    'Travellab Ng',
                    shortDesc:  "Travel Lab is an emerging online and offline travel agency that proffers travel solutions to today's businesses and leisure travellers.",
                    actionBtn:  'See Details'
                },

                {
                    cat:        'cat2',
                    link:       'https://starthub.com.ng/',
                    img_link:   'https://starthub.com.ng/wp-content/uploads/2021/01/starthubtech-e1656335867146.jpeg',
                    heading:    'Start Innovation Hub',
                    shortDesc:  'Start Innovation hub is an opportunity centre for technical talents and local businesses to leverage technology and start up faster.',
                    actionBtn:  'See Details'
                },
                
            ],
            selectedCat: 'all',
        }
    },
    computed: {
        filteredPreviews() {
            if (this.selectedCat === 'all') {
                return this.previews;
            } else {
                return this.previews.filter(preview => preview.cat === this.selectedCat);
            }
        }
    },
    methods: {
        filter(selection) {
            this.selectedCat = selection;
        },
        randomizeArray(array) {
            return array.sort(() => Math.random() - 0.5);
        },

    },
}
</script>