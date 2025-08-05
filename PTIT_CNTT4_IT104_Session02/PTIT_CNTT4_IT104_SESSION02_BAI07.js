function formatData(){
    let now=new Date();
    let year=now.getFullYear();
    let month=now.getMonth()+1;
    Number(month);
    let date=now.getDate();
    Number(date);
    if(month<10){
        String(month);
        month="0"+month;
    }
    if(date<10){
        String(date);
        date="0"+date;
    }
    return date+"/"+month+"/"+year;
}
