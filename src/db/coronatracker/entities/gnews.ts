import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("gnews" ,{schema:"coronatracker" } )
@Index("link",["link",],{unique:true})
export class gnews {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"nid"
        })
    nid:number;
        

    @Column("varchar",{ 
        nullable:true,
        unique: true,
        name:"link"
        })
    link:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"title"
        })
    title:string | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"date"
        })
    date:Date | null;
        
}
