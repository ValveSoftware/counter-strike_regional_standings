### Roster Details<br />
Team Name: Secret<br />
Roster: anarkez, Juve, Kind0, NOPEEJ, Tauson<br />
Global Rank: [213](../../standings_global_2024_09_11.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_11.md)<br />
Regional Rank: [132]( ../../standings_europe_2024_09_11.md)<br />
<br />
Final Rank Value:  505.1<br />
<br />
Final Rank Value (505.1) = Starting Rank Value (509.7) + Head To Head Adjustments (-4.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.222[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 509.7
- 400 + ( ( 0.056 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 509.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     3416 | 2024-05-14 | WOPA         | L   | 0.399      | -            | -                | -                | -         |    -4.09 | anarkez, Juve, Kind0, NOPEEJ, Tauson |
|            9 |     3426 | 2024-05-13 | LEON         | L   | 0.394      | -            | -                | -                | -         |    -3.81 | anarkez, Juve, Kind0, NOPEEJ, Tauson |
|            8 |     3961 | 2024-04-19 | Portugal     | L   | 0.234      | -            | -                | -                | -         |    -2.76 | anarkez, Kind0, Maze, NOPEEJ, Tauson |
|            7 |     4020 | 2024-04-18 | Nemiga       | L   | 0.226      | -            | -                | -                | -         |    -0.19 | anarkez, Kind0, Maze, NOPEEJ, Tauson |
|            6 |     4035 | 2024-04-18 | 500          | W   | 0.225      | 0.143        | 0.001 (0.000)    | 0.022 (0.001)    | 0 (0.000) |     4.93 | anarkez, Kind0, Maze, NOPEEJ, Tauson |
|            5 |     4058 | 2024-04-17 | Illuminar    | L   | 0.221      | -            | -                | -                | -         |    -3.62 | anarkez, Kind0, Maze, NOPEEJ, Tauson |
|            4 |     4107 | 2024-04-16 | Sampi        | L   | 0.211      | -            | -                | -                | -         |    -0.65 | anarkez, Kind0, Maze, NOPEEJ, Tauson |
|            3 |     4123 | 2024-04-15 | PGE Turow    | W   | 0.205      | 0.371        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     3.18 | anarkez, Kind0, Maze, NOPEEJ, Tauson |
|            2 |     4195 | 2024-04-11 | ENCE Academy | L   | 0.179      | -            | -                | -                | -         |    -1.72 | anarkez, Kind0, Maze, NOPEEJ, Tauson |
|            1 |     4382 | 2024-04-05 | 9 Pandas     | W   | 0.139      | 0.384        | 0.058 (0.003)    | 0.705 (0.038)    | 0 (0.000) |     4.16 | anarkez, Kind0, Maze, NOPEEJ, Tauson |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($294,714.87)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
