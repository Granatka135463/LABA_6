function Ok(){
    var A = new Array(document.f.t1, document.f.t2, document.f.t3,
    document.f.t4, document.f.s1, document.f.s2,document.f.s3,document.f.s4)
    var Res = 0;
    for (i in A) {
    if (A[i].checked) Res = Res + parseInt(A[i].value)
    }
    switch (Res){
    case 3: alert("Відмінно! Ви повністю засвоїли матеріал даної теми.")
    break;
    case 2: alert("Добре!Але не блискуче!")
    break;
    case 1: alert("Задовільно! Можна краще.")
    break;
    case 0: alert("Погано! Вивчіть матеріал заново.")}
    }