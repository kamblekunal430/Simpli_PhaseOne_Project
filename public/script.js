function addComment() {
    var div = document.createElement("div");
    var b = document.createElement("b");
    var p = document.createElement("p");
    var i = document.createElement("i");

    var name = document.getElementById("name");
    var inpcmnt = document.getElementById("inpcmnt");

    b.appendChild(document.createTextNode(name.value));
    p.appendChild(document.createTextNode(inpcmnt.value));

    var currentdate = new Date();
    var datetime =
        " " +
        currentdate.getDate() +
        "/" +
        (currentdate.getMonth() + 1) +
        "/" +
        currentdate.getFullYear() +
        " @ " +
        currentdate.getHours() +
        ":" +
        currentdate.getMinutes();

    i.appendChild(document.createTextNode(datetime));
    div.appendChild(b);
    div.appendChild(i);
    div.appendChild(p);

    document.getElementById("comment").appendChild(div);
    name.value = "";
    inpcmnt.value = "";
}
