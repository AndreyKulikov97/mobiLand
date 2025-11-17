import React, { useEffect } from 'react'
import './phone.css'
import Slider from '../../components/Slider/Slider'
import InfoTop from '../../components/mainInfo/InfoTop'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchInfoTop, fetchMainInfo, fetchPhones, searchCharacteristics, searchPhoneInState } from '../../Redux/slices/phonesSlice'

function Phone() {
	const { id } = useParams()
	const dispatch = useDispatch()

	const { searchPhone, topInfo, characteristics, mainInfo } =
		useSelector(store => store.products)

	useEffect(() => {
		dispatch(fetchInfoTop())
		dispatch(fetchMainInfo())
	}, [dispatch])

	useEffect(() => {
		if (topInfo.length > 0 && id) {
			dispatch(searchPhoneInState({ id: Number(id) }))
			dispatch(searchCharacteristics({ id: Number(id)}))
		}
	}, [dispatch, topInfo, mainInfo, id])


	return (
		<>
			<div className='container'>
				{searchPhone.status === 'loading' ? (
					<p>Loading...</p>
				) : (
					<>
						<Slider imagePhone={searchPhone.phone} />
						<InfoTop info={searchPhone.phone} />
					</>
				)}
			</div>
			<h1 className='features-title'>Характеристики</h1>
			<div className='main-features'>
				<table>
					<tbody>
						<tr>
							<td style={{ width: '48%' }} className='op01'>
								<table style={{ width: '100%' }}>
									<tbody>
										<tr>
											<td className='op1'>
												<span className='op1-title ib'>Дисплей</span>
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Основной дисплей</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.screen.map((item, index) => {
													if (typeof item === 'string' && item.includes('/')) {
														const [firstPart, ...rest] = item.split('/')
														const spanPart = rest.join('/')
														return (
															<React.Fragment key={index}>
																{firstPart}
																{''}
																<span className='oth'>{spanPart}</span>
																<br />
															</React.Fragment>
														)
													} else {
														return (
															<React.Fragment key={index}>
																{item}
																<br />
															</React.Fragment>
														)
													}
												})}
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Соотношение дисплей/корпус</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.correlation}
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>DCI-P3</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												<img
													src={characteristics?.phone?.colorSpace}
													alt='Сheckmark'
													style={{ width: '20px', height: '20px' }}
												/>
											</td>
										</tr>

										<tr>
											<td className='op1'>
												<span className='op1-title ib'>Аппаратная часть</span>
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Операционная система</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.operationSystem}
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Модель процессора</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.cpuModel}
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Частота процессора</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.cpuFrequency}
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Ядер процессора</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.cpuCores}
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Графический процессор</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.gpu}
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Оперативная память</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.ram}
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Тип ОЗУ</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.typeRam}
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Встроенная память</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.memory}
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Спецификация памяти</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.specMemory}
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Слот для карт памяти</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.cardSlot}
											</td>
										</tr>

										<tr>
											<td className='op1'>
												<span className='op1-title ib'>Результаты тестов</span>
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>AnTuTu Benchmark</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.anTuTu}
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Geekbench</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.geekbench}
											</td>
										</tr>

										<tr>
											<td className='op1'>
												<span className='op1-title ib'>Основная камера</span>
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Количество объективов</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.lences}
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Основной объектив</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.mainLens.map((item, index) => (
													<React.Fragment key={index}>
														{item}
														<br />
													</React.Fragment>
												))}
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Ультраширокий объектив</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.ultraWide.map(
													(item, index) => (
														<React.Fragment key={index}>
															{item}
															<br />
														</React.Fragment>
													)
												)}
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Макрообъектив</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.macro.map(
													(item, index) => (
														
														<React.Fragment key={index}>
															{item}
															<br />
														</React.Fragment>
													)
													// )
												)}
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Съемка Full HD (1080p)</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.fullHd}
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Съемка 4K</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.shooting4K}
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Замедленная съемка (slow-mo)</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{(() => {
													const slowMo = characteristics?.phone?.slowMo
													if (!slowMo) return '-'
													const [main, ...rest] = slowMo.split('/')
													const spanPart = rest.join('/')
													return (
														<>
															{main} <span className='oth'>/{spanPart}</span>
														</>
													)
												})()}
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Стабилизация изображения</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.stabImg}
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Вспышка</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												<img
													src={characteristics?.phone?.flash}
													alt='Сheckmark'
													style={{ width: '20px', height: '20px' }}
												/>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
							<td style={{ width: '52%' }} className='op02'>
								<table>
									<tbody>
										<tr>
											<td className='op1'>
												<span className='op1-title ib'>Фронтальная камера</span>
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Форм-фактор</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.formFactor}
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Основной селфи-объектив</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.selfiLens}
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Светосила</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.luminosity}
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Съемка Full HD (1080p)</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.selfiFullHd}
											</td>
										</tr>

										<tr>
											<td className='op1'>
												<span className='op1-title ib'>
													Коммуникация и порты
												</span>
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Связь</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.link}
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Тип SIM-карты</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.typeSim}
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Количество SIM</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.amountSim}
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Коммуникации</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.communication.map(
													(item, index) => (
														<React.Fragment key={index}>
															{item} <br />
														</React.Fragment>
													)
												)}
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Порты подключения</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.portConnection}
											</td>
										</tr>

										<tr>
											<td className='op1'>
												<span className='op1-title ib'>
													Функции и навигация
												</span>
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Функции и возможности</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.funcAndFeat.map(
													(item, index) => (
														<React.Fragment key={index}>
															{item} <br />
														</React.Fragment>
													)
												)}
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Навигация</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.navigation.map(
													(item, index) => (
														<React.Fragment key={index}>
															{item} <br />
														</React.Fragment>
													)
												)}
											</td>
										</tr>

										<tr>
											<td className='op1'>
												<span className='op1-title ib'>Питание</span>
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Емкость батареи</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.capacity}
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Время работы (PCMark)</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.upTime}
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Быстрая зарядка</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.fastCharging}
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Мощность зарядки</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.powerCharging}
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Время быстрой зарядки</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.timeFastCharging}
											</td>
										</tr>

										<tr>
											<td className='op1'>
												<span className='op1-title ib'>Общее</span>
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Влагозащита</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.weatherProof}
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Материал рамки/крышки</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.material}
											</td>
										</tr>
										{characteristics?.phone?.equipment?.length > 0 && (
											<tr>
												<td style={{ width: '49%' }} className='op1'>
													<span>Комплектация</span>
												</td>
												<td style={{ width: '51%' }} className='op3'>
													{characteristics.phone.equipment.map(
														(item, index) => (
															<React.Fragment key={index}>
																{item} <br />
															</React.Fragment>
														)
													)}
												</td>
											</tr>
										)}
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Размеры (ВхШхТ)</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.size}
											</td>
										</tr>
										<tr>
											<td style={{ width: '49%' }} className='op1'>
												<span>Вес</span>
											</td>
											<td style={{ width: '51%' }} className='op3'>
												{characteristics?.phone?.weight}
											</td>
										</tr>
										{characteristics?.phone?.site && (
											<tr>
												<td style={{ width: '49%' }} className='op1'>
													<span>Официальный сайт</span>
												</td>
												<td style={{ width: '51%' }} className='op3'>
													<a
														className='official-site'
														href={characteristics.phone.site}
														target='_blank'
														rel='noopener noreferrer'
													>
														{new URL(characteristics.phone.site).hostname}
													</a>
												</td>
											</tr>
										)}
									</tbody>
								</table>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	)
}

export default Phone
