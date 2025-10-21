import { MediaMovie } from "../../type.db";

export type ExploreTile = {
	type: 'FeatureCollection';
	updated_at: string;
	features: {
		type: 'Feature';
		geometry: {
			type: 'Point';
			coordinates: [number, number];
		};
		properties: {
			id: number;
			movie: {
				id: MediaMovie['id'];
				title: MediaMovie['title'];
				poster_path: MediaMovie['poster_path'];
				poster_url: MediaMovie['poster_url'];
				release_date: MediaMovie['release_date'];
				runtime: MediaMovie['runtime'];
				genres: MediaMovie['genres'];
			};
		};
	}[];
};