### Roster Details<br />
Team Name: illwill<br />
Roster: 7Kick, fostar, hAdji, Jorko, nEMANHA<br />
Global Rank: [317](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [199]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  528.4<br />
<br />
Final Rank Value (528.4) = Starting Rank Value (520.8) + Head To Head Adjustments (7.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.211[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.040[<sup>2</sup>](#table1)

The average of these factors is 0.063<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 520.8
- 400 + ( ( 0.063 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 520.8


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
|            7 |     5895 | 2025-12-20 | fnatic       | L   | 0.113      | -            | -                | -                | -         |    -0.15 | 7Kick, fostar, hAdji, Jorko, nEMANHA |
|            6 |     5908 | 2025-12-19 | BESTIA       | L   | 0.108      | -            | -                | -                | -         |    -0.06 | 7Kick, fostar, hAdji, Jorko, nEMANHA |
|            5 |     5924 | 2025-12-19 | Venom        | W   | 0.105      | 0.339        | 0.000 (0.000)    | 0.014 (0.000)    | 1 (0.105) |     1.72 | 7Kick, fostar, hAdji, Jorko, nEMANHA |
|            4 |     5933 | 2025-12-18 | Inner Circle | W   | 0.100      | 0.339        | 0.054 (0.002)    | 0.534 (0.018)    | 1 (0.100) |     3.14 | 7Kick, fostar, hAdji, Jorko, nEMANHA |
|            3 |     5947 | 2025-12-17 | Grindas      | W   | 0.094      | 0.339        | 0.000 (0.000)    | 0.089 (0.003)    | 1 (0.094) |     1.43 | 7Kick, fostar, hAdji, Jorko, nEMANHA |
|            2 |     5955 | 2025-12-17 | MOUZ NXT     | L   | 0.093      | -            | -                | -                | -         |    -0.13 | 7Kick, fostar, hAdji, Jorko, nEMANHA |
|            1 |     5962 | 2025-12-17 | INFINITE     | W   | 0.092      | 0.339        | 0.000 (0.000)    | 0.047 (0.001)    | 1 (0.092) |     1.65 | 7Kick, fostar, hAdji, Jorko, nEMANHA |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
