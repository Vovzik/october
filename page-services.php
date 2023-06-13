<!DOCTYPE html>
<html lang="ru">

<head>
    <?php include 'head.php' ?>
</head>

<body>

<div class="wrapper ">
    <?php include 'header.php'; ?>

    <main class="main">
        <section class="productions page-services">
            <div class="content-section-header">
                <div class="container">
                    <ul class="breadcrumbs">
                        <li class="breadcrumbs__item"><a class="breadcrumbs__item-link"
                                                         href="http://rubilnik-test.space/october/">Главная</a></li>
                        <li class="breadcrumbs__item">Услуги</li>
                    </ul>
                    <div class="productions__items">
                        <a class="productions__item" href="http://rubilnik-test.space/october/page-prodaction-sale-services.php">
                            <div class="productions__item-box">
                                <img class="productions__item-img" src="assets/img/services/1.png" alt="alt">
                            </div>
                            <div class="productions__item-inner">
                                <h3 class="productions__subtitle">
                                    Производство и продажа земснарядов
                                </h3>
                                <span class="page-services__link">
                                  Подробнее
                                </span>
                            </div>
                        </a>
                        <a class="productions__item" href="http://rubilnik-test.space/october/page-dredge-crewed-services.php">
                            <div class="productions__item-box">
                                <img class="productions__item-img" src="assets/img/services/2.png" alt="alt">
                            </div>
                            <div class="productions__item-inner">
                                <h3 class="productions__subtitle">
                                    Аренда земнснарядов с экипажем
                                </h3>
                                <span class="page-services__link">
                                  Подробнее
                                </span>
                            </div>
                        </a>
                        <a class="productions__item" href="http://rubilnik-test.space/october/page-hydraulic-works-services.php">
                            <div class="productions__item-box">
                                <img class="productions__item-img" src="assets/img/services/3.png" alt="alt">
                            </div>
                            <div class="productions__item-inner">
                                <h3 class="productions__subtitle">
                                    Гидромеханизированные работы
                                </h3>
                                <span class="page-services__link">
                                  Подробнее
                                </span>
                            </div>
                        </a>
                    </div>
                    <div class="productions__items page-services__items">
                        <a class="productions__item" href="#">
                            <div class="productions__item-box">
                                <img class="productions__item-img" src="assets/img/services/1.png" alt="alt">
                            </div>
                            <div class="productions__item-inner">
                                <h2 class="productions__subtitle">
                                    Сервисное обслуживание
                                </h2>
                            </div>
                        </a>
                        <a class="productions__item" href="#">
                            <div class="productions__item-box">
                                <img class="productions__item-img" src="assets/img/services/2.png" alt="alt">
                            </div>
                            <div class="productions__item-inner">
                                <h2 class="productions__subtitle">
                                    Услуги по добыче песка (ПГС)
                                </h2>
                            </div>
                        </a>
                        <a class="productions__item" href="#">
                            <div class="productions__item-box">
                                <img class="productions__item-img" src="assets/img/services/3.png" alt="alt">
                            </div>
                            <div class="productions__item-inner">
                                <h2 class="productions__subtitle">
                                    Очистка водоемов и рек
                                </h2>
                            </div>
                        </a>
                        <a class="productions__item" href="http://rubilnik-test.space/october/page-dredging-services.php">
                            <div class="productions__item-box">
                                <img class="productions__item-img" src="assets/img/services/3.png" alt="alt">
                            </div>
                            <div class="productions__item-inner">
                                <h2 class="productions__subtitle">
                                    Дноуглубительные работы
                                </h2>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <?php include 'footer.php'; ?>
</div>


<div data-popup="#popup" class="popup js__popup-open">
    <div class="popup__body">
        <div class="popup__content js__popup-content">
        <span class="popup__close js__popup-close">
          <img src="assets/img/popup/close.svg" alt="alt">
        </span>
            <video class="popup__video popup-video-js" controls src="assets/video/video.mkv"></video>
        </div>
    </div>
</div>


<script type="module" src="assets/js/main.js"></script>
</body>

</html>