import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("arcgis_temp" ,{schema:"coronatracker" } )
export class arcgis_temp {
    
    @PrimaryColumn()
    id: number;

    @Column("text",{ 
        nullable:true,
        name:"state"
        })
    state:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"country"
        })
    country:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"last_update"
        })
    last_update:string | null;
        

    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"lat"
        })
    lat:number | null;
        

    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"lng"
        })
    lng:number | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"confirmed"
        })
    confirmed:string | null;
        

    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"deaths"
        })
    deaths:number | null;
        

    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"recovered"
        })
    recovered:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"posted_date"
        })
    posted_date:string | null;
        
}
