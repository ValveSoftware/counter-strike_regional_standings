### Roster Details<br />
Team Name: Revenge Nation<br />
Roster: Evan, HorizoN, MagiC, NIGHT666LADE, TABEN<br />
Global Rank: [183](../../standings_global_2024_09_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_18.md)<br />
Regional Rank: [117]( ../../standings_europe_2024_09_18.md)<br />
<br />
Final Rank Value:  632.5<br />
<br />
Final Rank Value (632.5) = Starting Rank Value (657.9) + Head To Head Adjustments (-25.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.217[<sup>1</sup>](#table2)
- Bounty Collected: 0.253[<sup>2</sup>](#table1)
- Opponent Network: 0.056[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.132<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 657.9
- 400 + ( ( 0.132 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 657.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |       97 | 2024-09-14 | Dangerous     | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.73 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           18 |      133 | 2024-09-13 | timbermen     | L   | 1.000      | -            | -                | -                | -         |    -4.02 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           17 |      134 | 2024-09-13 | timbermen     | L   | 1.000      | -            | -                | -                | -         |    -4.18 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           16 |      161 | 2024-09-12 | jahsdnmasjdm  | L   | 1.000      | -            | -                | -                | -         |   -22.60 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           15 |      393 | 2024-09-04 | Limitless     | L   | 1.000      | -            | -                | -                | -         |   -14.01 | karrigod, MagiC, NIGHT666LADE, TABEN, xam   |
|           14 |      400 | 2024-09-04 | Limitless     | W   | 1.000      | 0.477        | 0.004 (0.002)    | 0.151 (0.072)    | 0 (0.000) |    17.66 | karrigod, MagiC, NIGHT666LADE, TABEN, xam   |
|           13 |      426 | 2024-09-03 | BOSS          | L   | 1.000      | -            | -                | -                | -         |    -8.49 | dantemoren, MagiC, NIGHT666LADE, TABEN, xam |
|           12 |      429 | 2024-09-03 | BOSS          | L   | 1.000      | -            | -                | -                | -         |    -9.11 | dantemoren, MagiC, NIGHT666LADE, TABEN, xam |
|           11 |     1234 | 2024-08-11 | Phoenix       | L   | 0.950      | -            | -                | -                | -         |   -14.87 | karrigod, MagiC, NIGHT666LADE, TABEN, xam   |
|           10 |     1334 | 2024-08-07 | E-Xolos LAZER | L   | 0.923      | -            | -                | -                | -         |   -10.12 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            9 |     1339 | 2024-08-07 | Mythic        | W   | 0.923      | 0.477        | 0.007 (0.003)    | 0.322 (0.142)    | 0 (0.000) |    17.76 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            8 |     1340 | 2024-08-07 | Mythic        | L   | 0.922      | -            | -                | -                | -         |   -11.14 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            7 |     1391 | 2024-08-06 | NRG           | L   | 0.916      | -            | -                | -                | -         |    -4.16 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            6 |     1396 | 2024-08-06 | NRG           | L   | 0.916      | -            | -                | -                | -         |    -4.33 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            5 |     1594 | 2024-07-31 | Take Flyte    | W   | 0.877      | 0.477        | 0.005 (0.002)    | 0.283 (0.118)    | 0 (0.000) |    16.24 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            4 |     1599 | 2024-07-31 | Take Flyte    | W   | 0.876      | 0.477        | 0.005 (0.002)    | 0.283 (0.118)    | 0 (0.000) |    17.48 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            3 |     1691 | 2024-07-29 | LAG           | W   | 0.864      | 0.371        | 0.006 (0.002)    | 0.356 (0.114)    | 0 (0.000) |    18.88 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            2 |     1756 | 2024-07-27 | Homyno        | L   | 0.849      | -            | -                | -                | -         |   -13.35 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            1 |     4844 | 2024-03-23 | Homyno        | W   | 0.010      | 0.359        | 0.007 (0.000)    | 0.164 (0.001)    | 0 (0.000) |     0.16 | HorizoN, MagiC, S0ph3R, TABEN, xam          |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($68.70)
- Divide that value by the 5th highest value among all rosters ($274,303.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
