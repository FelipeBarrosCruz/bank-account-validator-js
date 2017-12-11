require('./src/banco_do_brasil_check_number_calculator')
require('./src/banco_do_brasil_validator')
require('./src/banrisul_check_number_calculator')
require('./src/banrisul_validator')
require('./src/bradesco_check_number_calculator')
require('./src/bradesco_validator')
require('./src/citibank_validator')
require('./src/common_bank_account_validator')
require('./src/generic_bank_account_validator')
require('./src/hsbc_validator')
require('./src/itau_check_number_calculator')
require('./src/itau_validator')
require('./src/santander_validator')
require('./src/bank_account')

const result = Moip.BankAccount.validate({
  bankNumber: '001',
  agencyNumber: '1621',
  agencyCheckNumber: '7',
  accountNumber: '00034260',
  accountCheckNumber: '2'
})


exports.Moip = Moip