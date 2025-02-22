import { OWNERS } from '#root/config'
import { Precondition, type PreconditionResult } from '@sapphire/framework'
import type { CommandInteraction, Message } from 'discord.js'

export class DevOnly extends Precondition {
	public override chatInputRun(interaction: CommandInteraction): PreconditionResult {
		return OWNERS.includes(interaction.user.id)
			? this.ok()
			: this.error({
					message: '> Oops... this command is restricted to my developer...',
			  })
	}
	public override messageRun(message: Message): PreconditionResult {
		return OWNERS.includes(message.author.id)
			? this.ok()
			: this.error({
					message: '> Oops... this command is restricted to my developer...',
			  })
	}
}
