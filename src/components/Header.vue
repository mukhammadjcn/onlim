<template>
  <!-- Header -->
  <div class="header">
    <!-- Container -->
    <div class="container row">
      <!-- Logo -->
      <a href="/" class="logo">
        <img src="../assets/logoo.png" alt="" />
      </a>

      <!-- Nav -->
      <nav class="nav row">
        <div class="search">
          <input type="text" placeholder="Qidirish..." />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"
            />
          </svg>
        </div>
        <div class="navbar" :class="isNavbar ? 'navbar_active' : ''">
          <a href="/courses" class="nav__link" @click="isNavbar = false"
            >Kurslar</a
          >
          <a href="/about" class="nav__link" @click="isNavbar = false"
            >Biz haqimizda</a
          >
          <button class="btn" @click="passEvent">Kirish</button>
        </div>
        <div class="cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-10.563-5l-2.937-7h16.812l-1.977 7h-11.898zm11.233-5h-11.162l1.259 3h9.056l.847-3zm5.635-5l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"
            />
          </svg>
          <span
            ><i>{{ count }}</i></span
          >
        </div>
        <span class="nav__divider"></span>
        <button class="btn kirish" @click="passEvent">Kirish</button>
        <button class="hamburgerBtn" @click="showNavbar()">
          <img src="../assets/intro/menu.svg" alt="" />
        </button>
      </nav>
    </div>
  </div>
</template>

<script>
import { store, mutations } from "../views/store";

export default {
  name: "Header",
  data() {
    return {
      isMenu: false,
      isNavbar: false,
    };
  },
  computed: {
    count() {
      return store.count;
    },
  },
  methods: {
    setCount: mutations.setCount,
    headerBG() {
      window.addEventListener("scroll", function () {
        this.document
          .querySelector(".header")
          .classList.toggle("header__active", window.scrollY > 10);
      });
    },
    passEvent() {
      this.isNavbar = false;
      this.isMenu = !this.isMenu;
      this.$emit("showMenu", this.isMenu);
    },
    showNavbar() {
      this.isNavbar = !this.isNavbar;
    },
  },
  mounted() {
    this.headerBG();
  },
};
</script>

<style lang="scss">
// Some initial reused properties
.hamburgerBtn {
  width: 28px;
  height: 28px;
  border: none;
  background: none;
  outline: none;
  display: none;
}
.header {
  top: -1px;
  transition: 0.3s ease-in-out;
  z-index: 3;
  position: fixed;
  width: 100%;
  padding: 24px 0;
  .container {
    justify-content: space-between;
  }
  .nav {
    gap: 36px;
    &__link {
      margin: 0 12px;
      font-size: 14px;
      font-weight: 500;
      line-height: 1.6;
      color: #333;
      position: relative;
      transition: 0.3s ease-in-out;
      &::after {
        content: "";
        position: absolute;
        left: auto;
        right: 0;
        bottom: -2px;
        height: 2px;
        width: 0;
        background: #0071dc;
        transition: 0.3s ease-in-out;
      }
      &:hover {
        color: #0071dc;
        &::after {
          width: 100%;
          left: 0;
          right: auto;
        }
      }
    }
    .cart {
      position: relative;
      svg {
        transform: rotateY(180deg);
      }
      span {
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
        i {
          font-style: inherit;
        }
      }
    }
    &__divider {
      display: inline-block;
      margin: 0 16px;
      position: relative;
      width: 1px;
      height: 36px;
      &::after {
        content: "";
        position: absolute;
        width: 1px;
        height: 100%;
        background: #bcbcbc;
      }
    }
  }
  .navbar {
    .btn {
      display: none;
    }
  }
  .search {
    position: relative;
    input {
      height: 44px;
      width: 280px;
      font-size: 16px;
      padding: 0 36px 0 8px;
      border-radius: 4px;
      border: 1px solid transparent;
      background-color: #f2f2f2;
      transition: 0.3s ease-in-out;
      outline: none;
      &::placeholder {
        color: #9f9f9f;
        font-family: "Poppins", sans-serif;
        font-weight: 500;
      }
      &:focus {
        border-color: #0071dc;
        transition: 0.3s ease-in-out;
        background: white;
      }
    }
    svg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 20px;
      width: 20px;
      height: 20px;
      path {
        fill: #0071dc;
      }
    }
  }
}
.logo {
  display: block;
  width: 148px;
  height: 62px;
  img {
    width: 100%;
  }
}
.btn {
  padding: 10px 24px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  background: #e5f1fb;
  color: #0071dc;
  font-weight: 600;
  letter-spacing: 0.3px;
  transition: 0.3s ease-in-out;
  &:hover {
    background: #0071dc;
    color: white;
  }
}
.header__active {
  background: #fff !important;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
  transition: 0.2s ease-in-out;
}

// Media for Mini Desktop or big Tablets
@media (max-width: 1000px) {
  .header {
    .search {
      display: none;
    }
  }
}

// Media for Big Phones
@media (max-width: 660px) {
  .hamburgerBtn {
    display: block;
  }
  .header {
    .navbar {
      position: fixed;
      top: 0;
      left: -150%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 80%;
      height: 100vh;
      background: #000000e3;
      z-index: 2;
      gap: 42px;
      transition: 0.3s ease-in-out;
      .btn {
        display: block;
        font-size: 20px;
      }
      a {
        color: white;
        font-size: 24px;
      }
    }
    .kirish {
      display: none;
    }
  }
  .navbar_active {
    left: 0 !important;
  }
}

// Media for phones
@media (max-width: 500px) {
  .header .nav {
    gap: 12px;
  }
  .header .nav__divider {
    height: 24px;
  }
  .footer .nav {
    flex-direction: column-reverse;
  }
}
</style>
