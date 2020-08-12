<template>
    <b-container>
        <br>
        <b-list-group>
            <h2 align="center">Search Movies by title</h2>
            <b-input-group-text>
                <b-input label="Search" type="text" v-model="search" placeholder="Search in 91,770 movies" />
                <span class="input-group-text">Total: {{total}}</span>
            </b-input-group-text>
            <br>
        </b-list-group>
        <br>
        <b-row>
            <b-card-group columns>
            <b-col v-for="movie in movies" v-bind:key="movie.id">
            <b-card :bg-variant="movie.variant" text-variant="black" :header="movie.title">
                <b-card-body>
                    <b-card-text >Year: {{ movie.year}}</b-card-text>
                    <b-card-text>Actors:</b-card-text>
                    <b-card-text v-for="actor in movie.actors" v-bind:key="actor">
                        <li>{{ actor.firstName }} {{ actor.lastName }}</li>
                    </b-card-text>
                    <b-card-footer >
                        <span v-for="genre in movie.genres" v-bind:key="genre">
                            <span> #{{ genre.genre }} </span>
                        </span>
                    </b-card-footer>
                </b-card-body>
            </b-card>
            </b-col>
            </b-card-group>
        </b-row>
    </b-container>
</template>
<script>
	import axios from "axios";
	export default {
		name: 'AutocompletePage',
		data() {
			return {
				movies: [],
				search: '',
                total: 0,
			};
		},
        watch:{
			search() {
				return this.getSearch();
            }
        },
		methods: {
			getSearch() {
				axios.get(`http://localhost:3000/api/movies?search=` + this.search)
					.then(response => {
						this.movies = response.data.results;
						this.total = response.data.total;
					})
			}
		},
	};
</script>

<style>
    .col {
        min-width: 360px;
    }
</style>
