<script lang="ts">
	import {
		Card,
		Container,
		Flow,
		Form,
		Heading,
		Section,
		Text,
	} from 'fulldev-ui'
	import { onMount } from 'svelte'

	type SupplierData = {
		adres: string
		email: string
		form_key: string
		map: string
		phone: string
	}

	const suppliers: SupplierData[] = [
		{
			name: 'ned',
			adres: '3605 Parker Rd.',
			email: 'info@antislipprofiles.com',
			form_key: '',
			map: 'map1.jpg',
			phone: '+31 6 12345678',
		},
		{
			name: 'scn',
			adres: '3605 Parker Rd.',
			email: 'info@antislipprofiles.com',
			form_key: '',
			map: 'map2.jpg',
			phone: '+31 6 12345678',
		},
	]

	onMount((): void => {
		// preload images
		for (const supplier of suppliers) {
			let img = new Image()
			img.src = `/contact/${supplier.map}`
		}
	})

	let selected_supplier: string = suppliers[0].name
</script>


<Section>
	<Container>
		<Flow row>
			<div>
				<Heading as="h1" text="Contact Anti-Slip Profiles" />
				<div class="h-6"></div>
				<Text text="Heeft u een vraag, opmerking of bericht voor Anti-Slip Profiles? Gebruikt u dan het onderstaande formulier. Anti-Slip Profiles neemt dan zo snel mogelijk contact met u op om uw vraag te beantwoorden." />
				<div class="h-24"></div>
				{#each suppliers as supplier}
					<div align="center">
						<img src="/contact/{supplier.map}" alt="Geografische dekking van de gekozen leverancier: {supplier.name === 'ned'
							? 'Nederland, Duitsland, België, Luxemburg.'
							: 'Denemarken, Noorwegen, Zweden.'
						}" class="w-4/6" />
					</div>
				{/each}
			</div>
			<div>
				<div class="flex flex-row items-center justify-center gap-x-5">
					<Text text="Nederlandse leverancier" secondary class={
						selected_supplier === 'ned' ? 'text-[#f76808]' : 'text-black'
					} />
					<div>
						<label class="relative flex items-center cursor-pointer">
							<input on:change={() => {
								selected_supplier = selected_supplier === 'ned'
									? 'scn'
									: 'ned'
							}} type="checkbox" value="" class="sr-only peer" title={selected_supplier === 'ned'
								? 'Vink uit om de Scandinavische leverancier te selecteren.'
								: 'Vink aan om de Nederlandse leverancier te selecteren.'
							} />
							<div class="w-11 h-6 bg-[#f76808] rounded-[999px] peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-[999px] after:h-5 after:w-5 after:transition-all"></div>
						</label>
					</div>
					<Text text="Scandinavische leverancier" secondary class={
						selected_supplier === 'scn' ? 'text-[#f76808]' : 'text-black'
					} />
				</div>
				<div class="h-10"></div>
				<Card box class='bg-white border-none'>
					<!-- cards -->
				</Card>
				<div class="h-8"></div>
				<!-- form -->
			</div>
		</Flow>
	</Container>
</Section>
