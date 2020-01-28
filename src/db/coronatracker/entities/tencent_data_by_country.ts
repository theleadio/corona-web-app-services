import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tencent_data_by_country" ,{schema:"coronatracker" } )
export class tencent_data_by_country {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:100,
        name:"country"
        })
    country:string;
        

    @Column("int",{ 
        nullable:false,
        name:"num_confirm"
        })
    num_confirm:number;
        

    @Column("int",{ 
        nullable:false,
        name:"num_suspect"
        })
    num_suspect:number;
        

    @Column("int",{ 
        nullable:false,
        name:"num_dead"
        })
    num_dead:number;
        

    @Column("int",{ 
        nullable:false,
        name:"num_heal"
        })
    num_heal:number;
        

    @Column("int",{ 
        nullable:false,
        name:"created"
        })
    created:number;
        
}
