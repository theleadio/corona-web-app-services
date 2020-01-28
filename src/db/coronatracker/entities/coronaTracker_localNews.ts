import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("coronaTracker_localNews" ,{schema:"coronatracker" } )
export class coronaTracker_localNews {

    @PrimaryColumn()
    id: number;
    
    @Column("int",{ 
        nullable:true,
        name:"articleID"
        })
    articleID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"site_name"
        })
    site_name:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"title"
        })
    title:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"url"
        })
    url:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"created"
        })
    created:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"changed"
        })
    changed:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"field_article_author_id"
        })
    field_article_author_id:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"field_article_author_name"
        })
    field_article_author_name:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"field_article_author_email"
        })
    field_article_author_email:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"field_article_topic"
        })
    field_article_topic:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"field_tags"
        })
    field_tags:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"field_article_images_url"
        })
    field_article_images_url:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"field_article_images_caption"
        })
    field_article_images_caption:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"field_article_videos"
        })
    field_article_videos:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"field_article_lead"
        })
    field_article_lead:string | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"insertDate"
        })
    insertDate:Date | null;
        
}
