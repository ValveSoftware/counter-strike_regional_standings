### Roster Details<br />
Team Name: InControl<br />
Roster: Andrew, DYLAN, jsfeltner, mason, TyRa<br />
Global Rank: [188](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_17.md)<br />
Regional Rank: [53]( ../../standings_americas_2025_01_17.md)<br />
<br />
Final Rank Value:  622.6<br />
<br />
Final Rank Value (622.6) = Starting Rank Value (651.8) + Head To Head Adjustments (-29.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.313[<sup>1</sup>](#table2)
- Bounty Collected: 0.192[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.127<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 651.8
- 400 + ( ( 0.127 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 651.8


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
|           18 |     1482 | 2024-10-13 | FLUFFY AIMERS    | L   | 0.560      | -            | -                | -                | -         |    -2.76 | Andrew, DYLAN, jsfeltner, mason, TyRa |
|           17 |     1497 | 2024-10-12 | Fisher College   | L   | 0.554      | -            | -                | -                | -         |    -3.65 | Andrew, DYLAN, jsfeltner, mason, TyRa |
|           16 |     2098 | 2024-09-24 | Lore             | L   | 0.435      | -            | -                | -                | -         |    -9.25 | AJ2k, FIEND, jsfeltner, mason, TyRa   |
|           15 |     2140 | 2024-09-23 | Revenge Nation   | L   | 0.429      | -            | -                | -                | -         |    -5.96 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           14 |     2227 | 2024-09-20 | DETONATE         | W   | 0.408      | 0.371        | 0.000 (0.000)    | 0.032 (0.005)    | 0 (0.000) |     3.83 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           13 |     2251 | 2024-09-19 | undefined        | L   | 0.402      | -            | -                | -                | -         |    -5.31 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           12 |     2354 | 2024-09-16 | Mythic           | L   | 0.381      | -            | -                | -                | -         |    -7.71 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           11 |     2507 | 2024-09-11 | Akimbo           | L   | 0.347      | -            | -                | -                | -         |    -4.68 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           10 |     2564 | 2024-09-09 | Final Form       | W   | 0.335      | 0.372        | 0.003 (0.000)    | 0.045 (0.006)    | 0 (0.000) |     4.81 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            9 |     2604 | 2024-09-07 | Nouns            | L   | 0.320      | -            | -                | -                | -         |    -0.73 | Beast, jsfeltner, mason, Pugg, TyRa   |
|            8 |     3308 | 2024-08-19 | Party Astronauts | L   | 0.194      | -            | -                | -                | -         |    -1.19 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            7 |     3405 | 2024-08-15 | NRG              | L   | 0.167      | -            | -                | -                | -         |    -0.22 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            6 |     3464 | 2024-08-13 | M80              | L   | 0.154      | -            | -                | -                | -         |    -0.25 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            5 |     3545 | 2024-08-11 | Canada           | W   | 0.141      | 0.371        | 0.002 (0.000)    | 0.064 (0.003)    | 0 (0.000) |     2.29 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            4 |     3592 | 2024-08-09 | LAG              | W   | 0.127      | 0.371        | 0.004 (0.000)    | 0.083 (0.004)    | 0 (0.000) |     1.95 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            3 |     3737 | 2024-08-05 | Aether           | W   | 0.101      | 0.371        | 0.000 (0.000)    | 0.063 (0.002)    | 0 (0.000) |     0.93 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            2 |     4029 | 2024-07-28 | Vibe             | L   | 0.048      | -            | -                | -                | -         |    -1.09 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            1 |     4151 | 2024-07-24 | Take Flyte       | L   | 0.022      | -            | -                | -                | -         |    -0.24 | DYLAN, FIEND, jsfeltner, mason, TyRa  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,455.55)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-13 |      0.561 | $150.00        | $84.14          |
| 2024-09-21 |      0.416 | $3,300.00      | $1,371.41       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
