# busmonitor

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A real-time bus monitoring web application for the Tsutsuji Bus in Sabae City, Japan, built on public transport open data.

## Demo

:bus: **Live Demo: http://codeforfukui.github.io/busmonitor/**

## Features

-   **Live Bus Tracking:** View the real-time location of buses on an interactive map.
-   **Detailed Status Updates:** Select a bus to see its destination, speed, direction, delay status, passenger count, and wheelchair usage.
-   **Route Visualization:** Displays all bus routes and stop locations for the Sabae Tsutsuji Bus service.
-   **Directional Icons:** Bus icons on the map rotate to indicate their current direction of travel.
-   **GPS Integration:** Use the "現在地" (Current Location) button to center the map on your position.

## Data Sources

This project aggregates data from several open data sources:

-   **Sabae City Bus Data (Primary):**
    -   **Bus Location & Routes:** [Fukui Open Data Portal SPARQL Endpoint](https://sparql.odp.jig.jp/data/sparql)
    -   **Passenger & Wheelchair Count:** [Sabae City IoT Platform API](https://api.odp.jig.jp/siot/buslog/jp/fukui/sabae/)
-   **Additional SPARQL Endpoints:**
    -   Osaka City: [data.city.osaka.lg.jp/sparql](https://data.city.osaka.lg.jp/sparql)
    -   Kyoto City: [sparql.city.kyoto.lg.jp/sparql](https://sparql.city.kyoto.lg.jp/sparql/)
    -   Kobe City: [data.city.kobe.lg.jp/sparql](https://data.city.kobe.lg.jp/sparql)

## Running Locally

This is a static web application. To run it locally, you can use any simple web server.

1.  Clone the repository:
    ```sh
    git clone https://github.com/codeforfukui/busmonitor.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd busmonitor
    ```
3.  Start a local web server. For example, using Python:
    ```sh
    # Python 3
    python -m http.server
    ```
4.  Open your browser and go to `http://localhost:8000`.

## Acknowledgements

This project utilizes `fukuno.js`, a utility library by @taisuke, provided under a CC BY license.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.