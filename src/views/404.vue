<template>
    <div class="notFound">
        <div class="container row">
            <img src="../assets/404/page-404-image.png" alt="" data-aos="zoom-in-up" data-aos-once="true"> 
            <h3>Kechirasiz ! Ushbu sahifani topa olmadik</h3>
            <p>Aftidan, bu joyda hech narsa topilmadi. Balki quyidagi havolalardan birini yoki qidirishni sinab ko'ring?</p>
            <a href="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z"/></svg>
                <span>Bosh sahifaga qaytish</span>
            </a>
        </div>
    </div>
</template>

<style lang="scss">
.notFound{
    .container{
        flex-direction: column;
        height: 100vh;
        h3{
            font-size: 40px;
        }
        p{
            font-size: 16px;
            line-height: 30px;
            margin: 0 auto;
            padding: 16px 0 24px;
        }
        a{
            display: flex;
            align-items: center;
            gap: 24px;
            padding: 12px 24px;
            border: none;
            border-radius: 8px;
            font-size: 15px;
            font-weight: 700;
            transition: 0.3s ease-in-out;
            background: #0071dc;
            color: white;
            svg{
                path{
                    transition: 0.3s ease-in-out;
                    fill: white;
                }
            }
            &:hover{
                color: #031f42;
                background-color: #ffc221;
                svg path{
                    fill: black;
                }
            }
        }
    }
}

</style>