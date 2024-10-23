### Roster Details<br />
Team Name: InControl<br />
Roster: Andrew, DYLAN, jsfeltner, mason, TyRa<br />
Global Rank: [190](../../standings_global_2024_10_23.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_23.md)<br />
Regional Rank: [56]( ../../standings_americas_2024_10_23.md)<br />
<br />
Final Rank Value:  636.4<br />
<br />
Final Rank Value (636.4) = Starting Rank Value (692.7) + Head To Head Adjustments (-56.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.345[<sup>1</sup>](#table2)
- Bounty Collected: 0.232[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.149<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 692.7
- 400 + ( ( 0.149 - 0.000 ) / ( 0.816 - 0.000 ) ) * 1600 = 692.7


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
|           18 |      190 | 2024-10-13 | FLUFFY AIMERS    | L   | 1.000      | -            | -                | -                | -         |    -5.74 | Andrew, DYLAN, jsfeltner, mason, TyRa |
|           17 |      205 | 2024-10-12 | Fisher Tsunami   | L   | 1.000      | -            | -                | -                | -         |    -6.34 | Andrew, DYLAN, jsfeltner, mason, TyRa |
|           16 |      806 | 2024-09-24 | Lore             | L   | 1.000      | -            | -                | -                | -         |   -20.77 | AJ2k, FIEND, jsfeltner, mason, TyRa   |
|           15 |      848 | 2024-09-23 | Revenge Nation   | L   | 1.000      | -            | -                | -                | -         |   -13.15 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           14 |      935 | 2024-09-20 | DETONATE         | W   | 0.982      | 0.371        | 0.000 (0.000)    | 0.113 (0.041)    | 0 (0.000) |     9.42 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           13 |      959 | 2024-09-19 | undefined        | L   | 0.976      | -            | -                | -                | -         |    -9.63 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           12 |     1062 | 2024-09-16 | Mythic           | L   | 0.955      | -            | -                | -                | -         |   -12.67 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           11 |     1215 | 2024-09-11 | Akimbo           | L   | 0.921      | -            | -                | -                | -         |   -10.09 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           10 |     1272 | 2024-09-09 | Final Form       | W   | 0.909      | 0.372        | 0.005 (0.002)    | 0.140 (0.048)    | 0 (0.000) |    13.45 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            9 |     1312 | 2024-09-07 | Nouns            | L   | 0.894      | -            | -                | -                | -         |    -2.35 | Beast, jsfeltner, mason, Pugg, TyRa   |
|            8 |     2016 | 2024-08-19 | Party Astronauts | L   | 0.767      | -            | -                | -                | -         |    -3.66 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            7 |     2113 | 2024-08-15 | NRG              | L   | 0.741      | -            | -                | -                | -         |    -2.69 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            6 |     2172 | 2024-08-13 | M80              | L   | 0.728      | -            | -                | -                | -         |    -0.49 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            5 |     2253 | 2024-08-11 | Homyno           | W   | 0.715      | 0.371        | 0.006 (0.002)    | 0.108 (0.029)    | 0 (0.000) |     9.66 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            4 |     2300 | 2024-08-09 | LAG              | W   | 0.701      | 0.371        | 0.006 (0.001)    | 0.261 (0.068)    | 0 (0.000) |    13.80 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            3 |     2445 | 2024-08-05 | Aether           | W   | 0.675      | 0.371        | 0.000 (0.000)    | 0.104 (0.026)    | 0 (0.000) |     5.58 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            2 |     2737 | 2024-07-28 | Vibe             | L   | 0.622      | -            | -                | -                | -         |   -14.39 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            1 |     2859 | 2024-07-24 | Take Flyte       | L   | 0.595      | -            | -                | -                | -         |    -6.29 | DYLAN, FIEND, jsfeltner, mason, TyRa  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,414.80)
- Divide that value by the 5th highest value among all rosters ($270,964.47)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-13 |      1.000 | $150.00        | $150.00         |
| 2024-09-21 |      0.989 | $3,300.00      | $3,264.80       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
