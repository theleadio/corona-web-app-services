import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("healthcare_providers" ,{schema:"coronatracker" } )
export class healthcare_providers {

    @PrimaryColumn()
    id: number;
    
    @Column("varchar",{ 
        nullable:true,
        length:80,
        name:"name"
        })
    name:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"description"
        })
    description:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"address"
        })
    address:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"city"
        })
    city:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"state"
        })
    state:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"country"
        })
    country:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"telephone"
        })
    telephone:string | null;
        

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
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"added_by"
        })
    added_by:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"source"
        })
    source:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"official_advisory"
        })
    official_advisory:string | null;
        
}
