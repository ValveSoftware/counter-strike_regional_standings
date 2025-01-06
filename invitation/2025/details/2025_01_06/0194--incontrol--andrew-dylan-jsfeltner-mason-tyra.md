### Roster Details<br />
Team Name: InControl<br />
Roster: Andrew, DYLAN, jsfeltner, mason, TyRa<br />
Global Rank: [194](../../standings_global_2025_01_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_06.md)<br />
Regional Rank: [55]( ../../standings_americas_2025_01_06.md)<br />
<br />
Final Rank Value:  620.4<br />
<br />
Final Rank Value (620.4) = Starting Rank Value (654.2) + Head To Head Adjustments (-33.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.313[<sup>1</sup>](#table2)
- Bounty Collected: 0.198[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.129<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 654.2
- 400 + ( ( 0.129 - 0.000 ) / ( 0.809 - 0.000 ) ) * 1600 = 654.2


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
|           18 |     1437 | 2024-10-13 | FLUFFY AIMERS    | L   | 0.635      | -            | -                | -                | -         |    -3.17 | Andrew, DYLAN, jsfeltner, mason, TyRa |
|           17 |     1452 | 2024-10-12 | Fisher College   | L   | 0.629      | -            | -                | -                | -         |    -4.07 | Andrew, DYLAN, jsfeltner, mason, TyRa |
|           16 |     2053 | 2024-09-24 | Lore             | L   | 0.510      | -            | -                | -                | -         |   -10.78 | AJ2k, FIEND, jsfeltner, mason, TyRa   |
|           15 |     2095 | 2024-09-23 | Revenge Nation   | L   | 0.503      | -            | -                | -                | -         |    -6.96 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           14 |     2182 | 2024-09-20 | DETONATE         | W   | 0.483      | 0.371        | 0.000 (0.000)    | 0.042 (0.007)    | 0 (0.000) |     4.66 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           13 |     2206 | 2024-09-19 | undefined        | L   | 0.477      | -            | -                | -                | -         |    -6.08 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           12 |     2309 | 2024-09-16 | Mythic           | L   | 0.456      | -            | -                | -                | -         |    -9.10 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           11 |     2462 | 2024-09-11 | Akimbo           | L   | 0.422      | -            | -                | -                | -         |    -5.63 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           10 |     2519 | 2024-09-09 | Final Form       | W   | 0.410      | 0.372        | 0.003 (0.000)    | 0.053 (0.008)    | 0 (0.000) |     5.92 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            9 |     2559 | 2024-09-07 | Nouns            | L   | 0.395      | -            | -                | -                | -         |    -0.87 | Beast, jsfeltner, mason, Pugg, TyRa   |
|            8 |     3263 | 2024-08-19 | Party Astronauts | L   | 0.268      | -            | -                | -                | -         |    -1.58 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            7 |     3360 | 2024-08-15 | NRG              | L   | 0.242      | -            | -                | -                | -         |    -0.34 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            6 |     3419 | 2024-08-13 | M80              | L   | 0.229      | -            | -                | -                | -         |    -0.34 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            5 |     3500 | 2024-08-11 | Canada           | W   | 0.216      | 0.371        | 0.002 (0.000)    | 0.070 (0.006)    | 0 (0.000) |     3.54 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            4 |     3547 | 2024-08-09 | LAG              | W   | 0.202      | 0.371        | 0.004 (0.000)    | 0.101 (0.008)    | 0 (0.000) |     3.24 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            3 |     3692 | 2024-08-05 | Aether           | W   | 0.176      | 0.371        | 0.000 (0.000)    | 0.066 (0.004)    | 0 (0.000) |     1.60 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            2 |     3984 | 2024-07-28 | Vibe             | L   | 0.123      | -            | -                | -                | -         |    -2.77 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            1 |     4106 | 2024-07-24 | Take Flyte       | L   | 0.096      | -            | -                | -                | -         |    -1.04 | DYLAN, FIEND, jsfeltner, mason, TyRa  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,713.26)
- Divide that value by the 5th highest value among all rosters ($265,541.19)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-13 |      0.636 | $150.00        | $95.34          |
| 2024-09-21 |      0.490 | $3,300.00      | $1,617.91       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
