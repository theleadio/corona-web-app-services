import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("newsapi_n_temp" ,{schema:"coronatracker" } )
export class newsapi_n_temp {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"nid"
        })
    nid:number;
        

    @Column("varchar",{ 
        nullable:true,
        name:"author"
        })
    author:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"title"
        })
    title:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"description"
        })
    description:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"url"
        })
    url:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"urlToImage"
        })
    urlToImage:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"publishedAt"
        })
    publishedAt:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"content"
        })
    content:string | null;
        
}
