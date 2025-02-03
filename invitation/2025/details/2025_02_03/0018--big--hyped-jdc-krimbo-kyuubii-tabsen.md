### Roster Details<br />
Team Name: BIG<br />
Roster: hyped, JDC, Krimbo, kyuubii, tabseN<br />
Global Rank: [18](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_03.md)<br />
Regional Rank: [13]( ../../standings_europe_2025_02_03.md)<br />
<br />
Final Rank Value:  1349.8<br />
<br />
Final Rank Value (1349.8) = Starting Rank Value (1419.1) + Head To Head Adjustments (-69.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.688[<sup>1</sup>](#table2)
- Bounty Collected: 0.415[<sup>2</sup>](#table1)
- Opponent Network: 0.092[<sup>2</sup>](#table1)
- LAN Wins: 0.906[<sup>2</sup>](#table1)

The average of these factors is 0.525<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1419.1
- 400 + ( ( 0.525 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 1419.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           44 |        5 | 2025-02-02 | 3DMAX           | L   | 1.000      | -            | -                | -                | -         |   -10.40 | hyped, JDC, Krimbo, kyuubii, tabseN |
|           43 |       23 | 2025-02-01 | FaZe            | L   | 1.000      | -            | -                | -                | -         |    -2.24 | hyped, JDC, Krimbo, kyuubii, tabseN |
|           42 |       32 | 2025-01-31 | HEROIC          | W   | 1.000      | 0.143        | 0.288 (0.041)    | -                | 1 (1.000) |    12.62 | hyped, JDC, Krimbo, kyuubii, tabseN |
|           41 |       36 | 2025-01-30 | Imperial fe     | W   | 1.000      | 0.143        | 0.225 (0.032)    | -                | 1 (1.000) |     9.43 | hyped, JDC, Krimbo, kyuubii, tabseN |
|           40 |       48 | 2025-01-29 | Wildcard        | L   | 1.000      | -            | -                | -                | -         |   -15.38 | hyped, JDC, Krimbo, kyuubii, tabseN |
|           39 |      321 | 2025-01-19 | G2              | L   | 1.000      | -            | -                | -                | -         |    -1.03 | hyped, JDC, Krimbo, kyuubii, tabseN |
|           38 |      339 | 2025-01-15 | SAW             | W   | 1.000      | 0.143        | 0.231 (0.033)    | -                | -         |     9.41 | hyped, JDC, Krimbo, kyuubii, tabseN |
|           37 |      536 | 2024-12-14 | Arrow           | L   | 0.860      | -            | -                | -                | -         |   -25.71 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           36 |      694 | 2024-12-06 | paiN            | L   | 0.805      | -            | -                | -                | -         |   -11.17 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           35 |      718 | 2024-12-05 | G2              | L   | 0.798      | -            | -                | -                | -         |    -0.95 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           34 |      728 | 2024-12-04 | Falcons         | L   | 0.797      | -            | -                | -                | -         |    -4.50 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           33 |      770 | 2024-12-02 | Complexity      | W   | 0.783      | -            | -                | -                | 1 (0.783) |     7.71 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           32 |      791 | 2024-12-01 | FURIA           | L   | 0.776      | -            | -                | -                | -         |    -6.59 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           31 |      810 | 2024-11-30 | Virtus.pro      | W   | 0.769      | 0.143        | 0.154 (0.017)    | 0.628 (0.069)    | 1 (0.769) |    15.03 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           30 |      837 | 2024-11-30 | FlyQuest        | L   | 0.764      | -            | -                | -                | -         |   -15.96 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           29 |      842 | 2024-11-29 | Passion UA      | W   | 0.763      | 0.143        | -                | 0.772 (0.084)    | 1 (0.763) |     4.18 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           28 |      992 | 2024-11-22 | Passion UA      | W   | 0.711      | 0.143        | -                | 0.772 (0.078)    | 1 (0.711) |     3.69 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           27 |     1003 | 2024-11-21 | Falcons         | W   | 0.706      | 0.143        | 0.923 (0.093)    | -                | 1 (0.706) |    18.73 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           26 |     1015 | 2024-11-21 | Sashi           | W   | 0.704      | 0.143        | -                | 0.638 (0.064)    | 1 (0.704) |     2.27 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           25 |     1269 | 2024-11-11 | GUN5            | L   | 0.638      | -            | -                | -                | -         |   -16.89 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           24 |     1426 | 2024-11-02 | ALTERNATE aTTaX | W   | 0.580      | -            | -                | -                | -         |     1.74 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           23 |     1582 | 2024-10-26 | OG              | L   | 0.532      | -            | -                | -                | -         |   -15.48 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           22 |     1609 | 2024-10-24 | BESTIA          | W   | 0.521      | 0.477        | 0.160 (0.040)    | 0.887 (0.220)    | -         |     2.60 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           21 |     1618 | 2024-10-24 | Aurora          | W   | 0.518      | 0.477        | -                | 0.430 (0.106)    | -         |     1.04 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           20 |     1971 | 2024-10-06 | FlyQuest        | L   | 0.402      | -            | -                | -                | -         |    -8.77 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           19 |     1977 | 2024-10-06 | SAW             | W   | 0.400      | 0.500        | 0.231 (0.046)    | 0.376 (0.075)    | 1 (0.400) |     3.40 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           18 |     2042 | 2024-10-04 | M80             | W   | 0.388      | 0.500        | 0.128 (0.025)    | 0.391 (0.076)    | 1 (0.388) |     2.16 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           17 |     2050 | 2024-10-04 | ODDIK           | W   | 0.386      | 0.500        | -                | 0.416 (0.080)    | -         |     0.66 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           16 |     2409 | 2024-09-25 | ECSTATIC        | L   | 0.326      | -            | -                | -                | -         |    -9.49 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           15 |     2464 | 2024-09-24 | Monte           | L   | 0.319      | -            | -                | -                | -         |    -9.05 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           14 |     2673 | 2024-09-17 | The MongolZ     | L   | 0.272      | -            | -                | -                | -         |    -0.57 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           13 |     2781 | 2024-09-13 | Complexity      | W   | 0.247      | 0.889        | 0.116 (0.025)    | -                | -         |     2.10 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           12 |     2811 | 2024-09-12 | fnatic          | W   | 0.240      | 0.889        | 0.176 (0.038)    | 0.326 (0.070)    | -         |     1.12 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           11 |     2851 | 2024-09-11 | Rooster         | W   | 0.233      | -            | -                | -                | -         |     0.13 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           10 |     2877 | 2024-09-10 | Imperial        | L   | 0.226      | -            | -                | -                | -         |    -6.12 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|            9 |     3402 | 2024-08-26 | ALTERNATE aTTaX | L   | 0.125      | -            | -                | -                | -         |    -3.49 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|            8 |     3455 | 2024-08-24 | Virtus.pro      | L   | 0.115      | -            | -                | -                | -         |    -1.27 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|            7 |     3476 | 2024-08-23 | GamerLegion     | W   | 0.108      | -            | -                | -                | -         |     0.09 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|            6 |     3488 | 2024-08-23 | los kogutos     | W   | 0.106      | -            | -                | -                | -         |     0.54 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|            5 |     3528 | 2024-08-22 | Qiang           | W   | 0.098      | -            | -                | -                | -         |     0.02 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|            4 |     3554 | 2024-08-21 | Insilio         | W   | 0.093      | -            | -                | -                | -         |     0.07 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|            3 |     3608 | 2024-08-21 | Passion UA      | L   | 0.091      | -            | -                | -                | -         |    -2.41 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|            2 |     3931 | 2024-08-09 | Falcons         | L   | 0.013      | -            | -                | -                | -         |    -0.40 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|            1 |     3963 | 2024-08-08 | SAW             | L   | 0.006      | -            | -                | -                | -         |    -0.13 | JDC, Krimbo, rigoN, syrsoN, tabseN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($66,439.99)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.35) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-03 |      1.000 | $10,000.00     | $10,000.00      |
| 2025-01-19 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-12-15 |      0.865 | $20,000.00     | $17,299.34      |
| 2024-12-14 |      0.860 | $3,668.00      | $3,155.15       |
| 2024-11-12 |      0.646 | $1,000.00      | $646.32         |
| 2024-10-26 |      0.535 | $20,000.00     | $10,691.95      |
| 2024-10-06 |      0.402 | $20,000.00     | $8,032.76       |
| 2024-09-26 |      0.333 | $1,000.00      | $333.23         |
| 2024-09-22 |      0.307 | $17,500.00     | $5,377.59       |
| 2024-08-25 |      0.120 | $7,500.00      | $903.66         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
