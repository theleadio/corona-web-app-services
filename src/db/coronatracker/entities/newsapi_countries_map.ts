import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("newsapi_countries_map" ,{schema:"coronatracker" } )
export class newsapi_countries_map {

    @Column("int",{ 
        nullable:false,
        name:"nid"
        })
    nid:number;
        

    @Column("varchar",{ 
        nullable:false,
        primary:true,
        length:2,
        name:"countryCode"
        })
    countryCode:string;
        
}
