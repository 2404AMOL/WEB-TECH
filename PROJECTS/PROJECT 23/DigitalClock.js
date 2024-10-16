    let hour=document.getElementById("Hour");
    let minute=document.getElementById("Minute");
    let second=document.getElementById("Second");
    let amPm=document.getElementById("AmPm");

   let DigitalClock;

    function Start() {
        DigitalClock= setInterval( ()=>{
                    let h=new Date().getHours();
                    let m=new Date().getMinutes();
                    let s=new Date().getSeconds();
                    var am= h>=12 ? "PM" : "AM" ;
            
                    //* Convert 24hrs into 12hrs clock
                    if(h>12)
                    {
                        h=h-12;
                    }

                    hour.innerHTML=h;
                    minute.innerHTML=m;
                    second.innerHTML=s;
                    amPm.innerHTML=am;
            
                    
                    //* Add zero before Single digit;
            
                    h =(h<10)?"0"+h : h;
                    m =(m<10)?"0"+m :m;
                    s =(s<10)?"0"+s: s;
                })
    }

    function stop() {
        clearInterval(DigitalClock)
    }
