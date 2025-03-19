export default class Id {
	static getIdPart(): string {
		return Math.random().toString(36).substring(2, 9)
	}

	static gerar(): string {
		const p1 = this.getIdPart()
		const p2 = this.getIdPart()
		const p3 = this.getIdPart()
		return `${p1}-${p2}-${p3}`
	}
}
