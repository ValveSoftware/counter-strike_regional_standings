### Roster Details<br />
Team Name: Secret<br />
Roster: anarkez, Juve, Kind0, NOPEEJ, Tauson<br />
Global Rank: [220](../../standings_global_2024_09_26.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_26.md)<br />
Regional Rank: [132]( ../../standings_europe_2024_09_26.md)<br />
<br />
Final Rank Value:  488.3<br />
<br />
Final Rank Value (488.3) = Starting Rank Value (493.3) + Head To Head Adjustments (-5.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.196[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.049<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 493.3
- 400 + ( ( 0.049 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 493.3


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
|           10 |     3911 | 2024-05-14 | WOPA         | L   | 0.299      | -            | -                | -                | -         |    -3.05 | anarkez, Juve, Kind0, NOPEEJ, Tauson |
|            9 |     3921 | 2024-05-13 | LEON         | L   | 0.295      | -            | -                | -                | -         |    -2.85 | anarkez, Juve, Kind0, NOPEEJ, Tauson |
|            8 |     4456 | 2024-04-19 | Portugal     | L   | 0.134      | -            | -                | -                | -         |    -1.54 | anarkez, Kind0, Maze, NOPEEJ, Tauson |
|            7 |     4515 | 2024-04-18 | Nemiga       | L   | 0.127      | -            | -                | -                | -         |    -0.13 | anarkez, Kind0, Maze, NOPEEJ, Tauson |
|            6 |     4530 | 2024-04-18 | 500          | W   | 0.126      | 0.143        | 0.000 (0.000)    | 0.008 (0.000)    | 0 (0.000) |     2.68 | anarkez, Kind0, Maze, NOPEEJ, Tauson |
|            5 |     4553 | 2024-04-17 | Illuminar    | L   | 0.121      | -            | -                | -                | -         |    -1.93 | anarkez, Kind0, Maze, NOPEEJ, Tauson |
|            4 |     4602 | 2024-04-16 | Sampi        | L   | 0.112      | -            | -                | -                | -         |    -0.24 | anarkez, Kind0, Maze, NOPEEJ, Tauson |
|            3 |     4618 | 2024-04-15 | PGE Turow    | W   | 0.105      | 0.371        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     1.65 | anarkez, Kind0, Maze, NOPEEJ, Tauson |
|            2 |     4690 | 2024-04-11 | ENCE Academy | L   | 0.079      | -            | -                | -                | -         |    -0.76 | anarkez, Kind0, Maze, NOPEEJ, Tauson |
|            1 |     4877 | 2024-04-05 | 9 Pandas     | W   | 0.039      | 0.384        | 0.052 (0.001)    | 0.774 (0.012)    | 0 (0.000) |     1.17 | anarkez, Kind0, Maze, NOPEEJ, Tauson |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($332,851.90)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
