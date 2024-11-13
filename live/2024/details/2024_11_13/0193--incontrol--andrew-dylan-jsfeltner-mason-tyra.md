### Roster Details<br />
Team Name: InControl<br />
Roster: Andrew, DYLAN, jsfeltner, mason, TyRa<br />
Global Rank: [193](../../standings_global_2024_11_13.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_11_13.md)<br />
Regional Rank: [58]( ../../standings_americas_2024_11_13.md)<br />
<br />
Final Rank Value:  618.5<br />
<br />
Final Rank Value (618.5) = Starting Rank Value (670.9) + Head To Head Adjustments (-52.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.314[<sup>1</sup>](#table2)
- Bounty Collected: 0.214[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.136<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 670.9
- 400 + ( ( 0.136 - 0.000 ) / ( 0.801 - 0.000 ) ) * 1600 = 670.9


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
|           18 |      630 | 2024-10-13 | FLUFFY AIMERS    | L   | 0.994      | -            | -                | -                | -         |    -6.31 | Andrew, DYLAN, jsfeltner, mason, TyRa |
|           17 |      645 | 2024-10-12 | Fisher Tsunami   | L   | 0.988      | -            | -                | -                | -         |    -6.08 | Andrew, DYLAN, jsfeltner, mason, TyRa |
|           16 |     1246 | 2024-09-24 | Lore             | L   | 0.869      | -            | -                | -                | -         |   -17.87 | AJ2k, FIEND, jsfeltner, mason, TyRa   |
|           15 |     1288 | 2024-09-23 | Revenge Nation   | L   | 0.863      | -            | -                | -                | -         |   -11.55 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           14 |     1375 | 2024-09-20 | DETONATE         | W   | 0.843      | 0.371        | 0.000 (0.000)    | 0.090 (0.028)    | 0 (0.000) |     8.41 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           13 |     1399 | 2024-09-19 | undefined        | L   | 0.836      | -            | -                | -                | -         |    -9.01 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           12 |     1502 | 2024-09-16 | Mythic           | L   | 0.816      | -            | -                | -                | -         |   -11.49 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           11 |     1655 | 2024-09-11 | Akimbo           | L   | 0.781      | -            | -                | -                | -         |    -9.11 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           10 |     1712 | 2024-09-09 | Final Form       | W   | 0.769      | 0.372        | 0.003 (0.001)    | 0.107 (0.031)    | 0 (0.000) |    11.34 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            9 |     1752 | 2024-09-07 | Nouns            | L   | 0.754      | -            | -                | -                | -         |    -2.45 | Beast, jsfeltner, mason, Pugg, TyRa   |
|            8 |     2456 | 2024-08-19 | Party Astronauts | L   | 0.628      | -            | -                | -                | -         |    -3.92 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            7 |     2553 | 2024-08-15 | NRG              | L   | 0.601      | -            | -                | -                | -         |    -2.77 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            6 |     2612 | 2024-08-13 | M80              | L   | 0.588      | -            | -                | -                | -         |    -0.38 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            5 |     2693 | 2024-08-11 | Canada           | W   | 0.575      | 0.371        | 0.003 (0.001)    | 0.115 (0.024)    | 0 (0.000) |     9.37 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            4 |     2740 | 2024-08-09 | LAG              | W   | 0.562      | 0.371        | 0.003 (0.001)    | 0.220 (0.046)    | 0 (0.000) |    10.73 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            3 |     2885 | 2024-08-05 | Aether           | W   | 0.536      | 0.371        | 0.000 (0.000)    | 0.090 (0.018)    | 0 (0.000) |     4.71 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            2 |     3177 | 2024-07-28 | Vibe             | L   | 0.482      | -            | -                | -                | -         |   -10.92 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            1 |     3299 | 2024-07-24 | Take Flyte       | L   | 0.456      | -            | -                | -                | -         |    -5.01 | DYLAN, FIEND, jsfeltner, mason, TyRa  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,953.64)
- Divide that value by the 5th highest value among all rosters ($448,201.29)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-13 |      0.995 | $150.00        | $149.27         |
| 2024-09-21 |      0.850 | $3,300.00      | $2,804.37       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
