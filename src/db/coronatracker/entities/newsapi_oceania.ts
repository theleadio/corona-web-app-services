import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("newsapi_oceania" ,{schema:"coronatracker" } )
@Index("url_UNIQUE",["url",],{unique:true})
export class newsapi_oceania {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"nid"
        })
    nid:number;
        

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
        name:"author"
        })
    author:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        unique: true,
        name:"url"
        })
    url:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"content"
        })
    content:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"urlToImage"
        })
    urlToImage:string | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"publishedAt"
        })
    publishedAt:Date | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"source"
        })
    source:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"summary"
        })
    summary:string | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"accessDateTime"
        })
    accessDateTime:Date | null;
        
}
