import { EntityRepository, Repository } from 'typeorm';
import { ProfileEntity } from './models/entities/profile.entity';
import { v4 as uuidv4 } from 'uuid';

@EntityRepository(ProfileEntity)
export class ProfileRepository extends Repository<ProfileEntity> {
  //   rawData(query: string): Promise<ProfileEntity> {
  //     return this.manager.query(`${query}`);
  //   }
  async createProfile(
    name: string,
    phone: string,
    email: string,
    careerName: string,
  ) {
    // careerName: string, // email: string, // phone: string, // name: string,
    // const genId = ;
    // console.log(name, phone, email, careerName);
    // const name1 = 'tris';
    // const phone = '093';
    // const email = 'tri@gmail.com';
    // const careerName = 'bank';
    //INSERT INTO `cvmaker1`.`profile` (`id`, `name`, `phone`, `email`, `careerName`) VALUES ('1', 'truss', '0912', 'sas', 'bank');
    //  const query = `insert into blog (title,content,adminId) values ("${title}" , "${content}"),${adId} )`;
    // const query = `insert into profile(id,name,phone,email,careerName) values ( ${genId}, ${name1},${phone},${email} , ${careerName})`;
    const query = `insert into profile(id,name,phone,email,careerName) values ("${uuidv4()}", "${name}","${phone}","${email}","${careerName}")`;
    const a = await this.manager.query(query);
    console.log(a);
    return a;
  }
}
