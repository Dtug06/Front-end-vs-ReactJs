type Role = "user" | "admin" | "visitor";
type  IsLogin="true"|"false"
 abstract class Account {
    id :number;
    userName:string;
    private pass:string;
    isLogin:IsLogin;
    role:Role;
    constructor(id:number,userName:string,pass:string,isLogin:IsLogin,role:Role){
    this.id=id;
    this.userName=userName;
    this.pass=pass;
    this.isLogin=isLogin;
    this.role=role;
    }
    abstract login():void;
   logOut(){
    if(this.isLogin=="true"){
        console.log("Dang xuat thanh cong !!");
        this.isLogin="false"
    }
   }
}
class userAcc extends Account {
    status: "active" | "banned";

    constructor(
        id: number,
        userName: string,
        pass: string,
        isLogin: IsLogin,
        role: Role,
        status: "active" | "banned"
    ) {
        super(id, userName, pass, isLogin, role);
        this.status = status;
    }

    login() {
        if (this.status === "active") {
            this.isLogin = "true";
            console.log(`Tài khoản ${this.userName} đăng nhập thành công!`);
        } else if (this.status === "banned") {
            console.log(`Tài khoản ${this.userName} đã bị khóa!`);
        }
    }
}

class adminAcc extends Account {
    constructor(id: number, userName: string, pass: string, isLogin: IsLogin) {
        super(id, userName, pass, isLogin, "admin");
    }

    login() {
        this.isLogin = "true";
        console.log(`Admin ${this.userName} đã đăng nhập`);
    }

    banUser(user: userAcc) {
        if (user.status !== "banned") {
            user.status = "banned";
            console.log(`Người dùng ${user.userName} đã bị cấm`);
        } else {
            console.log(`Người dùng ${user.userName} đã bị cấm từ trước`);
        }
    }
}
const user1 = new userAcc(1, "nam123", "123456", "false", "user", "active");
user1.login();
user1.logOut(); 
const user2 = new userAcc(2, "hung456", "abcdef", "false", "user", "banned");
user2.login(); 
let adminAccount=new adminAcc(0,"Tuândmin","doanhtuan70@","true");
adminAccount.banUser(user1);

