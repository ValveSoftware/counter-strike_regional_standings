### Roster Details<br />
Team Name: Omega<br />
Roster: adai, Aldikon, Botpa1, dan4o, Maison<br />
Global Rank: [118](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [83]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  879.7<br />
<br />
Final Rank Value (879.7) = Starting Rank Value (919.5) + Head To Head Adjustments (-39.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.343[<sup>1</sup>](#table2)
- Bounty Collected: 0.249[<sup>2</sup>](#table1)
- Opponent Network: 0.037[<sup>2</sup>](#table1)
- LAN Wins: 0.419[<sup>2</sup>](#table1)

The average of these factors is 0.262<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 919.5
- 400 + ( ( 0.262 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 919.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |       65 | 2026-01-03 | ALLINNERS     | L   | 1.000      | -            | -                | -                | -         |   -17.19 | adai, Aldikon, Botpa1, dan4o, Maison |
|           11 |       72 | 2026-01-03 | BetBoom       | L   | 1.000      | -            | -                | -                | -         |    -1.42 | adai, Aldikon, Botpa1, dan4o, Maison |
|           10 |       77 | 2026-01-02 | DEPO          | W   | 1.000      | 0.303        | 0.003 (0.001)    | 0.187 (0.057)    | 1 (1.000) |    14.19 | adai, Aldikon, Botpa1, dan4o, Maison |
|            9 |       87 | 2025-12-27 | GoodGame Club | L   | 1.000      | -            | -                | -                | -         |   -22.74 | adai, Aldikon, Botpa1, dan4o, Maison |
|            8 |      223 | 2025-12-14 | HOTU          | L   | 1.000      | -            | -                | -                | -         |    -1.12 | adai, Aldikon, Botpa1, dan4o, Maison |
|            7 |      224 | 2025-12-14 | NOVAQ         | W   | 1.000      | 0.333        | 0.018 (0.006)    | 0.826 (0.275)    | 1 (1.000) |    15.55 | adai, Aldikon, Botpa1, dan4o, Maison |
|            6 |      233 | 2025-12-13 | ALLINNERS     | W   | 1.000      | 0.333        | 0.007 (0.002)    | 0.124 (0.041)    | 1 (1.000) |    14.91 | adai, Aldikon, Botpa1, dan4o, Maison |
|            5 |      255 | 2025-12-12 | HOTU          | L   | 1.000      | -            | -                | -                | -         |    -0.96 | adai, Aldikon, Botpa1, dan4o, Maison |
|            4 |      479 | 2025-11-30 | ALLINNERS     | L   | 0.959      | -            | -                | -                | -         |   -13.80 | adai, Aldikon, Botpa1, dan4o, Maison |
|            3 |      485 | 2025-11-30 | Winners       | W   | 0.958      | 0.282        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.958) |     3.31 | adai, Aldikon, Botpa1, dan4o, Maison |
|            2 |      531 | 2025-11-29 | ALLINNERS     | L   | 0.952      | -            | -                | -                | -         |   -14.71 | adai, Aldikon, Botpa1, dan4o, Maison |
|            1 |     1021 | 2025-11-09 | ALLINNERS     | L   | 0.821      | -            | -                | -                | -         |   -15.85 | adai, Aldikon, Botpa1, dan4o, Maison |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,185.41)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-27 |      1.000 | $1,362.00      | $1,362.00       |
| 2025-12-14 |      1.000 | $2,500.00      | $2,500.00       |
| 2025-11-30 |      0.960 | $481.00        | $461.70         |
| 2025-11-09 |      0.821 | $1,050.00      | $861.70         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
