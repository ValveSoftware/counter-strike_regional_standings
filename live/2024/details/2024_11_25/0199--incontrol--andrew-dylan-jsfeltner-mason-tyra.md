### Roster Details<br />
Team Name: InControl<br />
Roster: Andrew, DYLAN, jsfeltner, mason, TyRa<br />
Global Rank: [199](../../standings_global_2024_11_25.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_11_25.md)<br />
Regional Rank: [57]( ../../standings_americas_2024_11_25.md)<br />
<br />
Final Rank Value:  617.5<br />
<br />
Final Rank Value (617.5) = Starting Rank Value (669.1) + Head To Head Adjustments (-51.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.315[<sup>1</sup>](#table2)
- Bounty Collected: 0.211[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.134<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 669.1
- 400 + ( ( 0.134 - 0.000 ) / ( 0.799 - 0.000 ) ) * 1600 = 669.1


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
|           18 |      899 | 2024-10-13 | FLUFFY AIMERS    | L   | 0.916      | -            | -                | -                | -         |    -6.50 | Andrew, DYLAN, jsfeltner, mason, TyRa |
|           17 |      914 | 2024-10-12 | Fisher Tsunami   | L   | 0.910      | -            | -                | -                | -         |    -5.86 | Andrew, DYLAN, jsfeltner, mason, TyRa |
|           16 |     1515 | 2024-09-24 | Lore             | L   | 0.791      | -            | -                | -                | -         |   -16.44 | AJ2k, FIEND, jsfeltner, mason, TyRa   |
|           15 |     1557 | 2024-09-23 | Revenge Nation   | L   | 0.784      | -            | -                | -                | -         |   -10.68 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           14 |     1644 | 2024-09-20 | DETONATE         | W   | 0.764      | 0.371        | 0.000 (0.000)    | 0.078 (0.022)    | 0 (0.000) |     7.64 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           13 |     1668 | 2024-09-19 | undefined        | L   | 0.757      | -            | -                | -                | -         |    -8.38 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           12 |     1771 | 2024-09-16 | Mythic           | L   | 0.737      | -            | -                | -                | -         |   -10.85 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           11 |     1924 | 2024-09-11 | Akimbo           | L   | 0.702      | -            | -                | -                | -         |    -8.80 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           10 |     1981 | 2024-09-09 | Final Form       | W   | 0.690      | 0.372        | 0.003 (0.001)    | 0.091 (0.023)    | 0 (0.000) |    10.07 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            9 |     2021 | 2024-09-07 | Nouns            | L   | 0.676      | -            | -                | -                | -         |    -2.45 | Beast, jsfeltner, mason, Pugg, TyRa   |
|            8 |     2725 | 2024-08-19 | Party Astronauts | L   | 0.549      | -            | -                | -                | -         |    -3.87 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            7 |     2822 | 2024-08-15 | NRG              | L   | 0.523      | -            | -                | -                | -         |    -2.66 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            6 |     2881 | 2024-08-13 | M80              | L   | 0.509      | -            | -                | -                | -         |    -0.32 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            5 |     2962 | 2024-08-11 | Canada           | W   | 0.497      | 0.371        | 0.003 (0.000)    | 0.101 (0.019)    | 0 (0.000) |     8.19 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            4 |     3009 | 2024-08-09 | LAG              | W   | 0.483      | 0.371        | 0.004 (0.001)    | 0.198 (0.035)    | 0 (0.000) |     8.90 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            3 |     3154 | 2024-08-05 | Aether           | W   | 0.457      | 0.371        | 0.000 (0.000)    | 0.085 (0.014)    | 0 (0.000) |     4.00 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            2 |     3446 | 2024-07-28 | Vibe             | L   | 0.404      | -            | -                | -                | -         |    -9.11 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            1 |     3568 | 2024-07-24 | Take Flyte       | L   | 0.377      | -            | -                | -                | -         |    -4.45 | DYLAN, FIEND, jsfeltner, mason, TyRa  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,682.30)
- Divide that value by the 5th highest value among all rosters ($398,927.16)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-13 |      0.917 | $150.00        | $137.48         |
| 2024-09-21 |      0.771 | $3,300.00      | $2,544.82       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
