import { default as abiDecoder } from 'abi-decoder';

const uportAbi = [{"constant":true,"inputs":[{"name":"identity","type":"address"},{"name":"recoveryKey","type":"address"}],"name":"isRecovery","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"identity","type":"address"},{"name":"newOwner","type":"address"}],"name":"addOwner","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"identity","type":"address"},{"name":"owner","type":"address"}],"name":"isOlderOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"identity","type":"address"},{"name":"newIdManager","type":"address"}],"name":"initiateMigration","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"migrationNewAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"identity","type":"address"},{"name":"newOwner","type":"address"}],"name":"addOwnerFromRecovery","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"identity","type":"address"},{"name":"recoveryKey","type":"address"}],"name":"changeRecovery","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"identity","type":"address"}],"name":"finalizeMigration","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"identity","type":"address"}],"name":"cancelMigration","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"identity","type":"address"},{"name":"destination","type":"address"},{"name":"value","type":"uint256"},{"name":"data","type":"bytes"}],"name":"forwardTo","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"},{"name":"recoveryKey","type":"address"}],"name":"registerIdentity","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"identity","type":"address"},{"name":"owner","type":"address"}],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"migrationInitiated","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"},{"name":"recoveryKey","type":"address"}],"name":"createIdentity","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"identity","type":"address"},{"name":"owner","type":"address"}],"name":"removeOwner","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"_userTimeLock","type":"uint256"},{"name":"_adminTimeLock","type":"uint256"},{"name":"_adminRate","type":"uint256"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"identity","type":"address"},{"indexed":true,"name":"creator","type":"address"},{"indexed":false,"name":"owner","type":"address"},{"indexed":true,"name":"recoveryKey","type":"address"}],"name":"IdentityCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"identity","type":"address"},{"indexed":true,"name":"owner","type":"address"},{"indexed":false,"name":"instigator","type":"address"}],"name":"OwnerAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"identity","type":"address"},{"indexed":true,"name":"owner","type":"address"},{"indexed":false,"name":"instigator","type":"address"}],"name":"OwnerRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"identity","type":"address"},{"indexed":true,"name":"recoveryKey","type":"address"},{"indexed":false,"name":"instigator","type":"address"}],"name":"RecoveryChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"identity","type":"address"},{"indexed":true,"name":"newIdManager","type":"address"},{"indexed":false,"name":"instigator","type":"address"}],"name":"MigrationInitiated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"identity","type":"address"},{"indexed":true,"name":"newIdManager","type":"address"},{"indexed":false,"name":"instigator","type":"address"}],"name":"MigrationCanceled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"identity","type":"address"},{"indexed":true,"name":"newIdManager","type":"address"},{"indexed":false,"name":"instigator","type":"address"}],"name":"MigrationFinalized","type":"event"}]

const gnosisABIs = [
    require('@gnosis.pm/gnosis-core-contracts/build/contracts/StandardMarket.json'),
    require('@gnosis.pm/gnosis-core-contracts/build/contracts/StandardMarketFactory.json'),
    require('@gnosis.pm/gnosis-core-contracts/build/contracts/OutcomeToken.json'),
    require('@gnosis.pm/gnosis-core-contracts/build/contracts/EtherToken.json'),
    require('@gnosis.pm/gnosis-core-contracts/build/contracts/CentralizedOracle.json'),
    require('@gnosis.pm/gnosis-core-contracts/build/contracts/CentralizedOracleFactory.json'),
    require('@gnosis.pm/gnosis-core-contracts/build/contracts/CategoricalEvent.json'),
    require('@gnosis.pm/gnosis-core-contracts/build/contracts/ScalarEvent.json'),
    require('@gnosis.pm/gnosis-core-contracts/build/contracts/EventFactory.json'),
    require('@gnosis.pm/gnosis-core-contracts/build/contracts/LMSRMarketMaker.json'),
    require('@gnosis.pm/gnosis-core-contracts/build/contracts/Math.json'),
    require('./safe-contracts/build/contracts/CreateAndAddModules.json'),
    require('./safe-contracts/build/contracts/DailyLimitModule.json'),
    require('./safe-contracts/build/contracts/DelegateConstructorProxy.json'),
    require('./safe-contracts/build/contracts/ERC20Token.json'),
    require('./safe-contracts/build/contracts/Enum.json'),
    require('./safe-contracts/build/contracts/GnosisSafe.json'),
    require('./safe-contracts/build/contracts/GnosisSafePersonalEdition.json'),
    require('./safe-contracts/build/contracts/GnosisSafeTeamEdition.json'),
    require('./safe-contracts/build/contracts/MasterCopy.json'),
    require('./safe-contracts/build/contracts/Migrations.json'),
    require('./safe-contracts/build/contracts/Module.json'),
    require('./safe-contracts/build/contracts/ModuleManager.json'),
    require('./safe-contracts/build/contracts/MultiSend.json'),
    require('./safe-contracts/build/contracts/OwnerManager.json'),
    require('./safe-contracts/build/contracts/PayingProxy.json'),
    require('./safe-contracts/build/contracts/Proxy.json'),
    require('./safe-contracts/build/contracts/ProxyFactory.json'),
    require('./safe-contracts/build/contracts/SelfAuthorized.json'),
    require('./safe-contracts/build/contracts/SocialRecoveryModule.json'),
    require('./safe-contracts/build/contracts/StateChannelModule.json'),
    require('./safe-contracts/build/contracts/WhitelistModule.json')
].map(({ abi }) => abi)

abiDecoder.addABI(uportAbi)
gnosisABIs.forEach(abi => { abiDecoder.addABI(abi) })

export default abiDecoder;
