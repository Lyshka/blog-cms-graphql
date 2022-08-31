import {useState, useEffect, useRef} from "react"

import {submitComment} from "../services"

const CommentsForm = ({slug}) => {
	const [error, setError] = useState(false)
	const [localStorage, setLocalStorage] = useState(null)
	const [showSuccessMessage, setShowSuccessMessage] = useState(false)

	const commentEl = useRef()
	const nameEl = useRef()
	const emailEl = useRef()
	const storeDataEl = useRef()

	useEffect(() => {
		nameEl.current.value = window.localStorage.getItem("name")
		emailEl.current.value = window.localStorage.getItem("email")
	}, [])

	const handleCommentSubmission = () => {
		setError(false)

		const {value: comment} = commentEl.current
		const {value: name} = nameEl.current
		const {value: email} = emailEl.current
		const {checked: storeData} = storeDataEl.current

		if (!comment || !name || !email) {
			setError(true)
			return
		}

		const commentObj = {name, email, comment, slug}

		if (storeData) {
			window.localStorage.setItem("name", name)
			window.localStorage.setItem("email", email)
		} else {
			window.localStorage.removeItem("name", name)
			window.localStorage.removeItem("email", email)
		}

		submitComment(commentObj)
			.then(res => {
				setShowSuccessMessage(true)

				setTimeout(() => {
					setShowSuccessMessage(false)
				}, 3000)
			})
	}

	return (
		<div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
			<h3 className="text-xl mb-8 font-semibold border-b-2 pb-4">
				комментарии
			</h3>


			<div className="grid grid-cols-1 gap-4 mb-4">
				<textarea
					ref={commentEl}
					className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
					placeholder="Комментарий"
					name="comment"
				/>
			</div>


			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
				<input
					type="text"
					ref={nameEl}
					className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
					placeholder="Имя"
					name="name"
				/>

				<input
					type={"email"}
					ref={emailEl}
					className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
					placeholder="Email"
					name="email"
				/>
			</div>


			<div className="grid grid-cols-1 gap-4 mb-4">
				<div>
					<input
						ref={storeDataEl}
						type={"checkbox"}
						id="storeData"
						name="storeData"
						value={"true"}
					/>


					<label
						htmlFor="storeData"
						className="text-gray-500 cursor-pointer ml-2"
					>
						Сохранить email и имя для следующего комментария.
					</label>
				</div>
			</div>
			
			<div className="flex justify-center items-center">
				{error && (
					<p className="text-red-500 text-base">
						Все поля должны быть заполнены.
					</p>
				)}

				{showSuccessMessage && (
					<span className="text-xl text-center font-semibold mt-3 text-green-500">
						Комментарий отправлен на рассмотрение
					</span>
				)}
			</div>

			<div className="mt-8 flex items-center justify-center">
				<button
					type="button"
					onClick={handleCommentSubmission}
					className="transition duration-500 ease-in hover:bg-blue-700 inline-block bg-blue-500 text-lg rounded-full text-white px-8 py-3 cursor-pointer"
				>
					Добавить комментарий
				</button>
			</div>
		</div>
	)
}
export default CommentsForm