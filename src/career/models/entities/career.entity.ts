import { ProfileEntity } from 'src/profile/models/entities/profile.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('career')
export class CareerEntity {
  @PrimaryGeneratedColumn()
  id: number;
  // @OneToMany(() => ProfileEntity, profile => profile.)

  @Column({ nullable: false, unique: true })
  name: string;

  @Column()
  questionFrist: string;

  @Column({ nullable: true })
  questionSencond: string;

  @Column({ nullable: true })
  questionThrird: string;

  @OneToMany(() => ProfileEntity, (profile) => profile.career)
  profile: ProfileEntity[];
}
