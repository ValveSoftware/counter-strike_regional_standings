### Roster Details<br />
Team Name: Secret<br />
Roster: anarkez, Juve, Kind0, NOPEEJ, Tauson<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [189](../standings_global.md)<br />
Regional Rank: [121]( ../standings_europe.md)<br />
Final Rank Value:  545.2<br />
<br />
Final Rank Value (545.2) = Starting Rank Value (545.2) + Head To Head Adjustments (-0.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.271[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.072<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 545.2
- 400 + ( ( 0.072 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 545.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |     1765 | 2024-05-14 | WOPA          | L   | 0.725      | -            | -                | -                | -         |    -9.11 | anarkez, Juve, Kind0, NOPEEJ, Tauson   |
|           20 |     1775 | 2024-05-13 | LEON          | L   | 0.721      | -            | -                | -                | -         |    -7.14 | anarkez, Juve, Kind0, NOPEEJ, Tauson   |
|           19 |     2310 | 2024-04-19 | Portugal      | L   | 0.560      | -            | -                | -                | -         |    -5.38 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           18 |     2369 | 2024-04-18 | Nemiga        | L   | 0.553      | -            | -                | -                | -         |    -0.50 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           17 |     2384 | 2024-04-18 | 500           | W   | 0.552      | 0.143        | 0.001 (0.000)    | 0.140 (0.011)    | 0 (0.000) |    13.18 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           16 |     2407 | 2024-04-17 | Illuminar     | L   | 0.547      | -            | -                | -                | -         |    -9.52 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           15 |     2456 | 2024-04-16 | Sampi         | L   | 0.538      | -            | -                | -                | -         |    -1.92 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           14 |     2472 | 2024-04-15 | PGE Turow     | W   | 0.532      | 0.371        | 0.001 (0.000)    | 0.026 (0.005)    | 0 (0.000) |    10.88 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           13 |     2544 | 2024-04-11 | ENCE Academy  | L   | 0.505      | -            | -                | -                | -         |    -4.00 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           12 |     2731 | 2024-04-05 | 9 Pandas      | W   | 0.466      | 0.384        | 0.105 (0.019)    | 0.578 (0.103)    | 0 (0.000) |    13.85 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           11 |     3249 | 2024-03-12 | Endpoint      | L   | 0.305      | -            | -                | -                | -         |    -1.21 | anarkez, Kind0, Maze, NOPEEJ, Tauson   |
|           10 |     3335 | 2024-03-08 | Metizport     | L   | 0.279      | -            | -                | -                | -         |    -0.87 | anarkez, innocent, Kind0, Maze, Tauson |
|            9 |     3364 | 2024-03-07 | ex-Preasy     | L   | 0.271      | -            | -                | -                | -         |    -1.39 | anarkez, innocent, Kind0, Maze, Tauson |
|            8 |     3445 | 2024-03-04 | Fraud5        | L   | 0.253      | -            | -                | -                | -         |    -2.76 | anarkez, innocent, Kind0, Maze, Tauson |
|            7 |     3481 | 2024-03-03 | Zero Tenacity | L   | 0.245      | -            | -                | -                | -         |    -0.34 | anarkez, innocent, Kind0, Maze, Tauson |
|            6 |     3501 | 2024-03-02 | Zero Tenacity | L   | 0.238      | -            | -                | -                | -         |    -0.34 | anarkez, innocent, Kind0, Maze, Tauson |
|            5 |     3543 | 2024-02-28 | Permitta      | W   | 0.219      | 0.143        | 0.032 (0.001)    | 0.790 (0.025)    | 0 (0.000) |     6.23 | anarkez, innocent, Kind0, Maze, Tauson |
|            4 |     3602 | 2024-02-25 | Entropiq      | L   | 0.199      | -            | -                | -                | -         |    -2.99 | anarkez, innocent, Kind0, Maze, Tauson |
|            3 |     3798 | 2024-02-17 | Sampi         | L   | 0.145      | -            | -                | -                | -         |    -0.54 | anarkez, innocent, Kind0, Maze, Tauson |
|            2 |     3951 | 2024-02-10 | 500           | W   | 0.099      | 0.358        | 0.001 (0.000)    | 0.140 (0.005)    | 0 (0.000) |     2.23 | anarkez, innocent, Kind0, Maze, Tauson |
|            1 |     4023 | 2024-02-04 | Alliance      | W   | 0.059      | 0.358        | 0.018 (0.000)    | 0.328 (0.007)    | 0 (0.000) |     1.60 | anarkez, innocent, Kind0, Maze, Tauson |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
