<template>
    <div class="copyright">
        <Header @showMenu="ChangeT($event)"/>

        <div class="login" :class="isMenu ? 'loginActive' : ''">
            <div class="login__form">
            <h2 class="login__title">Login</h2>
            <form action="">
                <label for="email">Username yoki Email</label>
                <input type="text" id="email" name="email" placeholder="Email...">
                <label for="Password">Password</label>
                <input type="text" id="Password" name="Password" placeholder="Password...">
                <div class="row">
                <span class="row">
                    <input type="checkbox" id="Remember" name="Remember" placeholder="Remember...">
                    <label for="Remember">Remember</label>
                </span>
                <a href="" class="overlay-link">Forgot your password?</a>
                </div>
                <button class="btn btn-main">Kirish</button>
            </form>
            <button class="cancelBtn" type="submit" @click="closeMenu()">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg>
            </button>
            </div>
        </div>

        <div class="section__wrapper">
            <div class="container row">
                <h2 class="title" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">Maxfiylik siyosati</h2>
                <div class="pagesNav" data-aos="fade-right" data-aos-once="true" data-aos-duration="1000">
                    <a href="/" class="pagesNav__link overlay-link">Asosiy</a> / 
                    <span>Maxfiylik siyosati</span>
                </div>
            </div>
            <animation />
        </div>


        <div class="copyright__main">
            <div class="container">
                <div class="copyright__section">
                    <h2 class="title">1. Umumiy qoidalar</h2>
                    <p class="info">Onlim platformasida spiker bo'lish uchun ro'yxatdan o'tganingizda, ushbu spiker shartlariga rioya qilishga rozilik bildirasiz. Spiker sifatida siz to'g'ridan-to'g'ri Onlim, (O'zbekistondagi ta’lim platformasi) bilan shartnoma tuzasiz.</p>
                    <p class="info">Onlim sizning veb sahifaga yuklangan shaxsiy ma’lumotlaringizni to’g’rilash yoki o’zgartirish huquqiga ega va har qanday holatda ham tarqalishidan himoya qilishni zimmasiga oladi. Kompaniya kontentni himoyalash maqsadida undan nusxa ko’chirish, yuklab olish va tarqatish holatlarini qat’iyan man etadi va veb sahifaga joylangan materiallar intellektual mulk agentligi tomonidan himoyalangan va Onlim ushbu mulk egasi hisoblanib undan foydalanish vakolatiga ega.</p>
                </div>
                <div class="copyright__section">
                    <h2 class="title">2. Atamalar</h2>
                    <p class="info"><b>2.1.</b> Onlim.uz onlayn o’quv kursi bo’yicha xizmat ko’rsatish uchun tuzilgan mazkur shartnomada qo’llangan atamalar quyidagicha tushuniladi:</p>
                    <p class="info"><b>«Shartnoma»</b> - Onlim.uz onlayn o’quv platformasi bo’yicha xizmat ko’rsatiluvchi amaldagi ushbu ommaviy oferta tushuniladi.</p>
                    <p class="info"><b>«Ariza»</b> - Foydalanuvchining Onlim.uzdagi shaxsiy kabineti, ro’yxatdan o’tgan elektron pochtasi orqali qilgan murojaatlari.</p>
                    <p class="info"><b>«Onlim.uz»</b> - Bilim beruvchi va bilim oluvchilarni bog’lovchi onlayn platforma.</p>
                    <p class="info"><b>«O’quv kursi»</b> - Video, audio vizual, matn fayllar tarzida bitta mavzu va nom bilan birlashtirilgan o’quv materiallarining to’plami. O’quv kurslar tavsifi saytda taqdim etiladi. O’quv kurslari tarkibiy o’zgartirib borilishi mumkin.</p>
                    <p class="info"><b>«Shaxsiy kabinet»</b> - Foydalanuvchining Onlim.uz saytida ro’yxatdan o’tishi natijasida shakllangan, himoyalangan sahifalar to’plami. Oferta shartlari doirasida sayt funksiyalaridan foydalanishi mumkin bo’lgan sahifa. Shaxsiy kabinetga kirish foydalanuvchining saytda kirishda ko’rsatgan ma’lumotlari (login va parol) asosida amalga oshiriladi.</p>
                    <p class="info"><b>«Tomonlar»</b> - Foydalanuvchi va Onlim.uz xizmati.</p>
                    <p class="info"><b>«Hisob»</b> -o’rnatilgan xizmat va topshirilgan mahsulot (o’quv materiallari) haqini to'lash uchun taqdim etilgan, shaxsiy kabinetdan yoki foydalanuvchining ro'yxatdan o’tish vaqtidagi elektron pochtasiga yuborilgan to’lov xabarnomasi.</p>
                    <p class="info"><b>«Xizmatlar»</b> -Onlim.uz saytida dasturlashni o’rgatish bo’yicha o’quv materiallarini onlayn taqdim etish va shu sayt orqali ko’rsatiladigan boshqa xizmatlar.</p>
                    <p class="info"><b>2.2.</b> Atamalar bo’yicha tushunmovchilik yuzaga kelganda O’zbekiston Respublikasining amaldagi qonunlari va Internetning texnik talablariga muvofiq hal qilinadi.</p>                    
                </div>
                <div class="copyright__section">
                    <h2 class="title">3. Shartnoma tuzish tartibi</h2>
                    <p class="info"><b>3.1.</b> O’zbekiston Respublikasi Fuqarolik Kodeksining 370-moddasiga asosan foydalanuvchi tomonidan quyidagi harakatlarning    amalga oshirilishi Mazkur taklifni to’laligicha qabul qilish hisoblanadi:</p>
                    <p class="info"><b>3.1.1.</b> Onlim.uz saytida ro’yxatdan o’tish.</p>
                    <p class="info"><b>3.1.2.</b> Tanlagan o’quv kursi uchun to’lovni amalga oshirish.</p>
                </div>
                <div class="copyright__section">
                    <h2 class="title">4. Narxlar</h2>
                    <p class="info">Narxlar Onlim tomonidan qat’iy o’rnatilgan 5$-200$ gacha bo’lgan tartibda belgilanishi lozim. Ushbu shartlar buzilishi ogohlantirish, keyinchalik tovon puli to’lanishiga olib keladi.</p>
                </div>
                <div class="copyright__section">
                    <h2 class="title">5. To'lovlar</h2>
                    <p class="info"><b>5.1.Daromad ulushi</b> | Daromad ulushlari Onlim ma’muriyati tomonidan 70% (Spiker) va 30% (Onlim) etib belgilangan.</p>
                    <p class="info"><b>5.2To'lovlarni qabul qilish</b> | Sizga o'z vaqtida to'lashimiz uchun siz Click yoki PayMe hisob qaydnomangizga egalik qilishingiz va sizning akkauntingiz bilan bog'liq to'g'ri elektron pochta xabarlarini bizga yetkazishingiz kerak. Biz aniqlangan firibgarliklar, intellektual mulk huquqlari buzilganligi yoki boshqa qonun hujjatlari buzilgan taqdirda biz mablag' to'lamaslik huquqini o'zimizda saqlab qolamiz.</p>
                    <p class="info"><b>5.3.Pulni qaytarish</b> | Spikerlar foydalanish shartlari bo'yicha pul mablag'lari qaytarib beriladigan operatsiyalardan daromad olmaydilar. Agar talaba biz tegishli spikerning to'lovini to'laganimizdan keyin pulni qaytarib berishni so'rasa, biz (1) o'qituvchiga yuborilgan keyingi to'lovdan qaytariladigan summani ushlab qolish huquqiga egamiz yoki (2) qo'shimcha to'lovlar olinmasa, spikerdan to'lovlar qaytariladigan summani qoplash uchun yetarli bo’lmasa, spikerdan qaytarilish zarur bo’lgan har qanday summani qaytarishni talab qilinadi.</p>
                </div>
                 <div class="copyright__section">
                    <h2 class="title">6. Akkauntingizni o'chirish</h2>
                    <p class="info">Akkauntingizni o'chirib tashlamasdan oldin biz sizga qolgan barcha rejalashtirilgan to'lovlarni amalga oshirish uchun tijorat maqsadlarida harakat qilamiz. Agar siz talabalar ilgari sizning kurslaringizga yozilgan bo'lsa, sizning ismingiz va yuborilgan kontentga sizning akkauntingiz o'chirilgandan so'ng ushbu talabalar kirish huquqini saqlab qolishlarini tushunasiz. Agar sizga yordam kerak bo'lsa yoki hisobingizni o'chirishda qiyinchiliklarga duch kelsangiz, bizni qo'llab-quvvatlash markazimiz orqali bog'lanishingiz mumkin.</p>
                </div>
                <div class="copyright__section">
                    <h2 class="title">7. Turli xil huquqiy atamalar:</h2>
                    <p class="info"><b>7.1. Ushbu shartlarni yangilash</b> | Vaqti-vaqti bilan biz ushbu shartlarni amaliyotimizni aniqlashtirish yoki yangi yoki turli xil amaliyotlarni aks ettirish uchun yangilashimiz mumkin (masalan, yangi xususiyatlarni qo'shganda) va Onlim ushbu shartlarni o'zgartirish va / yoki o'zgartirish kiritish huquqini o'zida saqlab qoladi. Har qanday holatda. Agar biz biron bir muhim o'zgarishlarni amalga oshirsak, biz sizning akkauntingizda ko'rsatilgan elektron pochta manziliga xabar beramiz. O'zgartirishlar, agar boshqacha ko'rsatilmagan bo'lsa, e'lon qilingan kundan boshlab kuchga kiradi.</p>
                    <p class="info"><b>7.2. Tarjimalar</b> | Ushbu shartlarning o’zbek tilidan boshqa har qanday versiyasi qulaylik uchun taqdim etiladi.</p>
                    <p class="info"><b>7.3. Oramizdagi munosabatlar</b> | Siz va biz hech qanday qo'shma korxona, sheriklik, ish bilan ta'minlash, pudratchi yoki agentlik munosabatlari oramizda mavjud emasligiga qo'shilamiz.</p>
                </div>
                <div class="copyright__section">
                    <h2 class="title">8. Biz bilan qanday bog'lanish mumkin</h2>
                    <p class="info">Biz bilan bog'lanishning eng yaxshi usuli - qo'llab-quvvatlash guruhimizga murojaat qilishdir. Sizning savollaringiz, tashvishlaringiz va bizning xizmatlarimiz haqidagi fikr-mulohazalaringizni eshitishga tayyormiz.</p>
                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>

<script>
import Animation from '../components/Animation.vue'
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
export default {
  components: { Footer, Header, Animation },
    name : "Copyright",
    data(){
        return{
            isMenu : false,
        }
    },
    methods : {
        ChangeT(title){
            this.isMenu=title;
            if(this.isMenu){
                document.body.style.overflowY = 'hidden'
            }
        },
        closeMenu(){
        this.isMenu = false
        document.body.style.overflowY = 'initial'
        },
    },
}
</script>

<style lang="scss">
.copyright{
    &__main{
        padding: 64px 0;
    }
    &__section{
        margin-bottom: 56px;
    }
}
</style>