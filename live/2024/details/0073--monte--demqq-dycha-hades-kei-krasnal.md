### Roster Details<br />
Team Name: Monte<br />
Roster: DemQQ, dycha, hades, KEi, kRaSnaL<br />
Global Rank: [73](../standings_global_2024_08_14.md)<br />
<br />
Region: [Europe]( ../standings_europe_2024_08_14.md)<br />
Regional Rank: [53]( ../standings_europe_2024_08_14.md)<br />
<br />
Final Rank Value:  947.8<br />
<br />
Final Rank Value (947.8) = Starting Rank Value (854.7) + Head To Head Adjustments (93.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.356[<sup>1</sup>](#table2)
- Bounty Collected: 0.384[<sup>2</sup>](#table1)
- Opponent Network: 0.182[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.230<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 854.7
- 400 + ( ( 0.230 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 854.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |       32 | 2024-08-13 | ARCRED          | L   | 1.000      | -            | -                | -                | -         |   -14.75 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           12 |       74 | 2024-08-12 | PARIVISION      | L   | 1.000      | -            | -                | -                | -         |    -9.75 | dycha, hades, KEi, kRaSnaL, STYKO   |
|           11 |      225 | 2024-08-07 | Insilio         | W   | 1.000      | 0.500        | 0.021 (0.010)    | 0.505 (0.252)    | 0 (0.000) |    13.62 | DemQQ, dycha, hades, kRaSnaL, STYKO |
|           10 |      486 | 2024-07-31 | EYEBALLERS      | W   | 1.000      | 0.500        | 0.005 (0.002)    | 0.614 (0.307)    | 0 (0.000) |     8.56 | DemQQ, dycha, hades, kRaSnaL, STYKO |
|            9 |      568 | 2024-07-29 | 9INE            | W   | 1.000      | 0.435        | 0.022 (0.010)    | 0.557 (0.242)    | 0 (0.000) |    16.88 | DemQQ, dycha, hades, kRaSnaL, STYKO |
|            8 |      616 | 2024-07-28 | Sangal          | L   | 1.000      | -            | -                | -                | -         |    -4.96 | DemQQ, dycha, hades, kRaSnaL, STYKO |
|            7 |      625 | 2024-07-27 | Into the Breach | W   | 1.000      | 0.435        | 0.002 (0.001)    | 0.346 (0.150)    | 0 (0.000) |    11.49 | DemQQ, dycha, hades, kRaSnaL, STYKO |
|            6 |      632 | 2024-07-27 | 9z              | W   | 1.000      | 0.435        | 0.408 (0.177)    | 0.591 (0.257)    | 0 (0.000) |    30.22 | DemQQ, dycha, hades, kRaSnaL, STYKO |
|            5 |      665 | 2024-07-26 | Space           | W   | 1.000      | 0.435        | 0.005 (0.002)    | 0.445 (0.193)    | 0 (0.000) |    15.52 | DemQQ, dycha, hades, kRaSnaL, STYKO |
|            4 |      703 | 2024-07-25 | Endpoint        | W   | 1.000      | 0.435        | 0.042 (0.018)    | 0.591 (0.257)    | 0 (0.000) |    15.10 | DemQQ, dycha, hades, kRaSnaL, STYKO |
|            3 |      720 | 2024-07-24 | Sashi           | L   | 1.000      | -            | -                | -                | -         |    -5.40 | DemQQ, dycha, hades, kRaSnaL, STYKO |
|            2 |      922 | 2024-07-18 | KOI             | W   | 1.000      | 0.500        | 0.053 (0.027)    | 0.319 (0.159)    | 0 (0.000) |    23.44 | DemQQ, dycha, hades, kRaSnaL, STYKO |
|            1 |     1056 | 2024-07-16 | Zero Tenacity   | L   | 1.000      | -            | -                | -                | -         |    -6.88 | DemQQ, dycha, hades, kRaSnaL, STYKO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,000.00)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
