/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Container, Box, Heading, Label, Input } from 'theme-ui'

const Contact = () => {
	return (
		<section sx={styles.contact}>
			<Container sx={styles.contact.container}>
				<Box sx={styles.contact.contentBox}>
					<Heading as="h1" variant="heroPrimary">
						สนใจมาร่วมสนุกด้วยกัน <br />
						กรอกเมลได้เลย!
					</Heading>
					<Label htmlFor="email">อีเมล</Label>
					<Input name="email" id="email" />
					<Label htmlFor="comment">ข้อเสนอแนะ (optional)</Label>
					<Input name="comment" id="comment" />
				</Box>
			</Container>
		</section>
	)
}

export default Contact

const styles = {
	contact: {
		pb: [2, null, 0, null, 2, 0, null, 5],
		position: 'relative',
		container: {
			minHeight: 'inherit',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
		},
		contentBox: {
			width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
			mx: 'auto',
			textAlign: 'center',
			mb: ['40px', null, null, null, null, 7],
		},
		container: {
			minHeight: 'inherit',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
		},
	},
}
