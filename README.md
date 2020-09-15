# NL COVID-19 Data Dashboard

The dashboard provides information on the outbreak and prevalence of COVID-19 in The Netherlands. It combines measured and modelled data from various sources to give a broad perspective on the subject. This is still in development, which means no conclusions may be drawn from it. Further improvements in accessibility, functionality and data will be made in the future.

## Disclaimer

This dashboard is developed and maintained by a different team than the NL COVID-19 Notification App. They are separate projects. If you want to get in touch with the team, please join the CODE for NL Slack and join the channel `#coronadashboard`.

Tamas Erkelens from the Municipality of Amsterdam is contact person for the project team that made the dashboard.

[CODE For NL Slack](https://doemee.codefor.nl)

## Development & Contribution process

The core team works directly from this open-source repository. If you plan to propose changes, we recommend to open an issue beforehand where we can discuss your planned changes. This increases the chance that we might be able to use your contribution (or it avoids doing work if there are reasons why we wouldn't be able to use it).

## Setup

This application uses Next.js as framework, which builds the pages of the application as static exports. We use Preact in production to keep the bundle as small as possible.

We are using Next.js 9.5.

Run `yarn` to install all required packages.

### Data

If you have data, you can place it in `/public/json/`.
The calculations for the data can be found in [nl-covid19-data-backend-processing](https://github.com/minvws/nl-covid19-data-backend-processing).

## Available Scripts

In the project directory, you can run:

`yarn dev`
Runs the app in the development mode. Open http://localhost:3000 to view it in the browser.

`yarn build`
Builds the app for production to the out folder. It correctly bundles React in production mode and optimizes the build for the best performance. All pages are output as static HTML files through next export, ready to be served on any static file server.
