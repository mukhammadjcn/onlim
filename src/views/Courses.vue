<template>
  <!-- Courses Page -->
  <div class="courses">
    <!-- Header -->
    <Header @showMenu="ChangeT($event)" />

    <!-- Login Form -->
    <div class="login" :class="isMenu ? 'loginActive' : ''">
      <div class="login__form">
        <h2 class="login__title">Kirish</h2>
        <form action="">
          <label for="email">Username yoki Email</label>
          <input type="text" id="email" name="email" placeholder="Email..." />
          <label for="Password">Password</label>
          <input
            type="text"
            id="Password"
            name="Password"
            placeholder="Password..."
          />
          <div class="row">
            <span class="row">
              <input
                type="checkbox"
                id="Remember"
                name="Remember"
                placeholder="Remember..."
              />
              <label for="Remember">Eslab qolish</label>
            </span>
            <a href="" class="overlay-link">Parolni unutdingzimi?</a>
          </div>
          <button class="btn btn-main">Kirish</button>
        </form>
        <button class="cancelBtn" type="submit" @click="closeMenu()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Section wrapper -->
    <div class="section__wrapper">
      <div class="container row">
        <h2
          class="title"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          Kurslar
        </h2>
        <div
          class="pagesNav"
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <a href="/" class="pagesNav__link overlay-link">Asosiy</a> /
          <span>Kurslar</span>
        </div>
      </div>
      <animation />
    </div>

    <!-- Filter -->
    <div class="filter">
      <div class="container row">
        <div
          class="courses__number info"
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          Siz uchun <b>{{ coursesArr.length }}</b> ta kurs topildi
        </div>
        <button
          @click="showFilter()"
          class="courses__filter row btn"
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <span class="filterIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M19.479 2l-7.479 12.543v5.924l-1-.6v-5.324l-7.479-12.543h15.958zm3.521-2h-23l9 15.094v5.906l5 3v-8.906l9-15.094z"
              />
            </svg>
          </span>
          <span>Saralash</span>
          <span :class="isFilter ? 'rotateArrow' : ''" class="arrowBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
              />
            </svg>
          </span>
        </button>
      </div>

      <div
        :class="isFilter ? 'filter__active' : ''"
        class="container row filter__menu"
      >
        <div class="filter__box row">
          <h4 class="title">Ro'yhat</h4>
          <div class="filter__option row">
            <input type="radio" id="latest" name="bir" />
            <label for="latest">Yangilari</label>
          </div>
          <div class="filter__option row">
            <input type="radio" id="oldest" name="bir" />
            <label for="oldest">Eskilari</label>
          </div>
          <div class="filter__option row">
            <input type="radio" id="reytingUp" name="bir" />
            <label for="reytingUp">Reyting o'sish</label>
          </div>
          <div class="filter__option row">
            <input type="radio" id="reytingDown" name="bir" />
            <label for="reytingDown">Reyting kamayish</label>
          </div>
        </div>
        <div class="filter__box row">
          <h4 class="title">Yo'nalish</h4>
          <div class="filter__option row">
            <input type="checkbox" id="frontend" name="ikki" />
            <label for="frontend">Frontend</label>
          </div>
          <div class="filter__option row">
            <input type="checkbox" id="backend" name="ikki" />
            <label for="backend">Backend</label>
          </div>
          <div class="filter__option row">
            <input type="checkbox" id="grafik" name="ikki" />
            <label for="grafik">Grafik dizayn</label>
          </div>
          <div class="filter__option row">
            <input type="checkbox" id="til" name="ikki" />
            <label for="til">Til</label>
          </div>
        </div>
        <div class="filter__box row">
          <h4 class="title">Reyting</h4>
          <div class="filter__option row">
            <input type="radio" id="five" name="uch" />
            <label for="five">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M7.55163 0.908492C7.73504 0.536869 8.26496 0.53687 8.44837 0.908493L10.5287 5.1237C10.6015 5.27127 10.7423 5.37356 10.9052 5.39722L15.5569 6.07316C15.967 6.13276 16.1308 6.63674 15.834 6.92601L12.468 10.2071C12.3501 10.322 12.2964 10.4875 12.3242 10.6497L13.1188 15.2826C13.1889 15.6911 12.7601 16.0026 12.3933 15.8097L8.23267 13.6223C8.08701 13.5457 7.91299 13.5457 7.76733 13.6223L3.60667 15.8097C3.23985 16.0026 2.81114 15.6911 2.88119 15.2826L3.67581 10.6497C3.70363 10.4875 3.64985 10.322 3.53201 10.2071L0.165966 6.92601C-0.130793 6.63674 0.0329629 6.13276 0.443073 6.07316L5.09483 5.39722C5.25769 5.37356 5.39847 5.27127 5.4713 5.1237L7.55163 0.908492Z"
                  fill="#006AFF"
                />
              </svg>
              <span>5 - 4</span>
            </label>
          </div>
          <div class="filter__option row">
            <input type="radio" id="four" name="uch" />
            <label for="four">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M7.55163 0.908492C7.73504 0.536869 8.26496 0.53687 8.44837 0.908493L10.5287 5.1237C10.6015 5.27127 10.7423 5.37356 10.9052 5.39722L15.5569 6.07316C15.967 6.13276 16.1308 6.63674 15.834 6.92601L12.468 10.2071C12.3501 10.322 12.2964 10.4875 12.3242 10.6497L13.1188 15.2826C13.1889 15.6911 12.7601 16.0026 12.3933 15.8097L8.23267 13.6223C8.08701 13.5457 7.91299 13.5457 7.76733 13.6223L3.60667 15.8097C3.23985 16.0026 2.81114 15.6911 2.88119 15.2826L3.67581 10.6497C3.70363 10.4875 3.64985 10.322 3.53201 10.2071L0.165966 6.92601C-0.130793 6.63674 0.0329629 6.13276 0.443073 6.07316L5.09483 5.39722C5.25769 5.37356 5.39847 5.27127 5.4713 5.1237L7.55163 0.908492Z"
                  fill="#006AFF"
                />
              </svg>
              <span>4 - 3</span>
            </label>
          </div>
          <div class="filter__option row">
            <input type="radio" id="three" name="uch" />
            <label for="three">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M7.55163 0.908492C7.73504 0.536869 8.26496 0.53687 8.44837 0.908493L10.5287 5.1237C10.6015 5.27127 10.7423 5.37356 10.9052 5.39722L15.5569 6.07316C15.967 6.13276 16.1308 6.63674 15.834 6.92601L12.468 10.2071C12.3501 10.322 12.2964 10.4875 12.3242 10.6497L13.1188 15.2826C13.1889 15.6911 12.7601 16.0026 12.3933 15.8097L8.23267 13.6223C8.08701 13.5457 7.91299 13.5457 7.76733 13.6223L3.60667 15.8097C3.23985 16.0026 2.81114 15.6911 2.88119 15.2826L3.67581 10.6497C3.70363 10.4875 3.64985 10.322 3.53201 10.2071L0.165966 6.92601C-0.130793 6.63674 0.0329629 6.13276 0.443073 6.07316L5.09483 5.39722C5.25769 5.37356 5.39847 5.27127 5.4713 5.1237L7.55163 0.908492Z"
                  fill="#006AFF"
                />
              </svg>
              <span>3 - 2</span>
            </label>
          </div>
          <div class="filter__option row">
            <input type="radio" id="two" name="uch" />
            <label for="two">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M7.55163 0.908492C7.73504 0.536869 8.26496 0.53687 8.44837 0.908493L10.5287 5.1237C10.6015 5.27127 10.7423 5.37356 10.9052 5.39722L15.5569 6.07316C15.967 6.13276 16.1308 6.63674 15.834 6.92601L12.468 10.2071C12.3501 10.322 12.2964 10.4875 12.3242 10.6497L13.1188 15.2826C13.1889 15.6911 12.7601 16.0026 12.3933 15.8097L8.23267 13.6223C8.08701 13.5457 7.91299 13.5457 7.76733 13.6223L3.60667 15.8097C3.23985 16.0026 2.81114 15.6911 2.88119 15.2826L3.67581 10.6497C3.70363 10.4875 3.64985 10.322 3.53201 10.2071L0.165966 6.92601C-0.130793 6.63674 0.0329629 6.13276 0.443073 6.07316L5.09483 5.39722C5.25769 5.37356 5.39847 5.27127 5.4713 5.1237L7.55163 0.908492Z"
                  fill="#006AFF"
                />
              </svg>
              <span>2 - 1</span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <!-- Courses List -->
    <div class="courses__list">
      <Loading v-if="loading" />

      <div class="container row" v-if="!loading">
        <course
          v-for="(item, index) in coursesArr"
          :key="index"
          :course="item"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
        />
      </div>

      <div class="container row">
        <div class="pagenation row">
          <span
            :class="page == 1 ? 'pagenation__active' : ''"
            @click="selectPage(1)"
            >1</span
          >
          <span
            :class="page == 2 ? 'pagenation__active' : ''"
            @click="selectPage(2)"
            >2</span
          >
          <span
            :class="page == 3 ? 'pagenation__active' : ''"
            @click="selectPage(3)"
            >3</span
          >
          <span
            :class="page == 4 ? 'pagenation__active' : ''"
            @click="selectPage(4)"
            >4</span
          >
          <span>...</span>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Animation from "../components/Animation.vue";
import Course from "../components/Course.vue";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import Loading from "@/components/Loading.vue";

export default {
  name: "Courses",
  components: {
    Header,
    Footer,
    Course,
    Animation,
    Loading,
  },
  data() {
    return {
      isFilter: false,
      coursesArr: [],
      page: 1,
      isMenu: false,
      loading: false,
    };
  },
  methods: {
    ChangeT(title) {
      this.isMenu = title;
      if (this.isMenu) {
        document.body.style.overflowY = "hidden";
      }
    },
    closeMenu() {
      this.isMenu = false;
      document.body.style.overflowY = "initial";
    },
    showFilter() {
      this.isFilter = !this.isFilter;
    },
    async getCourse() {
      this.loading = true;
      await fetch(
        `https://thingproxy.freeboard.io/fetch/https://backend.eduon.uz/api-web/get-course/?page=${this.page}`
      )
        .then((response) => response.json())
        .then((data) => (this.coursesArr = data.data));
      this.loading = false;
    },
    selectPage(page) {
      this.page = page;
      this.getCourse();
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
  mounted() {
    this.getCourse();
  },
};
</script>

<style lang="scss">
// Courses scss codes
.courses {
  overflow: hidden;
  &__list {
    padding: 48px 0 64px;
    .container {
      flex-wrap: wrap;
      gap: 24px;
      .course {
        border-radius: 8px;
        flex-basis: 23%;
        box-shadow: 0 0 10px rgba(51, 51, 51, 0.15);
        &__info {
          padding: 24px 16px;
          border-radius: 0 0 8px 8px;
        }
        &__img {
          height: 200px;
          overflow: hidden;
          border-radius: 8px 8px 0 0;
        }
      }
    }
  }
  &__number {
    font-size: 20px;
    b {
      color: #484848;
    }
  }
  &__filter {
    padding: 14px 24px;
    &:hover {
      svg path {
        fill: white !important;
      }
    }
  }
  .filter {
    padding: 64px 0 0;
    .container {
      justify-content: space-between;
    }
    .filterIcon {
      width: 18px;
      margin-right: 10px;
      height: 18px;
      svg {
        width: 100%;
        height: 100%;
        path {
          fill: #0071dc;
          transition: 0.3s ease-in-out;
        }
      }
    }
    .arrowBtn {
      width: 10px;
      margin-left: 10px;
      svg {
        width: 100%;
        height: 100%;
        path {
          fill: #0071dc;
          transition: 0.3s ease-in-out;
        }
      }
    }
    &__box {
      flex-direction: column;
      align-items: flex-start;
      gap: 6px;
      .title {
        font-size: 20px;
        margin-bottom: 24px;
      }
      &:nth-child(3) {
        label {
          gap: 12px;
          display: flex;
          align-items: baseline;
          flex-direction: row-reverse;
          justify-content: flex-start;
          width: 72px;
        }
      }
    }
    &__menu {
      //height: 240px;
      //padding: 32px 16px;
      height: 0;
      padding: 0;
      justify-content: space-around !important;
      background-color: #f9f9fb;
      margin-top: 24px;
      border-radius: 8px;
      overflow: hidden;
      transition: 0.3s ease-in-out;
    }
    &__option {
      input {
        margin-right: 6px;
        height: 18px;
        width: 18px;
      }
      label {
        color: #696969;
        font-size: 16px;
        line-height: 26px;
      }
    }
  }
  .pagenation {
    margin-top: 52px;
    gap: 8px;
    span {
      width: 36px;
      height: 36px;
      //background: #0574dc;
      display: flex;
      align-items: center;
      font-size: 20px;
      justify-content: center;
      border-radius: 50%;
      //color: white;
      font-weight: 700;
      cursor: pointer;
    }
    .pagenation__active {
      color: white;
      background: #0574dc;
    }
  }
}

// Some reused codes for styling
.filter__active {
  height: 240px !important;
  padding: 32px 16px !important;
}
.rotateArrow {
  transform: rotate(180deg);
  transition: 0.3s ease-in-out;
}
.pagesNav {
  z-index: 2;
  position: absolute;
  left: 36px;
  top: 24px;
  color: #252525;
  &__link {
    transition: 0.3s ease-in-out;
    color: #9a9a9a;
    position: relative;
    &:hover {
      color: #252525;
      &::after {
        background-color: #252525;
      }
    }
  }
}
.section__wrapper {
  overflow: hidden;
  position: relative;
  padding: 0;
  margin-top: 110px;
  height: 200px;
  background-color: #f8f8f8;
  .container {
    //z-index: 2;
    position: relative;
    height: 100%;
  }
}

// Media for Tablets
@media (max-width: 1000px) {
  .courses__list .container .course {
    flex-basis: 30%;
  }
}

// Media for small Tablets
@media (max-width: 776px) {
  .courses__list .container .course {
    flex-basis: 45%;
  }
}

// Media for big Phones
@media (max-width: 680px) {
  .filter__active {
    flex-direction: column;
    height: 640px !important;
    align-items: flex-start !important;
    padding: 32px !important;
  }
}

// Media For phones
@media (max-width: 500px) {
  .courses__list .container .course {
    flex-basis: 98%;
  }
  .filter {
    .container {
      flex-direction: column;
      align-items: flex-end;
    }
  }
}
</style>
