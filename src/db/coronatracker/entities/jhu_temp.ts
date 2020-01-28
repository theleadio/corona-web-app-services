import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("jhu_temp" ,{schema:"coronatracker" } )
export class jhu_temp {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"nid"
        })
    nid:number;
        

    @Column("varchar",{ 
        nullable:true,
        name:"country"
        })
    country:string | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"last_update"
        })
    last_update:Date | null;
        

    @Column("int",{ 
        nullable:true,
        name:"confirmed"
        })
    confirmed:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"suspected"
        })
    suspected:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"recovered"
        })
    recovered:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"deaths"
        })
    deaths:number | null;
        
}
