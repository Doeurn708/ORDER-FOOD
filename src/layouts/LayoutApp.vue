<script setup >
import AppNavbar from '@/components/AppNavbar.vue';
import Footer from '@/components/Footer.vue';

</script>

<template>
    <div>
        <AppNavbar/>
        
        <main >
          <RouterView />
        </main>

        <Footer/>
    </div>

</template>