import { CareerEntity } from 'src/career/models/entities/career.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
@Entity('profile')
export class ProfileEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  education: string;

  @Column({ nullable: true })
  skill: string;

  @Column({ nullable: true })
  sumary: string;

  @Column({ nullable: true })
  experience: string;

  @Column({ nullable: true })
  certifications: string;

  @Column({ nullable: true })
  answersFrist: string;

  @Column({ nullable: true })
  answerSencond: string;

  @Column({ nullable: true })
  answerThrird: string;

  //   @Column()
  //   @ManyToOne(() => CareerEntity, (career) => career.name)
  //   careeer: CareerEntity;

  //   @OneToOne(() => CareerEntity, { cascade: true })
  //   @JoinColumn({ name: 'name' })
  //   career: CareerEntity;
  @ManyToOne(() => CareerEntity, (career) => career.profile, {
    nullable: false,
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ referencedColumnName: 'name' })
  career: CareerEntity;
}

// b1 : create fields necessary for profile
// Name;
// Phone;
// Email;

// Education;

// Skill;

// Sumary;

// Experience;

// Certifications;

//  b2 : create answers

// b3 constraint profile to career
