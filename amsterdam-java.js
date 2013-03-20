<script>
$(function() {
    function eventCallback() {
      $("#box").fadeIn();
      // $(this).fadeOut();
    }

    $("#box").on("click",eventCallback);

});
</script>