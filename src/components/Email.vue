<template>
    <div class="email">
        <div class="container row">
            <div class="email__info" data-aos="fade-right" data-aos-once="true">
                <p>Bizning Xabarlarimizga</p>
                <h2>Obuna bo'ling</h2>
            </div>
            <form action="#" data-aos="fade-left" data-aos-once="true">
                <div class="email__form">
                    <input type="email" placeholder="Emailingiz ...">
                    <button>Obuna bo'lish</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name : "Email"
}
</script>

<style lang="scss">
.email{
    background-color: #E6EDF6;
    //height: 170px;
    .container{
        padding: 36px 164px;
        justify-content: space-between;
    }
    &__info{
        flex-basis: 40%;
        h2{
            font-size: 30px;
            font-weight: 700;
            line-height: 1.6em;
            color: #0071DC;
        }
        p{
            font-size: 30px;
            font-weight: 400;
            line-height: 1.6em;
            color: #0071DC;
        }
    }
    form{
        flex-basis: 50%;
    }
    &__form{
        position: relative;
        button{
            position: absolute;
            height: 48px;
            width: 148px;
            border: none;
            color: #252525;
            background-color: #FFC221;
            border-radius: 6px;
            right: 4px;
            top: 50%;
            transition: 0.3s ease-in-out;
            transform: translateY(-50%);
            font-size: 15px;
            font-weight: 700;
            &:hover{
                background: #0071DC;
                color: white;
            }
        }
        input{
            border-radius: 8px;
            width: 100%;
            padding: 0 120px 0 24px;
            height: 60px;
            color: #ABABAB;
            background-color: #FFFFFF;
            border: 2px solid white;
            outline: none;
            font-size: 15px;
            color: #2525258c;
            font-weight: 700;
            &::placeholder{
                font-size: 15px;
                color: #2525258c;
                font-weight: 700;
            }
        }
    }
}
</style>