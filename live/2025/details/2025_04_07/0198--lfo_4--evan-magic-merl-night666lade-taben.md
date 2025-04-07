### Roster Details<br />
Team Name: LFO 4<br />
Roster: Evan, MagiC, MERL, NIGHT666LADE, TABEN<br />
Global Rank: [198](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [52]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  612.4<br />
<br />
Final Rank Value (612.4) = Starting Rank Value (612.9) + Head To Head Adjustments (-0.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.230[<sup>1</sup>](#table2)
- Bounty Collected: 0.222[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.116<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 612.9
- 400 + ( ( 0.116 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 612.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      205 | 2025-03-28 | Party Astronauts   | L   | 1.000      | -            | -                | -                | -         |   -17.33 | Evan, MagiC, MERL, NIGHT666LADE, TABEN   |
|           13 |      262 | 2025-03-27 | Tsunami            | L   | 1.000      | -            | -                | -                | -         |   -14.76 | Evan, MagiC, MERL, NIGHT666LADE, TABEN   |
|           12 |      640 | 2025-03-08 | Complexity         | L   | 1.000      | -            | -                | -                | -         |    -3.33 | Evan, MagiC, MERL, NIGHT666LADE, TABEN   |
|           11 |      648 | 2025-03-08 | Immigrants peek    | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.294 (0.042)    | 0 (0.000) |    15.81 | DooM, Evan, MagiC, NIGHT666LADE, TABEN   |
|           10 |      710 | 2025-03-07 | Complexity         | L   | 0.996      | -            | -                | -                | -         |    -3.16 | Evan, MagiC, MERL, NIGHT666LADE, TABEN   |
|            9 |      773 | 2025-03-06 | Bad News Capybaras | W   | 0.990      | 0.143        | 0.000 (0.000)    | 0.174 (0.025)    | 0 (0.000) |    14.52 | Evan, MagiC, MERL, NIGHT666LADE, TABEN   |
|            8 |      809 | 2025-03-05 | HbITuKu            | W   | 0.983      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.98 | Evan, MagiC, MERL, NIGHT666LADE, TABEN   |
|            7 |     1305 | 2025-02-10 | LOBOARMY           | L   | 0.830      | -            | -                | -                | -         |   -10.75 | Evan, MagiC, MERL, NIGHT666LADE, TABEN   |
|            6 |     1352 | 2025-02-09 | InControl          | W   | 0.821      | 0.143        | 0.000 (0.000)    | 0.044 (0.005)    | 0 (0.000) |     8.76 | Evan, MagiC, MERL, NIGHT666LADE, TABEN   |
|            5 |     1385 | 2025-02-08 | Party Astronauts   | L   | 0.815      | -            | -                | -                | -         |   -10.70 | Evan, MagiC, MERL, NIGHT666LADE, TABEN   |
|            4 |     1397 | 2025-02-08 | LOBOARMY           | W   | 0.815      | 0.143        | 0.026 (0.003)    | 0.295 (0.034)    | 0 (0.000) |    14.76 | Evan, MagiC, MERL, NIGHT666LADE, TABEN   |
|            3 |     2252 | 2024-11-23 | NRG                | L   | 0.302      | -            | -                | -                | -         |    -1.41 | Evan, MagiC, MERL, NIGHT666LADE, TABEN   |
|            2 |     3202 | 2024-10-09 | FLUFFY AIMERS      | W   | 0.003      | 0.477        | 0.001 (0.000)    | 0.067 (0.000)    | 0 (0.000) |     0.05 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN |
|            1 |     3207 | 2024-10-09 | FLUFFY AIMERS      | W   | 0.003      | 0.477        | 0.001 (0.000)    | 0.067 (0.000)    | 0 (0.000) |     0.04 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($121.43)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.076 | $1,600.00      | $121.43         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
