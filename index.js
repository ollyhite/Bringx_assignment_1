$(document).ready(function () {
  $.typeahead({
    input: ".js-typeahead",
    hint: true,
    maxLength: 8,
    minLength: 1,
    display: ["title"],
    source: {
      url: "https://bringx-us-state-server.onrender.com/states",
    },
    // callback: {
    //   onClickAfter: function (node, a, item, event) {
    //     window.location.href = item.url;
    //   },
    // },
  });
});
