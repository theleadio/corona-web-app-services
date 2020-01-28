import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("coronaTracker_mastertable_v1" ,{schema:"coronatracker" } )
export class coronaTracker_mastertable_v1 {

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
        

    @Column("datetime",{ 
        nullable:true,
        name:"Last_Update"
        })
    Last_Update:Date | null;
        

    @Column("double",{ 
        nullable:true,
        precision:22,
        name:"latitute"
        })
    latitute:number | null;
        

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
        name:"Collected"
        })
    Collected:string | null;
        
}
