function typeConsole(type = "log") {
  const message = `Đây là type: ${type}`;
  if (type === "log") {
    console.log(message);
  } else if (type === "warn") {
    console.warn(message);
  } else if (type === "error") {
    console.error(message);
  } else {
    console.log(` dùng mặc định:`);
    console.log(message);
  }
}

typeConsole("log");    
typeConsole("warn");  
typeConsole("error");  
typeConsole();         

