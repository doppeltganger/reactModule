import React from 'react';
import { useSelector } from 'react-redux';
import CustomAvatar from '../../components/UI/CustomAvatar/CustomAvatar';
import Average from '../../components/UI/Average/Average';
import './UserPage.scss';

const UserPage = () => {
	const { currentUser } = useSelector((state) => state.usersArr);

	const image = currentUser.avatar.tmdb.avatar_path;

	return (
		<div>
			<div className='user'>
				<div className='container'>
					<div className='user__wrap'>
						<div className='user__visual'>
							<CustomAvatar
								alt={ currentUser.username }
								src={ image }
								width='200px'
								height='200px'
							/>
						</div>
						<div className='user__body'>
							<div className='user__header'>
								<h2 className='user__title'>{currentUser.username}</h2>
							</div>
							<div className='user__info'>
								<div className='user__average'>
									<Average value='65' fontSize='25px'/>
									<h3>Average<span>Movie Score</span></h3>
								</div>
								<div className='user__average'>
									<Average value='58' fontSize='25px'/>
									<h3>Average<span>TV Score</span></h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='user__other'>
				<div className='container'>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cum, error velit corporis, reiciendis laudantium voluptatem quas illo enim similique suscipit totam! Nihil, repellat enim. Necessitatibus aspernatur perspiciatis ipsa obcaecati qui nulla voluptas? Nostrum quibusdam, id vitae culpa, autem unde esse obcaecati iure alias aspernatur, eum dolorem! Adipisci culpa error et distinctio. Minus incidunt beatae necessitatibus odit nihil ipsam veritatis, dolorem, quaerat reiciendis officiis libero nemo aliquid illum hic nisi sint ducimus eveniet eos sed. Expedita nostrum a minus sint porro corrupti nam consequatur praesentium quae quia animi, distinctio officia aspernatur voluptate repellendus nulla. Corrupti reprehenderit maxime fugiat animi sint magni, voluptatem dicta dolorem facere quaerat eveniet asperiores explicabo, dignissimos atque architecto repudiandae earum consequatur velit. Delectus id magni a quia. Repellat eius itaque voluptatum optio pariatur quisquam modi dolor eaque exercitationem, adipisci mollitia dignissimos, ab ut, ad quos animi saepe? Voluptatem, nostrum minima. Fuga molestias rem beatae quos dolores eius velit adipisci voluptatum. Repellendus numquam animi similique amet nisi laudantium eaque! Consequatur sed culpa dolores eum voluptate, iste unde doloribus ipsum vitae molestiae, ab voluptatem quos harum reprehenderit facere laborum, ipsam eaque saepe cumque? Accusamus quibusdam a aperiam nam modi, deserunt facilis quod praesentium consequatur! Unde sunt modi facilis dicta minima autem recusandae cumque fugiat, enim error nemo magnam maxime laborum ea ex quasi optio facere! Assumenda ab culpa quasi commodi id saepe, recusandae fuga blanditiis accusantium! Beatae quidem qui, optio aliquid porro incidunt ratione mollitia dolores neque pariatur eum aperiam maiores corrupti perspiciatis. Facere obcaecati ullam vero repellendus magnam consectetur, quibusdam perferendis repellat, optio eveniet dolorum expedita sit aut voluptatem, reiciendis voluptates modi praesentium vitae architecto doloremque nihil sint. Perspiciatis cum, iste quos totam maxime commodi? Quasi eum natus incidunt nostrum cum enim est tempore quo, quos a quam sint vel, consectetur amet corrupti magni excepturi nesciunt voluptas et eveniet optio quod? Perspiciatis magnam aliquam ipsum, at nulla neque veritatis et eos voluptate, eligendi a! Officiis quaerat, eius mollitia illo magni debitis aliquam aut impedit nam ex libero officia minima quos temporibus, corrupti adipisci qui cum nobis rem eligendi minus tempora quae nihil inventore? Maiores assumenda sapiente animi sint natus dicta, illum veniam porro accusamus. Mollitia, optio obcaecati labore tempore quae quaerat rerum dolorem porro modi ipsam veritatis amet nisi esse quod voluptatum fugit omnis voluptates debitis. Reiciendis, eligendi! Totam doloribus, dolore similique, voluptatum voluptate atque blanditiis sapiente perspiciatis odit iure magni fugit debitis explicabo ipsam. Voluptatum laborum dolorem tenetur sed exercitationem architecto non ipsum blanditiis dolor, necessitatibus autem, facilis reprehenderit ipsam itaque, quod ab repellendus animi ad temporibus cupiditate? Quibusdam incidunt sed consectetur rerum distinctio repellendus illum id, consequatur corporis ipsam cum perferendis. Minima alias praesentium magni quae vel! Sequi eveniet labore odit consequatur magni incidunt veniam excepturi sint nostrum natus quas error nisi itaque et maiores dolorem enim similique quibusdam, asperiores minima exercitationem quaerat temporibus deserunt! Illum magni maxime voluptatem eos architecto blanditiis sint, voluptate dolorum odio non laboriosam expedita ullam itaque iste hic adipisci culpa sequi est possimus quia alias laudantium? Nisi, magni delectus? Eius!</p>
				</div>
			</div>
		</div>
		// <Container maxWidth='lg'>
		// 	<Box
		// 		sx={{
		// 			backgroundImage: `URL(${image})`,
		// 			backgroundSize: 'cover',
		// 			backgroundRepeat: 'no-repeat',
		// 			backgroundColor: '#212121',
		// 			height: 100,
		// 			p: 1,
		// 		}}
		// 	>
		// 		<Typography variant='p' color='#fff'>
		// 			Name:
		// 		</Typography>
		// 		<Typography variant='h4' component='h4' color='#fff'>
		// 			{currentUser.name}
		// 		</Typography>
		// 	</Box>
		// 	<Grid
		// 		container
		// 		sx={{
		// 			display: 'flex',
		// 			flexDirection: { xs: 'column', sm: 'row' },
		// 		}}
		// 	>
		// 		<Grid item xs={12} sm={4}>
		// 			<Card sx={{ maxWidth: 345 }}>
		// 				<CardHeader
		// 					avatar={
		// 						<Avatar
		// 							sx={{ bgcolor: red[500] }}
		// 							aria-label='recipe'
		// 							alt='Remy Sharp'
		// 							src={image}
		// 						>
		// 							R
		// 						</Avatar>
		// 					}
		// 					title={currentUser.username}
		// 					subheader={`ID: ${currentUser.id}`}
		// 				/>
		// 				<CardMedia
		// 					component='img'
		// 					height='194'
		// 					image={image}
		// 					alt='Paella dish'
		// 				/>
		// 				<CardContent>
		// 					<Typography variant='body2' color='text.secondary'>
		// 						This impressive paella is a perfect party dish and a
		// 						fun meal to cook together with your guests. Add 1 cup
		// 						of frozen peas along with the mussels, if you like.
		// 					</Typography>
		// 				</CardContent>
		// 			</Card>
		// 		</Grid>
		// 		<Grid item xs={12} sm={8}>
		// 			Lorem ipsum dolor sit amet consectetur, adipisicing elit.
		// 			Iusto in id ducimus delectus placeat cum atque totam
		// 			suscipit! Mollitia, quisquam. Pariatur ab excepturi velit
		// 			dolore veniam. Odit saepe quam autem?
		// 		</Grid>
		// 	</Grid>
		// </Container>
	);
}

export default UserPage;
