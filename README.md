# Nalongsone Danddank — Personal Portfolio Website

This repository contains my personal software-engineering portfolio website, resume links, academic materials, project showcase, and contact/social links.

Website: [https://ping58972.github.io](https://ping58972.github.io)

## What I built

- Designed and maintained a responsive portfolio website with reusable layouts, sections, project cards, navigation, contact information, and social links.
- Organized site content with Jekyll layouts, includes, data files, Markdown configuration, and static assets.
- Built a front-end asset pipeline for Sass/CSS, JavaScript, images, linting, minification, autoprefixing, and local browser synchronization.
- Configured GitHub Pages deployment through Gulp and gh-pages.
- Maintained downloadable resume and academic-record links alongside project documentation.

## Technology stack

- **Languages and markup:** HTML5, CSS3, JavaScript, Sass/SCSS, Markdown, YAML, and Ruby-based Jekyll configuration.
- **Static-site framework:** Jekyll with Kramdown Markdown.
- **Build tools:** Gulp 4, BrowserSync, Sass, Autoprefixer, CleanCSS, Uglify, image minification, and ESLint.
- **Deployment:** GitHub Pages and gh-pages.
- **Site plugins/configuration:** jekyll-minifier, jekyll-sitemap, _config.yml, layouts, includes, data files, and static asset directories.
- **Engineering skills:** responsive web design, componentized templates, asset pipelines, build automation, accessibility-aware HTML structure, documentation, and static-site deployment.

## Recently added projects

These systems-programming projects were added to the Featured Projects section of the website.

| Project | Summary | Technologies |
| --- | --- | --- |
| [Wafer Defect Analyzer](https://github.com/ping58972/wafer-defect-analyzer) | Command-line tool and library that calculates wafer-map yield and groups adjacent defects into clusters with breadth-first search. | C++20, CMake, CTest, ASan/UBSan |
| [Wafer Equipment Simulator](https://github.com/ping58972/wafer-equipment-simulator) | Simulates wafer batches moving through processing chambers, with a producer-consumer scheduler, state machines, fault injection, an HTTP API, and a Windows Forms operator console. | C#, .NET 10, ASP.NET Core, Windows Forms, Python |
| [Robot Sensor Recorder](https://github.com/ping58972/robot-sensor-recorder) | Multithreaded recorder for video, audio, IMU, and status data, with bounded buffering, segmented storage, CRC32 verification, and UDP/serial input. | C++20, Linux, CMake, Docker, Python |
| [Shared-Memory Sensor Bus](https://github.com/ping58972/shared-memory-sensor-bus) | Publish-subscribe middleware that exchanges messages between local processes through a shared-memory ring buffer with zero-copy access and loss detection. | C++20, mmap, IPC, Linux, CMake, Docker |

Featured project cards are stored in [`_data/featured-projects.yml`](_data/featured-projects.yml). To add a project, add an entry with `name`, `url`, `client_code`, `server_code`, `description`, and a `used` list of technologies.

## Local development

```bash
gem install jekyll sass bundler jekyll-minifier jekyll-sitemap
npm install
npm start
```

Build the site:

```bash
npm run build
```

Deploy the generated Jekyll site:

```bash
npm run deploy
```

## Author

**Nalongsone Danddank** — [GitHub](https://github.com/ping58972) · [LinkedIn](https://www.linkedin.com/in/ping58972)
