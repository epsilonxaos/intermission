import Main_screen from '@components/Main_screen'
import { TextSpecial } from '@components/Text'
import { Hero } from '@modules/Hero'
import Form_Intermission from '@modules/form_intermission'

const Contact_us = () => {
	return (
		<Main_screen>
			<Hero>
				<TextSpecial>A Digital Consultancy Company.</TextSpecial>
			</Hero>
			<Form_Intermission />
		</Main_screen>
	)
}

export default Contact_us
