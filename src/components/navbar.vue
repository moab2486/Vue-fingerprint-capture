<script>
    export default {
        methods:{
            toggleMenu(){
                console.log('boy')
                let a = document.getElementById('open');
                let b = document.getElementById('close');
                let x = document.getElementById('nav-wrapper');
                let y = document.getElementById('navs');   
                if(a.style.display === 'block'){
                    x.style.width = "70vw"
                    y.style.display = "block"
                    b.style.display = "block"
                    a.style.display = "none"
                }else{
                    x.style.width = "0"
                    y.style.display = "none"
                    b.style.display = "none"
                    a.style.display = "block"
                }
            }  
        }
    }
</script>

<template>
  <header>
    <div class="content header-content">
        <div class="header-menu">
            <img alt="bantaba logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
            <span class="menu-toggle" @click="toggleMenu">
                <i class="fa-solid fa-bars" id="open"></i>
                <i class="fa-solid fa-times" id="close"></i>
            </span>
        </div>

        <div id="nav-wrapper">
            <ul id="navs">
                <li class="nav-item muted-text">
                    <a href="javascript:void(0);">
                        <i class="fa-solid fa-house" />
                    </a>
                    <RouterLink to="/home">Home</RouterLink>
                </li>

                <li class="nav-item muted-text">
                    <a href="javascript:void(0);">
                        <i class="fa-solid fa-rocket" />
                    </a>
                    <RouterLink to="/browse-startup">Browse startup</RouterLink>
                </li>

                <li class="nav-item muted-text">
                    <a href="javascript:void(0);">
                        <i class="fa-solid fa-user-group" />
                    </a>
                    <RouterLink to="/">Browse community</RouterLink>
                </li>

                <li class="nav-item muted-text">
                    <a href="javascript:void(0);">
                        <span class="dot"></span>
                        <i class="fa-solid fa-comment-dots" />
                    </a>
                    <RouterLink to="/messaging">Messaging</RouterLink>
                </li>

                <li class="nav-item muted-text">
                    <a href="javascript:void(0);">
                        <i class="fa-solid fa-bell" />
                    </a>
                    <RouterLink to="/notification">Notifications</RouterLink>
                </li>
            </ul>
        </div>
    </div>
  </header>
</template>