module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		autoprefixer: {
			options: {
				browsers: ['last 1 versions', 'ie 9', 'ie 10']
			},

			single_file: {
				options: {
					map: {
						sourceContent: true,
						prev: 'css/'
					}
				},
				src: 'css/style.min.css',
				dest: 'css/style.min.css'
			},
		},

		bowercopy: {
			options: {
				clean: true
			},

			js: {
				options: {
					destPrefix: 'js/lib'
				},
				files: {
					'almond.js': 'almond/almond.js',
					'jquery.js': 'jquery/dist/jquery.js',
					'jquery.transit.js': 'jquery.transit/jquery.transit.js',
					'require.js': 'requirejs/require.js',
					'modernizr.js': 'modernizr/modernizr.js'
				},
			},

			css: {
				options: {
					destPrefix: 'less/lib'
				},

				files: {
					'normalize.css': 'normalize.css/normalize.css'
				}
			},

			fontawesome: {
				options: {
					destPrefix: '.'
				},

				files: {
					'fonts': 'fontawesome/fonts/*.*',
					'less/lib/fontawesome': 'fontawesome/less/*.*'
				}
			}
		},

		// Automatically run a task when a file changes
		watch: {
			styles: {
				files: ['less/**/*.*'],
				tasks: ['less:compile', 'autoprefixer'],
				options: {
					spawn: false
				}
			},

			scripts: {
				files: ['js/**/*.*', '!js/lib/*.*', '!js/build/*.*'],
				tasks: ['jshint', 'requirejs:compile'],
				options: {
					spawn: false
				}
			},

			lint: {
				files: ['js/**/*.*', '!js/lib/*.*', '!js/build/*.*'],
				tasks: ['jshint'],
				options: {
					spawn: false
				}
			}
		},

		less: {
			compile: {
				options: {
					ieCompat: false,
					compress: false,
					sourceMap: true,
					sourceMapBasepath: '/assets/less/',
					sourceMapFilename: 'css/style.min.css.map',
					sourceMapRootpath: '/assets/',
					strictMath: true,
					sourceMapURL: 'style.min.css.map',
				},

				files: {
					'css/style.min.css': 'less/style.less'
				}
			}
		},

		jshint: {
			files: ['js/**/*.js', '!js/lib/*.js', '!js/**/*.min.js'],
			options: grunt.file.readJSON('js/.jshintrc')
		},

		jscs: {
			main: {
				src: ['js/**/*.js', '!js/lib/*.*', '!js/build/*.*'],
				options: {
					config: 'js/.jscsrc'
				}
			}
		},

		requirejs: {
			compile: {
				options: grunt.file.readJSON('js/build.json')
			}
		}
	});

	grunt.loadNpmTasks('grunt-bowercopy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks("grunt-jscs");
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-autoprefixer');

	grunt.registerTask('default', 'build and prefix less, lint and build js', [
		'buildless',
		'jshint',
		'jscs',
		'requirejs'
	]);

	grunt.registerTask('buildless', 'build and auto-prefix less files', [
		'less',
		'autoprefixer'
	]);

	grunt.registerTask('watchless', 'build and watch less', [
		'buildless',
		'watch:styles'
	]);

	grunt.registerTask('dev', 'build and prefix less, lint and build js, watch', [
		'default',
		'watch'
	]);

	grunt.registerTask('lintjs', 'watch and lint javascript', [
		'jshint',
		'watch:lint'
	]);

	grunt.registerTask('buildjs', 'lint and build javascript', [
		'jshint',
		'requirejs'
	]);
};
