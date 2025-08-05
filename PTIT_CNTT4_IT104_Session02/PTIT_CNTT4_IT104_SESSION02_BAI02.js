function greetingWithWeather(name="User",weather="nan"){
       if(weather=="sunny"){
        console.log(`Chao ${name}! Hom nay troi nang tuyet voi !!!`);
       }else if(weather=="rainy"){
        console.log(`Chao ${name}! Hom nay troi mua mat roi !!!`);
       }else{
        console.log(`Chao ${name}!Thoi tiet hom nay khong xac dinh!!!`);
       }
}
greetingWithWeather("Tuan","sunny");
greetingWithWeather("Linh","rainy");
greetingWithWeather("Minh");
greetingWithWeather();
