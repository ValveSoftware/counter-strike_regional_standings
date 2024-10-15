### Roster Details<br />
Team Name: InControl<br />
Roster: Andrew, DYLAN, jsfeltner, mason, TyRa<br />
Global Rank: [186](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_15.md)<br />
Regional Rank: [51]( ../../standings_americas_2024_10_15.md)<br />
<br />
Final Rank Value:  620.6<br />
<br />
Final Rank Value (620.6) = Starting Rank Value (687.8) + Head To Head Adjustments (-67.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.339[<sup>1</sup>](#table2)
- Bounty Collected: 0.231[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.148<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 687.8
- 400 + ( ( 0.148 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 687.8


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
|           18 |       12 | 2024-10-13 | FLUFFY AIMERS    | L   | 1.000      | -            | -                | -                | -         |    -5.91 | Andrew, DYLAN, jsfeltner, mason, TyRa |
|           17 |       27 | 2024-10-12 | Fisher College   | L   | 1.000      | -            | -                | -                | -         |   -14.28 | Andrew, DYLAN, jsfeltner, mason, TyRa |
|           16 |      628 | 2024-09-24 | Lore             | L   | 1.000      | -            | -                | -                | -         |   -20.58 | AJ2k, FIEND, jsfeltner, mason, TyRa   |
|           15 |      670 | 2024-09-23 | Revenge Nation   | L   | 1.000      | -            | -                | -                | -         |   -13.50 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           14 |      757 | 2024-09-20 | DETONATE         | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.119 (0.044)    | 0 (0.000) |     9.87 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           13 |      781 | 2024-09-19 | undefined        | L   | 1.000      | -            | -                | -                | -         |    -9.86 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           12 |      884 | 2024-09-16 | Mythic           | L   | 1.000      | -            | -                | -                | -         |   -13.34 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           11 |     1037 | 2024-09-11 | Akimbo           | L   | 0.975      | -            | -                | -                | -         |   -10.82 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           10 |     1094 | 2024-09-09 | Final Form       | W   | 0.963      | 0.372        | 0.005 (0.002)    | 0.148 (0.053)    | 0 (0.000) |    14.22 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            9 |     1134 | 2024-09-07 | Nouns            | L   | 0.949      | -            | -                | -                | -         |    -2.87 | Beast, jsfeltner, mason, Pugg, TyRa   |
|            8 |     1838 | 2024-08-19 | Party Astronauts | L   | 0.822      | -            | -                | -                | -         |    -4.46 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            7 |     1935 | 2024-08-15 | NRG              | L   | 0.796      | -            | -                | -                | -         |    -3.52 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            6 |     1994 | 2024-08-13 | M80              | L   | 0.782      | -            | -                | -                | -         |    -0.64 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            5 |     2075 | 2024-08-11 | Homyno           | W   | 0.770      | 0.371        | 0.005 (0.002)    | 0.116 (0.033)    | 0 (0.000) |    10.30 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            4 |     2122 | 2024-08-09 | LAG              | W   | 0.756      | 0.371        | 0.005 (0.001)    | 0.268 (0.075)    | 0 (0.000) |    14.66 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            3 |     2267 | 2024-08-05 | Aether           | W   | 0.730      | 0.371        | 0.000 (0.000)    | 0.101 (0.027)    | 0 (0.000) |     6.11 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            2 |     2559 | 2024-07-28 | Vibe             | L   | 0.677      | -            | -                | -                | -         |   -15.60 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            1 |     2681 | 2024-07-24 | Take Flyte       | L   | 0.650      | -            | -                | -                | -         |    -7.01 | DYLAN, FIEND, jsfeltner, mason, TyRa  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,450.00)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-13 |      1.000 | $150.00        | $150.00         |
| 2024-09-21 |      1.000 | $3,300.00      | $3,300.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
