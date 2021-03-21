"use strict";

document.addEventListener("DOMContentLoaded", () => {

  const list_painters = document.querySelector('.section-catalog__dropdown-list');
  const titleNamePainter = document.querySelector('.column-description__subtitle');
  const yearsOfLife = document.querySelector('.column-description__text');
  const descriptionPainter = document.querySelector('.column-description__paragraph');
  const imagePainter = document.querySelector('.column-description__img');
  const buttonsSelectCountry = document.querySelector('.tabs-list');
  const btnBurgerMenu = document.querySelector('.btn-burger-menu');
  const burgerMenu = document.querySelector('.wrap-burger-menu');
  const linkPersonalAccountBurger = document.querySelector('.burger-menu-button');
  const buttonShowEvents = document.querySelector('.button-show');
  const listCardsEvents = document.querySelector('.list-cards');
  const textCatalogCountry = document.querySelector('.category-paragraph');
  const categoriesCheackBoxes = document.querySelector('.categories-form');
  const galleryImage = document.querySelectorAll('.wrapper-gallery-image');
  const picture = document.querySelector('.picture');
  const categoriesForm = document.querySelector('.categories-form');
  const main = document.querySelector('.main');
  const body = document.querySelector('.body');
  const dropdownWrap = document.querySelectorAll('.dropdown__wrap');
  const dropdownLink = document.querySelectorAll('.dropdown__button');
  const wrapperForm = document.querySelector('.wrapper-form');
  const form = document.querySelector('.wrapper-form__form');
  const buttonSearch = document.querySelector('.wrapper-form__btn-search');
  const inputSearch = document.querySelector('.wrapper-form__input');
  const buttonSearchClosed = document.querySelector('.wrapper-form__btn-close');
  const headerRow1 = document.querySelector('.header__row-1');
  const script = document.createElement('script');
  let tooltip = document.querySelectorAll('.project-text__span-tooltip');
  let scrollY = null;
  let swiperGallery = document.querySelector('.container-gallery');
  let selectedCategoryTab = 3;
  let defaultButton = 'Доменико Гирландайо';
  let scroll = false;
  let imagePath = null;
  let timerId = null;
  let mySwiperEdition = null;
  let SwiperListCards = null;

  let mySwiper = new Swiper('.swiper-container', {

    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
  });

  window.addEventListener('resize', function () {
    optimizeSizeSwiper();
    optimizeCheckbox();
    creatingColumnsCategory();
    initialSwiperListCard();
    optimizeSwiperEdition();
    optimizeScrollInfo();
    setPositionTooltip();
    accordioninitial();
  });

  function optimizeSwiperEdition() {
    if (document.documentElement.clientWidth > 576) {
      mySwiperEdition = new Swiper('.container-editions', {

        direction: 'horizontal',
        loop: true,
        allowTouchMove: false,

        pagination: {
          el: '.swiper-pagination-editions',
          type: 'fraction',
          renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
              '<span aria-label="из"> / </span>' +
              '<span class="' + totalClass + '"></span>';
          },
        },

        updateOnWindowResize: false,

        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },

        navigation: {
          nextEl: '.swiper-button-next-edition',
          prevEl: '.swiper-button-prev-edition',
        },

        a11y: {
          prevSlideMessage: 'Предыдущий слайд',
          nextSlideMessage: 'Следующий слайд',
        },

        breakpoints: {

          1025: {

            slidesPerView: 3,

            slidesPerGroup: 3,

            spaceBetween: 48,

            slidesPerColumn: 1,

            autoHeight: false,

            centeredSlides: false,

            initialSlide: 0,
          },

          769: {
            slidesPerView: 2,

            slidesPerGroup: 2,

            spaceBetween: 48,

            autoHeight: false,

            centeredSlides: false,

            initialSlide: 0,
          },

          576: {
            slidesPerView: 2,

            slidesPerGroup: 2,

            spaceBetween: 35,

            autoHeight: false,

            centeredSlides: false,

            initialSlide: 0,
          },
        }
      });
    } else if (mySwiperEdition !== null) {
      mySwiperEdition.destroy(true, true);
    }
  }

  function optimizeSizeSwiper() {
    initializationSwiperGallery();
    initializationSwiperPartners();
  }

  function initializationSwiperGallery() {
    let mySwiperGallery = new Swiper('.gallery-section__swiper-container', {

      direction: 'horizontal',
      allowTouchMove: false,

      pagination: {
        el: '.swiper-pagination-gallery',
        type: 'fraction',
      },

      navigation: {
        nextEl: '.swiper-button-next-gallery',
        prevEl: '.swiper-button-prev-gallery',
      },

      a11y: {
        prevSlideMessage: 'Предыдущий слайд',
        nextSlideMessage: 'Следующий слайд',
      },

      breakpoints: {

        1200: {
          slidesPerView: 3,

          slidesPerGroup: 3,

          spaceBetween: 48,

          slidesPerColumn: 2,

          autoHeight: false,

          centeredSlides: false,

          allowTouchMove: false,

          initialSlide: 0,
        },

        577: {
          slidesPerView: 2,

          slidesPerGroup: 2,

          spaceBetween: 34,

          slidesPerColumn: 2,

          autoHeight: false,

          centeredSlides: false,

          allowTouchMove: false,

          initialSlide: 0,
        },

        320: {
          slidesPerView: 1,

          slidesPerGroup: 1,

          slidesPerColumn: 1,

          slidesPerColumn: 1,

          spaceBetween: 20,

          allowTouchMove: true,
        },
      }
    });
  }

  function initializationSwiperPartners() {
    let mySwiperPartners = new Swiper('.swiper-container-partners', {

      direction: 'horizontal',
      loop: true,
      allowTouchMove: true,

      navigation: {
        nextEl: '.swiper-button-next-partners',
        prevEl: '.swiper-button-prev-partners',
      },

      a11y: {
        prevSlideMessage: 'Предыдущий слайд',
        nextSlideMessage: 'Следующий слайд',
      },

      spaceBetween: 30,

      breakpoints: {
        1200: {

          spaceBetween: 48,

          slidesPerView: 3,

          slidesPerGroup: 3,

          autoHeight: false,

          centeredSlides: false,

          initialSlide: 0,
        },

        769: {
          slidesPerView: 2,

          slidesPerGroup: 2,

          spaceBetween: 48,

          autoHeight: false,

          centeredSlides: false,

          initialSlide: 0,
        },

        700: {
          slidesPerView: 2,

          slidesPerGroup: 2,

          spaceBetween: 37,

          autoHeight: false,

          centeredSlides: false,

          initialSlide: 0,

          allowTouchMove: true,
        },
      }
    });
  };

  function accordioninitial() {
    $("#accordion").accordion({
      collapsible: true,
      heightStyle: 'content',
      header: '> .accordion-item > .accordion-header',
      active: document.documentElement.clientWidth > 576 ? 0 : false,
    });

    if (document.documentElement.clientWidth > 576) {
      let accordionSpan = document.querySelectorAll('.ui-accordion-header-icon');
      for (let i = 0; accordionSpan.length > i; i++) {
        accordionSpan[i].classList.add('ui-accordion-header-icon-hover');
      }
    }
  }

  function optimizeCheckbox() {
    if (document.documentElement.clientWidth <= 576 && !document.querySelector('.btn-show-categories')) {

      let button = document.createElement('button');
      button.classList.add('btn-show-categories');
      button.setAttribute('aria-label', 'Раскрыть список категорий');

      button.addEventListener('click', (ev) => {
        ev.target.classList.toggle('btn-show-categories-active');
        categoriesCheackBoxes.classList.toggle('categories-form-active');
      });

      document.querySelector('.subtitle-edition-categories').append(button);

      let inputs = document.querySelectorAll('.checkbox-wrapper__input');
      inputs.forEach((input) => {
        if (input.checked == true) {
          input.parentElement.classList.add('input-show');
        }
      })

      let checkboxWrapper = document.querySelectorAll('.checkbox-wrapper');

      checkboxWrapper.forEach((wrapper) => {
        wrapper.addEventListener('click', function (ev) {
          if (this.children[0].checked == true) {
            this.classList.add('input-show');
          } else {
            this.classList.remove('input-show');
          }
        })
      })
    } else if (document.querySelector('.btn-show-categories')) {
      document.querySelector('.btn-show-categories').remove();
    };
  }

  function optimizationMap() {
    if (document.documentElement.clientWidth <= 576) {
      ymaps.ready(initMobile);
    } else {
      ymaps.ready(init);
    }
  }

  function init() {
    let myMap = new ymaps.Map("map", {
      center: [55.75912064527656, 37.62934208208057],
      zoom: 14,
      controls: [],
    }, {
      searchControlProvider: 'yandex#search',
      yandexMapDisablePoiInteractivity: true,
      suppressMapOpenBlock: true,
    }),

      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark([55.758463068983666, 37.601079499999884], {
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/mark.svg',
        iconImageSize: [20, 20],
      });

    let zoomControl = new ymaps.control.ZoomControl({
      options: {
        size: "small",
        position: {
          top: 270,
          right: 17,
        }
      }
    });

    let geolocationControl = new ymaps.control.GeolocationControl({
      options: {
        position: {
          right: 17,
          top: 360,
        }
      }
    });

    geolocationControl.events.add('locationchange', function (event) {
      let position = event.get('position'),
        locationPlacemark = new ymaps.Placemark(position);
      myMap.geoObjects.add(locationPlacemark);
      myMap.panTo(position);
    });

    if (document.documentElement.clientWidth >= 1024) {
      myMap.controls.add(zoomControl);
      myMap.controls.add(geolocationControl);
    } else {
      myMap.controls.remove(zoomControl);
      myMap.controls.remove(geolocationControl);
    }

    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('drag');
    myMap.behaviors.disable('scrollZoom');
    myMap.behaviors.disable('dblClickZoom');
    myMap.behaviors.disable('multiTouch');
    myMap.behaviors.disable('rightMouseButtonMagnifier');
    myMap.behaviors.disable('leftMouseButtonMagnifier');

    myMap.setBounds([[55.74221104492236, 37.58586984614246], [55.777110613360364, 37.68607352171024]]);
    myMap.setBounds(myMap.getBounds());
    myMap.setCenter([55.75828834674392, 37.60190989135859]);
    myMap.setZoom(14);

  };

  function initMobile() {
    let myMap = new ymaps.Map("map-mobile", {
      center: [55.76, 37.63],
      zoom: 14,
      controls: [],
    }, {
      searchControlProvider: 'yandex#search',
      yandexMapDisablePoiInteractivity: true,
      suppressMapOpenBlock: true,
    }),

      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark([55.758463, 37.601079], {
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/mark.svg',
        iconImageSize: [20, 20],
      });

    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('drag');
    myMap.behaviors.disable('scrollZoom');
    myMap.behaviors.disable('dblClickZoom');
    myMap.behaviors.disable('multiTouch');
    myMap.behaviors.disable('rightMouseButtonMagnifier');
    myMap.behaviors.disable('leftMouseButtonMagnifier');

    myMap.setBounds([[55.735781747665044, 37.51868203906241], [55.761131150666674, 37.6534769609374]]);
    myMap.setBounds(myMap.getBounds());
    myMap.setCenter([55.76061208398255, 37.607995019573146]);
    myMap.setZoom(14);
  };

  function activateTab() {
    for (let i = 0; buttonsSelectCountry.children.length > i; i++) {
      if (buttonsSelectCountry.children[i].firstElementChild.getAttribute('data-tab-id') == selectedCategoryTab) {
        buttonsSelectCountry.children[i].classList.add('tabs-list_item-active');
      }
    }

    for (let i = 0; dataCatalogCountry.length > i; i++) {
      if (dataCatalogCountry[i].id == selectedCategoryTab) {
        textCatalogCountry.textContent = dataCatalogCountry[i].text;
      }
    }
  };

  buttonsSelectCountry.addEventListener('click', (ev) => {
    if (!ev.target.classList.contains('tabs-list_item-active') && ev.target.classList.contains('tabs-list__button')) {

      selectedCategoryTab = ev.target.getAttribute('data-tab-id');

      if (document.documentElement.clientWidth > 576) {
        for (let i = 0; dataCatalogCountry.length > i; i++) {
          if (dataCatalogCountry[i].id == selectedCategoryTab) {
            textCatalogCountry.classList.add('category-paragraph_opacity');
            let timerId = setTimeout(() => {
              textCatalogCountry.textContent = dataCatalogCountry[i].text;
              textCatalogCountry.classList.remove('category-paragraph_opacity');
              clearTimeout(timerId);
            }, 400);
          }
        }
      }

      for (let i = 0; buttonsSelectCountry.children.length > i; i++) {
        if (buttonsSelectCountry.children[i].classList.contains('tabs-list_item-active')) {
          buttonsSelectCountry.children[i].classList.remove('tabs-list_item-active');
        }
      }
      ev.target.parentElement.classList.add('tabs-list_item-active');
      showPainters();
    }
  });

  list_painters.addEventListener('click', (ev) => {
    if (ev.target.classList.contains('selection-list__button')) {
      for (let i = 0; paintersArray.length > i; i++) {
        if (paintersArray[i].name.trim() == ev.target.textContent.trim()) {
          addActiveClassBtn(ev.target);
          document.querySelector('.column-description').style.opacity = '0';
          let timerId = setTimeout(() => {
            titleNamePainter.textContent = paintersArray[i].name;
            yearsOfLife.textContent = paintersArray[i]['years of life'];
            descriptionPainter.textContent = paintersArray[i].description;
            imagePath = `img/${paintersArray[i].image}`;
            imageDescription = paintersArray[i].name;
            checkingWidth(imagePath, imageDescription);
            document.querySelector('.column-description').style.opacity = '1';
            clearTimeout(timerId);
          }, 500);
          break;
        }
      }
    }
  });

  function addActiveClassBtn(target) {
    let buttons = document.querySelectorAll('.selection-list__button');
    if (target == undefined) {
      for (let i = 0; buttons.length > i; i++) {
        if (buttons[i].innerText == defaultButton) {
          buttons[i].classList.add('selection-list__button-active');
          buttons[i].setAttribute('aria-selected', 'true');
          break;
        }
      }
    } else {
      for (let i = 0; buttons.length > i; i++) {
        if (target == buttons[i] && !buttons[i].classList.contains('selection-list__button-active')) {
          target.classList.add('selection-list__button-active');
          target.setAttribute('aria-selected', 'true');
        } else if (buttons[i].classList.contains('selection-list__button-active')) {
          buttons[i].classList.remove('selection-list__button-active');
          buttons[i].setAttribute('aria-selected', 'false');
        }
      }
    }
  };

  function checkingWidth() {
    if (document.documentElement.clientWidth <= 1024) {
      for (let i = 0; picture.children.length > i; i++) {
        if (picture.children[i].getAttribute('media') == '(max-width: 1024px)') {
          picture.children[i].setAttribute('srcset', `${imagePath}`);
          picture.children[i].setAttribute('alt', `${imageDescription}`);
          break;
        }
      }
    } else if (document.documentElement.clientWidth <= 720) {
      for (let i = 0; picture.children.length > i; i++) {
        if (picture.children[i].getAttribute('media') == '(max-width: 720px)') {
          picture.children[i].setAttribute('srcset', `${imagePath}`);
          picture.children[i].setAttribute('alt', `${imageDescription}`);
          break;
        }
      }
    } else {
      imagePainter.setAttribute('src', `${imagePath}`);
      imagePainter.setAttribute('alt', `${imageDescription}`);
    }
  };

  function showPainters() {
    let listsPainters = document.querySelectorAll('.selection-list');
    for (let i = 0; listsPainters.length > i; i++) {

      let currentList = listsPainters[i];
      let listId = listsPainters[i].getAttribute('data-list-id');

      if (currentList.children.length != 0) {
        currentList.innerHTML = '';
      }

      for (let i = 0; paintersArray.length > i; i++) {
        if (paintersArray[i]['list-id'] == listId && paintersArray[i]['tab id'] == selectedCategoryTab) {
          let li = document.createElement('li');
          let button = document.createElement('button');

          li.classList.add('selection-list__item');
          button.classList.add('selection-list__button', 'js-focus-visible');
          button.setAttribute('aria-controls', 'painterInfo');

          button.textContent = paintersArray[i].name;
          li.append(button);
          currentList.append(li);
        }
      }
    }
  };

  buttonShowEvents.addEventListener('click', (ev) => {
    for (let i = 0; listCardsEvents.children.length > i; i++) {
      listCardsEvents.children[i].classList.remove("list-cards__item_display");
      setTimeout(function () {
        listCardsEvents.children[i].classList.remove('list-cards__item_transform-rotateY-90');
      }, 20);
    }
    ev.target.classList.add('button_events_display-none');
    listCardsEvents.classList.add('list-cards_after');
  });

  $(document).ready(function () {
    $("nav").on("click", "a", function (event) {
      event.preventDefault();
      let id = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({
        scrollTop: top
      }, 1000);
      $(id).focus();
      window.location.hash = event.target.getAttribute('href');
    });
  });

  let burgerNavLink = burgerMenu.children[0].children[0].children[0].children[0];

  btnBurgerMenu.addEventListener('focusout', function () {
    if (btnBurgerMenu.classList.contains('btn-burger-menu__background-active')) {
      burgerNavLink.focus();
    }
  });

  linkPersonalAccountBurger.addEventListener('focusout', function () {
    btnBurgerMenu.focus();
  });

  btnBurgerMenu.addEventListener('click', () => {
    if (!burgerMenu.classList.contains('wrap-burger-menu-active')) {
      btnBurgerMenu.classList.remove('btn-burger-menu__background');
      btnBurgerMenu.classList.add('btn-burger-menu__background-active');
      btnBurgerMenu.setAttribute('aria-pressed', 'true');
      burgerMenu.classList.add('wrap-burger-menu-active');
    } else {
      btnBurgerMenu.setAttribute('aria-pressed', 'false');
      btnBurgerMenu.classList.remove('btn-burger-menu__background-active');
      btnBurgerMenu.classList.add('btn-burger-menu__background');
      burgerMenu.classList.remove('wrap-burger-menu-active');
    }
  });

  $(document).ready(function () {
    $("#hero").on("click", "button", function (event) {
      event.preventDefault();
      let id = '#contacts',
        top = $(id).offset().top;
      $('body,html').animate({
        scrollTop: top
      }, 1000);
      $(id).focus();
      window.location.hash = event.target.getAttribute('href');
    });
  });

  function optimizeScrollInfo() {
    if (document.documentElement.clientWidth <= 576) {
      if (scroll == false) {
        scroll = true;
        $(".section-catalog__dropdown-list").on("click", "button", scrollInfoAboutPainter);
      }
    } else {
      scroll = false;
      $(".section-catalog__dropdown-list").off("click", "button", scrollInfoAboutPainter);
    }
  }

  function scrollInfoAboutPainter(event) {
    event.preventDefault();
    let id = '#painterInfo',
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 600);
  };

  $(document).ready(function () {
    $("#nav-list-burger").on("click", "a", function (event) {
      event.preventDefault();
      let id = $(this).attr('href'),
        top = $(id).offset().top;
      btnBurgerMenu.classList.remove('btn-burger-menu__background-active');
      btnBurgerMenu.classList.add('btn-burger-menu__background');
      burgerMenu.classList.remove('wrap-burger-menu-active');
      $('body,html').animate({
        scrollTop: top
      }, 1000);
      $(id).focus();
      window.location.hash = event.target.getAttribute('href');
    });
  });

  document.querySelectorAll('.dropdown__content-list').forEach(el => {
    new SimpleBar(el, {
      autoHide: false
    });
  });

  document.addEventListener('click', (ev) => {
    if (wrapperForm.contains(ev.target) && !wrapperForm.classList.contains('wrapper-form-active')) {
      ev.preventDefault();
      wrapperForm.classList.add('wrapper-form-active');
      form.classList.add('wrapper-form__form-active');
      buttonSearch.classList.add('wrapper-form__btn-search-active');
      headerRow1.classList.add('search-active');
      buttonSearchClosed.setAttribute('tabindex', '0');
    } else if ((!wrapperForm.contains(ev.target) || buttonSearchClosed === ev.target) && wrapperForm.classList.contains('wrapper-form-active')) {
      ev.preventDefault();
      inputSearch.value = '';
      wrapperForm.classList.remove('wrapper-form-active');
      form.classList.remove('wrapper-form__form-active');
      buttonSearch.classList.remove('wrapper-form__btn-search-active');
      headerRow1.classList.remove('search-active');
    } else if ((!burgerMenu.contains(ev.target) || linkPersonalAccountBurger === ev.target || ev.target.classList.contains('nav-burger__link')) && btnBurgerMenu !== ev.target && burgerMenu.classList.contains('wrap-burger-menu-active')) {
      btnBurgerMenu.classList.remove('btn-burger-menu__background-active');
      btnBurgerMenu.classList.add('btn-burger-menu__background');
      burgerMenu.classList.remove('wrap-burger-menu-active');
    } else if (document.querySelector('.container-modal-window') && ev.target !== document.querySelector('.container-modal-window') && !ev.target.classList.contains('swiper-slide') && ev.target.classList.contains('bottom-layer-modal-window')) {
      closeModalWindow();
    } else if (document.querySelector('.dropdown__wrap-hover') && (!ev.target.classList.contains('dropdown__wrap-hover') || ev.target == document.querySelector('.dropdown__wrap-hover').parentElement.children[0])) {
      closeDropDown();
    }
  });

  function initialSwiperListCard() {
    if (document.documentElement.clientWidth < 720 && (SwiperListCards == null || SwiperListCards.destroyed == true)) {

      let containerListCard = document.querySelector('.swiper-container-cards');
      let swiperPagination = document.createElement('div');

      swiperPagination.classList.add('swiper-pagination-cards');
      containerListCard.append(swiperPagination);

      SwiperListCards = new Swiper('.swiper-container-cards', {

        direction: 'horizontal',
        pagination: {
          el: '.swiper-pagination-cards',
          clickable: true,
        },
        loop: true,
        initialSlide: 0,
        spaceBetween: 15,
      });

    } else if (document.documentElement.clientWidth > 720 && SwiperListCards !== null && SwiperListCards.destroyed !== true) {
      SwiperListCards.destroy(true, true);
      document.querySelector('.swiper-pagination-cards').remove();

      if (buttonShowEvents.classList.contains('button_events_display-none')) {
        buttonShowEvents.classList.remove('button_events_display-none');
      }
    }
  }

  const element = document.querySelector('.js-choice');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
    position: 'bottom',
  });

  let wrapperChoiseList = document.querySelector('.choices');
  wrapperChoiseList.addEventListener('click', hideSelectedItem);

  function hideSelectedItem() {
    let choicesItem = document.querySelector('.choices__list--single').children[0];
    let choicesListDropdown = document.querySelector('.choices__list--dropdown').children[0];

    for (let i = 0; choicesListDropdown.childElementCount > i; i++) {
      if (choicesListDropdown.children[i].textContent == choicesItem.textContent) {
        choicesListDropdown.children[i].style.display = 'none';
      }
    }
  }

  let namePainter = null;
  let nameImage = null;
  let yearImage = null;
  let imageDescription = null;
  let srcImage = null;

  galleryImage.forEach(function (item) {
    item.addEventListener('click', function (ev) {
      const picturePath = ev.target.querySelector('.gallery-image').attributes.src.value;
      const pictureAlt = ev.target.querySelector('.gallery-image').attributes.alt.value;
      const pictureId = this.getAttribute('data-id');

      if (!document.querySelector('.modal-window')) {
        const bottomLayerModal = document.createElement('div');
        bottomLayerModal.classList.add('bottom-layer-modal-window');

        buildingInfoPicture(pictureId, picturePath);

        let modalWindow = `
          <div class="modal-window">
            <div class="modal-window__block-image">
              <img class="gallery-modal-image" src="${srcImage}" alt="${pictureAlt}">
            </div>
            <div class="modal-window__block-description">
              <div class="modal-window__wrapper-text">
                <h3 class="modal-window__title">
                  <span class="modal-window__span-1">${namePainter}</span>
                  <span class="modal-window__span-2">${nameImage}</span>
                  <span class="modal-window__span-3">${yearImage}</span>
                </h3>
                <p class="modal-window__text-description">${imageDescription}</p>
              </div>
              <button class="modal-window__btn-close js-focus-visible"></button>
            </div>
          </div>`;

        if (document.documentElement.clientWidth > 576) {
          body.classList.add('body_position-relative');
        } else {
          main.style.position = 'relative';
        }
        main.append(bottomLayerModal);

        if (document.documentElement.clientWidth <= 768 && document.documentElement.clientWidth > 576) {
          swiperGallery = document.querySelector('.gallery-section__block-images');
          swiperGallery.insertAdjacentHTML('beforeend', modalWindow);
        } else if (document.documentElement.clientWidth <= 576) {
          const modalWindowContainer = document.createElement('div');
          document.querySelector('.text-gallery').classList.add('text-gallery_opacity-0');
          modalWindowContainer.classList.add('container-modal-window');
          swiperGallery = document.querySelector('.gallery-section__block-images');
          modalWindowContainer.insertAdjacentHTML('beforeend', modalWindow);
          swiperGallery.append(modalWindowContainer);
        } else {
          swiperGallery.insertAdjacentHTML('beforeend', modalWindow);
        }
        document.querySelector('.modal-window__btn-close').addEventListener('click', closeModalWindow);

        if (document.documentElement.clientWidth <= 576) {
          swiperGallery.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
          });
          clearTimeout(timerId);
          timerId = setTimeout(function () {
            scrollY = window.scrollY;
            const innerWidth = window.innerWidth;
            body.style.position = 'fixed';
            body.style.overflow = 'hidden';
            body.style.top = `-${scrollY}px`;
            body.style.width = `${innerWidth}px`;
          }, 500);
        } else {
          swiperGallery.scrollIntoView({
            block: 'center',
            behavior: 'smooth',
          });
          body.classList.add('modal-window-active');
          new SimpleBar(document.querySelector('.modal-window__wrapper-text'));
        }
      }
      document.querySelector('.modal-window').classList.add('modal-window_opacity-1');
    })
  });

  function closeModalWindow() {
    let bottomLayerModal = document.querySelector('.bottom-layer-modal-window');
    main.style.position = '';
    bottomLayerModal.remove();
    if (document.documentElement.clientWidth <= 576) {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      body.style.overflow = '';
      window.scrollTo(0, scrollY);
    } else {
      body.classList.remove('body_position-relative', 'modal-window-active');
    }
    let modalWindow = document.querySelector('.modal-window');
    document.querySelector('.text-gallery').classList.remove('text-gallery_opacity-0');
    modalWindow.classList.remove('modal-window_opacity-1');
    if (document.querySelector('.container-modal-window')) {
      document.querySelector('.container-modal-window').remove();
    } else {
      modalWindow.remove();
    }
  };

  function buildingInfoPicture(pictureId, picturePath) {
    for (let i = 0; galleryData.length > i; i++) {

      if (galleryData[i].id == pictureId) {
        namePainter = galleryData[i]['author picture'];
        nameImage = `"${galleryData[i]['name picture']}"`;
        yearImage = galleryData[i].years;
        imageDescription = galleryData[i].description;

        if ('image path' in galleryData[i]) {
          srcImage = galleryData[i]['image path'];
          break;
        } else {
          srcImage = picturePath;
          break;
        }
      }
    }
  };

  function creatingColumnsCategory() {
    if (document.documentElement.clientWidth <= 768 && document.documentElement.clientWidth > 576 && document.querySelector('.categories-column') == null) {
      let countColumn = 3;
      let countOfElements = categoriesForm.childElementCount;
      let countElementsInColumn = Math.ceil(countOfElements / countColumn);
      creatingWrappers(countColumn, countElementsInColumn);
    } else if ((document.documentElement.clientWidth <= 576 || document.documentElement.clientWidth > 768) && document.querySelector('.categories-column') !== null) {
      let columns = document.querySelectorAll('.categories-column');
      for (let i = 0; columns.length > i; i++) {
        let column = columns[i];
        while (column.childElementCount !== 0) {
          categoriesForm.append(column.childNodes[0]);
        }
        column.remove();
      }
    }
  };

  function creatingWrappers(countColumn, countElementsInColumn) {
    for (let i = 1; countColumn >= i; i++) {
      let columnWrap = document.createElement('div');
      columnWrap.classList.add(`categories-form__column-${i}`, 'categories-column');
      for (let i = 0; countElementsInColumn > i; i++) {
        if (categoriesForm.children[0] !== undefined && !categoriesForm.children[0].classList.contains('categories-column')) {
          columnWrap.append(categoriesForm.children[0]);
        }
      }
      categoriesForm.append(columnWrap);
    }
  };

  optimizeSizeSwiper();
  activateTab();
  showPainters();
  addActiveClassBtn();
  optimizeCheckbox();
  creatingColumnsCategory();
  hideSelectedItem();
  accordioninitial();
  initialSwiperListCard();
  optimizeScrollInfo();
  setPositionTooltip();
  optimizeSwiperEdition();
  optimizationMap();

  script.src = "scripts/focus-visible.js";

  script.addEventListener('error', () => {
    let focusElements = document.querySelectorAll('.js-focus-visible');
    focusElements.forEach(element, () => {
      focusElements.classList.remove('js-focus-visible');
    })
  });

  for (let i = 0; dropdownLink.length > i; i++) {
    dropdownLink[i].addEventListener('keydown', function (ev) {
      if (ev.code == "Space" || ev.code == "Enter") {
        if (!ev.target.parentNode.children[1].classList.contains('dropdown__wrap-hover')) {
          ev.preventDefault();
          closeDropDown();
          ev.target.parentNode.children[1].classList.add('dropdown__wrap-hover');
          ev.target.classList.add('dropdown__button-active');
        }
        else {
          ev.preventDefault();
          ev.target.parentNode.children[1].classList.remove('dropdown__wrap-hover');
          ev.target.classList.remove('dropdown__button-active');
        }
      }

      dropdownLink[0].addEventListener('keydown', function (ev) {
        if (ev.shiftKey && ev.code == "Tab") {
          ev.target.parentNode.children[1].classList.remove('dropdown__wrap-hover');
          ev.target.classList.remove('dropdown__button-active');
        }
      })
    })
  }

  let simplebarContent = document.querySelectorAll('.simplebar-content');
  let list = null;
  let lastLi = null;

  for (let i = 0; simplebarContent.length > i; i++) {
    list = simplebarContent[i];
    lastLi = list.children[list.children.length - 1];
    lastLi.addEventListener('keydown', function (ev) {
      if (ev.which == 9) {
        closeDropDown();
      }
    });
  }

  function closeDropDown() {
    for (let i = 0; dropdownWrap.length > i; i++) {
      if (dropdownWrap[i].classList.contains('dropdown__wrap-hover')) {
        dropdownWrap[i].classList.remove('dropdown__wrap-hover');
        dropdownWrap[i].parentElement.children[0].classList.remove('dropdown__button-active');
      }
    }
  }

  function setPositionTooltip() {
    let viewportWidth = document.documentElement.clientWidth;
    let elemPosition = null;
    tooltip.forEach((elem) => {
      elemPosition = elem.getBoundingClientRect().right;
      if (elemPosition < 120 && elemPosition !== 0) {
        if (!elem.classList.contains('project-text__span-tooltip-left') && !elem.classList.contains('project-text__span-tooltip-right')) {
          elem.classList.add('project-text__span-tooltip-left');
        } else {
          elem.classList.remove('project-text__span-tooltip-right');
          elem.classList.add('project-text__span-tooltip-left');
        }
      } else if (elemPosition > (viewportWidth - 120)) {
        if (!elem.classList.contains('project-text__span-tooltip-right') && !elem.classList.contains('project-text__span-tooltip-left')) {
          elem.classList.add('project-text__span-tooltip-right');
        } else {
          elem.classList.remove('project-text__span-tooltip-left');
          elem.classList.add('project-text__span-tooltip-right');
        }
      } else if (elem.classList.contains('project-text__span-tooltip-left')) {
        elem.classList.remove('project-text__span-tooltip-left');
      } else if (elem.classList.contains('project-text__span-tooltip-right')) {
        elem.classList.remove('project-text__span-tooltip-right');
      }
    });
  };


  document.querySelector('.contacts-form').addEventListener('submit', (ev) => {
    ev.preventDefault();
    let ValueInputName = document.querySelector('.contacts-form__input[name="firstName"]').value;
    let ValueInputNumber = document.querySelector('.contacts-form__input[name="telephoneNumber"]').value;

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/handler.php');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('firstName=' + encodeURIComponent(ValueInputName) + '&telephoneNumber=' + encodeURIComponent(ValueInputNumber));

    xhr.addEventListener('load', () => {
      let responseText = null;
      if (xhr.readyState == 4) {
        if (xhr.status != 200 && xhr.readyState !== 4 && xhr.response !== 'true') {
          responseText = 'Произошла ошибка при запросе!'
          createModalResponse(responseText);
        } else {
          responseText = 'Заявка отправлена! Ожидайте звонок.'
          createModalResponse(responseText);
        }
      }

      document.querySelector('.contacts-form__input[name="firstName"]').value = '';
      document.querySelector('.contacts-form__input[name="telephoneNumber"]').value = '';
      let timer = setTimeout(() => {
        document.querySelector('.modal-response').remove();
        clearTimeout(timer);
      }, 3000);
    })
  })

  function createModalResponse(responseText) {
    let modalResponse = `
      <div class="modal-response">
        <p class="modal-response__text">${responseText}</p>
      </div>`;
    let sectionContacts = document.querySelector('.section-contacts');
    sectionContacts.insertAdjacentHTML('beforeend', modalResponse);
  }
});

