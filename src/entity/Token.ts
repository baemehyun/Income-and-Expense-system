import internal from "stream"
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn ,ManyToOne,JoinColumn} from "typeorm"
import {User} from "../entity/User"
@Entity("tokens")
export class Token {

    @PrimaryGeneratedColumn()
    "token_id": number

    @Column()
    "user_id": number

    @Column()
    "token": string

    @Column()
    "is_revoke": number

    @CreateDateColumn()
    "create_at": Date

    @UpdateDateColumn()
    "update_at": Date

    @ManyToOne(() => User, (user) => user.tokens)
    @JoinColumn({ name: "user_id" })
    "user": User;
}

