export const clickLabelEvent = (item) => {
  item.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      item.click();
    }
  });
};
export const observeElements = (sectionELements) => {
  const options = { threshold: 0.2 };
  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      } else {
        entry.target.classList.remove("in-view");
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);
  sectionELements.forEach((element) => {
    observer.observe(element);
  });
};
export const observeImages = (images) => {
  const options = { threshold: 0.2 };
  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view-image");
      } else {
        entry.target.classList.remove("in-view-image");
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);
  images.forEach((element) => {
    observer.observe(element);
  });
};
export const observeText = (articles) => {
  const options = { threshold: 1 };
  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view-text");
      } else {
        entry.target.classList.remove("in-view-text");
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);
  articles.forEach((element) => {
    observer.observe(element);
  });
};
