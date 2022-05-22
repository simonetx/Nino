import '#lib/setup'
import { Nino } from '#lib/structures/NinoClient'
import { container } from '@sapphire/framework'
;(async () => {
	const client = new Nino()
	try {
		container.logger.info('Connecting to Discord...')
		await client.start()
		await client.database()
		container.logger.info(`Connected in Discord as ${client.user!.tag}`)
	} catch (e) {
		container.logger.error(e)
		client.destroy()
		process.exit(1)
	}
})().catch((error) => console.log(error))
