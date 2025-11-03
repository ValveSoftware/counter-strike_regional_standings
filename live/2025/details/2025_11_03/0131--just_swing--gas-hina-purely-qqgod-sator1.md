### Roster Details<br />
Team Name: Just Swing<br />
Roster: gas, HiNa, Purely, qqGOD, sATOR1<br />
Global Rank: [131](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_11_03.md)<br />
Regional Rank: [14]( ../../standings_asia_2025_11_03.md)<br />
<br />
Final Rank Value:  739.1<br />
<br />
Final Rank Value (739.1) = Starting Rank Value (737.0) + Head To Head Adjustments (2.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.296[<sup>1</sup>](#table2)
- Bounty Collected: 0.239[<sup>2</sup>](#table1)
- Opponent Network: 0.034[<sup>2</sup>](#table1)
- LAN Wins: 0.151[<sup>2</sup>](#table1)

The average of these factors is 0.180<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 737.0
- 400 + ( ( 0.180 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 737.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      505 | 2025-10-09 | Kaleido           | L   | 1.000      | -            | -                | -                | -         |    -7.47 | gas, HiNa, Purely, qqGOD, sATOR1   |
|           14 |      558 | 2025-10-08 | Chinggis Warriors | W   | 1.000      | 0.333        | 0.015 (0.005)    | 0.434 (0.145)    | 0 (0.000) |    23.96 | gas, HiNa, Purely, qqGOD, sATOR1   |
|           13 |      611 | 2025-10-07 | Legion            | W   | 1.000      | 0.333        | 0.001 (0.000)    | 0.167 (0.056)    | 0 (0.000) |    13.07 | gas, HiNa, Purely, qqGOD, sATOR1   |
|           12 |      667 | 2025-10-06 | The Huns          | L   | 1.000      | -            | -                | -                | -         |    -2.50 | gas, HiNa, Purely, qqGOD, sATOR1   |
|           11 |      732 | 2025-10-05 | Last Bullet       | W   | 1.000      | 0.333        | 0.002 (0.001)    | 0.217 (0.072)    | 0 (0.000) |    16.11 | gas, HiNa, Purely, qqGOD, sATOR1   |
|           10 |     1473 | 2025-09-14 | FengDa            | L   | 0.865      | -            | -                | -                | -         |    -8.68 | gas, HiNa, Purely, qqGOD, sATOR1   |
|            9 |     1671 | 2025-09-10 | NomadS            | L   | 0.839      | -            | -                | -                | -         |   -10.30 | gas, HiNa, Purely, qqGOD, sATOR1   |
|            8 |     1717 | 2025-09-09 | Chinggis Warriors | L   | 0.833      | -            | -                | -                | -         |    -4.26 | gas, HiNa, Purely, qqGOD, sATOR1   |
|            7 |     1765 | 2025-09-08 | IHC               | W   | 0.826      | 0.333        | 0.001 (0.000)    | 0.202 (0.056)    | 0 (0.000) |    12.96 | gas, HiNa, Purely, qqGOD, sATOR1   |
|            6 |     2019 | 2025-08-28 | Rare Atom         | L   | 0.751      | -            | -                | -                | -         |    -3.26 | gas, HiNa, Purely, qqGOD, sATOR1   |
|            5 |     2041 | 2025-08-27 | WDNMD             | W   | 0.745      | 0.367        | 0.000 (0.000)    | 0.029 (0.008)    | 1 (0.745) |     6.79 | gas, HiNa, Purely, qqGOD, sATOR1   |
|            4 |     2047 | 2025-08-26 | Pressure Monsters | W   | 0.743      | 0.367        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.743) |     3.64 | gas, HiNa, Purely, qqGOD, sATOR1   |
|            3 |     2081 | 2025-08-25 | WDNMD             | L   | 0.731      | -            | -                | -                | -         |   -16.65 | gas, HiNa, Purely, qqGOD, sATOR1   |
|            2 |     2472 | 2025-08-12 | BORING PLAYERS    | L   | 0.646      | -            | -                | -                | -         |   -14.59 | gas, Honkai, Purely, qqGOD, sATOR1 |
|            1 |     2526 | 2025-08-11 | Eruption          | L   | 0.639      | -            | -                | -                | -         |    -6.76 | gas, Honkai, Purely, qqGOD, sATOR1 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,596.44)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-09-14 |      0.865 | $3,000.00      | $2,596.44       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
