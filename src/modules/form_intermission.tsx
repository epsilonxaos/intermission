import { Button } from '@components/Button'
import Input from '@components/Forms/Input'
import Select from '@components/Forms/Select'
import { TextContent, TextTitle } from '@components/Text'
import ApiRequest from '@services/ApiRequest'
import { twMerge } from 'tailwind-merge'

import { IApiRequestOptions } from '#types/apiRequest'

import { useForm } from 'react-hook-form'

const api = new ApiRequest()

const Form_Intermission = ({ className, classForm }: any) => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const onSubmit = (data: any) => {
		data.website = 'Intermission'

		const opt: IApiRequestOptions = {
			url: 'api/enviar-webhook',
			method: 'POST',
			data,
			showToast: {
				success: 'Datos enviados correctamente',
				error: 'Error en la solicitud',
			},
			headers: {
				'Content-Type': 'application/json',
			},
		}
		api.fetchData(opt).then(() => {
			reset()
			window.location.href = '/'
		})
	}

	return (
		<main className={twMerge('grid place-items-center justify-center gap-y-8', className)}>
			<section className='grid max-w-[786px] place-items-center gap-y-5'>
				<TextTitle>Contáctanos</TextTitle>
				<TextContent>
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua. Ut enim ad minim veniam, quis liquip ex ea commodo consequat.
				</TextContent>
			</section>

			<form
				className={twMerge('grid w-full max-w-[600px] place-items-center gap-8', classForm)}
				onSubmit={handleSubmit(onSubmit)}>
				<Input
					name='nombre_empresa'
					placeholder='Nombre de la empresa'
					id
					validate={{
						rules: { required: 'Este campo es requerido' },
						register,
						validateErrorMessage: errors.nombre_empresa?.message as string | undefined,
					}}
				/>
				<Input
					name='telefono'
					placeholder='Teléfono'
					id
					validate={{
						rules: { required: 'Este campo es requerido' },
						register,
						validateErrorMessage: errors.telefono?.message as string | undefined,
					}}
				/>
				<Input
					name='correo'
					placeholder='Correo'
					id
					validate={{
						rules: { required: 'Este campo es requerido' },
						register,
						validateErrorMessage: errors.correo?.message as string | undefined,
					}}
				/>

				<Select
					name='rubro'
					placeholder='Rubro'
					id
					options={[
						{ value: '1', name: 'Desarrollos Inmobiliarios' },
						{ value: '2', name: 'Hoteles Boutique' },
						{ value: '3', name: 'Servicios y Productos' },
						{ value: '4', name: 'Tiendas Online' },
					]}
					validate={{
						rules: { required: 'Este campo es requerido' },
						register,
						validateErrorMessage: errors.nombre_empresa?.message as string | undefined,
					}}
				/>
				<Select
					name='servicio'
					placeholder='Servicio'
					id
					options={[
						{ value: '1', name: 'Consultoria Digital' },
						{ value: '2', name: 'Implementación de Ecosistemas digitales' },
						{ value: '3', name: 'Desarrollo de sitio web' },
						{ value: '4', name: 'Nuestros Servicios' },
					]}
					validate={{
						rules: { required: 'Este campo es requerido' },
						register,
						validateErrorMessage: errors.nombre_empresa?.message as string | undefined,
					}}
				/>

				<Button
					className='max-w-[145px] bg-[#003484] py-3 text-xs text-white'
					type='submit'
					text='ENVIAR'
				/>
			</form>
		</main>
	)
}

export default Form_Intermission
