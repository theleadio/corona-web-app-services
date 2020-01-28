import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("countries" ,{schema:"coronatracker" } )
export class countries {

    @PrimaryColumn()
    id: number;
    
    @Column("varchar",{ 
        nullable:false,
        primary:true,
        length:2,
        name:"countryCode"
        })
    countryCode:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:100,
        name:"countryName"
        })
    countryName:string;
        
}
