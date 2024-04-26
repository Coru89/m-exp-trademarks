
$('document').ready(function() {

   $('.variant-swatch .variant-swatch__radio').click(function() {

       var variantSKU = $(this).attr('data-variant-sku');
  
       $('.product-meta__reference .product-meta__sku-number').text(variantSKU);
  
       var variantPrice = $(this).attr('data-vatiant-price');
  
       $('.price-list .price').text(variantPrice);    
    
   });

});

 $('.product__thumbnail-item').click(function() {
    
      setTimeout(delay, 300);

    function delay() {
      
      var selectedVariantImg = $('.product__thumbnail-item[aria-current="true"]');
      var selectedVariantImgIndex = selectedVariantImg.index();
      selectedVariantImg = selectedVariantImg.attr('data-alt');

      var selectedVar = $(`.variant-swatch_item .variant-swatch_image[alt="${selectedVariantImg}"]`).click();
      document.querySelectorAll('.product__thumbnail-item')[selectedVariantImgIndex].click();

    }
          
  });


  $('.product__media-image-wrapper').click(function() {
    
      setTimeout(delay, 300);

    function delay() {
      
      var selectedVariantImg = $('.product__thumbnail-item[aria-current="true"]');
      var selectedVariantImgIndex = selectedVariantImg.index();
      selectedVariantImg = selectedVariantImg.attr('data-alt');

      var selectedVar = $(`.variant-swatch_item .variant-swatch_image[alt="${selectedVariantImg}"]`).click();
      document.querySelectorAll('.product__thumbnail-item')[selectedVariantImgIndex].click();

    }
          
  });


    $(".product__media-image-wrapper").on("touchstart", function(event) {
      xDown = event.originalEvent.touches[0].clientX;
      yDown = event.originalEvent.touches[0].clientY;
    });
    
    $(".product__media-image-wrapper").on("touchmove", function(event) {
        if ( ! xDown || ! yDown ) {
            return;
        }
    
        var xUp = event.originalEvent.touches[0].clientX;
        var yUp = event.originalEvent.touches[0].clientY;
    
        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;
    
        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
            
              setTimeout(delay, 300);

              function delay() {
                
                var selectedVariantImg = $('.product__thumbnail-item[aria-current="true"]');
                var selectedVariantImgIndex = selectedVariantImg.index();
                selectedVariantImg = selectedVariantImg.attr('data-alt');
          
                var selectedVar = $(`.variant-swatch_item .variant-swatch_image[alt="${selectedVariantImg}"]`).click();
                document.querySelectorAll('.product__thumbnail-item')[selectedVariantImgIndex].click();
          
              }
          
        }
        xDown = null;
        yDown = null;
    });


  $('.product__media-nav').click(function() {
    
      setTimeout(delay, 300);

    function delay() {
      
      var selectedVariantImg = $('.product__thumbnail-item[aria-current="true"]');
      var selectedVariantImgIndex = selectedVariantImg.index();
      selectedVariantImg = selectedVariantImg.attr('data-alt');

      var selectedVar = $(`.variant-swatch_item .variant-swatch_image[alt="${selectedVariantImg}"]`).click();
      document.querySelectorAll('.product__thumbnail-item')[selectedVariantImgIndex].click();

    }
          
  });
