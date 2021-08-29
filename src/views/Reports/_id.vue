<template>

    <!-- Single Page for Courses -->
    <div class="singlePage">

        <!-- Header -->
        <Header  @showMenu="ChangeT($event)"/>

        <!-- Login form display btn clicked -->
        <div class="login" :class="isMenu ? 'loginActive' : ''">
            <div class="login__form">
            <h2 class="login__title">Kirish</h2>
            <form action="">
                <label for="email">Username yoki Email</label>
                <input type="text" id="email" name="email" placeholder="Email...">
                <label for="Password">Password</label>
                <input type="text" id="Password" name="Password" placeholder="Password...">
                <div class="row">
                <span class="row">
                    <input type="checkbox" id="Remember" name="Remember" placeholder="Remember...">
                    <label for="Remember">Eslab qolish</label>
                </span>
                <a href="" class="overlay-link">Parolni unutdingizmi?</a>
                </div>
                <button class="btn btn-main">Kirish</button>
            </form>
            <button class="cancelBtn" type="submit" @click="closeMenu()">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg>
            </button>
            </div>
        </div>

        <!-- Wrapper bottom header, have Pagenation -->
        <div class="section__wrapper">
            <div class="container row">
                <h2 class="title" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">{{singleReport.data.name}}</h2>
                <div class="pagesNav" data-aos="fade-right" data-aos-once="true" data-aos-duration="1000">
                    <a href="/" class="pagesNav__link overlay-link">Asosiy</a> / 
                    <a href="/courses" class="pagesNav__link overlay-link">Kurslar</a> / 
                    <span>{{singleReport.data.name}}</span>
                </div>
            </div>
            <animation />
        </div>

        <!-- Main -->
        <div class="singlePage__main">
          <div class="container row">

            <!-- Left side section (includes videos and information) -->
            <div class="singlePage__info" data-aos="fade-right" data-aos-once="true" data-aos-duration="1000">
              <h1 class="title">{{singleReport.data.name}}</h1>
              <div class="singlePage__name row">
                <span class="author">{{singleReport.data.author.full_name}}</span>
                <span class="divider"></span>
                <span class="date">Oxirgi marta yangilanishi : {{postTime(singleReport.data.date)}}</span> 
              </div>
              <div class="singlePage__selled row">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c-5.083 0-8.465 4.949-3.733 13.678 1.596 2.945-1.725 3.641-5.09 4.418-3.073.709-3.187 2.235-3.177 4.904l.004 1h23.99l.004-.969c.012-2.688-.093-4.223-3.177-4.935-3.438-.794-6.639-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.731-13.678m0 1c1.89 0 3.39.764 4.225 2.15 1.354 2.251.866 5.824-1.377 10.06-.577 1.092-.673 2.078-.283 2.932.937 2.049 4.758 2.632 6.032 2.928 2.303.534 2.412 1.313 2.401 3.93h-21.998c-.01-2.615.09-3.396 2.401-3.93 1.157-.266 5.138-.919 6.049-2.94.387-.858.284-1.843-.304-2.929-2.231-4.115-2.744-7.764-1.405-10.012.84-1.412 2.353-2.189 4.259-2.189"/></svg>
                <p><span>{{singleReport.data.sell_count}}</span> kishi allqachon kursni sotib oldi</p>
              </div>
              <div class="singlePage__video">
                <iframe :src="singleReport.data.trailer.url" frameborder="0" v-if="singleReport.data.trailer.url"></iframe>
                <div class="notContent" v-if="!singleReport.data.trailer.url">
                  <svg xmlns="http://www.w3.org/2000/svg" id="a6afbdd4-4f8a-4a84-bbe8-d87b6169081e" data-name="Layer 1" width="747.75751" height="668.84054" viewBox="0 0 747.75751 668.84054"><title>noted</title><path d="M927.17065,245.86427c26.72006,38.98517,20.80717,89.48769,20.80717,89.48769s-49.23467-12.7049-75.95473-51.69006-20.80718-89.48769-20.80718-89.48769S900.45058,206.87911,927.17065,245.86427Z" transform="translate(-227.12124 -115.57973)" fill="#2f2e41"/><path d="M907.945,253.30828c3.12667,47.15961,39.01681,83.17856,39.01681,83.17856S977.78266,296.045,974.656,248.88536s-39.01682-83.17856-39.01682-83.17856S904.81836,206.14867,907.945,253.30828Z" transform="translate(-227.12124 -115.57973)" fill="#0071dc"/><path d="M601.16721,116.56176,963.94182,298.9512a17.15473,17.15473,0,0,1,9.41008,16.48217L952.27481,627.63773a8.49961,8.49961,0,0,1-12.31475,7.013L568.91284,445.287,587.962,124.17251A9.1232,9.1232,0,0,1,601.16721,116.56176Z" transform="translate(-227.12124 -115.57973)" fill="#d0cde1"/><path d="M605.34247,122.92382l353.86394,177.9095a16.73337,16.73337,0,0,1,9.17895,16.07732L947.826,621.44648a8.29085,8.29085,0,0,1-12.01228,6.84077L573.88034,443.57476l18.58127-313.22712A8.89911,8.89911,0,0,1,605.34247,122.92382Z" transform="translate(-227.12124 -115.57973)" fill="#3f3d56"/><path d="M620.85055,146.55434,941.61776,307.824a15.1683,15.1683,0,0,1,8.32044,14.57362L931.30173,598.45039a7.5154,7.5154,0,0,1-10.88877,6.201L592.33107,437.21494l16.84337-283.93113A8.06678,8.06678,0,0,1,620.85055,146.55434Z" transform="translate(-227.12124 -115.57973)" fill="#fff"/><path d="M289.86708,598.9106,653.105,781.84248a24.18508,24.18508,0,0,0,21.78584-.02841L943.60452,645.40645c3.15077-3.15087,2.71071-7.82029,1.70307-11.326a25.229,25.229,0,0,0-1.98686-4.89647l-36.61767-19.25973L598.83151,456.31491l-18.39407-9.7647a34.05929,34.05929,0,0,0-31.63579-.12777L289.75342,580.985a10.05764,10.05764,0,0,0,.11366,17.9256Z" transform="translate(-227.12124 -115.57973)" fill="#d0cde1"/><path d="M289.86708,598.9106,653.105,781.84248a24.18508,24.18508,0,0,0,21.78584-.02841L943.60452,645.40645c3.15077-3.15087,2.71071-7.82029,1.70307-11.326L677.39709,773.334a23.37,23.37,0,0,1-21.19939.18164L284.4453,588.30848A10.01705,10.01705,0,0,0,289.86708,598.9106Z" transform="translate(-227.12124 -115.57973)" opacity="0.1"/><path d="M634.63782,653.72083,517.00265,594.27572a16.52947,16.52947,0,0,0-15.244.1735l-68.24076,36.45739a4.88152,4.88152,0,0,0,.10227,8.66427l119.941,60.48308a13.586,13.586,0,0,0,12.78587-.29411L634.86,661.161A4.20291,4.20291,0,0,0,634.63782,653.72083Z" transform="translate(-227.12124 -115.57973)" opacity="0.1"/><path d="M911.68665,643.779l-126.5861,67.24886a10.2967,10.2967,0,0,1-9.47746.09542l-357.66015-180.87a6.08239,6.08239,0,0,1,.04678-10.879l123.6145-61.18293a13.40423,13.40423,0,0,1,11.97733.04264L911.631,638.62577A2.90134,2.90134,0,0,1,911.68665,643.779Z" transform="translate(-227.12124 -115.57973)" opacity="0.1"/><rect x="766.90324" y="273.07164" width="1.41945" height="130.11848" transform="translate(-105.22868 757.90833) rotate(-63.43495)" fill="#0071dc"/><rect x="766.90383" y="290.49228" width="1.41827" height="130.75937" transform="translate(-125.90958 761.62113) rotate(-62.90908)" fill="#0071dc"/><rect x="763.355" y="338.2919" width="1.41951" height="74.90016" transform="translate(-145.30545 769.58676) rotate(-62.93456)" fill="#0071dc"/><path d="M366.64816,429.1266s-28.38045-12.36653-41.71067.69684S360.62806,438.58675,366.64816,429.1266Z" transform="translate(-227.12124 -115.57973)" fill="#3f3d56"/><path d="M317.6426,370.47769C327.18,354.36241,346.049,353.61137,346.049,353.61137s18.38679-2.35129,30.18179,22.19249c10.99389,22.87681,26.16686,44.96485,2.44273,50.32014l-4.28527-13.33766L371.73444,427.117a92.82684,92.82684,0,0,1-10.15067.17348c-25.40663-.82028-49.6026.24-48.82352-8.877C313.7959,406.29377,308.46569,385.98382,317.6426,370.47769Z" transform="translate(-227.12124 -115.57973)" fill="#2f2e41"/><path d="M304.29716,662.62032s12.0402,22.36036,19.78032,22.36036,6.88011,14.62023,5.16008,18.06029-6.02009,11.18018.86,22.36036c2.40321,3.90523,1.97331,8.33511.39629,12.44665-4.41861,11.52-21.60692,8.02981-21.05858-4.2963q.00908-.20384.022-.41023c.86-13.76022-6.0201-35.26056-12.90021-40.42064s-12.90021-18.92031-12.90021-18.92031Z" transform="translate(-227.12124 -115.57973)" fill="#ffb8b8"/><path d="M386.85848,657.46024s-12.04019,22.36036-19.78031,22.36036-6.88011,14.62023-5.16009,18.06029,6.0201,11.18018-.86,22.36035c-2.40322,3.90524-1.97332,8.33512-.39629,12.44666,4.41861,11.52,21.60692,8.02981,21.05857-4.2963q-.00906-.20384-.022-.41023c-.86-13.76022,6.02009-35.26056,12.9002-40.42065s12.90021-18.9203,12.90021-18.9203Z" transform="translate(-227.12124 -115.57973)" fill="#ffb8b8"/><path d="M377.39833,547.37849l5.16008,11.18017s75.68121,24.9404,68.8011,54.18087-40.42064,74.82119-45.58073,73.10117-32.68052-6.88011-33.54053-21.50035,19.78031-40.42064,19.78031-40.42064L363.63811,598.1193l-41.29815-.86-35.24307,26.66043s36.98059,32.68052,20.64033,45.58072-40.42065,21.50035-43.8607,16.34027-42.14067-81.70131-36.12058-88.58142S294.837,564.57876,294.837,564.57876l16.34026-23.22037,63.641-3.44006Z" transform="translate(-227.12124 -115.57973)" fill="#2f2e41"/><path d="M361.91808,405.47622s-4.30007,28.38045,4.30007,31.82051S349.01788,455.357,349.01788,455.357H334.39764l-9.46015-19.78032s8.60014-15.48025,3.44006-30.10048S361.91808,405.47622,361.91808,405.47622Z" transform="translate(-227.12124 -115.57973)" fill="#ffb8b8"/><path d="M361.91808,405.47622s-4.30007,28.38045,4.30007,31.82051S349.01788,455.357,349.01788,455.357H334.39764l-9.46015-19.78032s8.60014-15.48025,3.44006-30.10048S361.91808,405.47622,361.91808,405.47622Z" transform="translate(-227.12124 -115.57973)" opacity="0.1"/><path d="M367.93818,429.55661S358.478,439.87677,356.758,441.5968s-9.46015,11.18018-25.80041-2.58-18.06029,2.58-18.06029,2.58V544.79844s13.76022-6.02009,24.9404,0,34.40055-1.72,34.40055-1.72l4.30007-106.6417Z" transform="translate(-227.12124 -115.57973)" fill="#d0cde1"/><path d="M361.621,429.55661s8.03717-3.44006,14.91728,0,30.96049,20.64032,29.24046,28.38045-24.08038,61.921-8.60013,87.7214S415.23893,578.339,415.23893,578.339l-37.8406-19.78032s-29.24047-18.06028-26.66043-29.24046S361.621,429.55661,361.621,429.55661Z" transform="translate(-227.12124 -115.57973)" fill="#3f3d56"/><path d="M327.50739,429.55661s-18.05014,1.72-18.91016,3.44005-27.09043,9.03014-25.3704,16.77027,25.3704,76.97123,15.05024,89.87143-27.52044,30.9605-21.50035,32.68052,16.34027-2.58,26.66043,0,34.40055-18.9203,31.82051-42.14067S335.23737,435.5767,327.50739,429.55661Z" transform="translate(-227.12124 -115.57973)" fill="#3f3d56"/><path d="M370.51822,593.81923v8.60013s4.30007,19.78032-9.46015,18.92031-5.16008-24.08039-5.16008-24.08039l.86-7.74012Z" transform="translate(-227.12124 -115.57973)" fill="#ffb8b8"/><path d="M331.8176,594.67924s9.46015,19.78032,0,21.50034-16.34026-11.18017-16.34026-14.62023S331.8176,594.67924,331.8176,594.67924Z" transform="translate(-227.12124 -115.57973)" fill="#ffb8b8"/><ellipse cx="92.22616" cy="278.2863" rx="1.72003" ry="3.44005" fill="#ffb8b8"/><ellipse cx="142.96697" cy="278.2863" rx="1.72003" ry="3.44005" fill="#ffb8b8"/><path d="M304.29716,440.73678s-21.50034,0-20.64033,8.60014,29.24047,156.5225,29.24047,156.5225,12.04019-11.18018,22.36036-8.60014Z" transform="translate(-227.12124 -115.57973)" fill="#3f3d56"/><path d="M387.71849,443.31682s21.50035,4.30007,21.50035,17.20028-30.9605,136.74218-35.26056,136.74218-20.64033-2.58-20.64033-6.88011S387.71849,443.31682,387.71849,443.31682Z" transform="translate(-227.12124 -115.57973)" fill="#3f3d56"/><path d="M382.98842,468.68723l-19.35031,75.67348S372.66825,478.14738,382.98842,468.68723Z" transform="translate(-227.12124 -115.57973)" opacity="0.2"/><path d="M307.72259,458.0542,327.293,556.99327S321.03817,463.76143,307.72259,458.0542Z" transform="translate(-227.12124 -115.57973)" opacity="0.2"/><circle cx="117.59656" cy="278.71631" r="24.9404" fill="#ffb8b8"/><polygon points="94.738 253.344 113.38 243.58 139.123 247.574 144.449 271.098 131.191 270.589 127.487 261.946 127.487 270.446 121.369 270.211 117.818 256.451 115.599 271.098 93.85 270.655 94.738 253.344" fill="#2f2e41"/><polyline points="374.28 108.551 364 133 450.768 178.545 480 93" fill="#f2f2f2"/><polygon points="448.768 163.545 487.099 73.352 399 30 362 118 448.768 163.545" fill="#0071dc"/><rect x="656.355" y="160.2919" width="1.41951" height="74.90016" transform="translate(-45.11285 577.296) rotate(-62.93456)" fill="#fff"/><rect x="651.355" y="172.2919" width="1.41951" height="74.90016" transform="translate(-58.52366 579.38347) rotate(-62.93456)" fill="#fff"/></svg>
                </div>
              </div>
              <div class="singlePage__list">
                <div class="kurs__name row" v-for="(item, index) in singleReport.data.videos" :key="index">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g id="Iconly/Bulk/Video">
                    <g id="Video">
                    <path id="Fill 1" opacity="0.4" d="M21.3309 7.44251C20.9119 7.17855 20.3969 7.1552 19.9579 7.37855L18.4759 8.12677C17.9279 8.40291 17.5879 8.96129 17.5879 9.58261V15.4161C17.5879 16.0374 17.9279 16.5948 18.4759 16.873L19.9569 17.6202C20.1579 17.7237 20.3729 17.7735 20.5879 17.7735C20.8459 17.7735 21.1019 17.7004 21.3309 17.5572C21.7499 17.2943 21.9999 16.8384 21.9999 16.339V8.66179C21.9999 8.1623 21.7499 7.70646 21.3309 7.44251Z" fill="#006AFF"/>
                    <path id="Fill 3" d="M11.9051 20H6.11304C3.69102 20 2 18.3299 2 15.9391V9.06091C2 6.66904 3.69102 5 6.11304 5H11.9051C14.3271 5 16.0181 6.66904 16.0181 9.06091V15.9391C16.0181 18.3299 14.3271 20 11.9051 20Z" fill="#006AFF"/>
                    </g>
                    </g>
                  </svg>
                  <h2>{{item.title}}</h2>
                </div>
              </div>
            </div>

            <!-- Right side wrapper (includes price) -->
            <div class="singlePage__details" data-aos="fade-left" data-aos-once="true" data-aos-duration="1000">
              <div class="kurs__narxi">
                <span class="exactPrice">{{singleReport.data.price - singleReport.data.discount}} <span>so'm</span></span>
                <span class="oldPrice">{{singleReport.data.discount}} so'm</span>
              </div>
              <div class="singlePage__features">
                <h2 class="info">Kurs ichida</h2>
                <div class="feature row">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g id="Iconly/Bulk/Star">
                    <g id="Star">
                    <path id="Fill 1" opacity="0.4" d="M12.9763 3.11361L15.2028 7.58789C15.3668 7.91205 15.6799 8.13717 16.041 8.18719L21.042 8.91556C21.3341 8.95658 21.5992 9.11066 21.7782 9.34578C21.9552 9.5779 22.0312 9.87205 21.9882 10.1612C21.9532 10.4013 21.8402 10.6234 21.6672 10.7935L18.0434 14.3063C17.7783 14.5514 17.6583 14.9146 17.7223 15.2698L18.6145 20.2083C18.7095 20.8046 18.3144 21.3669 17.7223 21.48C17.4783 21.519 17.2282 21.478 17.0082 21.3659L12.5472 19.0417C12.2161 18.8746 11.8251 18.8746 11.494 19.0417L7.03303 21.3659C6.48491 21.657 5.80576 21.4589 5.5007 20.9187C5.38767 20.7036 5.34766 20.4584 5.38467 20.2193L6.27686 15.2798C6.34088 14.9256 6.21985 14.5604 5.95579 14.3153L2.33202 10.8045C1.90092 10.3883 1.88792 9.70296 2.30301 9.27175C2.31201 9.26274 2.32201 9.25274 2.33202 9.24273C2.50405 9.06764 2.7301 8.95658 2.97415 8.92757L7.97523 8.1982C8.33531 8.14717 8.64837 7.92406 8.81341 7.59789L10.9599 3.11361C11.1509 2.72942 11.547 2.4903 11.9771 2.5003H12.1111C12.4842 2.54533 12.8093 2.77644 12.9763 3.11361Z" fill="#111111" fill-opacity="0.72"/>
                    <path id="Fill 4" d="M11.992 18.9171C11.7983 18.9231 11.6096 18.9752 11.4399 19.0682L7.00072 21.3871C6.45756 21.6464 5.80756 21.4452 5.50303 20.9258C5.39021 20.7136 5.34927 20.4704 5.38721 20.2322L6.27384 15.3032C6.33375 14.9449 6.21394 14.5806 5.95334 14.3284L2.32794 10.8185C1.8976 10.3971 1.88961 9.70556 2.31096 9.27421C2.31695 9.26821 2.32195 9.2632 2.32794 9.2582C2.49967 9.08806 2.72133 8.97597 2.95996 8.94094L7.96523 8.20433C8.32767 8.1583 8.64219 7.93211 8.80194 7.60384L10.9776 3.06312C11.1843 2.69682 11.5806 2.47864 12 2.50166C11.992 2.7989 11.992 18.715 11.992 18.9171Z" fill="#111111" fill-opacity="0.72"/>
                    </g>
                    </g>
                  </svg>
                  <span>Umrbod egalik qilish imkoniyati</span>
                </div>
                <div class="feature row">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g id="Iconly/Bulk/Time Circle">
                    <g id="Time Circle">
                    <path id="Fill 1" opacity="0.4" d="M22 11.9999C22 17.5239 17.523 21.9999 12 21.9999C6.477 21.9999 2 17.5239 2 11.9999C2 6.47791 6.477 1.99991 12 1.99991C17.523 1.99991 22 6.47791 22 11.9999Z" fill="#111111" fill-opacity="0.54"/>
                    <path id="Fill 4" d="M15.5734 15.8144C15.4424 15.8144 15.3104 15.7804 15.1894 15.7094L11.2634 13.3674C11.0374 13.2314 10.8984 12.9864 10.8984 12.7224V7.67542C10.8984 7.26142 11.2344 6.92542 11.6484 6.92542C12.0624 6.92542 12.3984 7.26142 12.3984 7.67542V12.2964L15.9584 14.4194C16.3134 14.6324 16.4304 15.0924 16.2184 15.4484C16.0774 15.6834 15.8284 15.8144 15.5734 15.8144Z" fill="#111111" fill-opacity="0.54"/>
                    </g>
                    </g>
                  </svg>
                  <span>{{Math.floor(Math.random() * 100)}} soatlik videodarslik</span>
                </div>
                <div class="feature row">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g id="Iconly/Bulk/Video">
                    <g id="Video">
                    <path id="Fill 1" opacity="0.4" d="M21.3309 7.44254C20.9119 7.17858 20.3969 7.15523 19.9579 7.37858L18.4759 8.1268C17.9279 8.40294 17.5879 8.96132 17.5879 9.58264V15.4161C17.5879 16.0375 17.9279 16.5948 18.4759 16.873L19.9569 17.6202C20.1579 17.7238 20.3729 17.7735 20.5879 17.7735C20.8459 17.7735 21.1019 17.7004 21.3309 17.5573C21.7499 17.2943 21.9999 16.8385 21.9999 16.339V8.66183C21.9999 8.16233 21.7499 7.7065 21.3309 7.44254Z" fill="#111111" fill-opacity="0.54"/>
                    <path id="Fill 3" d="M11.9051 20H6.11304C3.69102 20 2 18.3299 2 15.9391V9.06091C2 6.66904 3.69102 5 6.11304 5H11.9051C14.3271 5 16.0181 6.66904 16.0181 9.06091V15.9391C16.0181 18.3299 14.3271 20 11.9051 20Z" fill="#111111" fill-opacity="0.54"/>
                    </g>
                    </g>
                  </svg>
                  <span>{{singleReport.data.videos.length}} ta videolar</span>
                </div>
                <div class="feature row">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Iconly/Bulk/Ticket Star">
                    <g id="Ticket Star">
                    <path id="Fill 1" opacity="0.4" d="M21.25 13.4764C20.429 13.4764 19.761 12.8145 19.761 12.001C19.761 11.1865 20.429 10.5246 21.25 10.5246C21.449 10.5246 21.64 10.4463 21.78 10.3076C21.921 10.1679 22 9.97864 22 9.78146L21.999 7.10415C21.999 4.84102 20.14 3 17.856 3H6.144C3.86 3 2.001 4.84102 2.001 7.10415L2 9.86766C2 10.0648 2.079 10.2541 2.22 10.3938C2.36 10.5325 2.551 10.6108 2.75 10.6108C3.599 10.6108 4.239 11.2083 4.239 12.001C4.239 12.8145 3.571 13.4764 2.75 13.4764C2.336 13.4764 2 13.8093 2 14.2195V16.8949C2 19.158 3.858 21 6.143 21H17.857C20.142 21 22 19.158 22 16.8949V14.2195C22 13.8093 21.664 13.4764 21.25 13.4764Z" fill="#111111" fill-opacity="0.54"/>
                    <path id="Fill 4" d="M15.4298 11.5886L14.2508 12.7366L14.5298 14.3596C14.5778 14.6406 14.4648 14.9176 14.2338 15.0836C14.0048 15.2516 13.7058 15.2726 13.4538 15.1386L11.9988 14.3736L10.5408 15.1396C10.4328 15.1966 10.3148 15.2266 10.1978 15.2266C10.0448 15.2266 9.89385 15.1786 9.76385 15.0846C9.53385 14.9176 9.42085 14.6406 9.46885 14.3596L9.74685 12.7366L8.56785 11.5886C8.36385 11.3906 8.29285 11.0996 8.38085 10.8286C8.46985 10.5586 8.69985 10.3666 8.98085 10.3266L10.6068 10.0896L11.3358 8.61259C11.4628 8.35859 11.7168 8.20059 11.9988 8.20059H12.0008C12.2838 8.20159 12.5378 8.35959 12.6628 8.61359L13.3918 10.0896L15.0208 10.3276C15.2988 10.3666 15.5288 10.5586 15.6168 10.8286C15.7058 11.0996 15.6348 11.3906 15.4298 11.5886Z" fill="#111111" fill-opacity="0.54"/>
                    </g>
                    </g>
                  </svg>
                  <span>Kursni tugatganlik haqida sertifikat</span>
                </div>
              </div>
              <div class="singlePage__buy row">
                <button class="btn btn-main" @click="ff()" :disabled="count == 1" :class="count == 1 ? 'btn-disabled' : ''">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-10.563-5l-2.937-7h16.812l-1.977 7h-11.898zm11.233-5h-11.162l1.259 3h9.056l.847-3zm5.635-5l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"></path></svg> 
                  <span>{{count==1 ? "Savatga qo'shildi" : "Savatga qo'shish"}}</span>
                </button>
                <a class="btn btn-main" href="/courses">Kurslarga qaytish</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <Footer/>

    </div>
</template>

<script >
import { store, mutations } from "../store";
import Animation from '../../components/Animation.vue'
import Footer from '../../components/Footer.vue'
import Header from '../../components/Header.vue'

export default {
  name: "SingleReport",
  components : {
    Header,
    Footer,
    Animation
  },
  data(){
    return{
      singleReport: null,
      isMenu : false,
    }
  },
  computed: {
    count() {
      return store.count;
    },
    ff(){
      return this.setCount(this.count + 1)
    }
  },
  mounted() {
    this.fetchSingleNews()
  },
  methods : {
    setCount: mutations.setCount,
    fetchSingleNews(){
      fetch(`https://backend.eduon.uz/api-web/course-detail/?course_id=${this.$route.params.id}`)
        .then(response => response.json())
        .then(data => {this.singleReport = data});
    },
    postTime(d){
        const date = new Date(d);
        const month = date.getMonth();
        const day = date.getDate();
        const minute = date.getMinutes();
        const hours = date.getHours();
        const time = `${hours.toString().length == 1 ? '0' : ''}${hours}:${minute.toString().length == 1 ? '0' : ''}${minute}`
        const year = date.getFullYear()
        return `${time}  /  ${day.toString().length == 1 ? '0' : ''}${day}.${day.toString().length == 1 ? '0' : ''}${month}.${year}`
    },
    ChangeT(title){
        this.isMenu=title;
        if(this.isMenu){
            document.body.style.overflowY = 'hidden'
        }
    },
    closeMenu(){
    this.isMenu = false
    document.body.style.overflowY = 'initial'
    }
  }
}
</script>


<style lang="scss">

// All scss code for SinglePage.vue
.singlePage{
  overflow: hidden;
    .container{
      align-items: flex-start;
      justify-content: space-between;
    }
    .section__wrapper .container{
      align-items: center ;
      justify-content: center;
    }
    .pagesNav{
      z-index: 2;
    }
    &__main{
      margin-top: 110px;
      padding-bottom: 120px;
      justify-content: space-between;
    }
    &__info{
      flex-basis: 60%;
      .title{
        font-size: 32px;
        line-height: 1.5;
        margin: 0 0 10px -2px;
      }
      .divider{
        display: inline-block;
        margin: 0 16px;
        position: relative;
        width: 1px;
        height: 28px;
        &::after{
          content: '';
          position: absolute;
          width: 1px;
          height: 100%;
          background: #bcbcbc;
        }
      }
    }
    &__details{
      flex-basis: 33%;
    }
    &__name{
      font-size: 16px;
      margin: 22px 0;
      justify-content: flex-start;
      .author{
        font-weight: 700;
        color: #252525;
      }
      .date{
        color: #7e7e7e;
      }
    }
    &__selled{
      justify-content: flex-start;
      gap: 12px;
      font-size: 18px;
      color: #7e7e7e;
      svg path{
        fill: #7e7e7e;
      }
      span{
        color: #414141;
      }
    }
    &__video{
      margin: 24px 0;
      height: 380px;
      border-radius: 8px;
      overflow: hidden;
      iframe{
        width: 100%;
        height: 100%;
      }
      .notContent{
        width: 100%;
        height: 100%;
        svg{
          width: 100%;
          height: 100%;
        }
      }
    }
    &__list{
      .kurs__name{
        justify-content: flex-start;
        gap: 16px;
        background: aliceblue;
        padding: 12px 18px;
        margin-bottom: 12px;
        border-radius: 8px;
        h2{
          flex-basis: 80%;
          flex-grow: 1;
          font-size: 18px;
          line-height: 21px;
          font-weight: 400;
          color: rgba(17, 17, 17, 0.72);
        }
        svg{
            flex-basis: 10%;
        }
      }
    }

    &__details{
      margin: 0 20px;
      padding: 24px;
      box-shadow: 0 0 30px #0000000d;
      .kurs__narxi{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .exactPrice{
          font-size: 24px;
          line-height: 34px;
          font-weight: 600;
          color: #d31819;
        }
        .oldPrice{
          font-size: 16px;
          text-decoration-line: line-through;
        }
      }

    }
    &__features{
      .feature{
        justify-content: flex-start;
        gap: 12px;
        padding: 12px 0;
      }
    }
    &__buy{
      flex-direction: column;
      gap: 10px;
      text-align: center;
      padding: 24px 0;
      button{
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        svg path{
          fill: white;
          transition: 0.3s ease-in-out;
        }
        &:hover{
          svg path {
            fill: initial;
          }
        }
      }
      a{
        width: 90%;
      }
    }
}
// Button disabled properties
.btn-disabled{
  opacity: 0.6;
  color: #031f42 !important;
  background-color: #ffc221 !important;
  svg path{
    fill: #252525 !important;
  }
}

// Media For Tablets
@media (max-width:800px) {
  .singlePage .singlePage__main .container{
    flex-direction: column;
    row-gap: 24px;
    align-items: center;
  }
  .singlePage__info{
    width: 100%;
  }
  .singlePage__details{
    width: 90%;
  }
  .singlePage .footer .container{
    align-items: center;
  }
  .singlePage .header .container{
    align-items: center;
  }
}

// Media for Mobile screens
@media (max-width:500px) {
  .singlePage__info .title{
    font-size: 28px;
  }
  .singlePage__name{
    flex-direction: column;
    align-items: flex-start;
    margin: 28px 0;
  }
  .singlePage__selled{
    font-size: 16px;
  }
  .singlePage .section__wrapper{
        height: 360px;
  }
}
</style>

