function append() {
    let course = JSON.parse(localStorage.getItem("course")) ;

    // upperBox start here

    let full_div = document.getElementById("full-div");

    let fullInnerDiv = document.createElement("div");
    let title = document.createElement("h1");
    title.textContent = course.title;

    let img_div = document.createElement("div");

    let image = document.createElement("img");
    image.src =
      "https://www.nicepng.com/png/full/88-886368_five-yellow-stars-5-stars-black-background.png";

    let by = document.createElement("p");
    by.textContent = "by " + course.by;

    img_div.append(image, by);

    let short_dis = document.createElement("p");
    short_dis.setAttribute("class", "short-dis");
    short_dis.textContent = course.shortDiscription;

    let btn = document.createElement("button");
    btn.textContent = "START A FREE 10-DAY TRIAL";

    fullInnerDiv.append(title, img_div, short_dis, btn);

    full_div.append(fullInnerDiv);
    // upperBox end here

    // middel-box start here

    // left side start
    let left = document.getElementById("left");

    let h3_cou = document.createElement("h3");
    h3_cou.textContent = "Course info";

    let line1 = document.createElement("div");

    let div1 = document.createElement("div");
    let rating = document.createElement("p");
    rating.textContent = "Rating";
    div1.append(rating);

    let div2 = document.createElement("div");

    let rating_num = document.createElement("p");
    rating_num.textContent = "(" + course.rating + ")";

    div2.append(image, rating_num);
    line1.append(div1, div2);

    let line2 = document.createElement("div");

    let div3 = document.createElement("div");
    let level = document.createElement("p");
    level.textContent = "Level";
    div3.append(level);

    let div4 = document.createElement("div");

    let level_img = document.createElement("img");
    level_img.src =
      "https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/course/level.png";

    let levl = document.createElement("p");
    levl.textContent = course.level;

    div4.append(levl, level_img);
    line2.append(div3, div4);

    let line3 = document.createElement("div");

    let div5 = document.createElement("div");
    let upd = document.createElement("p");
    upd.textContent = "Updated";
    div5.append(upd);

    let div6 = document.createElement("div");

    let date_img = document.createElement("img");
    date_img.src =
      "https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/course/calendar.png";

    let date = document.createElement("p");
    date.textContent = course.date;

    div6.append(date, date_img);
    line3.append(div5, div6);

    let line4 = document.createElement("div");

    let div7 = document.createElement("div");
    let du = document.createElement("p");
    du.textContent = "Duration";
    div7.append(du);

    let div8 = document.createElement("div");

    let dura_img = document.createElement("img");
    dura_img.src =
      "https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/course/clock.png";

    let duration = document.createElement("p");
    duration.textContent = course.time;

    div8.append(duration, dura_img);
    line4.append(div7, div8);

    left.append(h3_cou, line1, line2, line3, line4);

    //left side end here

    // right side start
    let right = document.getElementById("right");

    let desc = document.createElement("h3");
    desc.textContent = "Description";

    let details = document.createElement("p");
    details.textContent = course.discription;

    right.append(desc, details);

    // right end here

    // author
    let photo = document.getElementById("photo");

    let photo_div = document.createElement("div");
    let auth_img = document.createElement("img");
    auth_img.src = course.Author_Image_URL;

    photo_div.append(auth_img);

    let auth_name_div = document.createElement("div");

    auth_name_div.append(by);

    photo.append(photo_div, auth_name_div);

    let about = document.getElementById("about");

    let abth3 = document.createElement("h3");
    abth3.textContent = "About The author";

    let abt_details = document.createElement("p");
    abt_details.textContent = course.author_about;

    about.append(abth3, abt_details);
  }
  append();