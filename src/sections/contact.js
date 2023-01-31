/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useState } from 'react'
import { Container, Box, Heading, Label, Input, Button } from 'theme-ui'
import { client } from 'lib/sanity.client'

const Contact = () => {
	const [formData, setFormData] = useState({ email: '', comment: '' })
	const [isFormSubmitted, setIsFormSubmitted] = useState(false)
	const [loading, setLoading] = useState(false)

	const handleChangeInput = (e) => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const { email, comment } = formData

	const handleSubmit = () => {
		setLoading(true)

		const contact = {
			_type: 'contact',
			email: formData.email,
			comment: formData.comment,
		}

		client
			.create(contact)
			.then(() => {
				setLoading(false)
				setIsFormSubmitted(true)
			})
			.catch((err) => console.log(err))
	}

	return (
		<section sx={styles.contact}>
			<Container sx={styles.contact.container}>
				<Box sx={styles.contact.contentBox}>
					<Heading as="h1" variant="heroPrimary">
						สนใจมาร่วมสนุกด้วยกัน <br />
						กรอกเมลได้เลย!
					</Heading>
					{!isFormSubmitted ? (
						<>
							<Label htmlFor="email">อีเมล</Label>
							<Input
								type="email"
								required
								name="email"
								id="email"
								value={email}
								onChange={handleChangeInput}
							/>
							<Label htmlFor="comment">
								ข้อเสนอแนะ (optional)
							</Label>
							<Input
								name="comment"
								id="comment"
								value={comment}
								onChange={handleChangeInput}
							/>
							<Button
								mt={6}
								variant="primary"
								onClick={handleSubmit}
							>
								{!loading ? 'Submit' : 'Sending...'}
							</Button>
						</>
					) : (
						<>
							<Heading as="h2" variant="heroPrimary">
								Thank you for getting in touch!{' '}
							</Heading>
						</>
					)}
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
