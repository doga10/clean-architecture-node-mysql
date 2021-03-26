import {AddAccountRepository} from '@/data/protocols'

export class AccountMysqlRepository implements AddAccountRepository {
  async add(data: AddAccountRepository.Params): Promise<AddAccountRepository.Result> {
    const table = await MySQLHelper.getTable('')
    return 
  }
}
