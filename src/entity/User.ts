import internal from "stream"
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,OneToMany } from "typeorm"
import { Token } from "./Token"

@Entity("users")
export class User {

    @PrimaryGeneratedColumn()
    "user_id": number

    @Column()
    "username": string

    @Column()
    "password": string

    @Column()
    "is_active": number

    @CreateDateColumn()
    "create_at": Date

    @UpdateDateColumn()
    "update_at": Date

    @OneToMany(() => Token, (token) => token.user)
    "tokens": Token[];
}

// export class User {
//     userId: number;
//     firstName: string;
//     lastName: string;
//     userName: string;
//     password: string;
//     isLogin: boolean;
//     createAt: Date;
//     updateAt: Date;
  
//     constructor(
//       userId: number,
//       firstName: string,
//       lastName: string,
//       userName: string,
//       password: string,
//       isLogin: boolean,
//       createAt: Date,
//       updateAt: Date
//     ) {
//       this.userId = userId;
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.userName = userName;
//       this.password = password;
//       this.isLogin = isLogin;
//       this.createAt = createAt;
//       this.updateAt = updateAt;
//     }
//   }
  
