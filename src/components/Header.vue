<template>
    <div class="header">
        <div class="container row">
            <a href="/" class="logo">
                <img src="../assets/logoo.png" alt="">
            </a>
            <nav class="nav row">
                <div class="search">
                    <input type="text" placeholder="Qidirish...">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg>
                </div>
                <div class="navbar">
                    <a href="#" class="nav__link">Kurslar</a>
                    <a href="#" class="nav__link">Biz haqimizda</a>
                </div>
                <div class="cart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-10.563-5l-2.937-7h16.812l-1.977 7h-11.898zm11.233-5h-11.162l1.259 3h9.056l.847-3zm5.635-5l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
                    <span><i>0</i></span>
                </div>
                <span class="nav__divider"></span>
                <button class="btn">Kirish</button>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name : "Header"
}
</script>

<style lang="scss">
.header{
    z-index: 2;
    position: fixed;
    width: 100%;
    background: #fff;
    padding: 24px 0;
    box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
    .container{
        justify-content: space-between;
    }
    .nav{
        gap: 36px;
        &__link{
            margin: 0 12px;
            font-size: 14px;
            font-weight: 500;
            line-height: 1.6;
            color: #333;
            position: relative;
            transition: 0.3s ease-in-out;
            &::after{
                    content: "";
                    position: absolute;
                    left: auto;
                    right: 0;
                    bottom: -2px;
                    height: 2px;
                    width: 0;
                    background: #0071DC;
                    transition: 0.3s ease-in-out;
            }
            &:hover{
                color: #0071DC;
                &::after{
                    width: 100%;
                    left: 0;
                    right: auto;
                }
            }
        }
        .cart{
            position: relative;
            svg{
                transform: rotateY(180deg);
            }
            span{
                width: 16px;
                height: 16px;
                position: absolute;
                top: -6px;
                text-align: center;
                right: -6px;
                border-radius: 20px;
                color: #fff;
                background: #0574dc;
                font-weight: 700;
                font-size: 10px;
                line-height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                i{
                    font-style: inherit;
                }
            }
        }
        &__divider{
            display: inline-block;
            margin: 0 16px;
            position: relative;
            width: 1px;
            height: 36px;
            &::after{
                content: '';
                position: absolute;
                width: 1px;
                height: 100%;
                background: #bcbcbc;
            }
        }
    }
    .search{
        position: relative;
        input{
            height: 44px;
            width: 280px;
            font-size: 16px;
            padding: 0 36px 0 8px;
            border-radius: 4px;
            border: 1px solid transparent;
            background-color: #F2F2F2;
            transition: 0.3s ease-in-out;
            outline: none;
            &::placeholder{
                color: #9F9F9F;
                font-family: 'Poppins', sans-serif;
                font-weight: 500;
            }
            &:focus{
                border-color: #0071DC;
                transition: 0.3s ease-in-out;
                background: white;
            }
        }
        svg{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 20px;
            width: 20px;
            height: 20px;
            path{
                fill: #0071DC;
            }
        }
    }
}
.logo{
    display: block;
    width: 148px;
    height: 62px;
    img{
        width: 100%;
    }
}
.btn{
    padding: 10px 024px;
    border: none;
    border-radius: 6px;
    font-size: 14px;
    background: #E5F1FB;
    color: #0071dc;
    font-weight: 600;
    letter-spacing: 0.3px;
    transition: 0.3s ease-in-out;
    &:hover{
        background: #0071dc;
        color: white;
    }
}

</style>