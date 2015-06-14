// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require s3_direct_upload
//= require_tree .


$(function() {
  return alert("arthur");
});

jQuery(function() {
  return $(".s3-uploader").S3Uploader();
});

$('#myS3Uploader').bind("s3_upload_complete", function(e, content) {
  return alert(content.url);
});

$('#myS3Uploader').bind("s3_upload_failed", function(e, content) {
  return alert(content.filename + " failed to upload : " + content.error_thrown);
});

// ---
// generated by coffee-script 1.9.2