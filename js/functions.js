(function () {
    'use strict';
    var AltoAlAcosoScripts;

    AltoAlAcosoScripts = function () {
        var me = this;
        me.Eventos = {
            clickMostrarValores: function () {
                let id = $(this).data('id');
                $('.pilares__list ul li').removeClass('active');
                $('.pilares__content div').removeClass('active');
                $(this).addClass('active');
                $('.pilares__content div')[id].className = 'active';
            },
            clickMostrarLidermania: function () {
                let id = $(this).data('id');
                $('.lidermania__container ul li').removeClass('active');
                $('.lidermania__item').removeClass('active');
                $(this).addClass('active');
                $('.lidermania__item')[id].className = 'lidermania__item active';
            },
        };
        me.Funciones = {
            InicializarEventos: function () {
                $('body').on('click', '.pilares__list ul li', me.Eventos.clickMostrarValores);
                $('body').on('click', '.lidermania__container ul li', me.Eventos.clickMostrarLidermania);
            },
            InicializarProcesosOnLoad: function () {
                $('.photo__slider').slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    responsive: [
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        }
                    ]
                })
            }
        }
        me.Inicializar = function () {
            me.Funciones.InicializarEventos();
            me.Funciones.InicializarProcesosOnLoad();
        }
    }
    AltoAlAcosoScripts = new AltoAlAcosoScripts();
    AltoAlAcosoScripts.Inicializar();

})(window);