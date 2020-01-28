import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("AGGREGATE_SUSPECT" ,{schema:"coronatracker" } )
export class AGGREGATE_SUSPECT {

    @PrimaryColumn()
    id: number;
    
    @Column("int",{ 
        nullable:true,
        name:"total_suspect"
        })
    total_suspect:number | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"created_date"
        })
    created_date:Date | null;
        
}
