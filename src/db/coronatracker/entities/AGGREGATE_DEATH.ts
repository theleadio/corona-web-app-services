import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("AGGREGATE_DEATH" ,{schema:"coronatracker" } )
export class AGGREGATE_DEATH {

    @PrimaryColumn()
    id: number;
    
    @Column("int",{ 
        nullable:true,
        name:"total_death"
        })
    total_death:number | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"created_date"
        })
    created_date:Date | null;
        
}
