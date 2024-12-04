<script setup>
import MyWorks from '../components/MyWorks.vue'

</script>
<template>
  <main>
    <div class="container m-auto pt-20 p-5 md:w-9/12">
      <div class="pt-5 pb-20">
        <h2 class="text-3xl font-bold dark:text-white py-3">👋 Hello!</h2>
        <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">My name is Daniel Mabadeje, A
          Software Developer living in Akwa Ibom, Nigeria. I appreciate finding creative answers to challenging problems
          and creating tools that enable others to do the same.
          <br>
          I'm also the Co-founder/ Co-host of a PHP developer community called <a
            href="https://phptalks.community/">PHPTALKS</a>, a <a href="https://github.com/DanielMabadeje">GitHub
            user</a> and an Open Sourcer — I spend most of my free time learning new things, probably play drums,
          speaking at various technical conferences, or sharing knowledge and experience on my blog.
        </p>
      </div>



      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="grid gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg"
              src="https://scontent.fabb1-1.fna.fbcdn.net/v/t39.30808-6/415282261_1804198963360387_8901364081474012858_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGt6tZGkWmoELig5k-f-PtKPqQ-CJLJjWw-pD4IksmNbF2MspO2PzOXmop9107RabySkaI8CKCRYyKvaiDcoMu-&_nc_ohc=HRsMEUB2F80Ab6IArNT&_nc_zt=23&_nc_ht=scontent.fabb1-1.fna&oh=00_AfD-6pJTQbg0V2iG-QnLdxbE6_8X-D2MoaKb3B0mel-LFg&oe=6626266C"
              alt="">
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg"
              src="https://pbs.twimg.com/media/GCf0c_rXQAAha9W?format=jpg&name=medium" alt="">
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg"
              src="https://pbs.twimg.com/media/F4-cXi2XwAEIAZF?format=jpg&name=large" alt="">
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1677155107770/hY5y1PcU6.jpeg" alt="">
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg"
              src="https://media.licdn.com/dms/image/D5603AQENUCMOjhlLyA/profile-displayphoto-shrink_400_400/0/1704105364250?e=2147483647&v=beta&t=JsAYr4EUbTxZ3B7NBVQBBmkznltr3lZkTiuvjgGgSJU"
              alt="">
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg"
              src="https://scontent.fabb1-1.fna.fbcdn.net/v/t39.30808-6/375043510_1738559939924290_7387542355419285365_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEfS8QQJEvpUAP7iaWklhXoEgv1usm4pooSC_W6ybimiucTY_ZxJqnAVJuSxWpWV6J_rdG9pmYkUv1ufiQEb7R8&_nc_ohc=fihSDwopVhYAb6o9Ias&_nc_zt=23&_nc_ht=scontent.fabb1-1.fna&oh=00_AfCAcM4kyqHe1iU6838MYsR_Ki4U4m069qnzpbokpsTh7g&oe=66262AE7"
              alt="">
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg"
              src="https://pbs.twimg.com/media/FzPqS-tWwAUrnu3?format=jpg&name=medium" alt="">
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg"
              src="https://instagram.flos5-3.fna.fbcdn.net/v/t51.29350-15/463136320_1261397385279824_8350760975730724955_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.flos5-3.fna.fbcdn.net&_nc_cat=108&_nc_ohc=1Coenf_VH3cQ7kNvgHoF-ou&_nc_gid=3b16788657da453abfc8a79e72a37517&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQ3NzQzOTUzMzI3OTE5MDk5MA%3D%3D.3-ccb7-5&oh=00_AYBWdSKHftT_U1OFYx5piiof39Rfu4GTc0HsKqvQa97vCg&oe=6756B9B2&_nc_sid=7a9f4b"
              alt="">
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg"
              src="https://scontent.flos5-2.fna.fbcdn.net/v/t39.30808-6/462996660_1997090540737894_4106037861948768808_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHxTASeTO5uVOt9kH04Wju5N9O0BsvFksw307QGy8WSzEQ6pnWpsnSPaR6CKNNRD5dD-mNnK8LKaNmuc1AI1WMY&_nc_ohc=MTj8x8dLuOYQ7kNvgGZ9-c4&_nc_zt=23&_nc_ht=scontent.flos5-2.fna&_nc_gid=ApEFfL-IojGPU3-f2FZdykk&oh=00_AYBTMJJdm5KrJZk8HE0mgPKzda0QTCNZpl3OhKl-B-U6JQ&oe=6756A1E0" alt="">
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg"
              src="https://scontent.fabb1-1.fna.fbcdn.net/v/t39.30808-6/415263635_1804198756693741_2323325654896829939_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE5E0Lps3QZo_zniRRcB3yAA_zbSgdWSZ0D_NtKB1ZJnY5oBhM0TQtgyBcKClL8biLnblp1PMZekk4wtegvJjY4&_nc_ohc=nyK2SGz3eaMAb5qtCLZ&_nc_zt=23&_nc_ht=scontent.fabb1-1.fna&oh=00_AfBQedHVLX3SBTWUWPOakjad8mqkFeEfnhVU96ofXH1aNw&oe=662634C7"
              alt="">
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg"
              src="https://pbs.twimg.com/media/F9zAzUeWUAAuFmR?format=jpg&name=large" alt="">
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg"
              src="https://pbs.twimg.com/media/F-A7SWlXIAAhg8v?format=jpg&name=large" alt="">
          </div>
        </div>
      </div>


      <div class="pt-20 ">
        <h2 class="text-3xl font-bold dark:text-white py-3">Work!</h2>

        <MyWorks/>

        <div class="pt-20 md:w-3/5 m-auto">
          <h3 class="text-xl text-gray-500  dark:text-white">Other Personal/Freelance Projects</h3>
          <div class="py-5">
            <h3 class="text-3xl  dark:text-white"><a href="https://veohmo.com/">Veo HMO,</a> <a href="https://github.com/DanielMabadeje/recruitment-app-group-12">Recruitment Application,</a> <a href="https://app.workforyou.ch/">WorkForYou,</a> <a href="https://github.com/DanielMabadeje/Mvc-Framework">MVC Framework,</a> SmileSwap, <a href="https://myazabox.com/">Azabox Africa,</a> Halo, Rimplenet Plugin, Learnali</h3>
          </div>
        </div>
      </div>

      


    </div>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
