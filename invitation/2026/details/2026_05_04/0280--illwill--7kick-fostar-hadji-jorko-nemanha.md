### Roster Details<br />
Team Name: illwill<br />
Roster: 7Kick, fostar, hAdji, Jorko, nEMANHA<br />
Global Rank: [280](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [174]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  592.8<br />
<br />
Final Rank Value (592.8) = Starting Rank Value (570.0) + Head To Head Adjustments (22.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.245[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.115[<sup>2</sup>](#table1)

The average of these factors is 0.092<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 570.0
- 400 + ( ( 0.092 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 570.0


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
|            7 |     4909 | 2025-12-20 | fnatic       | L   | 0.299      | -            | -                | -                | -         |    -0.42 | 7Kick, fostar, hAdji, Jorko, nEMANHA |
|            6 |     4922 | 2025-12-19 | BESTIA       | L   | 0.294      | -            | -                | -                | -         |    -0.14 | 7Kick, fostar, hAdji, Jorko, nEMANHA |
|            5 |     4938 | 2025-12-19 | Venom        | W   | 0.292      | 0.339        | 0.000 (0.000)    | 0.040 (0.004)    | 1 (0.292) |     6.27 | 7Kick, fostar, hAdji, Jorko, nEMANHA |
|            4 |     4947 | 2025-12-18 | Inner Circle | W   | 0.287      | 0.339        | 0.083 (0.008)    | 0.453 (0.044)    | 1 (0.287) |     8.86 | 7Kick, fostar, hAdji, Jorko, nEMANHA |
|            3 |     4961 | 2025-12-17 | Grindas      | W   | 0.281      | 0.339        | 0.000 (0.000)    | 0.121 (0.011)    | 1 (0.281) |     4.21 | 7Kick, fostar, hAdji, Jorko, nEMANHA |
|            2 |     4969 | 2025-12-17 | MOUZ NXT     | L   | 0.279      | -            | -                | -                | -         |    -0.36 | 7Kick, fostar, hAdji, Jorko, nEMANHA |
|            1 |     4976 | 2025-12-17 | INFINITE     | W   | 0.279      | 0.339        | 0.000 (0.000)    | 0.066 (0.006)    | 1 (0.279) |     4.43 | 7Kick, fostar, hAdji, Jorko, nEMANHA |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
