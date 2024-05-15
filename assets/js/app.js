function search(val) {
  let search_response = val.parentElement.nextElementSibling.classList;
  if (val.value.length > 0) {
    if (search_response.contains("d-none")) {
      search_response.remove("d-none");

      setTimeout(() => {
        document.addEventListener(
          "click",
          () => {
            search_response.add("d-none");
          },
          { once: true }
        );
      }, 200);
    }
  } else {
    search_response.add("d-none");
  }
}

function changeText(e) {
  let change_vals = document.getElementById("change_value");
  change_vals.innerText = e.innerText;
  document.querySelectorAll(".changing_value").forEach((element) => {
    element.innerText = e.innerText;
  });
}
