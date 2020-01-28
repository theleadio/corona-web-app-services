import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("AGGREGATE_RECOVER" ,{schema:"coronatracker" } )
export class AGGREGATE_RECOVER {

    @PrimaryColumn()
    id: number;
    
    @Column("int",{ 
        nullable:true,
        name:"total_recover"
        })
    total_recover:number | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"created_date"
        })
    created_date:Date | null;
        
}
