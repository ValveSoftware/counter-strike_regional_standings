### Roster Details<br />
Team Name: InControl<br />
Roster: Andrew, DYLAN, jsfeltner, mason, TyRa<br />
Global Rank: [187](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_20.md)<br />
Regional Rank: [52]( ../../standings_americas_2025_01_20.md)<br />
<br />
Final Rank Value:  622.7<br />
<br />
Final Rank Value (622.7) = Starting Rank Value (651.2) + Head To Head Adjustments (-28.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.313[<sup>1</sup>](#table2)
- Bounty Collected: 0.191[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.126<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 651.2
- 400 + ( ( 0.126 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 651.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |     1491 | 2024-10-13 | FLUFFY AIMERS    | L   | 0.547      | -            | -                | -                | -         |    -2.70 | Andrew, DYLAN, jsfeltner, mason, TyRa |
|           17 |     1506 | 2024-10-12 | Fisher College   | L   | 0.540      | -            | -                | -                | -         |    -3.57 | Andrew, DYLAN, jsfeltner, mason, TyRa |
|           16 |     2107 | 2024-09-24 | Lore             | L   | 0.421      | -            | -                | -                | -         |    -8.97 | AJ2k, FIEND, jsfeltner, mason, TyRa   |
|           15 |     2149 | 2024-09-23 | Revenge Nation   | L   | 0.415      | -            | -                | -                | -         |    -5.77 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           14 |     2236 | 2024-09-20 | DETONATE         | W   | 0.395      | 0.371        | 0.000 (0.000)    | 0.030 (0.004)    | 0 (0.000) |     3.68 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           13 |     2260 | 2024-09-19 | undefined        | L   | 0.388      | -            | -                | -                | -         |    -5.17 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           12 |     2363 | 2024-09-16 | Mythic           | L   | 0.368      | -            | -                | -                | -         |    -7.47 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           11 |     2516 | 2024-09-11 | Akimbo           | L   | 0.333      | -            | -                | -                | -         |    -4.50 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           10 |     2573 | 2024-09-09 | Final Form       | W   | 0.321      | 0.372        | 0.003 (0.000)    | 0.044 (0.005)    | 0 (0.000) |     4.61 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            9 |     2613 | 2024-09-07 | Nouns            | L   | 0.307      | -            | -                | -                | -         |    -0.71 | Beast, jsfeltner, mason, Pugg, TyRa   |
|            8 |     3317 | 2024-08-19 | Party Astronauts | L   | 0.180      | -            | -                | -                | -         |    -1.12 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            7 |     3414 | 2024-08-15 | NRG              | L   | 0.154      | -            | -                | -                | -         |    -0.20 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            6 |     3473 | 2024-08-13 | M80              | L   | 0.140      | -            | -                | -                | -         |    -0.24 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            5 |     3554 | 2024-08-11 | Canada           | W   | 0.128      | 0.371        | 0.002 (0.000)    | 0.063 (0.003)    | 0 (0.000) |     2.06 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            4 |     3601 | 2024-08-09 | LAG              | W   | 0.114      | 0.371        | 0.004 (0.000)    | 0.081 (0.003)    | 0 (0.000) |     1.74 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            3 |     3746 | 2024-08-05 | Aether           | W   | 0.088      | 0.371        | 0.000 (0.000)    | 0.063 (0.002)    | 0 (0.000) |     0.80 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            2 |     4038 | 2024-07-28 | Vibe             | L   | 0.035      | -            | -                | -                | -         |    -0.79 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            1 |     4160 | 2024-07-24 | Take Flyte       | L   | 0.008      | -            | -                | -                | -         |    -0.09 | DYLAN, FIEND, jsfeltner, mason, TyRa  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,408.73)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-13 |      0.547 | $150.00        | $82.10          |
| 2024-09-21 |      0.402 | $3,300.00      | $1,326.63       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
