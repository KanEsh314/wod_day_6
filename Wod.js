function motorcycle(n)
{ 
  if(0 <= n < 1440)
  {
    var hh = Math.trunc(n/60);
    var mm = n % 60;
    var h1 = Math.floor(hh/10);
    var h2 = Math.floor(hh%10);
    var m1 = Math.floor(mm/10);
    var m2 = Math.floor(mm%10);
    document.write(h1+h2+m1+m2);
  }
}
motorcycle(808);