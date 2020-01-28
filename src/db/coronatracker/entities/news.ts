import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("news" ,{schema:"coronatracker" } )
export class news {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        name:"url"
        })
    url:string;
        

    @Column("varchar",{ 
        nullable:false,
        name:"title"
        })
    title:string;
        

    @Column("text",{ 
        nullable:false,
        name:"description"
        })
    description:string;
        

    @Column("text",{ 
        nullable:true,
        name:"content"
        })
    content:string | null;
        

    @Column("timestamp",{ 
        nullable:false,
        name:"published"
        })
    published:Date;
        

    @Column("varchar",{ 
        nullable:true,
        name:"imageUrl"
        })
    imageUrl:string | null;
        
}
