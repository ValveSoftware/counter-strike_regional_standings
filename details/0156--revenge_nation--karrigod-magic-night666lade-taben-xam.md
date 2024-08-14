### Roster Details<br />
Team Name: Revenge Nation<br />
Roster: karrigod, MagiC, NIGHT666LADE, TABEN, xam<br />
Global Rank: [156](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [100]( ../standings_europe.md)<br />
<br />
Final Rank Value:  699.6<br />
<br />
Final Rank Value (699.6) = Starting Rank Value (700.8) + Head To Head Adjustments (-1.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.305[<sup>1</sup>](#table2)
- Bounty Collected: 0.252[<sup>2</sup>](#table1)
- Opponent Network: 0.053[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 700.8
- 400 + ( ( 0.152 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 700.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      101 | 2024-08-11 | Phoenix       | L   | 1.000      | -            | -                | -                | -         |   -17.28 | karrigod, MagiC, NIGHT666LADE, TABEN, xam |
|           11 |      201 | 2024-08-07 | E-Xolos LAZER | L   | 1.000      | -            | -                | -                | -         |   -12.82 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam   |
|           10 |      206 | 2024-08-07 | Mythic        | W   | 1.000      | 0.477        | 0.009 (0.004)    | 0.311 (0.148)    | 0 (0.000) |    17.50 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam   |
|            9 |      207 | 2024-08-07 | Mythic        | L   | 1.000      | -            | -                | -                | -         |   -13.84 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam   |
|            8 |      258 | 2024-08-06 | NRG           | L   | 1.000      | -            | -                | -                | -         |    -5.20 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam   |
|            7 |      263 | 2024-08-06 | NRG           | L   | 1.000      | -            | -                | -                | -         |    -5.46 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam   |
|            6 |      461 | 2024-07-31 | Take Flyte    | W   | 1.000      | 0.477        | 0.002 (0.001)    | 0.244 (0.117)    | 0 (0.000) |    13.32 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam   |
|            5 |      466 | 2024-07-31 | Take Flyte    | W   | 1.000      | 0.477        | 0.002 (0.001)    | 0.244 (0.117)    | 0 (0.000) |    14.54 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam   |
|            4 |      558 | 2024-07-29 | LAG           | W   | 1.000      | 0.371        | 0.011 (0.004)    | 0.337 (0.125)    | 0 (0.000) |    19.68 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam   |
|            3 |      623 | 2024-07-27 | Homyno        | L   | 1.000      | -            | -                | -                | -         |   -17.52 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam   |
|            2 |     3711 | 2024-03-23 | Homyno        | W   | 0.242      | 0.359        | 0.006 (0.001)    | 0.181 (0.016)    | 0 (0.000) |     3.65 | HorizoN, MagiC, S0ph3R, TABEN, xam        |
|            1 |     3910 | 2024-03-13 | Final Form    | W   | 0.175      | 0.359        | 0.002 (0.000)    | 0.059 (0.004)    | 0 (0.000) |     2.31 | HorizoN, MagiC, S0ph3R, TABEN, xam        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,691.18)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
