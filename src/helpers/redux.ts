import { Audio } from 'expo-av';



export async function playSound() {
	const { sound } = await Audio.Sound.createAsync(require(`../assets/boxing-bell.mp3`));
	

	await sound.playAsync();

	(await sound)
		? () => {
				console.log('Unloading Sound');
				sound.unloadAsync();
			}
		: undefined;
}

export function displayTime(seconds: number): string {
	const minute = Math.floor(seconds / 60);
	const second = Math.floor(seconds % 60);

	return `${minute < 10 ? '0' : ''}${minute}:${second < 10 ? '0' : ''}${second}`;
}
