### Roster Details<br />
Team Name: WOPA<br />
Roster: kwezz, Patti, SinK, thamlike, Zanto<br />
Global Rank: [160](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [104]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  720.9<br />
<br />
Final Rank Value (720.9) = Starting Rank Value (701.4) + Head To Head Adjustments (19.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.198[<sup>2</sup>](#table1)
- Opponent Network: 0.032[<sup>2</sup>](#table1)
- LAN Wins: 0.403[<sup>2</sup>](#table1)

The average of these factors is 0.158<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 701.4
- 400 + ( ( 0.158 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 701.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      198 | 2025-11-21 | ENCE             | L   | 1.000      | -            | -                | -                | -         |    -1.25 | kwezz, Patti, SinK, thamlike, Zanto |
|            9 |      213 | 2025-11-21 | Friendly Campers | L   | 1.000      | -            | -                | -                | -         |    -1.24 | kwezz, Patti, SinK, thamlike, Zanto |
|            8 |      245 | 2025-11-20 | Nexus            | W   | 1.000      | 0.339        | 0.003 (0.001)    | 0.840 (0.284)    | 1 (1.000) |    25.02 | kwezz, Patti, SinK, thamlike, Zanto |
|            7 |      248 | 2025-11-20 | G2 Ares          | W   | 1.000      | 0.339        | 0.000 (0.000)    | 0.038 (0.013)    | 1 (1.000) |     6.22 | kwezz, Patti, SinK, thamlike, Zanto |
|            6 |      574 | 2025-11-07 | aimclub          | W   | 1.000      | 0.335        | 0.000 (0.000)    | 0.060 (0.020)    | 1 (1.000) |     8.00 | kwezz, Patti, SinK, thamlike, Zanto |
|            5 |      586 | 2025-11-07 | BC.Game          | L   | 1.000      | -            | -                | -                | -         |    -2.54 | kwezz, Patti, SinK, thamlike, Zanto |
|            4 |      600 | 2025-11-07 | Alliance         | L   | 1.000      | -            | -                | -                | -         |    -1.35 | kwezz, Patti, SinK, thamlike, Zanto |
|            3 |      621 | 2025-11-07 | boomer demons    | W   | 1.000      | 0.335        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     5.22 | kwezz, Patti, SinK, thamlike, Zanto |
|            2 |      627 | 2025-11-07 | AM               | L   | 1.000      | -            | -                | -                | -         |    -2.10 | kwezz, Patti, SinK, thamlike, Zanto |
|            1 |      746 | 2025-11-03 | Flame Sharks     | L   | 1.000      | -            | -                | -                | -         |   -16.49 | kwezz, Patti, SinK, thamlike, Zanto |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
