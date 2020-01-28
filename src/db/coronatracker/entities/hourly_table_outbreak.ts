import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hourly_table_outbreak" ,{schema:"coronatracker" } )
export class hourly_table_outbreak {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"nid"
        })
    nid:number;
        

    @Column("varchar",{ 
        nullable:true,
        name:"state"
        })
    state:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"country"
        })
    country:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"last_update"
        })
    last_update:number | null;
        

    @Column("float",{ 
        nullable:true,
        precision:12,
        name:"lat"
        })
    lat:number | null;
        

    @Column("float",{ 
        nullable:true,
        precision:12,
        name:"lng"
        })
    lng:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"confirmed"
        })
    confirmed:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"deaths"
        })
    deaths:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"recovered"
        })
    recovered:number | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"posted_date"
        })
    posted_date:Date | null;
        
}
