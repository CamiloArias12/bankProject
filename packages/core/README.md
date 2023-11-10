# Bank

Bank is a project that simulates a banking platform.

## Getting Started

To begin using the project, follow these steps:

### Prerequisites

Before you get started, ensure that you have Docker and Yarn installed on your system.

### Installation

After cloning the repository install the dependencies.

`yarn`

### Config

Then you must initialize the database and create the `.env` file based on `.env-dev`.

## Docker Database

To start the database you must run the command

`docker run --name bank -e MYSQL_ROOT_PASSWORD=bank -e MYSQL_DATABASE=bank -e MYSQL_USER=bank -e MYSQL_PASSWORD=bank --rm -d -p3306:3306 mysql`
