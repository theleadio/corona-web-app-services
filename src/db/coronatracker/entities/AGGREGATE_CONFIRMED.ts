import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("AGGREGATE_CONFIRMED" ,{schema:"coronatracker" } )
export class AGGREGATE_CONFIRMED {

    @PrimaryColumn()
    id: number;
    
    @Column("int",{ 
        nullable:true,
        name:"total_confirmed"
        })
    total_confirmed:number | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"created_date"
        })
    created_date:Date | null;
        
}
