// import/register sapphire plugins
import '@sapphire/plugin-logger/register'
import '@sapphire/plugin-i18next/register'
import '@sapphire/plugin-editable-commands/register'

// Behavior
import { ApplicationCommandRegistries, RegisterBehavior } from '@sapphire/framework'

ApplicationCommandRegistries.setDefaultBehaviorWhenNotIdentical(RegisterBehavior.Overwrite)

// declare things
import type { NinoUtils } from '#utils/utils'

declare module '@sapphire/framework' {
	export interface SapphireClient {
		utils: NinoUtils
	}
	export interface Preconditions {
		inVoiceChannel: never
		ownerOnly: never
		channelSpeak: never
		channelJoin: never
		channelView: never
		channelFull: never
		Administrator: never
	}
}
