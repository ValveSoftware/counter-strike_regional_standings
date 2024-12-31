### Roster Details<br />
Team Name: Revenant<br />
Roster: lauNX, NBK-, Neityu, Nivera, reiko<br />
Global Rank: [118](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_31.md)<br />
Regional Rank: [86]( ../../standings_europe_2024_12_31.md)<br />
<br />
Final Rank Value:  816.2<br />
<br />
Final Rank Value (816.2) = Starting Rank Value (755.9) + Head To Head Adjustments (60.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.314[<sup>1</sup>](#table2)
- Bounty Collected: 0.325[<sup>2</sup>](#table1)
- Opponent Network: 0.092[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.183<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 755.9
- 400 + ( ( 0.183 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 755.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           43 |     2355 | 2024-09-14 | SINNERS           | W   | 0.493      | 0.384        | 0.082 (0.015)    | 0.749 (0.142)    | 0 (0.000) |    13.19 | lauNX, NBK-, Neityu, Nivera, reiko  |
|           42 |     2486 | 2024-09-10 | Insilio           | L   | 0.466      | -            | -                | -                | -         |    -6.41 | ADRON, lauNX, NBK-, Nivera, reiko   |
|           41 |     2508 | 2024-09-09 | EYEBALLERS        | L   | 0.460      | -            | -                | -                | -         |    -7.92 | ADRON, lauNX, NBK-, Nivera, reiko   |
|           40 |     2566 | 2024-09-07 | DMS               | W   | 0.445      | 0.384        | -                | 0.507 (0.087)    | 0 (0.000) |     5.02 | 0SAMAS, lauNX, NBK-, Nivera, reiko  |
|           39 |     2583 | 2024-09-06 | JANO              | W   | 0.440      | 0.435        | 0.033 (0.006)    | -                | 0 (0.000) |     7.83 | ADRON, lauNX, NBK-, Nivera, reiko   |
|           38 |     2639 | 2024-09-05 | Gaimin Gladiators | L   | 0.431      | -            | -                | -                | -         |    -3.77 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           37 |     2706 | 2024-09-03 | CYBERSHOKE        | L   | 0.418      | -            | -                | -                | -         |    -5.20 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           36 |     2719 | 2024-09-02 | FAVBET            | W   | 0.413      | 0.435        | 0.061 (0.011)    | 0.937 (0.168)    | 0 (0.000) |     8.60 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           35 |     2728 | 2024-09-02 | SINNERS           | L   | 0.411      | -            | -                | -                | -         |    -1.68 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           34 |     2759 | 2024-08-31 | ARCRED            | L   | 0.399      | -            | -                | -                | -         |    -6.49 | NBK-, Nivera, prosus, reiko, tiziaN |
|           33 |     2773 | 2024-08-30 | Sampi             | W   | 0.393      | 0.435        | 0.039 (0.007)    | 0.369 (0.063)    | 0 (0.000) |     9.35 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           32 |     2823 | 2024-08-29 | los kogutos       | L   | 0.385      | -            | -                | -                | -         |    -1.75 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           31 |     2829 | 2024-08-29 | B8                | L   | 0.385      | -            | -                | -                | -         |    -1.57 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           30 |     2927 | 2024-08-27 | Endpoint          | W   | 0.372      | 0.435        | 0.035 (0.006)    | 0.585 (0.095)    | 0 (0.000) |     7.37 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           29 |     3049 | 2024-08-25 | B8                | L   | 0.359      | -            | -                | -                | -         |    -1.37 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           28 |     3070 | 2024-08-24 | ECSTATIC          | W   | 0.352      | 0.143        | 0.067 (0.003)    | 1.000 (0.050)    | 0 (0.000) |     8.07 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           27 |     3094 | 2024-08-23 | Verdant           | W   | 0.346      | -            | -                | -                | 0 (0.000) |     7.82 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           26 |     3124 | 2024-08-22 | Alliance          | L   | 0.339      | -            | -                | -                | -         |    -3.33 | adeX, lauNX, NBK-, Nivera, reiko    |
|           25 |     3195 | 2024-08-21 | DMS               | W   | 0.332      | 0.435        | -                | 0.507 (0.073)    | 0 (0.000) |     4.38 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           24 |     3210 | 2024-08-21 | ENCE Academy      | W   | 0.331      | -            | -                | -                | 0 (0.000) |     5.44 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           23 |     3229 | 2024-08-20 | Monte Gen         | L   | 0.326      | -            | -                | -                | -         |    -4.51 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           22 |     3239 | 2024-08-20 | ex-Enterprise     | L   | 0.324      | -            | -                | -                | -         |    -3.63 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           21 |     3284 | 2024-08-18 | CYBERSHOKE        | L   | 0.313      | -            | -                | -                | -         |    -3.73 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           20 |     3330 | 2024-08-16 | Nexus             | W   | 0.300      | -            | -                | -                | -         |     0.99 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           19 |     3338 | 2024-08-16 | Sampi             | W   | 0.297      | 0.371        | 0.039 (0.004)    | -                | -         |     7.17 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           18 |     3385 | 2024-08-14 | Aurora Young Blud | W   | 0.286      | 0.435        | 0.039 (0.005)    | 0.888 (0.110)    | -         |     6.64 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           17 |     3432 | 2024-08-13 | UNiTY             | W   | 0.278      | 0.333        | 0.064 (0.006)    | -                | -         |     6.68 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           16 |     3483 | 2024-08-12 | kONO              | W   | 0.271      | 0.333        | -                | 0.597 (0.054)    | -         |     6.09 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           15 |     3501 | 2024-08-11 | UNiTY             | L   | 0.265      | -            | -                | -                | -         |    -1.94 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           14 |     3549 | 2024-08-09 | TSM               | W   | 0.252      | -            | -                | -                | -         |     5.57 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           13 |     3610 | 2024-08-07 | ECLOT             | W   | 0.239      | 0.333        | 0.252 (0.020)    | 1.000 (0.080)    | -         |     7.31 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           12 |     3714 | 2024-08-04 | Monte Gen         | L   | 0.220      | -            | -                | -                | -         |    -2.77 | HS, lauNX, NBK-, Nivera, reiko      |
|           11 |     4052 | 2024-07-26 | DMS               | L   | 0.157      | -            | -                | -                | -         |    -2.77 | adeX, Jeebs, NBK-, Nivera, reiko    |
|           10 |     4081 | 2024-07-25 | 3DMAX             | L   | 0.152      | -            | -                | -                | -         |    -0.09 | adeX, Jeebs, NBK-, Nivera, reiko    |
|            9 |     4112 | 2024-07-24 | AMKAL             | L   | 0.146      | -            | -                | -                | -         |    -1.56 | adeX, lauNX, NBK-, Nivera, reiko    |
|            8 |     4123 | 2024-07-24 | Eternal Fire      | L   | 0.144      | -            | -                | -                | -         |    -0.11 | adeX, lauNX, NBK-, Nivera, reiko    |
|            7 |     4550 | 2024-07-12 | Verdant           | W   | 0.064      | -            | -                | -                | -         |     1.53 | adeX, lauNX, NBK-, Nivera, reiko    |
|            6 |     4610 | 2024-07-09 | Johnny Speeds     | W   | 0.044      | -            | -                | -                | -         |     1.20 | adeX, lauNX, NBK-, Nivera, reiko    |
|            5 |     4627 | 2024-07-08 | ex-Enterprise     | L   | 0.038      | -            | -                | -                | -         |    -0.39 | adeX, lauNX, NBK-, Nivera, reiko    |
|            4 |     4629 | 2024-07-08 | devils.one        | W   | 0.038      | -            | -                | -                | -         |     0.52 | adeX, lauNX, NBK-, Nivera, reiko    |
|            3 |     4634 | 2024-07-07 | kONO              | W   | 0.031      | -            | -                | -                | -         |     0.71 | adeX, lauNX, NBK-, Nivera, reiko    |
|            2 |     4637 | 2024-07-06 | 777               | W   | 0.026      | -            | -                | -                | -         |     0.10 | adeX, lauNX, NBK-, Nivera, reiko    |
|            1 |     4642 | 2024-07-05 | devils.one        | L   | 0.018      | -            | -                | -                | -         |    -0.32 | adeX, lauNX, NBK-, Nivera, reiko    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,933.00)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-13 |      0.278 | $6,000.00      | $1,666.72       |
| 2024-07-09 |      0.044 | $6,000.00      | $266.28         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
