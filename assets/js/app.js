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