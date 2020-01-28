import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("coronaTracker_JHUdata_bkp" ,{schema:"coronatracker" } )
export class coronaTracker_JHUdata_bkp {

    @PrimaryColumn()
    id: number;
    
    @Column("char",{ 
        nullable:true,
        length:200,
        name:"ID"
        })
    ID:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:755,
        name:"Province_State"
        })
    Province_State:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:755,
        name:"Country_Region"
        })
    Country_Region:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:755,
        name:"Last_Update"
        })
    Last_Update:string | null;
        

    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"latitude"
        })
    latitude:number | null;
        

    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"longitude"
        })
    longitude:number | null;
        

    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"Confirmed"
        })
    Confirmed:number | null;
        

    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"Suspected"
        })
    Suspected:number | null;
        

    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"Recovered"
        })
    Recovered:number | null;
        

    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"Deaths"
        })
    Deaths:number | null;
        

    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"ConfnSusp"
        })
    ConfnSusp:number | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:10,
        scale:0,
        name:"Time_Collected"
        })
    Time_Collected:string | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"Date_Collected"
        })
    Date_Collected:Date | null;
        
}
