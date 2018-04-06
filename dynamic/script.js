function loadJSON(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  }
  rawFile.send();
}
loadJSON("dynamic/data.json", function(text){
  let data = JSON.parse(text);
  console.log(data);
  basic(data.basics);
  details(data.data);
  skillsTable(data.skills);
  raja(data.education);
  raja1(data.experienc);
});
var main = document.getElementById('main');
main.classList.add("top-div-profile");
var left=document.createElement("div");
left.classList.add("left-div");
main.appendChild(left);
var right = document.createElement("div");
right.classList.add("right-div");
main.appendChild(right);
function basic(ba){
  var image=document.createElement("img");
  image.classList.add("image");
  image.src=ba.picture;
  left.appendChild(image);
  var name=document.createElement("h1");
  name.classList.add("name");
  name.textContent=ba.name;
  right.appendChild(name);
  var desg=document.createElement("h3");
  desg.textContent=ba.designation;
  right.appendChild(desg);
  var desc=document.createElement("p");
  desc.classList.add("description");
  desc.textContent=ba.description;
  right.appendChild(desc);
}
function details(da){
  for(i in da){
    var di=document.createElement("div");
    di.classList.add("contacts1");
    var spam=document.createElement("span");
    spam.textContent=da[i].name;
    spam.classList.add("age");
    di.appendChild(spam);
    var sp=document.createElement("span");
    sp.textContent=da[i].value;
    di.appendChild(sp);
    right.appendChild(di);
  }
}
var secondmain = document.getElementById('mainsecond');
secondmain.classList.add("skills-content");
function skillsTable(skills) {
  var table = document.createElement("table");
  table.className = 'skill';
  table.setAttribute('id','skills');
  let row = '';
  for(var i in skills){
    row += "<tr>"+
    "<td><strong>" + skills[i].name + "</strong></td>"+
    "<td>" + skills[i].keywords.join(', ') + "</td>"+
    "</tr>";
  }
  table.innerHTML = row;
  secondmain.appendChild(table);
}
var experience = document.getElementById('education');
experience.classList.add("education");
function raja(education) {
  for (i in education) {
    var edu = document.createElement("div");
    edu.classList.add("edu");
    var h3 = document.createElement("h3");
    h3.classList.add("Name");
    h3.textContent=education[i].quili;
    edu.appendChild(h3);
    for (j in education[i].number) {
      var ul= document.createElement("ul");
      var li = document.createElement("li");
      li.textContent=education[i].number[j];
      ul.appendChild(li);
      edu.appendChild(ul);
      experience.appendChild(edu);
    }
  }
}
var exp = document.getElementById('experiences-section');
exp.classList.add("experience");
exp.classList.add("experiences-section")
function raja1 (experienc) {
  for (g in experienc) {
    var item = document.createElement("div");
    item.classList.add("item");
    exp.appendChild(item);
    var meta = document.createElement("div");
    meta.classList.add("mata");
    item.appendChild(meta);
    var upper = document.createElement("div");
    upper.classList.add("upper-row");
    meta.appendChild(upper);
    var job = document.createElement("h3");
    job.classList.add("job-title");
    job.textContent=experienc[g].job;
    upper.appendChild(job);
    var time = document.createElement("div");
    time.classList.add("time");
    time.textContent = experienc[g].time;
    upper.appendChild(time);
    var company = document.createElement("div");
    company.classList.add("company");
    company.textContent = experienc[g].company;
    meta.appendChild(company);
    var details = document.createElement("div");
    details.classList.add("details");
    item.appendChild(details);
    for (f in experienc[g].desc){
      var p = document.createElement("p");
      p.textContent = experienc[g].desc[f];
      details.appendChild(p);
      }
    }
}
